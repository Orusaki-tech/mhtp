import { Link } from "react-router-dom"
import { CHARTER } from "@/data/charter"
import { Icon } from "@/components/ui/Icon"

export default function VocationalProgramsPage() {
  const offerings = CHARTER.objects.filter((o) => [3, 4, 6].includes(o.id))

  return (
    <div className="flex flex-col w-full">
      <section className="w-full bg-surface-container-lowest px-gutter py-space-xl">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-md">
          <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">
            Training &amp; Discipleship
          </span>
          <h1 className="font-headline-xl text-headline-xl text-on-surface font-bold max-w-3xl">
            Vocational Training &amp; Discipleship
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            We build capacity after healing and deliverance, operate vocational training for
            practical skills, and offer theological training for discipleship and leadership.
          </p>
          <div className="flex flex-wrap gap-space-sm pt-space-xs">
            <Link
              to="/vocational-enrollment"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-bold"
            >
              Express Interest
              <Icon name="arrow_forward" className="text-[18px]" />
            </Link>
            <Link
              to="/contact-give"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md font-bold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface px-gutter py-space-xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-space-md">
          {offerings.map((obj) => (
            <div
              key={obj.id}
              className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-sm"
            >
              <h2 className="font-title-lg text-title-lg font-bold text-on-surface">{obj.title}</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{obj.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
