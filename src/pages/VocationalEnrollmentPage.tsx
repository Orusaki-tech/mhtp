import { useState, type FormEvent } from "react"
import { Link } from "react-router-dom"
import { CHARTER } from "@/data/charter"
import { SITE } from "@/data/site"

export default function VocationalEnrollmentPage() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="flex flex-col w-full">
      <section className="w-full bg-surface-container-lowest px-gutter py-space-xl">
        <div className="max-w-3xl mx-auto flex flex-col gap-space-md w-full">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
            Object 4 • Vocational Training
          </span>
          <h1 className="font-headline-xl text-headline-xl font-bold text-on-surface tracking-tight">
            Express Interest in Vocational Training
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            {CHARTER.objects[3].body}
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Specific course lists, trade tracks, fees, and schedules are not published here until
            they are formally established under the company&apos;s objects. Use this form to register
            your interest.
          </p>
        </div>
      </section>

      <section className="w-full bg-surface px-gutter py-space-xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              Capacity Building
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {CHARTER.objects[2].body}
            </p>
            <div className="p-space-md bg-surface-container rounded-xl flex flex-col gap-1">
              <span className="font-label-sm text-label-sm uppercase text-secondary font-bold">
                Contact
              </span>
              <p className="font-body-sm text-body-sm text-on-surface">{SITE.address}</p>
              <p className="font-body-sm text-body-sm text-on-surface">{SITE.phone}</p>
              <p className="font-body-sm text-body-sm text-on-surface">{SITE.email}</p>
            </div>
            <Link
              to="/vocational-programs"
              className="font-label-md text-label-md font-semibold text-secondary"
            >
              ← Back to Vocational Training
            </Link>
          </div>

          <div className="lg:col-span-7 bg-surface-container-lowest p-space-lg rounded-xl shadow-md">
            {sent ? (
              <p className="p-space-md bg-secondary/20 rounded-lg text-body-sm font-body-sm text-on-surface">
                Thank you. Your interest has been recorded. We will follow up using the contact
                details you provided.
              </p>
            ) : (
              <form className="flex flex-col gap-space-md" onSubmit={handleSubmit}>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Interest Form</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md text-label-md font-semibold text-on-surface">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      className="px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md text-label-md font-semibold text-on-surface">
                      Phone *
                    </label>
                    <input
                      required
                      type="tel"
                      className="px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-md text-label-md font-semibold text-on-surface">
                    Email
                  </label>
                  <input
                    type="email"
                    className="px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-md text-label-md font-semibold text-on-surface">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm focus:outline-none"
                    placeholder="Share briefly why you are interested in vocational training or capacity building."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-primary text-on-primary rounded-lg font-label-md font-bold hover:bg-primary-container transition-colors"
                >
                  Submit Interest
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
