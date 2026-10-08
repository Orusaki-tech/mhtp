import { Link } from "react-router-dom"
import { CHARTER } from "@/data/charter"
import { SITE } from "@/data/site"
import { Icon } from "@/components/ui/Icon"

export default function VocationalProgramsPage() {
  const vocational = CHARTER.objects.find((o) => o.id === 4)!
  const capacity = CHARTER.objects.find((o) => o.id === 3)!
  const education = CHARTER.objects.find((o) => o.id === 6)!

  return (
    <div className="flex flex-col w-full">
      <section className="w-full bg-surface-container-lowest px-gutter py-space-xl">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-md">
          <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">
            Objects 3, 4 &amp; 6
          </span>
          <h1 className="font-headline-xl text-headline-xl text-on-surface font-bold max-w-3xl">
            Vocational Training &amp; Discipleship
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            Our training mandate is stated in the Memorandum of Association. We do not list
            specific trades or schedules beyond what the charter authorizes.
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
          {[capacity, vocational, education].map((obj) => (
            <div
              key={obj.id}
              className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-sm"
            >
              <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
                Object {String(obj.id).padStart(2, "0")}
              </span>
              <h2 className="font-title-lg text-title-lg font-bold text-on-surface">{obj.title}</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{obj.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full bg-surface-container-low px-gutter py-space-xl">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-md">
          <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
            Facilities Authorized by the Articles
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
            {CHARTER.propertyObjects.acquisition}
          </p>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Office: {SITE.address} · {SITE.phone}
          </p>
        </div>
      </section>
    </div>
  )
}
