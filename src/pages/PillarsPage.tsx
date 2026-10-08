import { Link } from "react-router-dom"
import { CHARTER } from "@/data/charter"
import { SITE } from "@/data/site"

export default function PillarsPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="w-full bg-surface-container-lowest px-gutter py-space-xl">
        <div className="max-w-3xl mx-auto flex flex-col gap-space-md w-full">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">
            Ministry Pillars
          </span>
          <h1 className="font-headline-xl text-headline-xl text-on-surface font-serif">
            Our Offerings
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            These are the purposes that guide {SITE.name}.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-gutter py-12 lg:py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
          {CHARTER.objects.map((obj) => (
            <div
              key={obj.id}
              className="bg-surface-container-lowest rounded-xl p-space-xl shadow-md flex flex-col gap-space-sm"
            >
              <h2 className="font-headline-md text-headline-md text-on-surface font-serif">
                {obj.title}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">{obj.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-space-xl flex flex-wrap gap-space-sm">
          <Link
            to="/outreach-healing"
            className="px-4 py-2.5 rounded-lg bg-primary text-on-primary font-label-md font-semibold"
          >
            Outreach
          </Link>
          <Link
            to="/vocational-programs"
            className="px-4 py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md font-semibold"
          >
            Vocational Training
          </Link>
          <Link
            to="/prayer-request"
            className="px-4 py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md font-semibold"
          >
            Prayer Request
          </Link>
        </div>
      </section>
    </div>
  )
}
