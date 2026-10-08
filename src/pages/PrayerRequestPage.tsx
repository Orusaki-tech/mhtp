import { useState, type FormEvent } from "react"
import { Link } from "react-router-dom"
import { PILLARS } from "@/data/ministry"
import { SITE } from "@/data/site"

export default function PrayerRequestPage() {
  const [sent, setSent] = useState(false)
  const healing = PILLARS.find((p) => p.id === "healing")!

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="flex flex-col w-full">
      <section className="w-full bg-surface-container-lowest px-gutter py-space-xl">
        <div className="max-w-3xl mx-auto flex flex-col gap-space-md w-full">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
            Healing &amp; deliverance
          </span>
          <h1 className="font-headline-xl text-headline-xl font-bold text-on-surface">
            Prayer request
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">{healing.body}</p>
        </div>
      </section>

      <section className="w-full bg-surface px-gutter py-space-xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              Pray with us
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Share what is on your heart — spiritual struggles, health concerns for prayer,
              household needs, or emotional burdens. Requests are handled in confidence.
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Prefer to call? {SITE.phonePrimary}
            </p>
            <Link to="/outreach-healing" className="font-label-md font-semibold text-secondary">
              Invite healing ministry to your area →
            </Link>
          </div>

          <div className="lg:col-span-7 bg-surface-container-lowest p-space-lg rounded-xl shadow-md">
            {sent ? (
              <p className="p-space-md bg-secondary/20 rounded-lg text-body-sm text-on-surface">
                Thank you. Your prayer request has been received in confidence.
              </p>
            ) : (
              <form className="flex flex-col gap-space-md" onSubmit={handleSubmit}>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Your petition</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md font-bold text-on-surface">Your name *</label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-2.5 rounded-lg bg-surface-container font-body-md focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md font-bold text-on-surface">Phone or email</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 rounded-lg bg-surface-container font-body-md focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-md font-bold text-on-surface">Focus *</label>
                  <select
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-surface-container font-body-md focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option>Spiritual liberation</option>
                    <option>Physical health</option>
                    <option>Financial breakthrough</option>
                    <option>Emotional healing</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-md font-bold text-on-surface">Prayer request *</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full p-4 rounded-lg bg-surface-container font-body-md focus:outline-none"
                    placeholder="Describe your petition in confidence..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-primary text-on-primary rounded-lg font-label-md font-bold"
                >
                  Submit prayer request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
