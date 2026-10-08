import { Link } from "react-router-dom"
import { CHARTER } from "@/data/charter"
import { SITE } from "@/data/site"

export default function PillarsPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="w-full bg-surface-container-lowest px-gutter py-space-xl">
        <div className="max-w-3xl mx-auto flex flex-col gap-space-md w-full">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">
            Memorandum of Association
          </span>
          <h1 className="font-headline-xl text-headline-xl text-on-surface font-serif">
            Pillars of Ministry
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Our ministry work is defined solely by the objects for which {CHARTER.companyName} is
            established. No activity beyond these objects is presented here.
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
              <span className="font-label-sm text-label-sm px-2.5 py-1 rounded bg-secondary-container text-on-secondary-container uppercase tracking-wider font-bold self-start">
                Object {String(obj.id).padStart(2, "0")}
              </span>
              <h2 className="font-headline-md text-headline-md text-on-surface font-serif">
                {obj.title}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">{obj.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full bg-primary-container text-on-primary-container py-space-xl px-gutter">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          <div className="lg:col-span-7 flex flex-col gap-space-md">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed font-bold">
              Articles of Association
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-primary font-serif">
              Lands &amp; Facilities
            </h2>
            <p className="font-body-md text-body-md text-on-primary-container">
              {CHARTER.propertyObjects.acquisition}
            </p>
            <p className="font-body-sm text-body-sm text-on-primary-container/90">
              {CHARTER.propertyObjects.incidental}
            </p>
          </div>
          <div className="lg:col-span-5 bg-surface-container-lowest/10 p-space-lg rounded-xl flex flex-col gap-space-sm">
            <h3 className="font-title-lg text-title-lg text-on-primary font-bold">Contact</h3>
            <p className="font-body-sm text-body-sm text-on-primary-container">{SITE.address}</p>
            <p className="font-body-sm text-body-sm text-on-primary-container">{SITE.phone}</p>
            <Link
              to="/about-legal-status"
              className="mt-2 inline-flex self-start px-4 py-2 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md font-semibold"
            >
              Full Governance Details
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
