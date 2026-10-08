import { Link } from "react-router-dom"
import { CHARTER } from "@/data/charter"
import { SITE } from "@/data/site"

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative w-full overflow-hidden bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-gutter py-space-xl lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-surface-container text-on-surface shadow-sm">
                <span className="material-symbols-outlined text-[16px] text-secondary">
                  verified_user
                </span>
                <span className="font-label-sm text-label-sm tracking-wider uppercase text-on-surface-variant font-bold">
                  Company Limited by Guarantee • Not Having a Share Capital • Uganda
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-bold">
                  {SITE.legalName}
                </span>
                <h1 className="font-headline-xl text-headline-xl lg:text-display-lg lg:font-display-lg text-primary tracking-tight font-bold">
                  Faith, Healing &amp; Vocational Empowerment
                </h1>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                A company limited by guarantee in Uganda, established to advance the Christian
                faith, minister holistic healing and deliverance, build capacity for
                income-generating independence, and operate vocational training and theological
                discipleship — as set out in our Memorandum of Association.
              </p>
              <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
                <a
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-label-md text-label-md font-semibold text-on-primary bg-primary hover:bg-primary-container transition-all shadow-md"
                  href="#objects"
                >
                  View Our Objects
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
            <div className="lg:col-span-5">
              <div className="bg-primary-container text-on-primary-container rounded-xl p-space-lg shadow-xl flex flex-col gap-space-md">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed font-bold">
                  Company Snapshot
                </span>
                <h2 className="font-headline-sm text-headline-sm text-on-primary font-bold">
                  Memorandum &amp; Articles Anchored
                </h2>
                <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-primary-container/90">
                  <li>{CHARTER.entityType}</li>
                  <li>Articles adopt {CHARTER.tableC}</li>
                  <li>Member guarantee: {CHARTER.memberGuarantee}</li>
                  <li>Articles dated {CHARTER.articlesDate}</li>
                </ul>
                <p className="font-body-sm text-body-sm text-on-primary-container/80 pt-2 border-t border-on-primary/10">
                  {SITE.address}
                  <br />
                  {SITE.phone}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-primary-container text-on-primary-container py-space-lg">
        <div className="max-w-7xl mx-auto px-gutter grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          <div>
            <span className="font-label-sm text-label-sm uppercase font-bold tracking-wider text-secondary-fixed">
              Founding Subscribers
            </span>
            <p className="font-title-md text-title-md font-bold text-on-primary mt-1">
              {CHARTER.subscribers.map((s) => s.name).join(" · ")}
            </p>
          </div>
          <div>
            <span className="font-label-sm text-label-sm uppercase font-bold tracking-wider text-secondary-fixed">
              Witness
            </span>
            <p className="font-title-md text-title-md font-bold text-on-primary mt-1">
              {CHARTER.witness.name}, {CHARTER.witness.occupation} — {CHARTER.witness.address}
            </p>
          </div>
          <div>
            <span className="font-label-sm text-label-sm uppercase font-bold tracking-wider text-secondary-fixed">
              Registered Office
            </span>
            <p className="font-title-md text-title-md font-bold text-on-primary mt-1">
              Situated in {CHARTER.domicile}
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-space-xl bg-surface" id="objects">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="flex flex-col gap-2 max-w-2xl mb-space-xl">
            <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">
              Memorandum of Association
            </span>
            <h2 className="font-headline-xl text-headline-xl text-primary font-bold">
              The 8 Objects of the Company
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              The objects for which the company is established, as set out in the Memorandum of
              Association.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {CHARTER.objects.map((obj) => (
              <div
                key={obj.id}
                className="flex flex-col gap-space-sm bg-surface-container-lowest p-space-lg rounded-xl shadow-sm"
              >
                <span className="font-label-md text-label-md font-bold text-secondary tracking-widest">
                  OBJECT {String(obj.id).padStart(2, "0")}
                </span>
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
        <div className="max-w-7xl mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-space-xl">
          <div className="flex flex-col gap-space-md">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
              Articles of Association
            </span>
            <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
              Property Objects
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {CHARTER.propertyObjects.acquisition}
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              {CHARTER.propertyObjects.incidental}
            </p>
            <Link
              to="/about-legal-status"
              className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold"
            >
              About &amp; Governance
            </Link>
          </div>
          <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
            <h3 className="font-title-lg text-title-lg font-bold text-on-surface">Get in Touch</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              {SITE.address}
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant">{SITE.phone}</p>
            <p className="font-body-sm text-body-sm text-on-surface-variant">{SITE.email}</p>
            <div className="flex flex-wrap gap-space-sm pt-2">
              <Link
                to="/contact-give"
                className="px-4 py-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md font-semibold"
              >
                Contact
              </Link>
              <Link
                to="/vocational-programs"
                className="px-4 py-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md font-semibold"
              >
                Vocational Training
              </Link>
              <Link
                to="/outreach-healing"
                className="px-4 py-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md font-semibold"
              >
                Outreach
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
