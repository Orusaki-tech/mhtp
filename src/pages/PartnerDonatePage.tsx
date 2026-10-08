import { useState, type FormEvent } from "react"
import { Link } from "react-router-dom"
import { CHARTER } from "@/data/charter"
import { SITE } from "@/data/site"

const DESIGNATIONS = [
  {
    id: "general",
    title: "Tithes, Offerings & Donations",
    body: CHARTER.objects[6].body,
  },
  {
    id: "vocational",
    title: "Vocational Training",
    body: CHARTER.objects[3].body,
  },
  {
    id: "healing",
    title: "Healing & Deliverance",
    body: CHARTER.objects[1].body,
  },
  {
    id: "outreach",
    title: "Evangelism & Outreach",
    body: CHARTER.objects[4].body,
  },
] as const

export default function PartnerDonatePage() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="flex flex-col w-full">
      <section className="w-full bg-primary-container text-on-primary-container px-gutter py-space-xl">
        <div className="max-w-3xl mx-auto flex flex-col gap-space-md w-full">
          <span className="uppercase tracking-widest text-secondary-fixed font-label-sm text-label-sm font-bold">
            Partnership
          </span>
          <h1 className="font-headline-xl text-headline-xl text-on-primary font-bold">
            Partner &amp; Donate
          </h1>
          <p className="font-body-lg text-body-lg text-on-primary-container">
            {CHARTER.objects[6].body}
          </p>
        </div>
      </section>

      <section className="w-full bg-surface px-gutter py-space-xl">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
          <div>
            <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
              Where Your Support Goes
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-2xl">
              Give toward the ministry offerings below.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            {DESIGNATIONS.map((d) => (
              <div
                key={d.id}
                className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm"
              >
                <h3 className="font-title-lg text-title-lg text-on-surface font-bold">{d.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-container-low px-gutter py-space-xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
              Why Give
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Your gifts sustain ministry operations, vocational programs, and charitable projects.
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Prefer to talk first? {SITE.phone} · {SITE.email}
            </p>
            <Link
              to="/about-legal-status"
              className="font-label-md text-label-md font-semibold text-secondary"
            >
              Learn more about us →
            </Link>
          </div>
          <div className="lg:col-span-7 bg-surface-container-lowest p-space-lg rounded-xl shadow-md">
            {sent ? (
              <p className="p-space-md bg-secondary/20 rounded-lg text-body-sm font-body-sm text-on-surface">
                Thank you for your partnership interest. We will follow up with giving instructions.
              </p>
            ) : (
              <form className="flex flex-col gap-space-md" onSubmit={handleSubmit}>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Partnership Inquiry
                </h3>
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
                      Email or Phone *
                    </label>
                    <input
                      required
                      type="text"
                      className="px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-md text-label-md font-semibold text-on-surface">
                    Area of Support
                  </label>
                  <select className="px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm focus:outline-none">
                    {DESIGNATIONS.map((d) => (
                      <option key={d.id}>{d.title}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-md text-label-md font-semibold text-on-surface">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    className="px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-primary text-on-primary rounded-lg font-label-md font-bold hover:bg-primary-container transition-colors"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
