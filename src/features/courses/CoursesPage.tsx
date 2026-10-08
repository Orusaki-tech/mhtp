import { Link } from "react-router-dom"
import { PILLARS } from "@/data/ministry"
import { SITE } from "@/data/site"
import { Icon } from "@/components/ui/Icon"

export default function CoursesPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="w-full bg-primary-container text-on-primary-container px-4 sm:px-gutter py-space-xl">
        <div className="max-w-3xl mx-auto flex flex-col gap-space-md w-full text-center md:text-left items-center md:items-start">
          <span className="font-label-sm uppercase tracking-wider text-secondary-fixed font-bold">
            Coming soon
          </span>
          <h1 className="font-headline-xl text-headline-xl text-on-primary font-bold text-balance">
            Online courses
          </h1>
          <p className="font-body-lg text-body-lg text-on-primary-container/90">
            Digital learning will support faith, healing ministry, skills training, and discipleship
            when courses launch. No catalog is live yet.
          </p>
        </div>
      </section>

      <section className="w-full px-4 sm:px-gutter py-space-xl bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-space-md">
          {PILLARS.map((pillar) => (
            <article
              key={pillar.id}
              className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-sm text-center md:text-left items-center md:items-start"
            >
              <Icon name="menu_book" className="text-secondary text-[28px]" />
              <h2 className="font-title-lg font-bold text-on-surface">{pillar.title}</h2>
              <p className="font-body-sm text-on-surface-variant">{pillar.short}</p>
            </article>
          ))}
        </div>
        <p className="max-w-7xl mx-auto mt-space-lg font-body-sm text-on-surface-variant text-center md:text-left break-words">
          {SITE.email} · {SITE.phone}.{" "}
          <Link to="/contact-give" className="text-secondary font-semibold">
            Contact us
          </Link>
        </p>
      </section>
    </div>
  )
}
