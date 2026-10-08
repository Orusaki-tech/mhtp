import { Link } from "react-router-dom"
import { PILLARS } from "@/data/ministry"

export default function PillarsPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="w-full bg-surface-container-lowest px-gutter py-space-xl">
        <div className="max-w-3xl mx-auto flex flex-col gap-space-md w-full">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">
            Ministry
          </span>
          <h1 className="font-headline-xl text-headline-xl text-on-surface font-bold">
            Our ministry pillars
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Four areas of work — each with a clear next step if you want prayer, training, or an
            outreach invitation.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-gutter py-12 lg:py-16 w-full flex flex-col gap-space-xl">
        {PILLARS.map((pillar) => (
          <article
            key={pillar.id}
            id={pillar.id}
            className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-space-md lg:gap-space-xl items-start border-b border-surface-container-high pb-space-xl last:border-0"
          >
            <div className="lg:col-span-4">
              <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                {pillar.title}
              </h2>
            </div>
            <div className="lg:col-span-8 flex flex-col gap-space-md">
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                {pillar.body}
              </p>
              <Link
                to={pillar.href.startsWith("/pillars") ? "/about-legal-status" : pillar.href}
                className="self-start font-label-md text-label-md font-semibold text-secondary"
              >
                {pillar.id === "faith" && "About the ministry →"}
                {pillar.id === "healing" && "Submit a prayer request →"}
                {pillar.id === "training" && "Explore training →"}
                {pillar.id === "outreach" && "Request outreach →"}
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}
