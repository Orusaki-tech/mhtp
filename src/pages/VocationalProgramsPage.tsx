import { Link } from "react-router-dom"
import { Icon } from "@/components/ui/Icon"

const GUILDS = [
  {
    title: "Tailoring & Apparel",
    icon: "styler",
    blurb: "Pattern design, industrial stitch work, school uniform tenders, and entrepreneurial micro-boutiques.",
    track: "6-Month DIT Certified Track",
  },
  {
    title: "Carpentry & Timber",
    icon: "carpenter",
    blurb: "Furniture joinery, roofing timber trusses, domestic fixtures, and sustainable finishing techniques.",
    track: "Hands-on Workshop Apprenticeship",
  },
  {
    title: "Agronomy & Farming",
    icon: "agriculture",
    blurb: "Poultry husbandry, drip-irrigated horticulture, mushroom cultivation, and post-harvest preservation.",
    track: "Kampala & Peri-Urban Demonstration Plots",
  },
  {
    title: "Electrical & Solar",
    icon: "solar_power",
    blurb: "Domestic wiring, solar installation, circuit testing, and off-grid home lighting kits.",
    track: "DIT Level I/II",
  },
  {
    title: "Digital & Literacy",
    icon: "computer",
    blurb: "Business bookkeeping, mobile money merchant setup, basic computer skills, and digital records.",
    track: "Market Readiness Certification",
  },
] as const

export default function VocationalProgramsPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="w-full bg-surface-container-lowest px-gutter py-space-xl">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-md">
          <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">
            Object 4 • Vocational Training Mandate
          </span>
          <h1 className="font-headline-xl text-headline-xl text-on-surface font-bold max-w-3xl">
            Vocational Programs & Trade Guilds
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            Accredited apprenticeships that move participants from healing into dignified income —
            with master craftsmen, tool-kit graduation grants, and Christian character mentorship.
          </p>
          <div className="flex flex-wrap gap-space-sm pt-space-xs">
            <Link
              to="/vocational-enrollment"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-bold"
            >
              Apply for Enrollment
              <Icon name="arrow_forward" className="text-[18px]" />
            </Link>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md font-bold"
            >
              Explore Online Courses
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface px-gutter py-space-xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {GUILDS.map((guild) => (
            <div
              key={guild.title}
              className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
                <Icon name={guild.icon} className="text-[22px]" />
              </div>
              <h2 className="font-title-lg text-title-lg font-bold text-on-surface">{guild.title}</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{guild.blurb}</p>
              <span className="font-label-sm text-label-sm text-secondary font-semibold mt-auto">
                {guild.track}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
