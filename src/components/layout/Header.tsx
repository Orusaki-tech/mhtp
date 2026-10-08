import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { CTA_NAV, PRIMARY_NAV, SITE } from "@/data/site"
import { Icon } from "@/components/ui/Icon"

const linkClass = ({ isActive }: { isActive: boolean }) =>
  [
    "shrink-0 whitespace-nowrap px-2.5 py-1.5 text-[13px] leading-none transition-colors rounded-lg",
    isActive
      ? "text-on-surface font-semibold bg-surface-container-high"
      : "font-medium text-on-surface-variant hover:text-on-surface",
  ].join(" ")

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.05)]">
      <div className="bg-primary-container text-on-primary-container px-gutter">
        <div className="max-w-[90rem] mx-auto h-8 flex items-center justify-between text-label-sm font-label-sm">
          <div className="flex items-center gap-space-sm min-w-0">
            <span className="tracking-wide text-on-primary-container/90 truncate">
              {SITE.topBarNote}
            </span>
          </div>
          <div className="hidden md:flex items-center gap-space-md shrink-0">
            <span className="flex items-center gap-1 text-on-primary-container/80">
              <Icon name="location_on" className="text-[14px]" />
              Kampala, Uganda
            </span>
            <span className="flex items-center gap-1 text-on-primary-container/80">
              <Icon name="verified" className="text-[14px]" />
              Faith & Community Uplift
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-[90rem] mx-auto px-gutter h-[4.5rem] flex flex-nowrap items-center gap-3 lg:gap-4">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img
            alt="World Healing Trinity Place Emblem"
            className="h-9 w-auto object-contain shrink-0"
            src={SITE.emblem}
          />
          <div className="flex flex-col justify-center">
            <span className="text-[14px] xl:text-[15px] font-bold text-on-surface leading-tight tracking-tight whitespace-nowrap">
              World Healing Trinity Place
            </span>
            <span className="text-[10px] text-on-surface-variant tracking-wider uppercase font-medium whitespace-nowrap">
              Faith · Healing · Empowerment
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex flex-1 flex-nowrap items-center justify-center gap-0.5 min-w-0">
          {PRIMARY_NAV.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0 ml-auto lg:ml-0">
          <Link
            to={CTA_NAV.prayer.to}
            className="hidden md:inline-flex items-center justify-center px-3.5 py-2 rounded-lg text-[13px] font-semibold text-on-surface bg-surface-container hover:bg-surface-container-high transition-colors whitespace-nowrap"
          >
            {CTA_NAV.prayer.label}
          </Link>
          <Link
            to={CTA_NAV.partner.to}
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-[13px] font-semibold text-on-primary bg-primary hover:bg-primary-container transition-colors shadow-[0_2px_8px_rgba(0,0,0,0.12)] whitespace-nowrap"
          >
            {CTA_NAV.partner.label}
          </Link>
          <button
            type="button"
            className="lg:hidden w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center"
            aria-expanded={open}
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} className="text-[22px]" />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-outline-variant/40 bg-surface-container-lowest px-gutter pb-space-md">
          <nav className="flex flex-col gap-1 pt-space-sm">
            {PRIMARY_NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink to={CTA_NAV.prayer.to} className={linkClass} onClick={() => setOpen(false)}>
              {CTA_NAV.prayer.label}
            </NavLink>
            <NavLink to={CTA_NAV.partner.to} className={linkClass} onClick={() => setOpen(false)}>
              {CTA_NAV.partner.label}
            </NavLink>
            <NavLink to="/courses" className={linkClass} onClick={() => setOpen(false)}>
              Online Courses
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  )
}
