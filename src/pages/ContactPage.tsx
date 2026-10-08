import { useState, type FormEvent } from "react"
import { Link } from "react-router-dom"
import { CHARTER } from "@/data/charter"
import { SITE } from "@/data/site"

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="flex flex-col w-full">
      <section className="w-full bg-primary-container text-on-primary-container px-gutter py-space-xl">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-md">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed font-bold">
            Contact
          </span>
          <h1 className="font-headline-xl text-headline-xl text-on-primary font-bold">
            Ministry Offices
          </h1>
          <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl">
            Reach {SITE.legalName} for inquiries related to our Memorandum objects, partnership,
            prayer, or vocational interest.
          </p>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-gutter py-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
          <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl shadow-xl p-space-lg sm:p-10 flex flex-col gap-space-md">
            <h2 className="font-headline-md text-headline-md text-on-surface">Send an Inquiry</h2>
            {sent ? (
              <p className="p-space-md bg-secondary/20 rounded-lg text-body-sm font-body-sm text-on-surface">
                Thank you. Your message has been received.
              </p>
            ) : (
              <form className="flex flex-col gap-space-md" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-md text-label-md font-bold text-on-surface">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface font-body-md focus:outline-none">
                    <option>General inquiry</option>
                    <option>Prayer / healing &amp; deliverance</option>
                    <option>Vocational training interest</option>
                    <option>Outreach invitation</option>
                    <option>Partnership / donations (Object 7)</option>
                    <option>Governance / Memorandum &amp; Articles</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-label-md font-bold text-on-surface">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface font-body-md focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-label-md font-bold text-on-surface">
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface font-body-md focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-md text-label-md font-bold text-on-surface">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface font-body-md focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-md text-label-md font-bold text-on-surface">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface font-body-md focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg bg-primary text-on-primary font-label-md font-bold hover:bg-primary-container transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <div className="bg-surface-container-lowest rounded-xl shadow-xl p-space-lg flex flex-col gap-space-sm">
              <h3 className="font-title-lg text-title-lg font-bold text-on-surface">Address</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{SITE.address}</p>
              <p className="font-body-md text-body-md text-on-surface-variant">{SITE.phone}</p>
              <p className="font-body-md text-body-md text-on-surface-variant">{SITE.email}</p>
            </div>

            <div className="bg-surface-container-lowest rounded-xl shadow-xl p-space-lg flex flex-col gap-space-sm">
              <h3 className="font-title-lg text-title-lg font-bold text-on-surface">
                Company Governance
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {CHARTER.entityType}. Articles adopt {CHARTER.tableC}. Member guarantee:{" "}
                {CHARTER.memberGuarantee}.
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Founding subscribers:{" "}
                {CHARTER.subscribers.map((s) => s.name).join("; ")}.
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Witness: {CHARTER.witness.name}, {CHARTER.witness.occupation},{" "}
                {CHARTER.witness.address}.
              </p>
              <Link
                to="/about-legal-status"
                className="font-label-md text-label-md font-semibold text-secondary pt-1"
              >
                Full About &amp; Governance →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
