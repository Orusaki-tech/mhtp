import { Link } from "react-router-dom"
import { JOURNEY, PILLARS } from "@/data/ministry"
import { SITE } from "@/data/site"

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="w-full bg-surface-container-lowest px-gutter py-space-xl">
        <div className="max-w-3xl mx-auto flex flex-col gap-space-md w-full">
          <span className="inline-flex self-start px-3 py-1 bg-secondary/10 text-secondary rounded-DEFAULT text-label-sm font-label-sm uppercase tracking-widest font-bold">
            About
          </span>
          <h1 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
            Who we are
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            <strong className="text-on-surface font-semibold">{SITE.name}</strong> is a
            faith-based ministry in Uganda. We exist so people can encounter Christ, receive healing
            and deliverance ministry, grow in discipleship, and gain practical skills for dignified
            independence.
          </p>
        </div>
      </section>

      <section className="w-full bg-surface py-space-xl px-gutter">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
              Our mission
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              We believe spiritual renewal and practical empowerment belong together. Ministry does
              not end at the altar — it continues as people are discipled, skilled, and sent to
              serve their communities.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              That journey shapes everything we do: worship and teaching, healing prayer,
              vocational training, evangelism, and partnership with others who share the same hope.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-space-md">
            {JOURNEY.map((item) => (
              <div
                key={item.step}
                className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-1"
              >
                <span className="font-label-sm text-label-sm text-secondary font-bold">
                  {item.title}
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-container-low py-space-xl px-gutter">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
          <div className="max-w-2xl">
            <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
              What we focus on
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              Four ministry pillars guide our work. Explore each area for how to get involved.
            </p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            {PILLARS.map((pillar) => (
              <li key={pillar.id}>
                <Link
                  to={pillar.href}
                  className="block h-full bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-title-lg text-title-lg font-bold text-on-surface">
                    {pillar.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                    {pillar.short}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-space-sm">
            <Link
              to="/contact-give"
              className="px-4 py-2.5 rounded-lg bg-primary text-on-primary font-label-md font-semibold"
            >
              Contact us
            </Link>
            <Link
              to="/partner-donate"
              className="px-4 py-2.5 rounded-lg bg-surface-container-highest text-on-surface font-label-md font-semibold"
            >
              Partner with us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
