import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { CTA_NAV, PRIMARY_NAV, SITE } from "@/data/site"
import { Icon } from "@/components/ui/Icon"

const linkClass = ({ isActive }: { isActive: boolean }) =>
  [
    "px-3 py-2.5 text-[14px] leading-none transition-colors rounded-lg text-center lg:text-left lg:px-2.5 lg:py-1.5 lg:text-[13px]",
    isActive
      ? "text-on-surface font-semibold bg-surface-container-high"
      : "font-medium text-on-surface-variant hover:text-on-surface",
  ].join(" ")

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.05)]">
      <div className="bg-primary-container text-on-primary-container px-4 sm:px-gutter">
        <div className="max-w-[90rem] mx-auto h-8 flex items-center justify-center md:justify-between text-label-sm font-label-sm">
          <span className="tracking-wide text-on-primary-container/90 truncate text-center">
            {SITE.topBarNote}
          </span>
          <div className="hidden md:flex items-center gap-space-md shrink-0">
            <span className="flex items-center gap-1 text-on-primary-container/80">
              <Icon name="location_on" className="text-[14px]" />
              Kampala, Uganda
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-gutter h-16 sm:h-[4.5rem] flex items-center gap-2 sm:gap-3">
        <Link to="/" className="flex items-center gap-2 min-w-0 flex-1 lg:flex-none">
          <img
            alt=""
            className="h-8 sm:h-9 w-auto object-contain shrink-0"
            src={SITE.emblem}
          />
          <div className="flex flex-col justify-center min-w-0">
            <span className="text-[12px] sm:text-[14px] xl:text-[15px] font-bold text-on-surface leading-tight tracking-tight truncate">
              {SITE.name}
            </span>
            <span className="hidden sm:block text-[10px] text-on-surface-variant tracking-wider uppercase font-medium">
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

        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <Link
            to={CTA_NAV.prayer.to}
            className="hidden md:inline-flex items-center justify-center px-3.5 py-2 rounded-lg text-[13px] font-semibold text-on-surface bg-surface-container hover:bg-surface-container-high transition-colors whitespace-nowrap"
          >
            {CTA_NAV.prayer.label}
          </Link>
          <Link
            to={CTA_NAV.partner.to}
            className="inline-flex items-center justify-center px-3 sm:px-4 py-2 rounded-lg text-[12px] sm:text-[13px] font-semibold text-on-primary bg-primary hover:bg-primary-container transition-colors whitespace-nowrap"
          >
            {CTA_NAV.partner.label}
          </Link>
          <button
            type="button"
            className="lg:hidden w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} className="text-[22px]" />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-outline-variant/40 bg-surface-container-lowest px-4 sm:px-gutter pb-space-md max-h-[70vh] overflow-y-auto">
          <nav className="flex flex-col items-stretch gap-1 pt-space-sm">
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
