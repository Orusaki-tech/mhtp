import { useState, type FormEvent } from "react"
import { Link } from "react-router-dom"
import { PILLARS } from "@/data/ministry"
import { SITE } from "@/data/site"

export default function VocationalProgramsPage() {
  const [sent, setSent] = useState(false)
  const training = PILLARS.find((p) => p.id === "training")!

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="flex flex-col w-full">
      <section className="w-full bg-surface-container-lowest px-4 sm:px-gutter py-space-xl">
        <div className="max-w-3xl mx-auto flex flex-col gap-space-md w-full text-center md:text-left items-center md:items-start">
          <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">
            Training
          </span>
          <h1 className="font-headline-xl text-headline-xl text-on-surface font-bold text-balance">
            Skills &amp; independence
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">{training.body}</p>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Specific trade tracks will be published as programmes open. For now, register your
            interest and we will follow up.
          </p>
        </div>
      </section>

      <section className="w-full bg-surface px-4 sm:px-gutter py-space-xl" id="interest">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
          <div className="lg:col-span-5 flex flex-col gap-space-md text-center lg:text-left items-center lg:items-start">
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              Why training matters
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Healing opens a door; skills help people walk through it. We pair deliverance ministry
              with capacity building so families can build sustainable livelihoods.
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Questions? {SITE.phone}
            </p>
            <Link to="/outreach-healing" className="font-label-md font-semibold text-secondary">
              Also interested in outreach? →
            </Link>
          </div>

          <div className="lg:col-span-7 bg-surface-container-lowest p-space-md sm:p-space-lg rounded-xl shadow-md">
            {sent ? (
              <p className="p-space-md bg-secondary/20 rounded-lg text-body-sm text-on-surface text-center">
                Thank you. We have recorded your interest and will be in touch.
              </p>
            ) : (
              <form className="flex flex-col gap-space-md" onSubmit={handleSubmit}>
                <h3 className="font-headline-sm text-headline-sm text-on-surface text-center lg:text-left">
                  Express interest
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md font-semibold text-on-surface">Full name *</label>
                    <input
                      required
                      type="text"
                      className="px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm focus:outline-none w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md font-semibold text-on-surface">Phone *</label>
                    <input
                      required
                      type="tel"
                      className="px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm focus:outline-none w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-md font-semibold text-on-surface">Email</label>
                  <input
                    type="email"
                    className="px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm focus:outline-none w-full"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-md font-semibold text-on-surface">Message</label>
                  <textarea
                    rows={4}
                    className="px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm focus:outline-none w-full"
                    placeholder="Tell us briefly about your interest in vocational training or capacity building."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-primary text-on-primary rounded-lg font-label-md font-bold hover:bg-primary-container transition-colors"
                >
                  Submit interest
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
