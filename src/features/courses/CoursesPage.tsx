import { Link } from "react-router-dom"
import { Icon } from "@/components/ui/Icon"

/**
 * Placeholder catalog for upcoming online courses.
 * Wire to CMS/API + Stripe/Flutterwave checkout when ready.
 */
const COMING_COURSES = [
  {
    id: "discipleship-101",
    title: "Foundations of Christian Discipleship",
    level: "Beginner",
    format: "Self-paced + live prayer circles",
  },
  {
    id: "tailoring-fundamentals",
    title: "Tailoring Fundamentals (Digital Prep)",
    level: "Guild Prep",
    format: "Video modules + Kampala workshop intensives",
  },
  {
    id: "stewardship-leadership",
    title: "Non-Profit Stewardship & Leadership",
    level: "Intermediate",
    format: "Cohort-based online",
  },
] as const

export default function CoursesPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="w-full bg-primary-container text-on-primary-container px-gutter py-space-xl">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-md max-w-3xl">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed font-bold">
            Coming Soon
          </span>
          <h1 className="font-headline-xl text-headline-xl text-on-primary font-bold">
            Online Courses & Digital Learning
          </h1>
          <p className="font-body-lg text-body-lg text-on-primary-container/90">
            Faith formation, vocational prep, and leadership modules — built for Uganda and the
            diaspora. Payments and enrollment will launch on this React platform.
          </p>
        </div>
      </section>

      <section className="w-full px-gutter py-space-xl bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-space-md">
          {COMING_COURSES.map((course) => (
            <article
              key={course.id}
              className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-sm"
            >
              <div className="flex items-center justify-between">
                <Icon name="menu_book" className="text-secondary text-[28px]" />
                <span className="font-label-sm text-label-sm uppercase font-bold text-secondary">
                  {course.level}
                </span>
              </div>
              <h2 className="font-title-lg text-title-lg font-bold text-on-surface">{course.title}</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{course.format}</p>
              <Link
                to={`/checkout?course=${course.id}`}
                className="mt-auto pt-space-sm inline-flex items-center gap-1 font-label-md text-label-md font-bold text-secondary"
              >
                Notify me / Reserve
                <Icon name="arrow_forward" className="text-[16px]" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
