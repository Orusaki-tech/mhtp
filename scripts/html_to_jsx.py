#!/usr/bin/env python3
"""Convert extracted HTML page mains into React page components."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
RAW = ROOT / ".raw-pages"
OUT = ROOT / "src" / "pages"

PAGE_META = {
    "home": ("HomePage", "/", "Home"),
    "about": ("AboutPage", "/about-legal-status", "About & Legal Status"),
    "pillars": ("PillarsPage", "/pillars-of-ministry", "Pillars of Ministry"),
    "vocational-enrollment": ("VocationalEnrollmentPage", "/vocational-enrollment", "Vocational Enrollment"),
    "partner": ("PartnerDonatePage", "/partner-donate", "Partner & Donate"),
    "outreach": ("OutreachPage", "/outreach-healing", "Outreach & Healing"),
    "prayer": ("PrayerRequestPage", "/prayer-request", "Prayer Request"),
    "contact": ("ContactPage", "/contact-give", "Contact & Give"),
}

# Map old data-path destinations to React Router paths
PATH_MAP = {
    "home": "/",
    "about-legal-status": "/about-legal-status",
    "pillars-of-ministry": "/pillars-of-ministry",
    "vocational-programs": "/vocational-programs",
    "vocational-enrollment": "/vocational-enrollment",
    "outreach-healing": "/outreach-healing",
    "partner-donate": "/partner-donate",
    "prayer-request": "/prayer-request",
    "contact-give": "/contact-give",
}


def extract_main(html: str) -> str:
    m = re.search(r"<main\b[^>]*>(.*)</main>", html, flags=re.I | re.S)
    if not m:
        raise ValueError("No <main> found")
    inner = m.group(1)
    # Drop trailing page-local scripts (handled in React)
    inner = re.sub(r"<script\b[^>]*>.*?</script>", "", inner, flags=re.I | re.S)
    return inner.strip()


def fix_void_tags(html: str) -> str:
    voids = ("img", "input", "br", "hr", "meta", "link", "source", "area", "col", "embed", "track", "wbr")
    for tag in voids:
        # <tag ...> not already self-closed
        html = re.sub(
            rf"<{tag}(\s[^>]*?)?(?<!/)>",
            lambda m, t=tag: f"<{t}{m.group(1) or ''} />",
            html,
            flags=re.I,
        )
        # collapse accidental double slash
        html = re.sub(rf"<{tag}([^>]*?)/\s*/>", rf"<{tag}\1 />", html, flags=re.I)
    return html


def style_to_jsx(style: str) -> str:
    style = style.strip().strip('"').strip("'")
    parts = [p.strip() for p in style.split(";") if p.strip()]
    obj = {}
    for part in parts:
        if ":" not in part:
            continue
        k, v = part.split(":", 1)
        k = k.strip()
        v = v.strip()
        # camelCase
        ck = re.sub(r"-([a-z])", lambda m: m.group(1).upper(), k)
        if ck == "fontVariationSettings":
            obj[ck] = v
        else:
            obj[ck] = v
    items = ", ".join(f"'{k}': '{v}'" if "-" in k or not k.isidentifier() else f"{k}: '{v}'" for k, v in obj.items())
    # Prefer unquoted keys when valid
    items = []
    for k, v in obj.items():
        key = k if re.match(r"^[A-Za-z_][A-Za-z0-9_]*$", k) else f"'{k}'"
        items.append(f"{key}: '{v.replace(chr(39), chr(92)+chr(39))}'")
    return "{{" + ", ".join(items) + "}}"


def convert_attrs(tag: str) -> str:
    # data-path links → to=
    def path_repl(m):
        full = m.group(0)
        path_m = re.search(r'data-path="([^"]+)"', full)
        if not path_m:
            return full
        dest = PATH_MAP.get(path_m.group(1), "#")
        # Replace <a with <Link and href with to
        full = re.sub(r"^<a\b", "<Link", full)
        if re.search(r'\bhref="', full):
            full = re.sub(r'\bhref="[^"]*"', f'to="{dest}"', full, count=1)
        else:
            full = full[:-1] + f' to="{dest}">'
        full = re.sub(r'\sdata-path="[^"]*"', "", full)
        return full

    tag = re.sub(r"<a\b[^>]*\bdata-path=\"[^\"]+\"[^>]*>", path_repl, tag)

    # class → className
    tag = re.sub(r"\bclass=", "className=", tag)
    tag = re.sub(r"\bfor=", "htmlFor=", tag)
    tag = re.sub(r"\btabindex=", "tabIndex=", tag)
    tag = re.sub(r"\bcolspan=", "colSpan=", tag)
    tag = re.sub(r"\browspan=", "rowSpan=", tag)
    tag = re.sub(r"\bcellpadding=", "cellPadding=", tag)
    tag = re.sub(r"\bcellspacing=", "cellSpacing=", tag)
    tag = re.sub(r"\bmaxlength=", "maxLength=", tag)
    tag = re.sub(r"\breadonly\b", "readOnly", tag)
    tag = re.sub(r"\bautocomplete=", "autoComplete=", tag)
    tag = re.sub(r"\bframeborder=", "frameBorder=", tag)
    tag = re.sub(r"\ballowfullscreen\b", "allowFullScreen", tag)
    tag = re.sub(r"\bstroke-width=", "strokeWidth=", tag)
    tag = re.sub(r"\bstroke-dasharray=", "strokeDasharray=", tag)
    tag = re.sub(r"\bstroke-dashoffset=", "strokeDashoffset=", tag)
    tag = re.sub(r"\bstroke-linecap=", "strokeLinecap=", tag)
    tag = re.sub(r"\bfill-rule=", "fillRule=", tag)
    tag = re.sub(r"\bclip-rule=", "clipRule=", tag)
    tag = re.sub(r"\bviewbox=", "viewBox=", tag)
    tag = re.sub(r"\bxmlns:xlink=", "xmlnsXlink=", tag)

    # boolean attrs: required="" → required
    for b in ("required", "checked", "disabled", "selected", "multiple", "autoFocus", "readOnly", "allowFullScreen"):
        tag = re.sub(rf"\b{b}=\"\"", b, tag)
        tag = re.sub(rf"\b{b}=''", b, tag)

    # style="..." → style={{...}}
    def style_repl(m):
        return "style=" + style_to_jsx(m.group(1))

    tag = re.sub(r'\bstyle="([^"]*)"', style_repl, tag)

    # Remove inline handlers (pages will use React state) — keep markup clean
    tag = re.sub(r'\s+on[a-z]+="[^"]*"', "", tag, flags=re.I)

    # aria-current stays fine
    return tag


def html_to_jsx(html: str) -> str:
    html = fix_void_tags(html)
    # HTML comments → JSX comments
    html = re.sub(r"<!--(.*?)-->", lambda m: "{/*" + m.group(1) + "*/}", html, flags=re.S)

    # Process tags
    def tag_repl(m):
        return convert_attrs(m.group(0))

    html = re.sub(r"</?[A-Za-z][^>]*>", tag_repl, html)

    # Close Link tags: </a> that followed Link openings — leave </a> for plain anchors;
    # convert all </a> to </Link> only when we used Link. Safer: convert remaining <a href="#"> to <a>
    # and convert </a> to </Link> if sibling was Link — simplest: replace </a> with </Link> when
    # we converted data-path anchors. Plain <a href="#..."> stay as <a>.
    # Count Link vs a openings
    # Replace closing tags for Links: use </Link> for any </a> after Link conversion of nav-style links.
    # Actually leftover <a href="#objects"> etc should stay <a>. Only data-path became Link.
    # So we need </Link> only for those. Track by converting </a> that closes Link — hard without parser.
    # Approach: convert ALL <a to Link with to=href, and all </a> to </Link>.
    def all_anchors(m):
        tag = m.group(0)
        if tag.startswith("<Link"):
            return tag
        if tag.startswith("</"):
            return tag
        href_m = re.search(r'\bhref="([^"]*)"', tag)
        href = href_m.group(1) if href_m else "#"
        tag = re.sub(r"^<a\b", "<Link", tag)
        if href.startswith("http") or href.startswith("tel:") or href.startswith("mailto:") or href.startswith("https://wa.me"):
            # external — keep as <a>
            return m.group(0).replace("className=", "className=")  # unchanged as <a>
        # internal hash or path
        if href.startswith("#"):
            tag = re.sub(r'^<Link\b', "<a", tag)  # hash links stay anchor
            return tag
        tag = re.sub(r'\bhref="[^"]*"', f'to="{href}"', tag, count=1)
        return tag

    # Second pass: convert non-external <a href="/..."> — most remaining are # or maps
    def finalize_a(m):
        raw = m.group(0)
        if raw.startswith("<Link") or raw.startswith("</"):
            return raw
        href_m = re.search(r'\bhref="([^"]*)"', raw)
        if not href_m:
            return raw
        href = href_m.group(1)
        if href.startswith(("http://", "https://", "tel:", "mailto:", "#")) or "maps.google" in href:
            return raw
        # relative html paths
        mapped = href
        if href.endswith(".html"):
            name = href.replace(".html", "")
            if name == "index":
                mapped = "/"
            else:
                mapped = "/" + name
        out = re.sub(r"^<a\b", "<Link", raw)
        out = re.sub(r'\bhref="[^"]*"', f'to="{mapped}"', out, count=1)
        return out

    html = re.sub(r"<a\b[^>]*>", finalize_a, html)

    # Close Link: replace </a> with </Link> only is wrong for hash/external.
    # Use a stack-based pass
    parts = re.split(r"(</?a\b[^>]*>|</?Link\b[^>]*>)", html, flags=re.I)
    out = []
    stack = []
    for part in parts:
        if re.match(r"<Link\b", part):
            stack.append("Link")
            out.append(part)
        elif re.match(r"<a\b", part, flags=re.I):
            stack.append("a")
            out.append(part)
        elif re.match(r"</a>", part, flags=re.I) or re.match(r"</Link>", part, flags=re.I):
            kind = stack.pop() if stack else "a"
            out.append("</Link>" if kind == "Link" else "</a>")
        else:
            out.append(part)
    html = "".join(out)

    return html


def wrap_component(name: str, jsx_body: str, needs_link: bool) -> str:
    imports = ["import { useState } from 'react'"]
    if needs_link or "<Link" in jsx_body:
        imports.append("import { Link } from 'react-router-dom'")
    # Minimal interactive helpers for forms — preventDefault
    return f"""{chr(10).join(imports)}

export default function {name}() {{
  const [feedback, setFeedback] = useState(false)

  function handleSubmit(e: React.FormEvent) {{
    e.preventDefault()
    setFeedback(true)
  }}

  return (
    <div className="flex flex-col w-full">
{indent(jsx_body, 6)}
    </div>
  )
}}
"""


def indent(text: str, spaces: int) -> str:
    pad = " " * spaces
    return "\n".join(pad + line if line.strip() else line for line in text.splitlines())


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    index_exports = []
    for key, (comp, route, label) in PAGE_META.items():
        raw_path = RAW / f"{key}.html"
        if not raw_path.exists():
            print("missing", raw_path)
            continue
        html = raw_path.read_text(encoding="utf-8")
        main_html = extract_main(html)
        # unwrap the inner flex wrapper if present
        main_html = re.sub(
            r'^<div class="flex flex-col w-full">\s*',
            "",
            main_html,
            count=1,
        )
        main_html = re.sub(r"\s*</div>\s*$", "", main_html, count=1)
        jsx = html_to_jsx(main_html)
        # Wire forms to handleSubmit
        jsx = re.sub(
            r"<form(\s[^>]*)?>",
            r'<form\1 onSubmit={handleSubmit}>',
            jsx,
            count=1,
        )
        # feedback hidden toggles — leave as-is; optional enhancement later
        content = wrap_component(comp, jsx, needs_link=True)
        out_path = OUT / f"{comp}.tsx"
        out_path.write_text(content, encoding="utf-8")
        index_exports.append(f"export {{ default as {comp} }} from './{comp}'")
        print(f"Wrote {out_path.name} ({out_path.stat().st_size} bytes)")

    (OUT / "index.ts").write_text("\n".join(index_exports) + "\n", encoding="utf-8")
    print("Done.")


if __name__ == "__main__":
    main()
