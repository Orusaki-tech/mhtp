import { Link } from "react-router-dom"
import { JOURNEY, PILLARS } from "@/data/ministry"
import { SITE } from "@/data/site"

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative w-full min-h-[min(92svh,52rem)] overflow-hidden bg-primary-container">
        <img
          className="hero-media absolute inset-0 h-full w-full object-cover object-[center_30%]"
          src="https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=2400&q=80"
          alt="Congregation gathered in worship with hands raised toward warm light"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/75 to-primary-container/45 md:bg-gradient-to-r md:from-primary-container md:via-primary-container/80 md:to-primary-container/25"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-primary-container/95 via-transparent to-primary-container/30"
          aria-hidden
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-gutter flex flex-col justify-end min-h-[min(92svh,52rem)] py-12 sm:py-16 lg:py-24">
          <div className="max-w-2xl w-full mx-auto md:mx-0 flex flex-col gap-space-md text-on-primary text-center md:text-left items-center md:items-start">
            <p className="hero-rise hero-rise-delay-1 font-display-lg text-[clamp(1.75rem,7vw,3.25rem)] leading-tight font-bold tracking-tight text-secondary-fixed">
              {SITE.name}
            </p>
            <div
              className="hero-accent-line h-0.5 w-24 bg-secondary-container"
              aria-hidden
            />
            <h1 className="hero-rise hero-rise-delay-2 font-headline-xl text-[clamp(1.5rem,5.5vw,3.5rem)] leading-tight lg:text-display-lg lg:font-display-lg tracking-tight font-bold text-on-primary text-balance">
              Restored by faith. Equipped for life.
            </h1>
            <p className="hero-rise hero-rise-delay-3 font-body-md sm:font-body-lg text-body-md sm:text-body-lg text-on-primary/85 max-w-xl leading-relaxed">
              Christian faith, holistic healing and deliverance, and vocational empowerment — so
              people move from crisis toward independence and hope.
            </p>
            <div className="hero-rise hero-rise-delay-4 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center md:justify-start gap-space-sm pt-space-xs w-full sm:w-auto">
              <Link
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg font-label-md text-label-md font-semibold text-on-secondary-container bg-secondary-container hover:brightness-105 transition-all w-full sm:w-auto"
                to="/pillars-of-ministry"
              >
                Explore Ministry
              </Link>
              <Link
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg font-label-md text-label-md font-semibold text-on-primary border border-on-primary/35 hover:bg-on-primary/10 transition-all w-full sm:w-auto"
                to="/prayer-request"
              >
                Request Prayer
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-space-xl bg-surface" id="pillars">
        <div className="max-w-7xl mx-auto px-4 sm:px-gutter">
          <div className="flex flex-col gap-2 max-w-2xl mx-auto md:mx-0 mb-space-xl text-center md:text-left items-center md:items-start">
            <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">
              Four Pillars
            </span>
            <h2 className="font-headline-xl text-headline-xl text-primary font-bold text-balance">
              How we serve
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Clear pathways — from worship and healing to skills, outreach, and discipleship.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
            {PILLARS.map((pillar) => (
              <Link
                key={pillar.id}
                to={pillar.href}
                className="group flex flex-col gap-space-sm bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow text-center sm:text-left items-center sm:items-start"
              >
                <h3 className="font-title-lg text-title-lg text-on-surface font-bold group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {pillar.short}
                </p>
                <span className="font-label-md text-label-md font-semibold text-secondary mt-auto pt-2">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-space-xl bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-gutter">
          <div className="max-w-2xl mx-auto md:mx-0 mb-space-lg text-center md:text-left">
            <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
              A simple journey
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              Encounter → restore → equip → send.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {JOURNEY.map((item) => (
              <div
                key={item.step}
                className="bg-surface-container-lowest p-space-md rounded-xl flex flex-col gap-1 text-center sm:text-left items-center sm:items-start"
              >
                <span className="font-label-sm text-label-sm text-secondary font-bold">
                  Step {item.step}
                </span>
                <h3 className="font-title-md text-title-md font-bold text-on-surface">{item.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-space-xl bg-primary-container text-on-primary-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-gutter flex flex-col md:flex-row md:items-center justify-between gap-space-md text-center md:text-left items-center">
          <div className="max-w-xl">
            <h2 className="font-headline-md text-headline-md text-on-primary font-bold text-balance">
              Need prayer or want to partner?
            </h2>
            <p className="font-body-md text-body-md text-on-primary-container/90 mt-2">
              Submit a confidential prayer request, or stand with us as we equip communities across
              Uganda.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap gap-space-sm shrink-0 w-full sm:w-auto justify-center">
            <Link
              to="/prayer-request"
              className="px-5 py-3 rounded-lg bg-secondary-container text-on-secondary-container font-label-md font-bold text-center"
            >
              Prayer Request
            </Link>
            <Link
              to="/partner-donate"
              className="px-5 py-3 rounded-lg bg-surface-container-lowest/15 text-on-primary font-label-md font-semibold text-center"
            >
              Partner / Donate
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
