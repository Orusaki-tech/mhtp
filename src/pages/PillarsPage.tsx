import { type FormEvent } from 'react'
import { Link } from 'react-router-dom'

export default function PillarsPage() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <div className="flex flex-col w-full">
      {/* Editorial Mission Banner / Manifesto Overline */}
      <section className="relative w-full bg-surface-container-low overflow-hidden py-16 lg:py-24">
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_top_right,rgba(254,214,91,0.22),transparent_55%)]"></div>
      <div className="max-w-7xl mx-auto px-gutter relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end">
      <div className="lg:col-span-8 flex flex-col gap-space-md">
      <div className="inline-flex items-center gap-space-sm self-start px-3 py-1.5 rounded-lg bg-surface-container-highest">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">URSB Charters 2, 3, 4, 5 &amp; 6 Statutory Objectives</span>
      </div>
      <h1 className="font-headline-xl text-headline-xl text-on-surface leading-tight font-serif">
                  Pillars of Ministry &amp; Community Transformation
                </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                  Integrating spiritual liberation with certified socio-economic independence across Uganda. We construct durable bridges from crisis to self-reliance through biblical truth, restorative healthcare, and accredited vocational guilds.
                </p>
      </div>
      <div className="lg:col-span-4 flex flex-col gap-space-sm bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
      <div className="flex items-center justify-between pb-space-xs">
      <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Accountability Registry</span>
      <span className="material-symbols-outlined text-secondary text-[20px]">verified_user</span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Registered Non-Profit Company Limited by Guarantee under the Laws of the Republic of Uganda. Operational hubs actively serving Kampala, Wakiso, and rural target zones.
                </p>
      <div className="pt-2 flex items-center gap-space-md text-label-sm font-label-sm text-on-surface font-semibold">
      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[15px] text-secondary">check_circle</span> 100% Non-Profit</span>
      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[15px] text-secondary">check_circle</span> Audited Pathways</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Visual Evidence Mosaic (Directly grounded in Community Realities) */}
      <section className="max-w-7xl mx-auto px-gutter -mt-8 relative z-20 w-full mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="relative group rounded-xl overflow-hidden bg-surface-container shadow-md h-60">
      <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="An open-air African Christian community choir singing in joy under a timber wooden structure in rural Uganda, with community women in bright traditional dresses praising and clapping under warm equatorial sunlight." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzClD063ucN64qgdKZAb_lwop7BKOREiuQrUqtStHRl3Hh8Hrgxhm15W1PkuMNZOvSaDXYMgcsTfKwmM75oyChB6WPcsM5UwQyZFFqaGYFDGOJ3naWPoIeTrTEOy_30survK-h9rtbst9eRXv-erhwAAilWPQDB-jbjGugzaNhz1pQ9PhFLhSEx3I-QOomMcN81GcI8WgoKbfJkJ7Da20bxA9jbefWbtaF9EQX3MOc"/>
      <div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/30 to-transparent flex flex-col justify-end p-space-md">
      <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider">Pillar I Focus</span>
      <span className="font-title-md text-title-md text-on-primary font-bold">Community Deliverance &amp; Praise</span>
      </div>
      </div>
      <div className="relative group rounded-xl overflow-hidden bg-surface-container shadow-md h-60">
      <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Young Ugandan women training actively on manual sewing machines at an outdoor tailoring workshop under the shade, focused on precision garment crafting with vivid African wax textiles." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8l_p4Qo7R4BHbS9ouVky3M1JNe0xyVqNkR_9bgRv9lINWf2kx8ZCNoEvnEQlCyQaAUw5LDP2YGVOa3n8x8s6qZN8fIszqgMZVSR8NS7QZgRsJllreNzIZhfbDLs0QTnJIY0z-0yRHZFq1_Iow0vNt5ymXcMdpp87FKivXscnDS3ex4MsqKANQ2Hm1b03-a7xpZPHceS_uEjycb0M_B_3rbYuXjeBiGv6SebiJKPRD"/>
      <div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/30 to-transparent flex flex-col justify-end p-space-md">
      <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider">Pillar III Skills</span>
      <span className="font-title-md text-title-md text-on-primary font-bold">Tailoring &amp; Apparel Guild</span>
      </div>
      </div>
      <div className="relative group rounded-xl overflow-hidden bg-surface-container shadow-md h-60">
      <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Young Ugandan men working with hand planers, timber planks, and measuring squares at an open carpentry workbench under open skies, learning construction joinery with focused smiles." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDACAzTgWR8PgG4-j6JtVhPwnoakyS9bk74gdl_sUa_hdk_IgDMIEQ_YStk3I4hIF_ppen739UPpWjBbSFoN1D4IADaKWt9JMvUpAOHkLznzcMgfY1kNqI4421PNBMtr2ujnA5sCvnnAoX1gd-opWichcl7TtmLbVOMOBCZf1y-VNYHHyZaAxqQAjHo6OHMIDMrT_1DXcLywTkJA4er60IljtFERFyNTnwgduU3pDPc"/>
      <div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/30 to-transparent flex flex-col justify-end p-space-md">
      <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider">Pillar III Trades</span>
      <span className="font-title-md text-title-md text-on-primary font-bold">Carpentry &amp; Construction Guild</span>
      </div>
      </div>
      <div className="relative group rounded-xl overflow-hidden bg-surface-container shadow-md h-60">
      <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="A field medical clinic setup in rural East Africa with compassionate health workers in blue outreach vests consulting a mother and child, diagnostic charts hanging in an open pavilion." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpChY2074ciSc3NcofX3myRwoj964t1WT1O99kcwgoL0j3DnR9b8pQALJ7YEvjVcb_qgmoWA8aD2bkPA2zealfFxUbly_TjiAAB-5-vX9peaWSFOIlo3Gl4TtVm77zKqw6qNFtPRmZp3NIQmg3P2_qjfEBcRdaGMS4ElMzjAEMQ71PlJGzAf97hhbScvSpr9M-qHwzjgzROaYWnAN9uQ9HUrk2H5-LO_u3Qyc6ZiYv"/>
      <div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/30 to-transparent flex flex-col justify-end p-space-md">
      <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider">Outreach &amp; Health</span>
      <span className="font-title-md text-title-md text-on-primary font-bold">Free Community Health Checkups</span>
      </div>
      </div>
      </div>
      </section>
      {/* Four Signature Ministry Pillars (Core Directive) */}
      <section className="max-w-7xl mx-auto px-gutter py-12 lg:py-16 w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
      <div className="flex flex-col gap-space-xs max-w-2xl">
      <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">Institutional Tenets</span>
      <h2 className="font-headline-xl text-headline-xl text-on-surface font-serif">The Four Signature Ministry Pillars</h2>
      <p className="font-body-md text-body-md text-on-surface-variant">
                Formulated to eradicate generational poverty, structural isolation, and spiritual oppression through integrated systemic interventions.
              </p>
      </div>
      <div className="hidden lg:flex items-center gap-space-sm text-body-sm font-body-sm text-on-surface-variant bg-surface-container px-4 py-2 rounded-lg">
      <span className="material-symbols-outlined text-[18px] text-secondary">gavel</span>
      <span>Constitutionally Chartered Activities</span>
      </div>
      </div>
      {/* Bento-Style Pillars Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
      {/* PILLAR I: Holistic Healing & Deliverance */}
      <div className="lg:col-span-6 bg-surface-container-lowest rounded-xl p-space-xl shadow-md flex flex-col justify-between relative overflow-hidden group">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-secondary"></div>
      <div>
      <div className="flex items-center justify-between mb-space-md">
      <span className="font-label-sm text-label-sm px-2.5 py-1 rounded bg-secondary-container text-on-secondary-container uppercase tracking-wider font-bold">Pillar I</span>
      <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-secondary">
      <span className="material-symbols-outlined text-[22px]">health_and_safety</span>
      </div>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface font-serif mb-space-sm">Holistic Healing &amp; Deliverance</h3>
      <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
                  Healing the total individual—spirit, soul, body, and socio-economic standing. Our mandate refuses to separate spiritual truth from clinical healthcare and mental wellness.
                </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md mb-space-md">
      <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-1">
      <div className="flex items-center gap-2 text-on-surface font-title-md text-title-md">
      <span className="material-symbols-outlined text-[18px] text-secondary">auto_awesome</span>
      <span>Spiritual Liberation</span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Uncompromising biblical teaching, intercessory deliverance, and release from ancestral bondages.</p>
      </div>
      <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-1">
      <div className="flex items-center gap-2 text-on-surface font-title-md text-title-md">
      <span className="material-symbols-outlined text-[18px] text-secondary">local_hospital</span>
      <span>Physical Wellness</span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Mobile health outreach, free community diagnostics, basic pharma, and sanitation hygiene workshops.</p>
      </div>
      <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-1">
      <div className="flex items-center gap-2 text-on-surface font-title-md text-title-md">
      <span className="material-symbols-outlined text-[18px] text-secondary">psychology</span>
      <span>Trauma &amp; Mental Health</span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Compassionate grief care, post-trauma recovery circles, and confidential pastoral counseling.</p>
      </div>
      <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-1">
      <div className="flex items-center gap-2 text-on-surface font-title-md text-title-md">
      <span className="material-symbols-outlined text-[18px] text-secondary">savings</span>
      <span>Financial Stewardship</span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Debt liquidation strategies, household savings circles (VSLAs), and biblical work ethics.</p>
      </div>
      </div>
      </div>
      <div className="pt-space-md bg-surface-container-low/70 rounded-lg p-space-sm flex items-center justify-between text-label-md font-label-md text-on-surface-variant">
      <span>Outreach Cadence: Bi-Weekly Rural &amp; Urban Clinics</span>
      <span className="font-bold text-on-surface">1,800+ Served in 2024</span>
      </div>
      </div>
      {/* PILLAR II: Post-Deliverance Capacity Building */}
      <div className="lg:col-span-6 bg-surface-container-lowest rounded-xl p-space-xl shadow-md flex flex-col justify-between relative overflow-hidden group">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary-container"></div>
      <div>
      <div className="flex items-center justify-between mb-space-md">
      <span className="font-label-sm text-label-sm px-2.5 py-1 rounded bg-surface-container-highest text-on-surface uppercase tracking-wider font-bold">Pillar II</span>
      <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary-container">
      <span className="material-symbols-outlined text-[22px]">diversity_3</span>
      </div>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface font-serif mb-space-sm">Post-Deliverance Capacity Building</h3>
      <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
                  Deliverance without discipleship leaves the individual exposed. We pair every newly released brother or sister with long-term mentorship and spiritual defense frameworks.
                </p>
      <div className="space-y-space-md mb-space-md">
      <div className="flex gap-space-md items-start p-space-sm rounded-lg bg-surface-container-low">
      <div className="w-8 h-8 rounded bg-primary-container text-on-primary flex items-center justify-center font-bold text-body-sm shrink-0">01</div>
      <div>
      <h4 className="font-title-md text-title-md font-semibold text-on-surface">Structured Discipleship Pathways</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant">A 24-week curriculum grounding participants in scriptural identity, resisting recurring vices, and spiritual authority.</p>
      </div>
      </div>
      <div className="flex gap-space-md items-start p-space-sm rounded-lg bg-surface-container-low">
      <div className="w-8 h-8 rounded bg-primary-container text-on-primary flex items-center justify-center font-bold text-body-sm shrink-0">02</div>
      <div>
      <h4 className="font-title-md text-title-md font-semibold text-on-surface">One-on-One Life Mentorship</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Matched with seasoned Christian elders and trade leaders to navigate family reintegration, habit rebuilding, and stability.</p>
      </div>
      </div>
      <div className="flex gap-space-md items-start p-space-sm rounded-lg bg-surface-container-low">
      <div className="w-8 h-8 rounded bg-primary-container text-on-primary flex items-center justify-center font-bold text-body-sm shrink-0">03</div>
      <div>
      <h4 className="font-title-md text-title-md font-semibold text-on-surface">Community Accountability Pods</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Weekly fellowship circles providing safe reflection, mutual prayer, and micro-loan emergency buffers.</p>
      </div>
      </div>
      </div>
      </div>
      <div className="pt-space-md bg-surface-container-low/70 rounded-lg p-space-sm flex items-center justify-between text-label-md font-label-md text-on-surface-variant">
      <span>Program Retention: 91.4% Over 12-Month Cohorts</span>
      <span className="font-bold text-on-surface">Zero Relapse Target</span>
      </div>
      </div>
      {/* PILLAR III: Vocational Training Centers & Guilds */}
      <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-space-xl shadow-md flex flex-col justify-between relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-secondary"></div>
      <div>
      <div className="flex items-center justify-between mb-space-md">
      <span className="font-label-sm text-label-sm px-2.5 py-1 rounded bg-secondary-container text-on-secondary-container uppercase tracking-wider font-bold">Pillar III • Economic Engine</span>
      <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-secondary">
      <span className="material-symbols-outlined text-[22px]">handyman</span>
      </div>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface font-serif mb-space-sm">Vocational Guilds &amp; Industrial Skill Institutes</h3>
      <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                  Directly addressing youth unemployment, widow dependency, and informal-sector vulnerability by imparting market-tested, certified craftsmanship.
                </p>
      {/* 4 Trade Guild Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm mb-space-md">
      <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-1">
      <div className="flex items-center justify-between text-on-surface">
      <span className="font-title-md text-title-md font-bold">Tailoring &amp; Apparel</span>
      <span className="material-symbols-outlined text-[20px] text-secondary">styler</span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Pattern design, industrial stitch work, school uniform tenders, and entrepreneurial micro-boutiques.</p>
      <div className="text-label-sm font-label-sm text-secondary font-semibold mt-1">6-Month DIT Certified Track</div>
      </div>
      <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-1">
      <div className="flex items-center justify-between text-on-surface">
      <span className="font-title-md text-title-md font-bold">Carpentry &amp; Timber</span>
      <span className="material-symbols-outlined text-[20px] text-secondary">carpenter</span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Furniture joinery, roofing timber trusses, domestic fixtures, and sustainable finishing techniques.</p>
      <div className="text-label-sm font-label-sm text-secondary font-semibold mt-1">Hands-on Workshop Apprenticeship</div>
      </div>
      <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-1">
      <div className="flex items-center justify-between text-on-surface">
      <span className="font-title-md text-title-md font-bold">Agronomy &amp; Farming</span>
      <span className="material-symbols-outlined text-[20px] text-secondary">agriculture</span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Poultry husbandry, drip-irrigated horticulture, mushroom cultivation, and post-harvest preservation.</p>
      <div className="text-label-sm font-label-sm text-secondary font-semibold mt-1">Kampala &amp; Peri-Urban Demonstration Plots</div>
      </div>
      <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-1">
      <div className="flex items-center justify-between text-on-surface">
      <span className="font-title-md text-title-md font-bold">Digital &amp; Literacy</span>
      <span className="material-symbols-outlined text-[20px] text-secondary">computer</span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Functional business bookkeeping, mobile money merchant setup, basic computer typing, and digital records.</p>
      <div className="text-label-sm font-label-sm text-secondary font-semibold mt-1">Market Readiness Certification</div>
      </div>
      </div>
      </div>
      <div className="pt-space-md flex flex-wrap items-center justify-between gap-space-sm text-body-sm font-body-sm text-on-surface-variant bg-surface-container-low/50 p-space-sm rounded-lg">
      <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-secondary">work</span> Tool-Kit Graduation Kits Provided</span>
      <span className="font-semibold text-on-surface">320+ Certified Craftsmen</span>
      </div>
      </div>
      {/* PILLAR IV: Evangelism, Discipleship & Leadership */}
      <div className="lg:col-span-5 bg-surface-container-lowest rounded-xl p-space-xl shadow-md flex flex-col justify-between relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary-container"></div>
      <div>
      <div className="flex items-center justify-between mb-space-md">
      <span className="font-label-sm text-label-sm px-2.5 py-1 rounded bg-surface-container-highest text-on-surface uppercase tracking-wider font-bold">Pillar IV</span>
      <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary-container">
      <span className="material-symbols-outlined text-[22px]">menu_book</span>
      </div>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface font-serif mb-space-sm">Evangelism &amp; Theological Leadership</h3>
      <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                  Anchoring our civil uplift in sound theological doctrine. We raise upright civic stewards, pastors, and church planters committed to national righteousness.
                </p>
      <div className="space-y-space-sm mb-space-lg">
      <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col">
      <span className="font-title-md text-title-md text-on-surface font-semibold">Crusades &amp; Civic Rallies</span>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Rural open-air gospel proclaiming Christ's liberty, followed immediately by health and vocational clinics.</p>
      </div>
      <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col">
      <span className="font-title-md text-title-md text-on-surface font-semibold">Theological Leadership Institute</span>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Equipping ministers with hermeneutics, non-profit governance, ethical finance, and child-safe ministry standards.</p>
      </div>
      <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col">
      <span className="font-title-md text-title-md text-on-surface font-semibold">Youth Purity &amp; Vision Convocations</span>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Combating early pregnancies, substance abuse, and despondency through radical faith and career orientation.</p>
      </div>
      </div>
      </div>
      <div className="pt-space-md bg-surface-container-low/70 rounded-lg p-space-sm flex items-center justify-between text-label-md font-label-md text-on-surface-variant">
      <span>Active Servant-Leaders Planted: 48</span>
      <span className="font-bold text-on-surface">Across 6 Districts</span>
      </div>
      </div>
      </div>
      </section>
      {/* Operational Model Flow: Step-by-Step Visual Roadmap */}
      <section className="w-full bg-surface-container-low py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-gutter">
      <div className="text-center max-w-3xl mx-auto mb-space-xl flex flex-col gap-space-xs">
      <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">The Transformative Continuum</span>
      <h2 className="font-headline-xl text-headline-xl text-on-surface font-serif">5-Step Holistic Restoration Roadmap</h2>
      <p className="font-body-md text-body-md text-on-surface-variant">
                How a life transitions from crisis, bondage, and destitute dependency into dignified economic sovereignty and community mentorship.
              </p>
      </div>
      {/* Roadmap Flow */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative">
      {/* Step 1 */}
      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between relative group hover:shadow-md transition-shadow">
      <div>
      <div className="flex items-center justify-between mb-space-sm">
      <span className="w-7 h-7 rounded-full bg-secondary text-on-secondary font-bold text-label-md flex items-center justify-center">1</span>
      <span className="material-symbols-outlined text-secondary text-[22px]">door_front</span>
      </div>
      <h3 className="font-title-md text-title-md font-bold text-on-surface mb-1">Welcome &amp; Healing</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Reception into grace, deliverance prayer, and triage for immediate nutritional or medical urgencies.</p>
      </div>
      <div className="mt-space-md pt-space-xs border-none text-[11px] font-bold text-secondary uppercase tracking-wider">
                  Phase 1 • Rescue
                </div>
      </div>
      {/* Step 2 */}
      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between relative group hover:shadow-md transition-shadow">
      <div>
      <div className="flex items-center justify-between mb-space-sm">
      <span className="w-7 h-7 rounded-full bg-primary-container text-on-primary font-bold text-label-md flex items-center justify-center">2</span>
      <span className="material-symbols-outlined text-primary-container text-[22px]">self_improvement</span>
      </div>
      <h3 className="font-title-md text-title-md font-bold text-on-surface mb-1">Mental Restoration</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Emotional processing, grief counsel, de-programming past trauma, and establishing daily spiritual disciplines.</p>
      </div>
      <div className="mt-space-md pt-space-xs border-none text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
                  Phase 2 • Stabilization
                </div>
      </div>
      {/* Step 3 */}
      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between relative group hover:shadow-md transition-shadow">
      <div>
      <div className="flex items-center justify-between mb-space-sm">
      <span className="w-7 h-7 rounded-full bg-secondary text-on-secondary font-bold text-label-md flex items-center justify-center">3</span>
      <span className="material-symbols-outlined text-secondary text-[22px]">construction</span>
      </div>
      <h3 className="font-title-md text-title-md font-bold text-on-surface mb-1">Skills Apprenticeship</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Placement into certified guilds: tailoring, carpentry, farming, or tech. Rigorous practical bench hours.</p>
      </div>
      <div className="mt-space-md pt-space-xs border-none text-[11px] font-bold text-secondary uppercase tracking-wider">
                  Phase 3 • Capacity
                </div>
      </div>
      {/* Step 4 */}
      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between relative group hover:shadow-md transition-shadow">
      <div>
      <div className="flex items-center justify-between mb-space-sm">
      <span className="w-7 h-7 rounded-full bg-primary-container text-on-primary font-bold text-label-md flex items-center justify-center">4</span>
      <span className="material-symbols-outlined text-primary-container text-[22px]">storefront</span>
      </div>
      <h3 className="font-title-md text-title-md font-bold text-on-surface mb-1">Enterprise Living</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Graduation tool-kit provision, launch of market trade or farm plot, micro-savings, and independent income.</p>
      </div>
      <div className="mt-space-md pt-space-xs border-none text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
                  Phase 4 • Autonomy
                </div>
      </div>
      {/* Step 5 */}
      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between relative group hover:shadow-md transition-shadow">
      <div>
      <div className="flex items-center justify-between mb-space-sm">
      <span className="w-7 h-7 rounded-full bg-secondary text-on-secondary font-bold text-label-md flex items-center justify-center">5</span>
      <span className="material-symbols-outlined text-secondary text-[22px]">volunteer_activism</span>
      </div>
      <h3 className="font-title-md text-title-md font-bold text-on-surface mb-1">Mentoring Others</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Reinvesting into newly entered cohorts, serving as apprentice foremen, and tithes to community uplift.</p>
      </div>
      <div className="mt-space-md pt-space-xs border-none text-[11px] font-bold text-secondary uppercase tracking-wider">
                  Phase 5 • Multiplier
                </div>
      </div>
      </div>
      {/* Roadmap Metrics Ribbon */}
      <div className="mt-10 p-space-md bg-surface-container rounded-xl flex flex-col md:flex-row items-center justify-around gap-space-md text-center">
      <div>
      <div className="font-headline-md text-headline-md font-serif text-on-surface font-bold">18–24 Wks</div>
      <div className="font-label-sm text-label-sm text-on-surface-variant uppercase">Average Cohort Cycle</div>
      </div>
      <div className="hidden md:block w-px h-8 bg-outline-variant"></div>
      <div>
      <div className="font-headline-md text-headline-md font-serif text-secondary font-bold">88.2%</div>
      <div className="font-label-sm text-label-sm text-on-surface-variant uppercase">Post-Graduation Employment</div>
      </div>
      <div className="hidden md:block w-px h-8 bg-outline-variant"></div>
      <div>
      <div className="font-headline-md text-headline-md font-serif text-on-surface font-bold">UGX 1.4M</div>
      <div className="font-label-sm text-label-sm text-on-surface-variant uppercase">Average New Household Income Boost / Year</div>
      </div>
      <div className="hidden md:block w-px h-8 bg-outline-variant"></div>
      <div>
      <div className="font-headline-md text-headline-md font-serif text-secondary font-bold">1,200+</div>
      <div className="font-label-sm text-label-sm text-on-surface-variant uppercase">Mentorship Hours Delivered</div>
      </div>
      </div>
      </div>
      </section>
      {/* Vocational Campus Initiative (Clause 9 of Constitution) */}
      <section className="max-w-7xl mx-auto px-gutter py-16 lg:py-24 w-full">
      <div className="bg-primary-container text-on-primary-container rounded-xl p-space-lg lg:p-space-xl overflow-hidden relative shadow-xl">
      <div className="absolute -right-16 -bottom-16 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center relative z-10">
      <div className="lg:col-span-7 flex flex-col gap-space-md">
      <div className="inline-flex items-center gap-space-xs self-start px-3 py-1 rounded-DEFAULT bg-secondary text-on-secondary font-label-sm text-label-sm font-bold uppercase tracking-wider">
                  Clause 9 Capital Project
                </div>
      <h2 className="font-headline-xl text-headline-xl text-on-primary font-serif">
                  The Permanent Vocational Training &amp; Rehabilitation Sanctuary
                </h2>
      <p className="font-body-md text-body-md text-on-primary-container">
                  Pursuant to the powers granted to the Board of Trustees in Clause 9 of our Articles of Association, WORLD HEALING TRINITY PLACE LIMITED is advancing the acquisition of dedicated institutional acreage in Central Uganda.
                </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-2">
      <div className="flex items-start gap-space-sm">
      <span className="material-symbols-outlined text-secondary-fixed text-[22px] shrink-0">domain</span>
      <div>
      <h4 className="font-title-md text-title-md text-on-primary font-semibold">Industrial Workshop Blocks</h4>
      <p className="font-body-sm text-body-sm text-on-primary-container">Dedicated facilities for 120-seat tailoring halls and mechanized joinery bays.</p>
      </div>
      </div>
      <div className="flex items-start gap-space-sm">
      <span className="material-symbols-outlined text-secondary-fixed text-[22px] shrink-0">local_hospital</span>
      <div>
      <h4 className="font-title-md text-title-md text-on-primary font-semibold">Compassion Recovery Clinic</h4>
      <p className="font-body-sm text-body-sm text-on-primary-container">A 20-bed sanctuary for acute convalescence, trauma counseling, and maternal support.</p>
      </div>
      </div>
      <div className="flex items-start gap-space-sm">
      <span className="material-symbols-outlined text-secondary-fixed text-[22px] shrink-0">grass</span>
      <div>
      <h4 className="font-title-md text-title-md text-on-primary font-semibold">Agritech Research Acres</h4>
      <p className="font-body-sm text-body-sm text-on-primary-container">Greenhouse tunnels, organic compost beds, and solar pump irrigation demonstrators.</p>
      </div>
      </div>
      <div className="flex items-start gap-space-sm">
      <span className="material-symbols-outlined text-secondary-fixed text-[22px] shrink-0">school</span>
      <div>
      <h4 className="font-title-md text-title-md text-on-primary font-semibold">Theological Study Hall</h4>
      <p className="font-body-sm text-body-sm text-on-primary-container">Central hall for servant-leader summits, youth conferences, and community praise.</p>
      </div>
      </div>
      </div>
      {/* Progress Visualization */}
      <div className="mt-4 p-space-md bg-surface-container-lowest/10 rounded-lg backdrop-blur-sm flex flex-col gap-2">
      <div className="flex justify-between items-center text-label-md font-label-md">
      <span className="text-on-primary">Phase 1 Land Acquisition Fund</span>
      <span className="text-secondary-fixed font-bold">UGX 142,000,000 / UGX 320,000,000</span>
      </div>
      <div className="w-full bg-surface-container-lowest/20 h-2.5 rounded-full overflow-hidden">
      <div className="bg-secondary-fixed h-full rounded-full transition-all duration-1000" style={{width: '44.3%'}}></div>
      </div>
      <span className="text-on-primary-container text-[12px]">Audited by Certified Ugandan Accountants. Property deeds to be vested solely in the Company Limited by Guarantee.</span>
      </div>
      </div>
      {/* Student Intake & Prospective Enrollment Quick Form */}
      <div className="lg:col-span-5 bg-surface-container-lowest text-on-surface p-space-lg rounded-xl shadow-lg flex flex-col gap-space-md">
      <div className="flex flex-col gap-1">
      <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Cohort Registration</span>
      <h3 className="font-title-lg text-title-lg font-bold text-on-surface">Prospective Student Intake</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Are you or someone you know seeking liberation and vocational trade skills? Register for interview.</p>
      </div>
      <form className="flex flex-col gap-space-sm" id="intake-form" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1">
      <label className="font-label-sm text-label-sm text-on-surface font-semibold">Candidate Full Legal Name</label>
      <input className="px-3 py-2 rounded-lg bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-secondary" placeholder="e.g., Sarah Namubiru" required type="text"/>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
      <div className="flex flex-col gap-1">
      <label className="font-label-sm text-label-sm text-on-surface font-semibold">Primary Phone / WhatsApp</label>
      <input className="px-3 py-2 rounded-lg bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-secondary" placeholder="+256 700 000 000" required type="tel"/>
      </div>
      <div className="flex flex-col gap-1">
      <label className="font-label-sm text-label-sm text-on-surface font-semibold">Home Sub-County / District</label>
      <input className="px-3 py-2 rounded-lg bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-secondary" placeholder="e.g., Kasubi, Kampala" required type="text"/>
      </div>
      </div>
      <div className="flex flex-col gap-1">
      <label className="font-label-sm text-label-sm text-on-surface font-semibold">Trade Track of Interest</label>
      <select className="px-3 py-2 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-secondary" required>
      <option value="">Select Vocational Guild</option>
      <option value="tailoring">Tailoring, Design &amp; Garment Assembly</option>
      <option value="carpentry">Carpentry, Joinery &amp; Roofing Construction</option>
      <option value="agronomy">Sustainable Horticulture &amp; Poultry Husbandry</option>
      <option value="digital">Basic IT, Merchant Literacy &amp; Bookkeeping</option>
      <option value="discipleship">Full-Time Ministry Leadership &amp; Discipleship</option>
      </select>
      </div>
      <div className="flex flex-col gap-1">
      <label className="font-label-sm text-label-sm text-on-surface font-semibold">Brief Circumstance / Pastoral Need</label>
      <textarea className="px-3 py-2 rounded-lg bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-secondary resize-none" placeholder="Briefly describe your spiritual or practical aspirations..." rows={2}></textarea>
      </div>
      <button className="w-full py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold hover:bg-primary-container transition-colors shadow-md flex items-center justify-center gap-2 mt-1" type="submit">
      <span>Submit for Ministry Review</span>
      <span className="material-symbols-outlined text-[18px]">send</span>
      </button>
      <span className="text-label-sm font-label-sm text-secondary hidden text-center" id="intake-feedback">Your intake application has been received. Our team will contact you.</span>
      </form>
      </div>
      </div>
      </div>
      </section>
      {/* Interactive Dual Call-to-Action: Sponsor a Student / Vocational Scholar vs. Enroll */}
      <section className="max-w-7xl mx-auto px-gutter pb-24 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
      {/* Option 1: Sponsor a Student */}
      <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-md flex flex-col justify-between relative overflow-hidden group">
      <div className="absolute top-0 left-0 right-0 h-1 bg-secondary"></div>
      <div>
      <div className="flex items-center gap-space-sm mb-space-sm">
      <div className="w-9 h-9 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center">
      <span className="material-symbols-outlined text-[20px]">school</span>
      </div>
      <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">Partnership Pathway</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface font-serif mb-space-xs">Sponsor a Vocational Scholar</h3>
      <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                  Directly underwrite a vulnerable youth or widow's 6-month tuition, instructional raw fabrics, timber materials, and graduation startup tool-kit.
                </p>
      {/* Sponsorship Tiers */}
      <div className="grid grid-cols-3 gap-2 mb-space-md">
      <button className="tier-pill p-2 rounded-lg bg-surface-container-low text-on-surface font-label-sm text-label-sm text-center font-bold hover:bg-surface-container-high transition-colors focus:bg-secondary focus:text-on-secondary" type="button">
                    UGX 150K<br/><span className="text-[10px] font-normal opacity-80">Materials Pack</span>
      </button>
      <button className="tier-pill p-2 rounded-lg bg-secondary text-on-secondary font-label-sm text-label-sm text-center font-bold hover:bg-secondary/90 transition-colors" type="button">
                    UGX 350K<br/><span className="text-[10px] font-normal opacity-80">Full Term Tuition</span>
      </button>
      <button className="tier-pill p-2 rounded-lg bg-surface-container-low text-on-surface font-label-sm text-label-sm text-center font-bold hover:bg-surface-container-high transition-colors focus:bg-secondary focus:text-on-secondary" type="button">
                    UGX 650K<br/><span className="text-[10px] font-normal opacity-80">Tuition + Tool Kit</span>
      </button>
      </div>
      <div className="p-space-sm bg-surface-container-low rounded-lg mb-space-md flex items-center gap-space-sm">
      <span className="material-symbols-outlined text-secondary text-[20px]">mark_email_read</span>
      <span className="text-body-sm font-body-sm text-on-surface-variant">Includes quarterly academic photos and verified progress report letters.</span>
      </div>
      </div>
      <Link className="w-full py-3 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md font-semibold text-center hover:bg-secondary/90 transition-colors shadow-md flex items-center justify-center gap-2" to="/partner-donate">
      <span>Complete Scholar Sponsorship</span>
      <span className="material-symbols-outlined text-[18px]">favorite</span>
      </Link>
      </div>
      {/* Option 2: Join Discipleship & Volunteer Trade Fellowship */}
      <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-md flex flex-col justify-between relative overflow-hidden group">
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary-container"></div>
      <div>
      <div className="flex items-center gap-space-sm mb-space-sm">
      <div className="w-9 h-9 rounded-lg bg-surface-container-highest text-on-surface flex items-center justify-center">
      <span className="material-symbols-outlined text-[20px]">groups</span>
      </div>
      <span className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase tracking-wider">Spiritual Guild</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface font-serif mb-space-xs">Enroll in Biblical Discipleship</h3>
      <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                  Join the Trinity School of Deliverance and Servant Leadership. Classes occur in weekly weekend cycles in Kampala with online modules for upcountry partners.
                </p>
      <div className="space-y-space-xs mb-space-md font-body-sm text-body-sm text-on-surface-variant">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-[16px] text-secondary">check</span>
      <span>Hermeneutical foundation &amp; deliverance ministries</span>
      </div>
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-[16px] text-secondary">check</span>
      <span>Non-profit volunteer management &amp; pastoral care</span>
      </div>
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-[16px] text-secondary">check</span>
      <span>URSB compliance &amp; Christian organizational leadership</span>
      </div>
      </div>
      <div className="p-space-sm bg-surface-container-low rounded-lg mb-space-md flex items-center gap-space-sm">
      <span className="material-symbols-outlined text-secondary text-[20px]">calendar_month</span>
      <span className="text-body-sm font-body-sm text-on-surface-variant">Next Cohort Orientation: First Saturday of Next Month</span>
      </div>
      </div>
      <div className="flex gap-space-sm">
      <Link className="flex-1 py-3 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold text-center transition-colors" to="/prayer-request">
                  Ask for Prayer First
                </Link>
      <Link className="flex-1 py-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold text-center hover:bg-primary-container transition-colors shadow-md flex items-center justify-center gap-1" to="/contact-give">
      <span>Register Now</span>
      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
      </Link>
      </div>
      </div>
      </div>
      </section>
      {/* Script for Micro-Interactions */}
    </div>
  )
}
