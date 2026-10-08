import { Link } from "react-router-dom"
import { SITE } from "@/data/site"
import { Icon } from "@/components/ui/Icon"

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-low text-on-surface">
      <div className="max-w-7xl mx-auto px-gutter pt-space-xl pb-space-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-lg mb-space-xl">
          <div className="lg:col-span-4 flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              <div className="w-9 h-9 rounded-lg bg-primary-container flex items-center justify-center">
                <Icon name="church" className="text-secondary-fixed text-[20px]" />
              </div>
              <div className="flex flex-col">
                <span className="font-title-md font-bold text-on-surface">{SITE.name}</span>
                <span className="font-label-sm text-on-surface-variant">{SITE.tagline}</span>
              </div>
            </div>
            <p className="font-body-md text-on-surface-variant">
              Faith, healing and deliverance, vocational empowerment, and Gospel outreach across
              Uganda.
            </p>
            <div className="flex flex-col gap-1 text-body-sm text-on-surface-variant">
              <div className="flex items-center gap-2">
                <Icon name="pin_drop" className="text-[16px] text-secondary" />
                <span>{SITE.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="mail" className="text-[16px] text-secondary" />
                <span>{SITE.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="call" className="text-[16px] text-secondary" />
                <span>{SITE.phone}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-space-sm">
            <span className="font-label-md font-bold uppercase tracking-wider text-on-surface">
              Explore
            </span>
            <ul className="flex flex-col gap-space-xs font-body-sm text-on-surface-variant">
              <li>
                <Link className="hover:text-on-surface" to="/about-legal-status">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:text-on-surface" to="/pillars-of-ministry">
                  Ministry
                </Link>
              </li>
              <li>
                <Link className="hover:text-on-surface" to="/vocational-programs">
                  Training
                </Link>
              </li>
              <li>
                <Link className="hover:text-on-surface" to="/outreach-healing">
                  Outreach
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-space-sm">
            <span className="font-label-md font-bold uppercase tracking-wider text-on-surface">
              Engage
            </span>
            <ul className="flex flex-col gap-space-xs font-body-sm text-on-surface-variant">
              <li>
                <Link className="hover:text-on-surface" to="/prayer-request">
                  Prayer request
                </Link>
              </li>
              <li>
                <Link className="hover:text-on-surface" to="/partner-donate">
                  Donate
                </Link>
              </li>
              <li>
                <Link className="hover:text-on-surface" to="/contact-give">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="hover:text-on-surface" to="/courses">
                  Online courses
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-surface-container p-space-md rounded-xl flex flex-col gap-space-sm">
              <span className="font-title-md font-bold text-on-surface">Stay connected</span>
              <p className="font-body-sm text-on-surface-variant">
                Leave your email for ministry updates.
              </p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  className="flex-1 px-3 py-2 rounded-lg bg-surface-container-lowest font-body-sm focus:outline-none focus:ring-1 focus:ring-secondary"
                  placeholder="Email address"
                  type="email"
                />
                <button
                  className="px-4 py-2 rounded-lg bg-primary text-on-primary font-label-md font-semibold"
                  type="submit"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-space-lg pt-space-md border-t border-surface-container-high font-label-sm text-on-surface-variant">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
