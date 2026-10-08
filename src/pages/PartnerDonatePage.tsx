import { useState, type FormEvent } from "react"
import { Link } from "react-router-dom"
import { PARTNERSHIP, PILLARS } from "@/data/ministry"
import { SITE } from "@/data/site"

const AREAS = [
  { id: "general", title: "General ministry support", body: PARTNERSHIP.body },
  ...PILLARS.map((p) => ({ id: p.id, title: p.title, body: p.short })),
] as const

export default function PartnerDonatePage() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="flex flex-col w-full">
      <section className="w-full bg-primary-container text-on-primary-container px-4 sm:px-gutter py-space-xl">
        <div className="max-w-3xl mx-auto flex flex-col gap-space-md w-full text-center md:text-left items-center md:items-start">
          <span className="uppercase tracking-widest text-secondary-fixed font-label-sm font-bold">
            Give
          </span>
          <h1 className="font-headline-xl text-headline-xl text-on-primary font-bold text-balance">
            {PARTNERSHIP.title}
          </h1>
          <p className="font-body-lg text-body-lg text-on-primary-container">{PARTNERSHIP.body}</p>
        </div>
      </section>

      <section className="w-full bg-surface px-4 sm:px-gutter py-space-xl">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
          <div className="text-center md:text-left mx-auto md:mx-0 max-w-2xl">
            <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
              Where support can go
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              Choose an area that matches how you feel led to give.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            {AREAS.map((area) => (
              <div
                key={area.id}
                className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm text-center md:text-left"
              >
                <h3 className="font-title-lg text-title-lg text-on-surface font-bold">{area.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{area.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-container-low px-4 sm:px-gutter py-space-xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
          <div className="lg:col-span-5 flex flex-col gap-space-md text-center lg:text-left items-center lg:items-start">
            <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
              Start a conversation
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Tell us how you would like to partner. We will follow up with next steps.
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant break-words">
              {SITE.phone} · {SITE.email}
            </p>
            <Link to="/about-legal-status" className="font-label-md font-semibold text-secondary">
              Learn about the ministry →
            </Link>
          </div>
          <div className="lg:col-span-7 bg-surface-container-lowest p-space-md sm:p-space-lg rounded-xl shadow-md">
            {sent ? (
              <p className="p-space-md bg-secondary/20 rounded-lg text-body-sm text-on-surface text-center">
                Thank you. We will follow up with partnership details.
              </p>
            ) : (
              <form className="flex flex-col gap-space-md" onSubmit={handleSubmit}>
                <h3 className="font-headline-sm text-headline-sm text-on-surface text-center lg:text-left">
                  Partnership inquiry
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md font-semibold text-on-surface">Full name *</label>
                    <input
                      required
                      type="text"
                      className="px-3.5 py-2.5 rounded-lg bg-surface-container-low font-body-sm focus:outline-none w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md font-semibold text-on-surface">
                      Email or phone *
                    </label>
                    <input
                      required
                      type="text"
                      className="px-3.5 py-2.5 rounded-lg bg-surface-container-low font-body-sm focus:outline-none w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-md font-semibold text-on-surface">Area of support</label>
                  <select className="px-3.5 py-2.5 rounded-lg bg-surface-container-low font-body-sm focus:outline-none w-full">
                    {AREAS.map((a) => (
                      <option key={a.id}>{a.title}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-md font-semibold text-on-surface">Message</label>
                  <textarea
                    rows={3}
                    className="px-3.5 py-2.5 rounded-lg bg-surface-container-low font-body-sm focus:outline-none w-full"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-primary text-on-primary rounded-lg font-label-md font-bold"
                >
                  Submit inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
