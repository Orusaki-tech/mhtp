import { Link } from "react-router-dom"
import { CHARTER } from "@/data/charter"
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
            Who We Are
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            <strong className="text-on-surface font-semibold">{SITE.name}</strong> exists to
            advance Christian faith, minister holistic healing and deliverance, build capacity for
            sustainable independence, and equip people through vocational training, evangelism, and
            discipleship.
          </p>
          <a
            href="#offerings"
            className="inline-flex self-start items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold hover:bg-primary-container shadow-sm transition-all"
          >
            Our Offerings
          </a>
        </div>
      </section>

      <section className="w-full bg-surface py-space-xl px-gutter" id="offerings">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
          <div>
            <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
              Ministry Offerings
            </span>
            <h2 className="font-headline-md text-headline-md text-on-surface font-bold mt-1">
              What We Do
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-2xl">
              These are the purposes that guide our work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            {CHARTER.objects.map((obj) => (
              <div
                key={obj.id}
                className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-sm"
              >
                <h3 className="font-title-lg text-title-lg text-on-surface font-bold">{obj.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {obj.body}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-space-md flex flex-wrap gap-space-sm">
            <Link
              to="/contact-give"
              className="px-4 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold"
            >
              Contact Us
            </Link>
            <Link
              to="/partner-donate"
              className="px-4 py-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md font-semibold"
            >
              Partner / Donate
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
