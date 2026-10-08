import { useState, type FormEvent } from "react"
import { Link } from "react-router-dom"
import { CHARTER } from "@/data/charter"

export default function OutreachPage() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  const relevant = CHARTER.objects.filter((o) => [1, 2, 5, 6, 8].includes(o.id))

  return (
    <div className="flex flex-col w-full">
      <section className="relative w-full bg-primary-container text-on-primary py-space-xl px-gutter overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col gap-space-md">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/20 text-secondary-fixed w-max text-label-sm font-label-sm tracking-widest uppercase">
              Outreach
            </div>
            <h1 className="font-headline-xl text-headline-xl text-on-primary leading-tight">
              Outreach, Evangelism &amp; Healing Ministry
            </h1>
            <p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed">
              We preach and teach the Christian faith; minister holistic healing and deliverance;
              conduct evangelical missions, community outreaches, crusades, conferences, and
              conventions; offer theological discipleship; and collaborate with ministries that
              share similar aims.
            </p>
            <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
              <a
                href="#outreach-form"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold shadow-md"
              >
                Request Outreach
              </a>
              <Link
                to="/prayer-request"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-surface-container-high/20 text-on-primary font-label-md text-label-md font-semibold"
              >
                Prayer Request
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface py-space-xl px-gutter">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
              Related Offerings
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface">
              How We Serve
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            {relevant.map((obj) => (
              <div
                key={obj.id}
                className="bg-surface-container-lowest rounded-xl shadow-md p-space-lg flex flex-col gap-space-sm"
              >
                <h3 className="font-headline-sm text-headline-sm text-on-surface">{obj.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {obj.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-container-low py-space-xl px-gutter" id="outreach-form">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <h2 className="font-headline-xl text-headline-xl text-on-surface leading-tight">
              Invite the Ministry
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Churches, fellowships, and community leaders may invite the company for activities
              within its objects: worship and fellowship, healing and deliverance ministry,
              evangelical missions, crusades, conferences, conventions, or theological training.
            </p>
          </div>
          <div className="lg:col-span-7 bg-surface-container-lowest p-space-lg rounded-xl shadow-md">
            {sent ? (
              <p className="p-space-md bg-secondary/20 rounded-lg text-body-sm font-body-sm text-on-surface">
                Thank you. Your outreach request has been received.
              </p>
            ) : (
              <form className="flex flex-col gap-space-md" onSubmit={handleSubmit}>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-sm">
                  Outreach Request
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md text-label-md text-on-surface font-semibold">
                      Your Name *
                    </label>
                    <input
                      required
                      type="text"
                      className="px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md text-label-md text-on-surface font-semibold">
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
                  <label className="font-label-md text-label-md text-on-surface font-semibold">
                    Location *
                  </label>
                  <input
                    required
                    type="text"
                    className="px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-md text-label-md text-on-surface font-semibold">
                    Type of Gathering *
                  </label>
                  <select
                    required
                    className="px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option>Places of worship / fellowship</option>
                    <option>Healing &amp; deliverance ministry</option>
                    <option>Evangelical mission / crusade</option>
                    <option>Conference / convention</option>
                    <option>Theological / discipleship training</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-md text-label-md text-on-surface font-semibold">
                    Brief Description
                  </label>
                  <textarea
                    rows={3}
                    className="px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-primary text-on-primary rounded-lg font-label-md font-bold hover:bg-primary-container transition-colors shadow-md"
                >
                  Submit Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
