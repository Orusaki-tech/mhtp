import { useState, type FormEvent } from "react"
import { Link } from "react-router-dom"
import { PILLARS } from "@/data/ministry"

export default function OutreachPage() {
  const [sent, setSent] = useState(false)
  const outreach = PILLARS.find((p) => p.id === "outreach")!

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="flex flex-col w-full">
      <section className="w-full bg-primary-container text-on-primary py-space-xl px-4 sm:px-gutter">
        <div className="max-w-3xl mx-auto flex flex-col gap-space-md w-full text-center md:text-left items-center md:items-start">
          <span className="font-label-sm text-label-sm tracking-widest uppercase text-secondary-fixed font-bold">
            Outreach
          </span>
          <h1 className="font-headline-xl text-headline-xl text-on-primary leading-tight text-balance">
            Evangelism, conferences &amp; discipleship
          </h1>
          <p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed">
            {outreach.body}
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-space-sm w-full sm:w-auto">
            <a
              href="#invite"
              className="inline-flex justify-center px-6 py-3.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md font-bold"
            >
              Invite the ministry
            </a>
            <Link
              to="/prayer-request"
              className="inline-flex justify-center px-6 py-3.5 rounded-lg bg-surface-container-high/20 text-on-primary font-label-md font-semibold"
            >
              Prayer request
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface py-space-xl px-4 sm:px-gutter">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-space-md">
          {[
            {
              title: "Missions & crusades",
              text: "Gospel proclamation through missions, community outreaches, and crusades.",
            },
            {
              title: "Conferences & conventions",
              text: "Gatherings that strengthen faith, unity, and leadership across regions.",
            },
            {
              title: "Discipleship training",
              text: "Theological training for spiritual discipleship and servant leadership.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col gap-2 text-center md:text-left items-center md:items-start"
            >
              <h2 className="font-title-lg text-title-lg font-bold text-on-surface">{card.title}</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full bg-surface-container-low py-space-xl px-4 sm:px-gutter" id="invite">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
          <div className="lg:col-span-5 flex flex-col gap-space-md text-center lg:text-left items-center lg:items-start">
            <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
              Invite us
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Churches, fellowships, and community leaders can request a visit for worship,
              healing ministry, a crusade or conference, or discipleship training.
            </p>
          </div>
          <div className="lg:col-span-7 bg-surface-container-lowest p-space-md sm:p-space-lg rounded-xl shadow-md">
            {sent ? (
              <p className="p-space-md bg-secondary/20 rounded-lg text-body-sm text-on-surface text-center">
                Thank you. Your outreach request has been received.
              </p>
            ) : (
              <form className="flex flex-col gap-space-md" onSubmit={handleSubmit}>
                <h3 className="font-headline-sm text-headline-sm text-on-surface text-center lg:text-left">
                  Outreach request
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md font-semibold text-on-surface">Your name *</label>
                    <input
                      required
                      type="text"
                      className="px-3.5 py-2.5 rounded-lg bg-surface-container text-on-surface font-body-sm focus:outline-none w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md font-semibold text-on-surface">Phone *</label>
                    <input
                      required
                      type="tel"
                      className="px-3.5 py-2.5 rounded-lg bg-surface-container text-on-surface font-body-sm focus:outline-none w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-md font-semibold text-on-surface">Location *</label>
                  <input
                    required
                    type="text"
                    className="px-3.5 py-2.5 rounded-lg bg-surface-container text-on-surface font-body-sm focus:outline-none w-full"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-md font-semibold text-on-surface">
                    Type of gathering *
                  </label>
                  <select
                    required
                    className="px-3.5 py-2.5 rounded-lg bg-surface-container text-on-surface font-body-sm focus:outline-none w-full"
                  >
                    <option value="">Select</option>
                    <option>Worship / fellowship</option>
                    <option>Healing &amp; deliverance ministry</option>
                    <option>Mission / crusade</option>
                    <option>Conference / convention</option>
                    <option>Discipleship training</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-md font-semibold text-on-surface">Details</label>
                  <textarea
                    rows={3}
                    className="px-3.5 py-2.5 rounded-lg bg-surface-container text-on-surface font-body-sm focus:outline-none w-full"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-primary text-on-primary rounded-lg font-label-md font-bold"
                >
                  Submit request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
