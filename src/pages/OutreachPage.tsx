import { type FormEvent } from 'react'
import { Link } from 'react-router-dom'

export default function OutreachPage() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <div className="flex flex-col w-full">
      {/* Breadcrumbs & Official Registry Notice */}
      <section className="w-full bg-surface-container-low py-space-sm px-gutter">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-space-xs text-label-sm font-label-sm text-on-surface-variant">
      <div className="flex items-center gap-2">
      <Link className="hover:text-on-surface transition-colors" to="/">Portal Registry</Link>
      <span className="text-outline">/</span>
      <span className="text-on-surface">Field Outreaches &amp; Restorative Missions</span>
      <span className="text-outline">/</span>
      <span className="text-secondary font-semibold">Regional Impact</span>
      </div>
      <div className="flex items-center gap-space-xs text-[11px] bg-surface-container px-2.5 py-1 rounded-DEFAULT text-on-surface">
      <span className="material-symbols-outlined text-secondary text-[14px]">gavel</span>
      <span>Memorandum of Association Clause 3 (Objects 2 &amp; 5) Statutory Directive</span>
      </div>
      </div>
      </section>
      {/* Hero Section */}
      <section className="relative w-full bg-primary-container text-on-primary py-space-xl px-gutter overflow-hidden">
      <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-secondary-fixed/5 blur-3xl pointer-events-none"></div>
      <div className="absolute left-1/3 -bottom-20 w-80 h-80 rounded-full bg-surface-tint/10 blur-2xl pointer-events-none"></div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center relative z-10">
      <div className="lg:col-span-7 flex flex-col gap-space-md">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/20 text-secondary-fixed w-max text-label-sm font-label-sm tracking-widest uppercase">
      <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></span>
                Evangelism &amp; Holistic Deliverance Directorate
              </div>
      <h1 className="font-headline-xl text-headline-xl text-on-primary leading-tight">
                Holistic Healing, Mobile Clinics &amp; Evangelical Outreaches
              </h1>
      <p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed">
                Bringing restorative healthcare, trauma counseling, compassionate deliverance, and Gospel crusades across Kampala, Wakiso, Mukono, and rural districts of Uganda.
              </p>
      <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
      <a className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold shadow-md hover:brightness-105 transition-all" href="#outreach-form">
      <span className="material-symbols-outlined text-[18px]">add_location_alt</span>
                  Request Outreach in Your District
                </a>
      <a className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-surface-container-high/20 hover:bg-surface-container-high/30 text-on-primary font-label-md text-label-md font-semibold transition-all" href="#mission-schedule">
      <span className="material-symbols-outlined text-[18px]">event_note</span>
                  View Mission Schedule
                </a>
      </div>
      </div>
      {/* Live Mission Snapshot Panel */}
      <div className="lg:col-span-5 bg-surface-container-lowest/10 backdrop-blur-md p-space-lg rounded-xl text-on-primary flex flex-col gap-space-md shadow-xl">
      <div className="flex items-center justify-between">
      <span className="font-label-sm text-label-sm text-secondary-fixed tracking-wider uppercase font-bold">Field Deployment Audits</span>
      <span className="px-2 py-0.5 rounded-DEFAULT bg-secondary-fixed/20 text-secondary-fixed text-[10px] font-semibold">Q1-Q2 2025</span>
      </div>
      <div className="grid grid-cols-2 gap-space-md">
      <div className="bg-surface-container-lowest/5 p-space-md rounded-lg flex flex-col">
      <span className="font-display-lg text-headline-xl text-secondary-fixed font-bold leading-none">18+</span>
      <span className="font-body-sm text-body-sm text-on-primary-container mt-1">Free Medical Camps Conducted</span>
      </div>
      <div className="bg-surface-container-lowest/5 p-space-md rounded-lg flex flex-col">
      <span className="font-display-lg text-headline-xl text-on-primary font-bold leading-none">3,400+</span>
      <span className="font-body-sm text-body-sm text-on-primary-container mt-1">Patients Screened &amp; Treated</span>
      </div>
      <div className="bg-surface-container-lowest/5 p-space-md rounded-lg flex flex-col">
      <span className="font-display-lg text-headline-xl text-on-primary font-bold leading-none">12</span>
      <span className="font-body-sm text-body-sm text-on-primary-container mt-1">Regional Crusades Mobilized</span>
      </div>
      <div className="bg-surface-container-lowest/5 p-space-md rounded-lg flex flex-col">
      <span className="font-display-lg text-headline-xl text-secondary-fixed font-bold leading-none">100%</span>
      <span className="font-body-sm text-body-sm text-on-primary-container mt-1">Free Unrestricted Access to Care</span>
      </div>
      </div>
      <div className="bg-primary/40 p-space-sm rounded-lg flex items-center gap-3 text-body-sm font-body-sm text-on-primary-container">
      <span className="material-symbols-outlined text-secondary-fixed text-[20px]">verified</span>
      <span>Regulated under URSB non-profit mandate with volunteer medical officers.</span>
      </div>
      </div>
      </div>
      </section>
      {/* The 4 Dimensions of Restorative Healing (Memorandum Clause 3 Object 2) */}
      <section className="w-full bg-surface-container py-space-xl px-gutter">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
      <div className="max-w-2xl flex flex-col gap-space-xs">
      <div className="flex items-center gap-2 text-label-sm font-label-sm text-secondary font-bold uppercase tracking-wider">
      <span className="material-symbols-outlined text-[16px]">health_and_safety</span>
                  Statutory Mandate: Clause 3, Object 2
                </div>
      <h2 className="font-headline-xl text-headline-xl text-on-surface">The 4 Dimensions of Restorative Healing</h2>
      <p className="font-body-md text-body-md text-on-surface-variant">
                  Our founding charter rejects fragmented welfare. We minister, facilitate, and manifest complete transformation targeting root afflictions through four balanced theological and clinical pillars.
                </p>
      </div>
      <div className="text-right hidden md:block">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Protocol Standard</span>
      <p className="font-title-md text-title-md text-on-surface font-semibold">Integrative Compassion Model</p>
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
      {/* Pillar 1 */}
      <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md relative overflow-hidden group hover:shadow-md transition-shadow">
      <div className="w-12 h-12 rounded-xl bg-secondary-fixed/30 text-on-secondary-fixed flex items-center justify-center">
      <span className="material-symbols-outlined text-[26px]">wb_twilight</span>
      </div>
      <div className="flex flex-col gap-1">
      <span className="text-label-sm font-label-sm uppercase tracking-wider text-secondary font-bold">Dimension 01</span>
      <h3 className="font-title-lg text-title-lg font-bold text-on-surface">Spiritual Liberation</h3>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Deliverance prayer, breaking generational bondages, and intercession vigils rooted in Biblical truth. Facilitating peace from recurring spiritual distress.
                </p>
      <ul className="flex flex-col gap-1 text-label-sm font-label-sm text-on-surface mt-auto">
      <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Confidential deliverance ministering</li>
      <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Night vigil intercessory teams</li>
      </ul>
      </div>
      {/* Pillar 2 */}
      <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md relative overflow-hidden group hover:shadow-md transition-shadow">
      <div className="w-12 h-12 rounded-xl bg-primary-container text-secondary-fixed flex items-center justify-center">
      <span className="material-symbols-outlined text-[26px]">medical_services</span>
      </div>
      <div className="flex flex-col gap-1">
      <span className="text-label-sm font-label-sm uppercase tracking-wider text-secondary font-bold">Dimension 02</span>
      <h3 className="font-title-lg text-title-lg font-bold text-on-surface">Physical &amp; Restorative Wellness</h3>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Dispensing free essential medicine, pediatric screenings, primary triage clinics, maternal vitamins, and structured referrals to the Mulago National Referral network.
                </p>
      <ul className="flex flex-col gap-1 text-label-sm font-label-sm text-on-surface mt-auto">
      <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Uganda Medical Council licensed RNs</li>
      <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Free point-of-care rapid diagnostics</li>
      </ul>
      </div>
      {/* Pillar 3 */}
      <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md relative overflow-hidden group hover:shadow-md transition-shadow">
      <div className="w-12 h-12 rounded-xl bg-secondary-fixed/30 text-on-secondary-fixed flex items-center justify-center">
      <span className="material-symbols-outlined text-[26px]">psychology</span>
      </div>
      <div className="flex flex-col gap-1">
      <span className="text-label-sm font-label-sm uppercase tracking-wider text-secondary font-bold">Dimension 03</span>
      <h3 className="font-title-lg text-title-lg font-bold text-on-surface">Emotional &amp; Mental Health</h3>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Confidential trauma processing, post-conflict reconciliation circles, grief recovery, and community psychosocial support to alleviate severe clinical depression.
                </p>
      <ul className="flex flex-col gap-1 text-label-sm font-label-sm text-on-surface mt-auto">
      <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Trained pastoral counselors</li>
      <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Safe peer-led debriefing cohorts</li>
      </ul>
      </div>
      {/* Pillar 4 */}
      <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md relative overflow-hidden group hover:shadow-md transition-shadow">
      <div className="w-12 h-12 rounded-xl bg-primary-container text-secondary-fixed flex items-center justify-center">
      <span className="material-symbols-outlined text-[26px]">handshake</span>
      </div>
      <div className="flex flex-col gap-1">
      <span className="text-label-sm font-label-sm uppercase tracking-wider text-secondary font-bold">Dimension 04</span>
      <h3 className="font-title-lg text-title-lg font-bold text-on-surface">Socio-Economic &amp; Family Dignity</h3>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Direct transition support: emergency food aid, seed capital kits for vulnerable widows, sanitation basins, and reintegration counsel for fractured households.
                </p>
      <ul className="flex flex-col gap-1 text-label-sm font-label-sm text-on-surface mt-auto">
      <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Direct link to Vocational Guilds</li>
      <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Relief hampers for destitute elders</li>
      </ul>
      </div>
      </div>
      </div>
      </section>
      {/* Interactive Mission Expeditions Section */}
      <section className="w-full bg-surface py-space-xl px-gutter" id="mission-schedule">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md">
      <div>
      <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Clause 3 Object 5 Action Stream</span>
      <h2 className="font-headline-xl text-headline-xl text-on-surface">Active &amp; Upcoming Mission Expeditions</h2>
      <p className="font-body-md text-body-md text-on-surface-variant">Mobilizing regional crusades, triage teams, and relief convoys into underserved parishes.</p>
      </div>
      {/* Interactive Filter Tabs */}
      <div className="flex flex-wrap gap-1 p-1 bg-surface-container-high rounded-lg max-w-full" id="mission-filter-container">
      <button className="mission-filter-btn px-3 py-1.5 rounded-DEFAULT font-label-md text-label-md font-semibold bg-surface-container-lowest text-on-surface shadow-sm" data-category="all" type="button">
                  All Outreaches
                </button>
      <button className="mission-filter-btn px-3 py-1.5 rounded-DEFAULT font-label-md text-label-md font-semibold text-on-surface-variant hover:text-on-surface" data-category="medical" type="button">
                  Mobile Medical &amp; Triage Camps
                </button>
      <button className="mission-filter-btn px-3 py-1.5 rounded-DEFAULT font-label-md text-label-md font-semibold text-on-surface-variant hover:text-on-surface" data-category="crusade" type="button">
                  Open-Air Crusades &amp; Deliverance
                </button>
      <button className="mission-filter-btn px-3 py-1.5 rounded-DEFAULT font-label-md text-label-md font-semibold text-on-surface-variant hover:text-on-surface" data-category="compassion" type="button">
                  Slum &amp; Prison Compassion Visits
                </button>
      </div>
      </div>
      {/* Missions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg" id="missions-grid">
      {/* Mission 1 */}
      <div className="mission-card bg-surface-container-lowest rounded-xl shadow-md overflow-hidden flex flex-col" data-type="medical">
      <div className="h-56 relative overflow-hidden">
      <img className="w-full h-full object-cover" data-alt="Volunteer medical team in Kampala Kawempe checking maternal health and blood pressure with compassionate local mothers under a white canopy tent in Uganda" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNw3Sex6mKYp04u-PaI1Y2xOdpxik9ivxi7V0_nMojf8xwnEXwovdxGOmTDpazIP8OzNfO7XYfRLGYNS16SROEXvWKa83lB_PxwRszIYzSeSZv7Y--NFg4DcgRXwwAoq2d_uKNLV6fkLhGgD2Y1V4-bABK4ozdRyW5D0qnjMoriM5v9bmuypvaEvf2WaKDueG2VnvKtbI-bO_-Xh_SQLZOM_DedUJii4hivTJnw6gN"/>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-on-primary">
      <span className="px-2 py-0.5 rounded-DEFAULT bg-secondary-fixed text-on-secondary-fixed text-label-sm font-label-sm font-bold uppercase">Confirmed Mission</span>
      <span className="text-label-sm font-label-sm flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">calendar_today</span> 14 – 16 April 2025</span>
      </div>
      </div>
      <div className="p-space-lg flex flex-col flex-1 gap-space-sm">
      <div className="flex items-center gap-2 text-label-sm font-label-sm text-secondary font-bold">
      <span className="material-symbols-outlined text-[16px]">location_on</span>
                    Kampala Peri-Urban • Kawempe / Bwaise Zone
                  </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface">Kampala Peri-Urban Medical &amp; Maternal Health Camp</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Targeting vulnerable mothers, elderly residents, and youth in flood-prone informal settlements. Free malaria diagnostic test kits (RDTs), maternal multivitamins, pediatric deworming, and intentional intercessory deliverance sessions.
                  </p>
      <div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-1 text-body-sm font-body-sm">
      <div className="flex justify-between"><strong className="text-on-surface">Target Reach:</strong> <span className="text-on-surface-variant">1,200 Persons</span></div>
      <div className="flex justify-between"><strong className="text-on-surface">Supervising Officer:</strong> <span className="text-on-surface-variant">Dr. J. Semwanga &amp; Pastor Ruth N.</span></div>
      <div className="flex justify-between"><strong className="text-on-surface">Key Services:</strong> <span className="text-on-surface-variant">Triage, Antenatal care, Deliverance</span></div>
      </div>
      <div className="pt-space-xs mt-auto flex items-center justify-between">
      <button className="px-4 py-2 bg-primary text-on-primary rounded-lg text-label-md font-label-md font-semibold hover:bg-primary-container transition-colors" type="button">
                      Volunteer / Partner
                    </button>
      <span className="text-label-sm font-label-sm text-secondary font-semibold">LC1 Kawempe Cleared</span>
      </div>
      </div>
      </div>
      {/* Mission 2 */}
      <div className="mission-card bg-surface-container-lowest rounded-xl shadow-md overflow-hidden flex flex-col" data-type="crusade">
      <div className="h-56 relative overflow-hidden">
      <img className="w-full h-full object-cover" data-alt="Vibrant open-air Christian revival crusade in Jinja Uganda with hands raised in worship at golden sunset under open skies with banner of World Healing Trinity Place" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSpA6xjAfLDoNiT0ZTMWW5QPhwgY50L0duXsLPURKlk4j28xOlv0vCiLIUI0ZAVD2VkBtydRKTqfftJVhmdWiKXL4xNAaal1pW8AAtlcwC-IjTZYlvcJd0O3qJBlpNTRAUdOKzO4LmIXnFjQuhbn_LWCIK-OF3Y1XvPV9HRVMotCr3LH6Ca8Hv461PEmbJAtruRVHofI0gI3D6Wan4_WQpZB4i3XEA11mX-dCYKj22"/>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-on-primary">
      <span className="px-2 py-0.5 rounded-DEFAULT bg-secondary-fixed text-on-secondary-fixed text-label-sm font-label-sm font-bold uppercase">Mobilizing</span>
      <span className="text-label-sm font-label-sm flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">calendar_today</span> 02 – 04 May 2025</span>
      </div>
      </div>
      <div className="p-space-lg flex flex-col flex-1 gap-space-sm">
      <div className="flex items-center gap-2 text-label-sm font-label-sm text-secondary font-bold">
      <span className="material-symbols-outlined text-[16px]">location_on</span>
                    Eastern Uganda • Jinja / Iganga Corridor
                  </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface">Eastern Uganda Revival &amp; Trade Crusade</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    3-day mass evangelical gathering centered on salvation and deep spiritual deliverance. Combined with practical afternoon vocational workshops and 150 starter trade kits awarded to impoverished single mothers and widows.
                  </p>
      <div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-1 text-body-sm font-body-sm">
      <div className="flex justify-between"><strong className="text-on-surface">Target Reach:</strong> <span className="text-on-surface-variant">4,500+ Congregants</span></div>
      <div className="flex justify-between"><strong className="text-on-surface">Supervising Officer:</strong> <span className="text-on-surface-variant">Evangelist Moses O. &amp; Pastoral Board</span></div>
      <div className="flex justify-between"><strong className="text-on-surface">Key Services:</strong> <span className="text-on-surface-variant">Deliverance Vigils, Trade Tool Kits</span></div>
      </div>
      <div className="pt-space-xs mt-auto flex items-center justify-between">
      <button className="px-4 py-2 bg-primary text-on-primary rounded-lg text-label-md font-label-md font-semibold hover:bg-primary-container transition-colors" type="button">
                      Volunteer / Partner
                    </button>
      <span className="text-label-sm font-label-sm text-secondary font-semibold">Busoga Sub-Region</span>
      </div>
      </div>
      </div>
      {/* Mission 3 */}
      <div className="mission-card bg-surface-container-lowest rounded-xl shadow-md overflow-hidden flex flex-col" data-type="medical">
      <div className="h-56 relative overflow-hidden">
      <img className="w-full h-full object-cover" data-alt="Community mental health counseling session in rural Mukono Uganda with elders seated under acacia tree listening attentively in circular trauma processing format" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOYsCb_u9DlRYNYY3JDPX2vcKMmdbA6Yt8yK3u2nmxMkeoWwQ21NdK09aNTG_4yzap9PbQs5eYMJa0JTl3lee3EmQPk1R4LmJ_xSN0hYWqtuxyN-kL12pQISKZdqGd4qo7iBlVn_PapMZ6lSk74s3CqTsSjg7wjFN94mmktDs_a4pZUkdEZYUdtRYqfZyS9G0c46UqP4KClvZqK9Xdty1Wy6WJl54lqXOxCwqv8cw1"/>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-on-primary">
      <span className="px-2 py-0.5 rounded-DEFAULT bg-secondary-fixed text-on-secondary-fixed text-label-sm font-label-sm font-bold uppercase">Scheduled</span>
      <span className="text-label-sm font-label-sm flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">calendar_today</span> 22 – 23 May 2025</span>
      </div>
      </div>
      <div className="p-space-lg flex flex-col flex-1 gap-space-sm">
      <div className="flex items-center gap-2 text-label-sm font-label-sm text-secondary font-bold">
      <span className="material-symbols-outlined text-[16px]">location_on</span>
                    Greater Mukono • Kyampisi Sub-County
                  </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface">Mukono Sanitation &amp; Mental Health Clinic</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Targeted trauma recovery circles addressing rural suicide ideation, family violence, and chronic grief. Accompanied by massive intestinal deworming for 800 school pupils and provision of food-grade safe water storage tanks.
                  </p>
      <div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-1 text-body-sm font-body-sm">
      <div className="flex justify-between"><strong className="text-on-surface">Target Reach:</strong> <span className="text-on-surface-variant">1,800 Villagers</span></div>
      <div className="flex justify-between"><strong className="text-on-surface">Supervising Officer:</strong> <span className="text-on-surface-variant">Grace K. (Clinical Psych) &amp; Outreach Nurse</span></div>
      <div className="flex justify-between"><strong className="text-on-surface">Key Services:</strong> <span className="text-on-surface-variant">Trauma Circles, Deworming, Water Filters</span></div>
      </div>
      <div className="pt-space-xs mt-auto flex items-center justify-between">
      <button className="px-4 py-2 bg-primary text-on-primary rounded-lg text-label-md font-label-md font-semibold hover:bg-primary-container transition-colors" type="button">
                      Volunteer / Partner
                    </button>
      <span className="text-label-sm font-label-sm text-secondary font-semibold">Water Hygiene Integrated</span>
      </div>
      </div>
      </div>
      {/* Mission 4 */}
      <div className="mission-card bg-surface-container-lowest rounded-xl shadow-md overflow-hidden flex flex-col" data-type="compassion">
      <div className="h-56 relative overflow-hidden">
      <img className="w-full h-full object-cover" data-alt="Relief food bags and textile distributions in dry northern Uganda semi-arid plain with community leaders receiving emergency cornflour and clothing packages" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd-qGRnJKuw2f0M0jdhdypLkBQJrHHPddqYCyaH47XoEZMkCZeAGthIRMGsAdtzYX602th6qH36QJKD8NOB8qKgu6ct_QSaILhOmE5VpA1lF1wdxyz8LxwE3JpWC8FFk19eHvNZfdgBxIEJ6z5dfm8_nyvPr4P3pHmYw9SlMxeHjP46cBVhR36waKHvPUItHA9VNbKgVNjwR2qIBQIYR30YFNShvCjtlNkMuJmysnG"/>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-on-primary">
      <span className="px-2 py-0.5 rounded-DEFAULT bg-secondary-fixed text-on-secondary-fixed text-label-sm font-label-sm font-bold uppercase">Logistics Prep</span>
      <span className="text-label-sm font-label-sm flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">calendar_today</span> 10 – 14 June 2025</span>
      </div>
      </div>
      <div className="p-space-lg flex flex-col flex-1 gap-space-sm">
      <div className="flex items-center gap-2 text-label-sm font-label-sm text-secondary font-bold">
      <span className="material-symbols-outlined text-[16px]">location_on</span>
                    Karamoja &amp; Teso Border • Kotido / Katakwi
                  </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface">Karamoja &amp; Teso Resiliency Compassion Mission</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Drought resilience outreach: delivering emergency posho (maize grain) and dry beans, winter blankets, footwear for children, coupled with regional pastoral leadership development conferences for 40 local pastors.
                  </p>
      <div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-1 text-body-sm font-body-sm">
      <div className="flex justify-between"><strong className="text-on-surface">Target Reach:</strong> <span className="text-on-surface-variant">2,200 Homesteads</span></div>
      <div className="flex justify-between"><strong className="text-on-surface">Supervising Officer:</strong> <span className="text-on-surface-variant">Pastor Peter L. &amp; Logistics Convoy</span></div>
      <div className="flex justify-between"><strong className="text-on-surface">Key Services:</strong> <span className="text-on-surface-variant">Food Supplies, Pastoral Leadership Seminars</span></div>
      </div>
      <div className="pt-space-xs mt-auto flex items-center justify-between">
      <button className="px-4 py-2 bg-primary text-on-primary rounded-lg text-label-md font-label-md font-semibold hover:bg-primary-container transition-colors" type="button">
                      Volunteer / Partner
                    </button>
      <span className="text-label-sm font-label-sm text-secondary font-semibold">Relief Convoy</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Interactive District Intake Request Form */}
      <section className="w-full bg-surface-container-low py-space-xl px-gutter" id="outreach-form">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
      <div className="lg:col-span-5 flex flex-col gap-space-md">
      <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Civic &amp; Pastoral Cooperation</span>
      <h2 className="font-headline-xl text-headline-xl text-on-surface leading-tight">
                Request an Outreach Mission in Your District
              </h2>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                In line with our Articles of Association, we partner with LC1 Chairpersons, Resident District Commissioners (RDCs), Christian Assemblies, and Sub-County Health Officers to deploy free mission interventions.
              </p>
      <div className="bg-surface-container p-space-md rounded-xl flex flex-col gap-space-sm">
      <div className="flex items-start gap-3">
      <span className="material-symbols-outlined text-secondary text-[24px]">verified_user</span>
      <div>
      <h4 className="font-title-md text-title-md font-semibold text-on-surface">Zero Cost to Communities</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant">World Healing Trinity Place Limited provides medical officers, medicines, sound systems, and volunteers entirely free of charge.</p>
      </div>
      </div>
      <div className="flex items-start gap-3">
      <span className="material-symbols-outlined text-secondary text-[24px]">assignment_turned_in</span>
      <div>
      <h4 className="font-title-md text-title-md font-semibold text-on-surface">Statutory Local Clearances</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Our team handles official notification with the Uganda Police Force (Public Order Management Act) and District Health Officers.</p>
      </div>
      </div>
      </div>
      <div className="p-space-md bg-primary-container text-on-primary-container rounded-xl flex flex-col gap-2">
      <span className="text-label-sm font-label-sm uppercase tracking-wider text-secondary-fixed font-bold">Urgent Dispatch Line</span>
      <p className="font-title-md text-title-md text-on-primary font-semibold">+256 (0) 772 000 000 / +256 (0) 414 000 000</p>
      <span className="text-body-sm font-body-sm text-on-primary-container/80">Direct desk of the Missions Coordinator, Kampala Ministry House.</span>
      </div>
      </div>
      <div className="lg:col-span-7 bg-surface-container-lowest p-space-lg rounded-xl shadow-md">
      <div className="flex items-center justify-between pb-space-sm">
      <h3 className="font-headline-sm text-headline-sm text-on-surface">Community Outreach Intake Form</h3>
      <span className="text-label-sm font-label-sm px-2.5 py-1 rounded-DEFAULT bg-surface-container text-on-surface font-semibold">Form Ref: WHTP-MIS-2025</span>
      </div>
      <form className="flex flex-col gap-space-md pt-space-xs" id="district-request-form" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
      <div className="flex flex-col gap-1">
      <label className="font-label-md text-label-md text-on-surface font-semibold">Local Leader / Church Rep Name *</label>
      <input className="px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest shadow-sm" placeholder="e.g., Pastor David Opolot / LC1 Chairman" required type="text"/>
      </div>
      <div className="flex flex-col gap-1">
      <label className="font-label-md text-label-md text-on-surface font-semibold">Official Role / Designation *</label>
      <select className="px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest shadow-sm" required>
      <option value="">Select official role</option>
      <option value="lc1">LC1 Chairperson / Village Elder</option>
      <option value="pastor">Senior Pastor / Church Minister</option>
      <option value="dho">District Health Worker / Clinic Head</option>
      <option value="youth">Youth Association Leader</option>
      <option value="cbo">Local CBO / Women Group Chair</option>
      </select>
      </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
      <div className="flex flex-col gap-1">
      <label className="font-label-md text-label-md text-on-surface font-semibold">Phone / WhatsApp Number *</label>
      <input className="px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest shadow-sm" placeholder="+256 700 000 000" required type="tel"/>
      </div>
      <div className="flex flex-col gap-1">
      <label className="font-label-md text-label-md text-on-surface font-semibold">District &amp; Sub-County / Parish *</label>
      <input className="px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest shadow-sm" placeholder="e.g., Wakiso District, Kasangati Sub-County" required type="text"/>
      </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
      <div className="flex flex-col gap-1">
      <label className="font-label-md text-label-md text-on-surface font-semibold">Primary Intervention Needed *</label>
      <select className="px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest shadow-sm" required>
      <option value="">Select primary need</option>
      <option value="medical">Mobile Medical Camp &amp; Triage</option>
      <option value="crusade">Open-Air Gospel Crusade &amp; Deliverance</option>
      <option value="trauma">Trauma &amp; Mental Health Healing Circles</option>
      <option value="widows">Widows &amp; Orphans Material Outreach</option>
      <option value="combined">Combined Integrative Mission (All Pillars)</option>
      </select>
      </div>
      <div className="flex flex-col gap-1">
      <label className="font-label-md text-label-md text-on-surface font-semibold">Estimated Beneficiary Attendance</label>
      <select className="px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest shadow-sm">
      <option value="300-500">300 to 500 People</option>
      <option value="500-1500">500 to 1,500 People</option>
      <option value="1500-3000">1,500 to 3,000 People</option>
      <option value="3000+">Over 3,000 People</option>
      </select>
      </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
      <div className="flex flex-col gap-1">
      <label className="font-label-md text-label-md text-on-surface font-semibold">Proposed Preferred Month / Quarter</label>
      <input className="px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest shadow-sm" placeholder="e.g., July 2025 or Dry Season" type="text"/>
      </div>
      <div className="flex flex-col gap-1">
      <label className="font-label-md text-label-md text-on-surface font-semibold">Available Open Field / Church Grounds</label>
      <input className="px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest shadow-sm" placeholder="e.g., Primary School Football Field" type="text"/>
      </div>
      </div>
      <div className="flex flex-col gap-1">
      <label className="font-label-md text-label-md text-on-surface font-semibold">Community Profile &amp; Specific Challenges</label>
      <textarea className="px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest shadow-sm" placeholder="Provide background on local diseases (e.g. malaria spike, water contamination) or pastoral conditions needing urgent deliverance and prayer ministry." rows={3}></textarea>
      </div>
      <div className="flex items-start gap-2 pt-space-xs">
      <input className="mt-1 accent-secondary" id="consent-check" required type="checkbox"/>
      <label className="font-body-sm text-body-sm text-on-surface-variant" htmlFor="consent-check">
                    I certify that I represent or am coordinating with recognized local governance structures (LC1, Local Church Council) and that mission logistics will be coordinated for community welfare in Uganda.
                  </label>
      </div>
      <button className="w-full mt-space-xs py-3.5 bg-primary text-on-primary rounded-lg font-label-md text-label-md font-bold tracking-wide hover:bg-primary-container transition-colors shadow-md flex items-center justify-center gap-2" type="submit">
      <span className="material-symbols-outlined text-[20px]">send</span>
                  Submit Outreach Mission Request
                </button>
      <div className="hidden p-space-sm bg-secondary-fixed/20 text-on-surface rounded-lg text-body-sm font-body-sm text-center" id="form-feedback">
                  Mission Request logged in the central register. Our Outreach Operations Director will initiate contact via phone within 48 hours.
                </div>
      </form>
      </div>
      </div>
      </section>
      {/* Field Photo Gallery & Impact Testimonials */}
      <section className="w-full bg-surface-container py-space-xl px-gutter">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
      <div className="max-w-2xl flex flex-col gap-space-xs">
      <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Field Verification &amp; Evidence</span>
      <h2 className="font-headline-xl text-headline-xl text-on-surface">Restored Lives &amp; Field Chronicles</h2>
      <p className="font-body-md text-body-md text-on-surface-variant">Documented human stories of physical recovery, deliverance from despair, and community restoration across Ugandan parishes.</p>
      </div>
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-secondary text-[20px]">photo_camera</span>
      <span className="text-label-sm font-label-sm font-bold text-on-surface uppercase tracking-wider">Field Operations Archive</span>
      </div>
      </div>
      {/* Testimonial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
      {/* Testimonial 1 */}
      <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between gap-space-md">
      <div className="flex flex-col gap-space-sm">
      <div className="flex items-center justify-between">
      <span className="px-2.5 py-1 rounded-DEFAULT bg-secondary-fixed/30 text-on-secondary-fixed text-label-sm font-label-sm font-bold">Restored from Chronic Illness</span>
      <span className="material-symbols-outlined text-secondary text-[20px]">verified</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface italic leading-relaxed">
                    "For eight months I was bedridden with severe joint pain and recurring fevers that drained my small shop's income. At the Kawempe triage camp, the doctors tested me, gave me proper medicine, and the pastors laid hands on me in prayer. I stood up that same evening without the heaviness. Today my strength has returned completely."
                  </p>
      </div>
      <div className="flex items-center gap-3 pt-space-xs">
      <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-on-surface">
                    AM
                  </div>
      <div className="flex flex-col">
      <span className="font-title-md text-title-md font-semibold text-on-surface">Annet Mukasa</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Kawempe Market Trader, Kampala</span>
      </div>
      </div>
      </div>
      {/* Testimonial 2 */}
      <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between gap-space-md">
      <div className="flex flex-col gap-space-sm">
      <div className="flex items-center justify-between">
      <span className="px-2.5 py-1 rounded-DEFAULT bg-secondary-fixed/30 text-on-secondary-fixed text-label-sm font-label-sm font-bold">Trauma Healing &amp; Reconciliation</span>
      <span className="material-symbols-outlined text-secondary text-[20px]">verified</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface italic leading-relaxed">
                    "After losing my brother, I sank into severe depression and our family disintegrated into land disputes and bitter wrath. The confidential trauma circle conducted during the Mukono clinic gave me the safe space to weep and release the anger. The counseling pastors facilitated peace meetings with my kin. Our home is united again."
                  </p>
      </div>
      <div className="flex items-center gap-3 pt-space-xs">
      <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-on-surface">
                    EK
                  </div>
      <div className="flex flex-col">
      <span className="font-title-md text-title-md font-semibold text-on-surface">Emanuel Kigozi</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Teacher &amp; Father, Kyampisi</span>
      </div>
      </div>
      </div>
      {/* Testimonial 3 */}
      <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between gap-space-md">
      <div className="flex flex-col gap-space-sm">
      <div className="flex items-center justify-between">
      <span className="px-2.5 py-1 rounded-DEFAULT bg-secondary-fixed/30 text-on-secondary-fixed text-label-sm font-label-sm font-bold">Deliverance &amp; Economic Lift</span>
      <span className="material-symbols-outlined text-secondary text-[20px]">verified</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface italic leading-relaxed">
                    "During the Jinja Crusade, I received prayer to break patterns of alcohol addiction that destroyed my tailoring trade. Not only did God deliver me, but the ministry also provided me with an emergency starter kit and materials through their vocational guild. I am now tailoring school uniforms and mentoring six girls in my parish."
                  </p>
      </div>
      <div className="flex items-center gap-3 pt-space-xs">
      <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-on-surface">
                    SW
                  </div>
      <div className="flex flex-col">
      <span className="font-title-md text-title-md font-semibold text-on-surface">Sarah Wandera</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Seamstress Guild, Iganga</span>
      </div>
      </div>
      </div>
      </div>
      {/* Field Photo Mosaic */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
      <div className="relative rounded-xl overflow-hidden h-60 shadow-sm group">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Ugandan registered nurse dispensing vitamins and pediatric medicine to an African mother and child under outdoor humanitarian medical canopy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgdz3RsJJj165HAl93PajKc3_KEdoGxY5oreAzI9l2V2_Jy_Smfo3aqYsTNBm-zXEDQJilkdZ1r1Z4m-7nExAT_KQX8D64MgfGyew3kjtCadWLvEBsyx16iUJPdEtevlh86L69K0UmQ7y_mTjjMNcbg09TwpsTqCKqho9Mp9MXQ-UhUIC9P2vUFrpMS_fQoX73MNX8_Tg1i3g6n-GpKy0R-o5HDjp6qlyPKaI9m58D"/>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent flex items-end p-space-sm">
      <span className="font-label-sm text-label-sm text-on-primary">Field Pharmacy &amp; Triage Distribution</span>
      </div>
      </div>
      <div className="relative rounded-xl overflow-hidden h-60 shadow-sm group">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Evening prayer crusade in rural Uganda with hands lifted in prayer under warm ambient stadium lights with banner of faith and healing" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPioodS8j2pMm0ZZZFdhIgow9T7CtYRH4oiV63UZkalNcA1FH6kFQzxDHwo4kriqNFJLllSpw7Pfa9y6dQRT76M3pIgFH0Sx47FSA3Yyf0yRHvhRU2Crm0emHGNeFBPs2DEV7kUyoBTkXJspkKdoRZnSrxkG7WOxHLwwXWgLGRAeJRMQVY-06FDk8x0Ih5a7lGb1cOIUWDpgHJtEBAsbQ32bCP2wYFFc2FdrHszW9J"/>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent flex items-end p-space-sm">
      <span className="font-label-sm text-label-sm text-on-primary">Mass Evening Revival &amp; Deliverance Prayer</span>
      </div>
      </div>
      <div className="relative rounded-xl overflow-hidden h-60 shadow-sm group">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Community health volunteer demonstrating handwashing and clean water filtration with clean water jerrycans in Mukono Uganda" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3An0THxa5f0ALkCzOQJOU0x8QNjMmxdGmTOYufGUj7qiWvFSYRvQHa8OK_1DixbVNUwt77o8EGhJjzWeVvn3RqJy6n2KsfpU8Uz2UzLw6iYPx7hhuuO_irJkpr-ci6NFAY0NuCqm0A76RPQVdPnw0_BK6uMJJq_jz9mQiGLZ_CfomImIcd6gGBO7d4VYjEEq_uozRyrz3AYwGpaZeEoAQqxu35pOf0qCM0tui3ZBf"/>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent flex items-end p-space-sm">
      <span className="font-label-sm text-label-sm text-on-primary">WASH Water Vessel Handover</span>
      </div>
      </div>
      <div className="relative rounded-xl overflow-hidden h-60 shadow-sm group">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Pastoral counselors praying with an elderly grandmother in a green Ugandan village with compassion and dignity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDvIE9PqNs1W9Wlq1fWsx3jC4kpGLSGK53SgVcO_gclXreR9y9venkkUwZdhxG1CjZNmBVXZd6WDDwJZF5sPkVmPbxWgHPSOBfKLq2cU4fdLh83kNj7M_79nDRNkPCmggSTeSLLok9gKH_65GX8W9Us0slNkczO7AN2dpreaNQRmLDOkTNbtNUbB-uVjy1c4swsJ5BzlUsr6BwsFtIaDMmsmbr0gBUuW-Dw64W_0qS"/>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent flex items-end p-space-sm">
      <span className="font-label-sm text-label-sm text-on-primary">Home-to-Home Pastoral Compassion</span>
      </div>
      </div>
      </div>
      {/* Field Logistics Transparency Note */}
      <div className="p-space-md bg-surface-container-high rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
      <div className="flex items-center gap-3">
      <span className="material-symbols-outlined text-secondary text-[28px]">policy</span>
      <div>
      <h4 className="font-title-md text-title-md font-bold text-on-surface">Field Governance &amp; Ethical Stewardship Guarantee</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Every medical supply item, donation hamper, and vehicle deployment is audited under World Healing Trinity Place Limited's non-profit protocols. We uphold the Children Act (Cap. 59), Ministry of Health guidelines, and the Republic of Uganda Companies Act 2012.
                  </p>
      </div>
      </div>
      <Link className="whitespace-nowrap px-4 py-2 bg-surface-container-lowest text-on-surface rounded-lg font-label-md text-label-md font-semibold hover:bg-surface-container transition-colors shadow-sm" to="/about-legal-status">
                Review Legal Status
              </Link>
      </div>
      </div>
      </section>
      {/* Volunteer / Partner Modal Backdrop */}
      <div className="fixed inset-0 z-50 bg-primary/60 backdrop-blur-sm hidden items-center justify-center p-gutter" id="partner-modal">
      <div className="bg-surface-container-lowest rounded-xl shadow-2xl max-w-lg w-full p-space-lg flex flex-col gap-space-md relative animate-fadeIn">
      <div className="flex items-center justify-between">
      <div className="flex flex-col">
      <span className="text-label-sm font-label-sm uppercase tracking-wider text-secondary font-bold">Field Deployment Roster</span>
      <h3 className="font-headline-sm text-headline-sm text-on-surface" id="modal-mission-title">Mission Partnership</h3>
      </div>
      <button className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface" type="button">
      <span className="material-symbols-outlined text-[18px]">close</span>
      </button>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
              Register as a volunteer medical officer, intercessor, or financial logistics partner for this mission expedition.
            </p>
      <form className="flex flex-col gap-space-sm">
      <div className="flex flex-col gap-1">
      <label className="font-label-md text-label-md text-on-surface font-semibold">Your Full Name</label>
      <input className="px-3.5 py-2 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none" placeholder="Dr. / Pst. / Mr. / Ms." required type="text"/>
      </div>
      <div className="flex flex-col gap-1">
      <label className="font-label-md text-label-md text-on-surface font-semibold">Email or Phone Number</label>
      <input className="px-3.5 py-2 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none" placeholder="contact@domain.org or +256..." required type="text"/>
      </div>
      <div className="flex flex-col gap-1">
      <label className="font-label-md text-label-md text-on-surface font-semibold">How would you like to participate?</label>
      <select className="px-3.5 py-2 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none">
      <option>Volunteer as Medical / Health Professional</option>
      <option>Volunteer as Prayer &amp; Counseling Worker</option>
      <option>Support Logistics &amp; Transport Convoys</option>
      <option>Sponsor Medical Supplies &amp; Food Parcels</option>
      </select>
      </div>
      <div className="flex items-center gap-space-sm pt-space-xs">
      <button className="flex-1 py-2.5 bg-primary text-on-primary rounded-lg font-label-md text-label-md font-semibold hover:bg-primary-container transition-colors" type="submit">
                  Confirm Deployment Interest
                </button>
      <button className="px-4 py-2.5 bg-surface-container text-on-surface rounded-lg font-label-md text-label-md font-semibold hover:bg-surface-container-high transition-colors" type="button">
                  Cancel
                </button>
      </div>
      </form>
      <div className="hidden text-body-sm font-body-sm text-secondary font-semibold text-center" id="modal-feedback">
              Thank you. The Field Operations Secretariat will follow up promptly.
            </div>
      </div>
      </div>
    </div>
  )
}
