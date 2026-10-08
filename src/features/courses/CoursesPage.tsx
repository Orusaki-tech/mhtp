import { Link } from "react-router-dom"
import { CHARTER } from "@/data/charter"
import { SITE } from "@/data/site"
import { Icon } from "@/components/ui/Icon"

/**
 * Placeholder for future online courses within charter objects.
 * No specific course catalog is published until formally established.
 */
export default function CoursesPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="w-full bg-primary-container text-on-primary-container px-gutter py-space-xl">
        <div className="max-w-3xl mx-auto flex flex-col gap-space-md w-full">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed font-bold">
            Coming Soon
          </span>
          <h1 className="font-headline-xl text-headline-xl text-on-primary font-bold">
            Online Courses &amp; Digital Learning
          </h1>
          <p className="font-body-lg text-body-lg text-on-primary-container/90">
            Online learning will support the company&apos;s objects — Christian faith, healing and
            deliverance ministry, vocational skills development, and theological discipleship —
            when courses are formally launched. No specific course list is published yet.
          </p>
        </div>
      </section>

      <section className="w-full px-gutter py-space-xl bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-space-md">
          {CHARTER.objects
            .filter((o) => [1, 2, 4, 6].includes(o.id))
            .map((obj) => (
              <article
                key={obj.id}
                className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-sm"
              >
                <div className="flex items-center justify-between">
                  <Icon name="menu_book" className="text-secondary text-[28px]" />
                  <span className="font-label-sm text-label-sm uppercase font-bold text-secondary">
                    Object {String(obj.id).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="font-title-lg text-title-lg font-bold text-on-surface">{obj.title}</h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{obj.body}</p>
              </article>
            ))}
        </div>
        <p className="max-w-7xl mx-auto mt-space-lg font-body-sm text-body-sm text-on-surface-variant">
          Questions: {SITE.email} · {SITE.phone}.{" "}
          <Link to="/contact-give" className="text-secondary font-semibold">
            Contact us
          </Link>
        </p>
      </section>
    </div>
  )
}
