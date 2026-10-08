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
                <span className="font-title-md text-title-md font-bold text-on-surface">
                  {SITE.name}
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Limited by Guarantee
                </span>
              </div>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant">
              A company limited by guarantee in Uganda, established for the advancement of Christian
              faith, holistic healing and deliverance, vocational training, and community outreach
              — as set out in its Memorandum of Association.
            </p>
            <div className="flex flex-col gap-1 text-body-sm font-body-sm text-on-surface-variant">
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
            <span className="font-label-md text-label-md font-bold uppercase tracking-wider text-on-surface">
              Ministry
            </span>
            <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <Link className="hover:text-on-surface transition-colors" to="/pillars-of-ministry">
                  Objects &amp; Pillars
                </Link>
              </li>
              <li>
                <Link className="hover:text-on-surface transition-colors" to="/outreach-healing">
                  Outreach
                </Link>
              </li>
              <li>
                <Link className="hover:text-on-surface transition-colors" to="/vocational-programs">
                  Vocational Training
                </Link>
              </li>
              <li>
                <Link className="hover:text-on-surface transition-colors" to="/prayer-request">
                  Prayer Request
                </Link>
              </li>
              <li>
                <Link className="hover:text-on-surface transition-colors" to="/courses">
                  Online Courses
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-space-sm">
            <span className="font-label-md text-label-md font-bold uppercase tracking-wider text-on-surface">
              Governance
            </span>
            <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <Link className="hover:text-on-surface transition-colors" to="/about-legal-status">
                  Memorandum &amp; Articles
                </Link>
              </li>
              <li>
                <Link className="hover:text-on-surface transition-colors" to="/about-legal-status">
                  Founding Subscribers
                </Link>
              </li>
              <li>
                <Link className="hover:text-on-surface transition-colors" to="/partner-donate">
                  Partner / Donate
                </Link>
              </li>
              <li>
                <Link className="hover:text-on-surface transition-colors" to="/contact-give">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-space-md">
            <div className="bg-surface-container p-space-md rounded-xl flex flex-col gap-space-sm">
              <span className="font-title-md text-title-md font-bold text-on-surface">
                Stay in Touch
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Leave your email for ministry updates related to our charter objects.
              </p>
              <form
                className="flex flex-col gap-space-xs"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex gap-2">
                  <input
                    className="flex-1 px-3 py-2 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant/60 font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-secondary"
                    placeholder="Email address"
                    type="email"
                  />
                  <button
                    className="px-4 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold hover:bg-primary-container transition-colors"
                    type="submit"
                  >
                    Join
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="pt-space-md bg-surface-container-high/40 rounded-xl p-space-md flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-md text-body-sm font-body-sm text-on-surface-variant">
          <div className="flex items-center gap-space-sm">
            <Icon name="shield" className="text-[20px] text-secondary shrink-0" />
            <p>
              <strong className="text-on-surface">Legal Entity:</strong> {SITE.legalName} is a
              company limited by guarantee and not having a share capital, with objects set out in
              its Memorandum of Association.
            </p>
          </div>
          <Link
            className="hover:text-on-surface transition-colors whitespace-nowrap text-label-sm font-label-sm"
            to="/about-legal-status"
          >
            Memorandum &amp; Articles
          </Link>
        </div>

        <div className="mt-space-lg pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-sm font-label-sm text-label-sm text-on-surface-variant">
          <p>
            © {new Date().getFullYear()} {SITE.legalName}. All Rights Reserved.
          </p>
          <p className="text-on-surface-variant/80">{SITE.address}</p>
        </div>
      </div>
    </footer>
  )
}
