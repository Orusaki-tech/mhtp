import { Link } from "react-router-dom"
import { CHARTER } from "@/data/charter"
import { SITE } from "@/data/site"

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="w-full bg-surface-container-lowest px-gutter py-space-xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
            <div className="lg:col-span-8 flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-2 self-start px-3 py-1 bg-secondary/10 text-secondary rounded-DEFAULT text-label-sm font-label-sm uppercase tracking-widest font-bold">
                Memorandum & Articles of Association
              </div>
              <h1 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
                About Our Ministry & Governance
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
                <strong className="text-on-surface font-semibold">{CHARTER.companyName}</strong> is{" "}
                {CHARTER.entityType.toLowerCase()}, with its registered office situated in{" "}
                {CHARTER.domicile}. We exist to advance Christian faith, minister holistic healing
                and deliverance, and equip people through vocational training and discipleship.
              </p>
              <div className="flex flex-wrap items-center gap-space-md pt-2">
                <a
                  href="#objects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold hover:bg-primary-container shadow-sm transition-all"
                >
                  View Our Objects
                </a>
                <a
                  href="#subscribers"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md font-semibold hover:bg-surface-container-high transition-colors"
                >
                  Founding Subscribers
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 bg-surface-container-low rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
              <span className="font-title-md text-title-md font-bold text-on-surface">
                Company Snapshot
              </span>
              <div className="bg-surface-container-lowest p-space-sm rounded-lg flex flex-col gap-1.5 font-body-sm text-body-sm">
                <div className="flex justify-between gap-2 text-on-surface-variant">
                  <span>Entity</span>
                  <span className="text-on-surface font-medium text-right">Limited by Guarantee</span>
                </div>
                <div className="flex justify-between gap-2 text-on-surface-variant">
                  <span>Share capital</span>
                  <span className="text-on-surface font-medium">None</span>
                </div>
                <div className="flex justify-between gap-2 text-on-surface-variant">
                  <span>Articles</span>
                  <span className="text-on-surface font-medium text-right">{CHARTER.tableC}</span>
                </div>
                <div className="flex justify-between gap-2 text-on-surface-variant">
                  <span>Member guarantee</span>
                  <span className="text-on-surface font-medium">{CHARTER.memberGuarantee}</span>
                </div>
                <div className="flex justify-between gap-2 text-on-surface-variant">
                  <span>Articles dated</span>
                  <span className="text-on-surface font-medium text-right">{CHARTER.articlesDate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface py-space-xl px-gutter" id="objects">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
          <div>
            <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
              Memorandum of Association • Objects
            </span>
            <h2 className="font-headline-md text-headline-md text-on-surface font-bold mt-1">
              The 8 Objects of the Company
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-2xl">
              The objects for which the company is established, as set out in the Memorandum of
              Association.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            {CHARTER.objects.map((obj) => (
              <div
                key={obj.id}
                className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-sm"
              >
                <span className="font-label-md text-label-md font-bold text-secondary tracking-widest">
                  OBJECT {String(obj.id).padStart(2, "0")}
                </span>
                <h3 className="font-title-lg text-title-lg text-on-surface font-bold">{obj.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {obj.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-container-lowest py-space-xl px-gutter">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
            <div className="lg:col-span-5 flex flex-col gap-space-md">
              <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
                Articles of Association
              </span>
              <h2 className="font-headline-md text-headline-md text-on-surface font-bold leading-tight">
                Property & Institutional Powers
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                The Articles authorize the company to acquire and steward facilities needed for
                ministry and training.
              </p>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-space-sm">
              <div className="bg-surface-container p-space-md rounded-lg">
                <h4 className="font-title-md text-title-md text-on-surface font-bold">
                  Lands & Buildings
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  {CHARTER.propertyObjects.acquisition}
                </p>
              </div>
              <div className="bg-surface-container p-space-md rounded-lg">
                <h4 className="font-title-md text-title-md text-on-surface font-bold">
                  Incidental Authority
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  {CHARTER.propertyObjects.incidental}
                </p>
              </div>
              <div className="bg-surface-container p-space-md rounded-lg">
                <h4 className="font-title-md text-title-md text-on-surface font-bold">
                  Limited Liability
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  The liability of the members is limited. Every member undertakes to contribute to
                  the assets of the company in a winding-up an amount not exceeding{" "}
                  <strong className="text-on-surface">{CHARTER.memberGuarantee}</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface py-space-xl px-gutter" id="subscribers">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-space-xs">
            <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
              Leadership & Stewardship
            </span>
            <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
              Founding Subscribers
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              We, the several persons whose names and addresses are subscribed, desire to be formed
              into a Company in pursuance of this Memorandum of Association — dated{" "}
              {CHARTER.articlesDate}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
            {CHARTER.subscribers.map((person) => (
              <div
                key={person.name}
                className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-xs"
              >
                <span className="px-2 py-0.5 rounded-DEFAULT bg-secondary/15 text-secondary text-label-sm font-label-sm font-bold uppercase self-start">
                  Founding Subscriber
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  {person.name}
                </h3>
                <span className="font-body-sm text-body-sm text-secondary font-semibold">
                  {person.occupation}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
            <div>
              <h4 className="font-title-md text-title-md text-on-surface font-bold">
                Witness to the above signatures
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                <strong className="text-on-surface">{CHARTER.witness.name}</strong> —{" "}
                {CHARTER.witness.occupation}, {CHARTER.witness.address}
              </p>
            </div>
            <Link
              to="/contact-give"
              className="px-4 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold shrink-0"
            >
              Contact the Ministry
            </Link>
          </div>

          <p className="font-body-sm text-body-sm text-on-surface-variant text-center">
            Ministry office: {SITE.address} · {SITE.phone}
          </p>
        </div>
      </section>
    </div>
  )
}
