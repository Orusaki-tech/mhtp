import { useState, type FormEvent } from "react"
import { Link } from "react-router-dom"
import { SITE } from "@/data/site"

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="flex flex-col w-full">
      <section className="w-full bg-primary-container text-on-primary-container px-4 sm:px-gutter py-space-xl">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-md text-center md:text-left items-center md:items-start">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed font-bold">
            Contact
          </span>
          <h1 className="font-headline-xl text-headline-xl text-on-primary font-bold text-balance">
            Get in Touch
          </h1>
          <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl">
            Reach {SITE.name} for prayer, outreach invitations, vocational interest, or
            partnership.
          </p>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 sm:px-gutter py-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
          <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl shadow-xl p-space-md sm:p-10 flex flex-col gap-space-md order-2 lg:order-1">
            <h2 className="font-headline-md text-headline-md text-on-surface text-center lg:text-left">
              Send a Message
            </h2>
            {sent ? (
              <p className="p-space-md bg-secondary/20 rounded-lg text-body-sm font-body-sm text-on-surface text-center">
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
                    <option>Vocational training</option>
                    <option>Outreach invitation</option>
                    <option>Partnership / donations</option>
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

          <div className="lg:col-span-5 flex flex-col gap-space-md order-1 lg:order-2">
            <div className="bg-surface-container-lowest rounded-xl shadow-xl p-space-lg flex flex-col gap-space-sm text-center lg:text-left items-center lg:items-start">
              <h3 className="font-title-lg text-title-lg font-bold text-on-surface">Contact</h3>
              <p className="font-body-md text-body-md text-on-surface-variant break-words">
                {SITE.address}
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant break-words">
                {SITE.phone}
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant break-all">
                {SITE.email}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap gap-space-sm justify-center lg:justify-start">
              <Link
                to="/prayer-request"
                className="px-4 py-2 rounded-lg bg-surface-container text-on-surface font-label-md font-semibold text-center"
              >
                Prayer Request
              </Link>
              <Link
                to="/partner-donate"
                className="px-4 py-2 rounded-lg bg-surface-container text-on-surface font-label-md font-semibold text-center"
              >
                Partner / Donate
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
