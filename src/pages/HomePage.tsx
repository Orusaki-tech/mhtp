import { Link } from "react-router-dom"
import { JOURNEY, PILLARS } from "@/data/ministry"
import { SITE } from "@/data/site"

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative w-full min-h-[calc(100svh-7.5rem)] overflow-hidden bg-primary-container">
        <img
          className="hero-media absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=2400&q=80"
          alt="Congregation gathered in worship with hands raised toward warm light"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/80 to-primary-container/25"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-transparent to-primary-container/40"
          aria-hidden
        />
        <div className="relative z-10 max-w-7xl mx-auto px-gutter flex flex-col justify-end min-h-[calc(100svh-7.5rem)] py-16 lg:py-24">
          <div className="max-w-2xl flex flex-col gap-space-md text-on-primary">
            <p className="hero-rise hero-rise-delay-1 font-display-lg text-[clamp(2rem,5vw,3.25rem)] leading-tight font-bold tracking-tight text-secondary-fixed">
              {SITE.name}
            </p>
            <div
              className="hero-accent-line h-0.5 w-24 bg-secondary-container"
              aria-hidden
            />
            <h1 className="hero-rise hero-rise-delay-2 font-headline-xl text-headline-xl lg:text-display-lg lg:font-display-lg tracking-tight font-bold text-on-primary">
              Restored by faith. Equipped for life.
            </h1>
            <p className="hero-rise hero-rise-delay-3 font-body-lg text-body-lg text-on-primary/85 max-w-xl leading-relaxed">
              Christian faith, holistic healing and deliverance, and vocational empowerment — so
              people move from crisis toward independence and hope.
            </p>
            <div className="hero-rise hero-rise-delay-4 flex flex-wrap items-center gap-space-sm pt-space-xs">
              <Link
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg font-label-md text-label-md font-semibold text-on-secondary-container bg-secondary-container hover:brightness-105 transition-all"
                to="/pillars-of-ministry"
              >
                Explore Ministry
              </Link>
              <Link
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg font-label-md text-label-md font-semibold text-on-primary border border-on-primary/35 hover:bg-on-primary/10 transition-all"
                to="/prayer-request"
              >
                Request Prayer
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-space-xl bg-surface" id="pillars">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="flex flex-col gap-2 max-w-2xl mb-space-xl">
            <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">
              Four Pillars
            </span>
            <h2 className="font-headline-xl text-headline-xl text-primary font-bold">
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
                className="group flex flex-col gap-space-sm bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow"
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
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="max-w-2xl mb-space-lg">
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
                className="bg-surface-container-lowest p-space-md rounded-xl flex flex-col gap-1"
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
        <div className="max-w-7xl mx-auto px-gutter flex flex-col md:flex-row md:items-center justify-between gap-space-md">
          <div className="max-w-xl">
            <h2 className="font-headline-md text-headline-md text-on-primary font-bold">
              Need prayer or want to partner?
            </h2>
            <p className="font-body-md text-body-md text-on-primary-container/90 mt-2">
              Submit a confidential prayer request, or stand with us as we equip communities across
              Uganda.
            </p>
          </div>
          <div className="flex flex-wrap gap-space-sm shrink-0">
            <Link
              to="/prayer-request"
              className="px-5 py-3 rounded-lg bg-secondary-container text-on-secondary-container font-label-md font-bold"
            >
              Prayer Request
            </Link>
            <Link
              to="/partner-donate"
              className="px-5 py-3 rounded-lg bg-surface-container-lowest/15 text-on-primary font-label-md font-semibold"
            >
              Partner / Donate
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
