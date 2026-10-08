import { Link } from "react-router-dom"
import { CHARTER } from "@/data/charter"
import { SITE } from "@/data/site"

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative w-full overflow-hidden bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-gutter py-space-xl lg:py-24">
          <div className="max-w-3xl flex flex-col gap-space-md">
            <span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-bold">
              {SITE.name}
            </span>
            <h1 className="font-headline-xl text-headline-xl lg:text-display-lg lg:font-display-lg text-primary tracking-tight font-bold">
              Faith, Healing &amp; Vocational Empowerment
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              We advance the Christian faith, minister holistic healing and deliverance, guide
              people into sustainable income-generating activities, and equip communities through
              vocational training, evangelism, and discipleship.
            </p>
            <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
              <a
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-label-md text-label-md font-semibold text-on-primary bg-primary hover:bg-primary-container transition-all shadow-md"
                href="#offerings"
              >
                Our Offerings
              </a>
              <Link
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-label-md text-label-md font-semibold text-on-surface bg-surface-container hover:bg-surface-container-high transition-all"
                to="/prayer-request"
              >
                Prayer Request
              </Link>
              <Link
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg font-label-md text-label-md font-bold text-on-secondary-container bg-secondary-container hover:bg-secondary-fixed transition-all"
                to="/partner-donate"
              >
                Partner / Donate
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-space-xl bg-surface" id="offerings">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="flex flex-col gap-2 max-w-2xl mb-space-xl">
            <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">
              What We Offer
            </span>
            <h2 className="font-headline-xl text-headline-xl text-primary font-bold">
              Ministry Offerings
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Drawn from the purposes for which {SITE.name} was established.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {CHARTER.objects.map((obj) => (
              <div
                key={obj.id}
                className="flex flex-col gap-space-sm bg-surface-container-lowest p-space-lg rounded-xl shadow-sm"
              >
                <h3 className="font-title-lg text-title-lg text-on-surface font-bold leading-snug">
                  {obj.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {obj.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-space-xl bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-gutter flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
          <div className="flex flex-col gap-1">
            <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
              Walk with us
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Explore prayer, outreach, vocational training, or partnership.
            </p>
          </div>
          <div className="flex flex-wrap gap-space-sm">
            <Link
              to="/outreach-healing"
              className="px-4 py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold"
            >
              Outreach
            </Link>
            <Link
              to="/vocational-programs"
              className="px-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md font-semibold"
            >
              Vocational Training
            </Link>
            <Link
              to="/contact-give"
              className="px-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md font-semibold"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
