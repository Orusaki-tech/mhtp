import { type FormEvent } from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-gutter py-space-xl lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
      {/* Left Column: Authoritative Editorial Copy */}
      <div className="lg:col-span-7 flex flex-col gap-space-md">
      {/* Legal Status Pill Badge */}
      <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-surface-container text-on-surface shadow-sm">
      <span className="material-symbols-outlined text-[16px] text-secondary">verified_user</span>
      <span className="font-label-sm text-label-sm tracking-wider uppercase text-on-surface-variant font-bold">
                    Registered Co. Limited by Guarantee • The Companies Act No. 1 of 2012 • Republic of Uganda
                  </span>
      </div>
      {/* Headline */}
      <div className="flex flex-col gap-2">
      <span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-bold">
                    Faith • Healing • Socio-Economic Autonomy
                  </span>
      <h1 className="font-headline-xl text-headline-xl lg:text-display-lg lg:font-display-lg text-primary tracking-tight font-bold">
                    Restoring Faith, Healing Lives, Transforming Communities.
                  </h1>
      </div>
      {/* Subtitle */}
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                  A registered faith-based ministry and socio-economic empowerment organization in Uganda dedicated to the advancement of Christian faith, holistic healing, vocational development, and sustainable life transformation.
                </p>
      {/* CTAs */}
      <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
      <a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-label-md text-label-md font-semibold text-on-primary bg-primary hover:bg-primary-container transition-all shadow-md" href="#objects">
      <span className="material-symbols-outlined text-[18px] text-secondary-fixed">menu_book</span>
      <span>Explore Legal Charter &amp; Objects</span>
      </a>
      <a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-label-md text-label-md font-semibold text-on-surface bg-surface-container hover:bg-surface-container-high transition-all" href="#prayer-request-modal">
      <span className="material-symbols-outlined text-[18px] text-secondary">healing</span>
      <span>Request Healing &amp; Prayer</span>
      </a>
      <a className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg font-label-md text-label-md font-bold text-on-secondary-container bg-secondary-container hover:bg-secondary-fixed transition-all" href="#partner-section">
      <span className="material-symbols-outlined text-[18px]">volunteer_activism</span>
      <span>Support Projects</span>
      </a>
      </div>
      {/* Quick Micro-Trust Elements */}
      <div className="grid grid-cols-3 gap-space-md pt-space-md max-w-xl">
      <div className="flex flex-col bg-surface p-space-sm rounded-lg shadow-sm">
      <span className="font-headline-sm text-headline-sm text-primary font-bold">100%</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Non-Profit Guarantee</span>
      </div>
      <div className="flex flex-col bg-surface p-space-sm rounded-lg shadow-sm">
      <span className="font-headline-sm text-headline-sm text-primary font-bold">8 Objects</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Statutory Mandate</span>
      </div>
      <div className="flex flex-col bg-surface p-space-sm rounded-lg shadow-sm">
      <span className="font-headline-sm text-headline-sm text-primary font-bold">Kampala</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">National Headquarters</span>
      </div>
      </div>
      </div>
      {/* Right Column: Visual Composition with Keyline Detail */}
      <div className="lg:col-span-5 relative">
      <div className="relative bg-surface-container rounded-xl overflow-hidden shadow-xl">
      <div className="relative h-[480px] w-full">
      <img className="w-full h-full object-cover" data-alt="A warm and energetic Ugandan rural community gathering under a wooden gazebo pavilion, people singing praise, learning tailoring sewing machines, and community health workers assisting families with smiles under radiant daylight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJLmlDm-dJga43jNSb0xLpiu_UHWLd5eAE6wJTsNCi4YxWObLm3bPxw-Lz5ezbiT1r-UQKYS8xz765JHcgrrOtfawhFf8yFMFqlSEk_MsZbuAUmupE-ccvldBkumkVV1i3sUKMUyeJtVVzJuvRAcjtePPPGKvaynHLckZJEH_V7e4Ac7JigPaYwcF3A2ylV8dmM575cJQ_aJE-BQYNdHcVBGvK068FWxjOlZxAKcvO"/>
      <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-transparent to-transparent opacity-85"></div>
      <div className="absolute bottom-0 left-0 right-0 p-space-lg flex flex-col gap-2 text-on-primary">
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-secondary text-on-secondary font-label-sm text-label-sm uppercase font-bold self-start tracking-wider">
                        Community In Motion • Uganda
                      </span>
      <h3 className="font-headline-sm text-headline-sm font-bold text-surface-container-lowest">
                        Empowering Lives Beyond the Pulpit
                      </h3>
      <p className="font-body-sm text-body-sm text-primary-fixed leading-normal">
                        Fostering spiritual liberation, vocational apprenticeships, and clinical health outreaches across rural and peri-urban districts.
                      </p>
      </div>
      </div>
      </div>
      {/* Floating Accent Overlap Badge */}
      <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-surface-container-lowest p-space-md rounded-xl shadow-xl flex-row items-center gap-space-sm max-w-xs z-10">
      <div className="w-12 h-12 rounded-lg bg-primary-container flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-secondary-fixed text-[26px]">gavel</span>
      </div>
      <div className="flex flex-col">
      <span className="font-title-md text-title-md font-bold text-on-surface">URSB Inscribed</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Statutory Articles with National Standing</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* QUICK TRUST & LEGAL STATUS RIBBON */}
      <section className="w-full bg-primary-container text-on-primary-container py-space-lg shadow-sm">
      <div className="max-w-7xl mx-auto px-gutter">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
      {/* Registration & Office */}
      <div className="flex items-start gap-space-sm">
      <div className="w-10 h-10 rounded-lg bg-surface-container-lowest/10 flex items-center justify-center shrink-0 mt-0.5">
      <span className="material-symbols-outlined text-secondary-fixed text-[22px]">corporate_fare</span>
      </div>
      <div className="flex flex-col">
      <span className="font-label-sm text-label-sm uppercase font-bold tracking-wider text-secondary-fixed">Incorporation Status</span>
      <span className="font-title-md text-title-md font-bold text-on-primary">Reg. Office in Uganda</span>
      <p className="font-body-sm text-body-sm text-on-primary-container/80 mt-1">
                    Plot 14 Trinity Heights Road, Kampala. Registered under the Companies Act 2012 as an Entity Limited by Guarantee.
                  </p>
      </div>
      </div>
      {/* Founding Subscribers */}
      <div className="flex items-start gap-space-sm">
      <div className="w-10 h-10 rounded-lg bg-surface-container-lowest/10 flex items-center justify-center shrink-0 mt-0.5">
      <span className="material-symbols-outlined text-secondary-fixed text-[22px]">group</span>
      </div>
      <div className="flex flex-col">
      <span className="font-label-sm text-label-sm uppercase font-bold tracking-wider text-secondary-fixed">Founding Subscribers</span>
      <span className="font-title-md text-title-md font-bold text-on-primary">Faith Governance</span>
      <p className="font-body-sm text-body-sm text-on-primary-container/80 mt-1">
                    Emojong Florence Lawil &amp; Emojong-Odeke Joram. Stewarding spiritual vision and socio-economic transformation.
                  </p>
      </div>
      </div>
      {/* Legal Attestation */}
      <div className="flex items-start gap-space-sm">
      <div className="w-10 h-10 rounded-lg bg-surface-container-lowest/10 flex items-center justify-center shrink-0 mt-0.5">
      <span className="material-symbols-outlined text-secondary-fixed text-[22px]">verified</span>
      </div>
      <div className="flex flex-col">
      <span className="font-label-sm text-label-sm uppercase font-bold tracking-wider text-secondary-fixed">Legal Attestation</span>
      <span className="font-title-md text-title-md font-bold text-on-primary">Opio Charles</span>
      <p className="font-body-sm text-body-sm text-on-primary-container/80 mt-1">
                    Advocate / Commissioner for Oaths, Ntinda, Kampala. Witnessing and lodging the foundational charter with URSB.
                  </p>
      </div>
      </div>
      {/* Four Pillars Banner */}
      <div className="flex items-start gap-space-sm">
      <div className="w-10 h-10 rounded-lg bg-surface-container-lowest/10 flex items-center justify-center shrink-0 mt-0.5">
      <span className="material-symbols-outlined text-secondary-fixed text-[22px]">auto_stories</span>
      </div>
      <div className="flex flex-col">
      <span className="font-label-sm text-label-sm uppercase font-bold tracking-wider text-secondary-fixed">Statutory Charter</span>
      <span className="font-title-md text-title-md font-bold text-on-primary">4 Pillars of Care</span>
      <p className="font-body-sm text-body-sm text-on-primary-container/80 mt-1">
                    Scriptural Gospel, Multi-Faceted Healing, Technical Guilds, and Compassionate Health Outreaches across East Africa.
                  </p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* THE 8 STATUTORY OBJECTS OF THE MINISTRY */}
      <section className="w-full py-space-xl bg-surface" id="objects">
      <div className="max-w-7xl mx-auto px-gutter">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
      <div className="flex flex-col gap-2 max-w-2xl">
      <div className="flex items-center gap-2">
      <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
      <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">
                    Memorandum of Association • Clause 3
                  </span>
      </div>
      <h2 className="font-headline-xl text-headline-xl text-primary font-bold">
                  The 8 Statutory Objects of the Ministry
                </h2>
      <p className="font-body-md text-body-md text-on-surface-variant">
                  Verbatim mandates defined within the official Ugandan Memorandum of Association, guiding all operational directives, vocational investments, and pastoral outreaches.
                </p>
      </div>
      <div className="flex items-center gap-space-sm bg-surface-container p-2 rounded-lg shrink-0">
      <button className="px-3.5 py-1.5 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm uppercase font-semibold transition-all" id="filter-all">All 8 Objects</button>
      <button className="px-3.5 py-1.5 rounded-lg text-on-surface font-label-sm text-label-sm uppercase font-semibold hover:bg-surface-container-high transition-all" id="filter-faith">Faith &amp; Healing</button>
      <button className="px-3.5 py-1.5 rounded-lg text-on-surface font-label-sm text-label-sm uppercase font-semibold hover:bg-surface-container-high transition-all" id="filter-vocational">Vocational &amp; Growth</button>
      </div>
      </div>
      {/* Grid of 8 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md" id="objects-grid">
      {/* Object 01 */}
      <div className="object-card faith flex flex-col justify-between bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col gap-space-sm">
      <div className="flex items-center justify-between">
      <span className="font-label-md text-label-md font-bold text-secondary tracking-widest">OBJECT 01</span>
      <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary">
      <span className="material-symbols-outlined text-[20px]">church</span>
      </div>
      </div>
      <h3 className="font-title-lg text-title-lg text-on-surface font-bold leading-snug">
                    Advancement of Christian Faith
                  </h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    To preach, teach and advance the Christian faith in accordance with the Holy Scriptures, and establish places of worship and fellowships.
                  </p>
      </div>
      <div className="mt-space-md pt-space-xs flex items-center justify-between text-label-sm font-label-sm text-secondary font-bold uppercase tracking-wider">
      <span>Evangelistic Base</span>
      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
      </div>
      </div>
      {/* Object 02 */}
      <div className="object-card faith flex flex-col justify-between bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col gap-space-sm">
      <div className="flex items-center justify-between">
      <span className="font-label-md text-label-md font-bold text-secondary tracking-widest">OBJECT 02</span>
      <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary">
      <span className="material-symbols-outlined text-[20px]">psychology_alt</span>
      </div>
      </div>
      <h3 className="font-title-lg text-title-lg text-on-surface font-bold leading-snug">
                    Holistic Healing &amp; Deliverance
                  </h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    To minister, facilitate, and clearly manifest multi-faceted healing and deliverance, explicitly encompassing spiritual liberation, physical health, financial break through, and emotional healing for mental health related issues.
                  </p>
      </div>
      <div className="mt-space-md pt-space-xs flex items-center justify-between text-label-sm font-label-sm text-secondary font-bold uppercase tracking-wider">
      <span>Mind • Body • Spirit</span>
      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
      </div>
      </div>
      {/* Object 03 */}
      <div className="object-card vocational flex flex-col justify-between bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col gap-space-sm">
      <div className="flex items-center justify-between">
      <span className="font-label-md text-label-md font-bold text-secondary tracking-widest">OBJECT 03</span>
      <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary">
      <span className="material-symbols-outlined text-[20px]">trending_up</span>
      </div>
      </div>
      <h3 className="font-title-lg text-title-lg text-on-surface font-bold leading-snug">
                    Capacity Building &amp; Life Transformation
                  </h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    To systematically build the capacity of participants post healing and deliverance, guiding them into sustainable income generating activities that completely transform their lives and foster total independence.
                  </p>
      </div>
      <div className="mt-space-md pt-space-xs flex items-center justify-between text-label-sm font-label-sm text-secondary font-bold uppercase tracking-wider">
      <span>Self-Reliance Pathway</span>
      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
      </div>
      </div>
      {/* Object 04 */}
      <div className="object-card vocational flex flex-col justify-between bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col gap-space-sm">
      <div className="flex items-center justify-between">
      <span className="font-label-md text-label-md font-bold text-secondary tracking-widest">OBJECT 04</span>
      <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary">
      <span className="material-symbols-outlined text-[20px]">handyman</span>
      </div>
      </div>
      <h3 className="font-title-lg text-title-lg text-on-surface font-bold leading-snug">
                    Vocational Training &amp; Skills Development
                  </h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    To establish, manage, and operate vocational training centres and institutes dedicated to skills development, empowering individuals with practical trades to eradicate economic vulnerability and dependency.
                  </p>
      </div>
      <div className="mt-space-md pt-space-xs flex items-center justify-between text-label-sm font-label-sm text-secondary font-bold uppercase tracking-wider">
      <span>Trade Guilds • Institutes</span>
      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
      </div>
      </div>
      {/* Object 05 */}
      <div className="object-card faith flex flex-col justify-between bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col gap-space-sm">
      <div className="flex items-center justify-between">
      <span className="font-label-md text-label-md font-bold text-secondary tracking-widest">OBJECT 05</span>
      <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary">
      <span className="material-symbols-outlined text-[20px]">public</span>
      </div>
      </div>
      <h3 className="font-title-lg text-title-lg text-on-surface font-bold leading-snug">
                    Evangelism &amp; Community Outreach
                  </h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    To conduct evangelical missions, community outreaches, crusades, conferences, and conventions locally and internationally.
                  </p>
      </div>
      <div className="mt-space-md pt-space-xs flex items-center justify-between text-label-sm font-label-sm text-secondary font-bold uppercase tracking-wider">
      <span>Domestic • Global Missions</span>
      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
      </div>
      </div>
      {/* Object 06 */}
      <div className="object-card faith flex flex-col justify-between bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col gap-space-sm">
      <div className="flex items-center justify-between">
      <span className="font-label-md text-label-md font-bold text-secondary tracking-widest">OBJECT 06</span>
      <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary">
      <span className="material-symbols-outlined text-[20px]">school</span>
      </div>
      </div>
      <h3 className="font-title-lg text-title-lg text-on-surface font-bold leading-snug">
                    Christian Education &amp; Discipleship
                  </h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    To establish, maintain, and operate theological trainings for spiritual discipleship and leadership.
                  </p>
      </div>
      <div className="mt-space-md pt-space-xs flex items-center justify-between text-label-sm font-label-sm text-secondary font-bold uppercase tracking-wider">
      <span>Leadership Seminary</span>
      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
      </div>
      </div>
      {/* Object 07 */}
      <div className="object-card vocational flex flex-col justify-between bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col gap-space-sm">
      <div className="flex items-center justify-between">
      <span className="font-label-md text-label-md font-bold text-secondary tracking-widest">OBJECT 07</span>
      <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary">
      <span className="material-symbols-outlined text-[20px]">account_balance</span>
      </div>
      </div>
      <h3 className="font-title-lg text-title-lg text-on-surface font-bold leading-snug">
                    Mobilisation of Resources &amp; Investment
                  </h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    To receive tithes, offerings, donations, grants, and legacies, and to prudently invest church funds in legally permissible ventures to sustain ministry operations and charitable projects.
                  </p>
      </div>
      <div className="mt-space-md pt-space-xs flex items-center justify-between text-label-sm font-label-sm text-secondary font-bold uppercase tracking-wider">
      <span>Stewardship Transparency</span>
      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
      </div>
      </div>
      {/* Object 08 */}
      <div className="object-card vocational flex flex-col justify-between bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col gap-space-sm">
      <div className="flex items-center justify-between">
      <span className="font-label-md text-label-md font-bold text-secondary tracking-widest">OBJECT 08</span>
      <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary">
      <span className="material-symbols-outlined text-[20px]">hub</span>
      </div>
      </div>
      <h3 className="font-title-lg text-title-lg text-on-surface font-bold leading-snug">
                    Collaboration &amp; Affiliation
                  </h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    To cooperate, affiliate, or network with other Christian ministries, vocational institutions, and governmental or non-governmental bodies.
                  </p>
      </div>
      <div className="mt-space-md pt-space-xs flex items-center justify-between text-label-sm font-label-sm text-secondary font-bold uppercase tracking-wider">
      <span>Multi-Agency Alliance</span>
      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* FEATURED PROGRAMS SHOWCASE: FROM HEALING TO INDEPENDENCE */}
      <section className="w-full py-space-xl bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-gutter">
      {/* Headline & Introduction */}
      <div className="flex flex-col gap-2 max-w-3xl mb-space-xl">
      <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">
                Holistic Transformation Architecture
              </span>
      <h2 className="font-headline-xl text-headline-xl text-primary font-bold">
                "From Healing to Independence"
              </h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant">
                World Healing Trinity Place breaks the cycle of generational poverty by integrating Christ-centered emotional liberation with rigorous vocational apprenticeships and micro-enterprise launches.
              </p>
      </div>
      {/* Bento-style Process Mosaic */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg mb-space-xl">
      {/* Step 1: Spiritual & Emotional Deliverance */}
      <div className="lg:col-span-4 flex flex-col bg-surface p-space-lg rounded-xl shadow-sm justify-between">
      <div className="flex flex-col gap-space-sm">
      <div className="flex items-center justify-between">
      <span className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold text-label-md font-label-md">1</span>
      <span className="material-symbols-outlined text-secondary text-[24px]">favorite</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-primary font-bold">Spiritual &amp; Mental Deliverance</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Trained pastoral counsellors and medical volunteer partners minister to trauma, chronic illness, anxiety, and spiritual desolation. Restoring peace, identity, and inner dignity.
                  </p>
      <div className="bg-surface-container-lowest p-space-sm rounded-lg flex flex-col gap-1 mt-2">
      <span className="font-label-sm text-label-sm uppercase font-bold text-primary">Core Interventions:</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">• 24/7 Intercessory Prayer Line</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">• Trauma &amp; Grief Pastoral Circles</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">• Mobile Health Screening Clinics</span>
      </div>
      </div>
      <div className="mt-space-md pt-space-xs text-label-sm font-label-sm text-secondary font-bold">
                  RESTORE THE FOUNDATION
                </div>
      </div>
      {/* Step 2: Hands-On Vocational Apprenticeships (Featured Centerpiece) */}
      <div className="lg:col-span-5 flex flex-col bg-primary-container text-on-primary p-space-lg rounded-xl shadow-xl justify-between">
      <div className="flex flex-col gap-space-sm">
      <div className="flex items-center justify-between">
      <span className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold text-label-md font-label-md">2</span>
      <span className="material-symbols-outlined text-secondary-fixed text-[24px]">carpenter</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-primary font-bold">Vocational Guilds &amp; Apprenticeship</h3>
      <p className="font-body-sm text-body-sm text-primary-fixed leading-relaxed">
                    Participants graduate into accredited trade institutes with dedicated master craftspeople. Learning marketable skills that provide immediate domestic income.
                  </p>
      <div className="grid grid-cols-2 gap-2 mt-2">
      <div className="bg-surface-container-lowest/10 p-space-sm rounded-lg">
      <span className="material-symbols-outlined text-secondary-fixed text-[18px]">styler</span>
      <h4 className="font-title-md text-title-md font-bold text-on-primary mt-1">Garment &amp; Tailoring</h4>
      <p className="font-body-sm text-body-sm text-on-primary-container/80 text-xs">Textile crafts, school uniform production &amp; alterations.</p>
      </div>
      <div className="bg-surface-container-lowest/10 p-space-sm rounded-lg">
      <span className="material-symbols-outlined text-secondary-fixed text-[18px]">build</span>
      <h4 className="font-title-md text-title-md font-bold text-on-primary mt-1">Joinery &amp; Carpentry</h4>
      <p className="font-body-sm text-body-sm text-on-primary-container/80 text-xs">Timber construction, framing &amp; artisanal furniture.</p>
      </div>
      <div className="bg-surface-container-lowest/10 p-space-sm rounded-lg">
      <span className="material-symbols-outlined text-secondary-fixed text-[18px]">yard</span>
      <h4 className="font-title-md text-title-md font-bold text-on-primary mt-1">Agribusiness</h4>
      <p className="font-body-sm text-body-sm text-on-primary-container/80 text-xs">Horticulture, poultry husbandry &amp; seed preservation.</p>
      </div>
      <div className="bg-surface-container-lowest/10 p-space-sm rounded-lg">
      <span className="material-symbols-outlined text-secondary-fixed text-[18px]">electric_bolt</span>
      <h4 className="font-title-md text-title-md font-bold text-on-primary mt-1">Practical Wiring</h4>
      <p className="font-body-sm text-body-sm text-on-primary-container/80 text-xs">Solar installation and domestic appliance repair.</p>
      </div>
      </div>
      </div>
      <div className="mt-space-md pt-space-xs text-label-sm font-label-sm text-secondary-fixed font-bold">
                  EQUIP FOR GENERATIONAL DIGNITY
                </div>
      </div>
      {/* Step 3: Capital & Sustainable Enterprise */}
      <div className="lg:col-span-3 flex flex-col bg-surface p-space-lg rounded-xl shadow-sm justify-between">
      <div className="flex flex-col gap-space-sm">
      <div className="flex items-center justify-between">
      <span className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold text-label-md font-label-md">3</span>
      <span className="material-symbols-outlined text-secondary text-[24px]">storefront</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-primary font-bold">Micro-Enterprise &amp; Autonomy</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Graduates receive trade tool kits (sewing machines, toolsets) and seed guidance to register community cooperative savings pools (SACCOs).
                  </p>
      <div className="bg-surface-container-lowest p-space-sm rounded-lg flex flex-col gap-1 mt-2">
      <span className="font-label-sm text-label-sm uppercase font-bold text-primary">Outcome Metrics:</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">• 0% Debt Tool Granting</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">• Mentorship by Local Elders</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">• Community Cooperative Reinvestment</span>
      </div>
      </div>
      <div className="mt-space-md pt-space-xs text-label-sm font-label-sm text-secondary font-bold">
                  LONG-TERM INDEPENDENCE
                </div>
      </div>
      </div>
      {/* Photographic Proof & Impact Snapshot */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg items-center bg-surface-container p-space-lg rounded-xl">
      <div className="h-64 sm:h-80 rounded-lg overflow-hidden relative shadow-md">
      <img className="w-full h-full object-cover" data-alt="Ugandan women tailoring apprentice working with vintage manual Singer sewing machine in a sunlit open-air workshop in Kampala surrounded by colorful kitenge cloth" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmR0EKvWHhZV_Z_QjoYQVEjJgprobeyjvVV8seTpkdfrB4ZvHb4Jwg_8z9xj8qDIpwc_2H97yWDr7RL20YtfR08lDIpakVw3OuCwMCzdm5-vMagvhhX4PciygVzeFeuWIfFUUtcrcjbgUrADm6gYE03ji0Kwq-X5iGOM1MF8P1LJWRYj636J9kHhZviHef-qf-RHTQU_0Zgeb9_QUKU_6DANssDQ4kSICmA3kzd_1S"/>
      <div className="absolute bottom-2 left-2 bg-surface-container-lowest/90 px-3 py-1 rounded text-label-sm font-label-sm text-primary font-bold">
                  Kampala Vocational Workshop Guild
                </div>
      </div>
      <div className="flex flex-col gap-space-md">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-secondary">format_quote</span>
      <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Beneficiary Testimony</span>
      </div>
      <p className="font-headline-sm text-headline-sm text-primary italic font-semibold leading-relaxed">
                  "I came with deep despair after losing my spouse. World Healing Trinity Place offered prayer, counsel, and placed me in the tailoring guild. Today, I feed four children and train other widows."
                </p>
      <div className="flex items-center gap-space-sm">
      <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center font-bold text-on-secondary-container">
                    AK
                  </div>
      <div className="flex flex-col">
      <span className="font-title-md text-title-md font-bold text-primary">Akello K.</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Class of 2024 Artisan • Mukono Outreach</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* PRAYER REQUEST & CRISIS INTERCESSION DOCK */}
      <section className="w-full py-space-xl bg-surface" id="prayer-box">
      <div className="max-w-7xl mx-auto px-gutter">
      <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
      {/* Intercession Text Info */}
      <div className="lg:col-span-5 flex flex-col gap-space-sm justify-between">
      <div className="flex flex-col gap-space-sm">
      <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-secondary/15 text-secondary font-label-sm text-label-sm uppercase font-bold self-start tracking-wider">
      <span className="material-symbols-outlined text-[14px]">lock</span> Confidential • Multi-Faceted Deliverance
                    </div>
      <h2 className="font-headline-xl text-headline-xl text-primary font-bold">
                      Submit Your Petition for Healing &amp; Intercession
                    </h2>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      As commissioned in Object 02 of our charter, our ministerial prayer team and pastoral intercessors hold daily vigil for emotional restoration, physical infirmities, mental health relief, and financial breakthroughs.
                    </p>
      <div className="flex flex-col gap-2 pt-2">
      <div className="flex items-center gap-2 text-body-sm font-body-sm text-on-surface">
      <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
      <span>Strict Pastoral Confidentiality Guaranteed</span>
      </div>
      <div className="flex items-center gap-2 text-body-sm font-body-sm text-on-surface">
      <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
      <span>Prayer Elders review every dispatch individually</span>
      </div>
      <div className="flex items-center gap-2 text-body-sm font-body-sm text-on-surface">
      <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
      <span>Optional telephone counselling referral</span>
      </div>
      </div>
      </div>
      <div className="bg-surface-container p-space-md rounded-lg mt-space-md">
      <span className="font-label-sm text-label-sm font-bold uppercase text-on-surface-variant">Helpline Line Dispatch:</span>
      <p className="font-title-md text-title-md font-bold text-primary mt-1">+256 (0) 772 000 000</p>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Lines open 6:00 AM - 10:00 PM EAT</span>
      </div>
      </div>
      {/* Interactive Request Form */}
      <div className="lg:col-span-7">
      <form className="bg-surface p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md" id="petition-form" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
      <div className="flex flex-col gap-1">
      <label className="font-label-md text-label-md font-bold text-on-surface" htmlFor="name">Full Name (or "Anonymous")</label>
      <input className="px-3.5 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-secondary" id="name" placeholder="e.g. Sister Grace / Brother John" required type="text"/>
      </div>
      <div className="flex flex-col gap-1">
      <label className="font-label-md text-label-md font-bold text-on-surface" htmlFor="phone">Phone or WhatsApp</label>
      <input className="px-3.5 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-secondary" id="phone" placeholder="+256 700 000 000" type="text"/>
      </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
      <div className="flex flex-col gap-1">
      <label className="font-label-md text-label-md font-bold text-on-surface" htmlFor="category">Intercession Need Category</label>
      <select className="px-3.5 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-secondary" id="category">
      <option value="physical">Physical Health &amp; Infirmity</option>
      <option value="emotional">Emotional Healing &amp; Mental Health</option>
      <option value="deliverance">Spiritual Liberation &amp; Deliverance</option>
      <option value="financial">Financial Breakthrough &amp; Livelihood</option>
      <option value="family">Family &amp; Marital Restoration</option>
      </select>
      </div>
      <div className="flex flex-col gap-1">
      <label className="font-label-md text-label-md font-bold text-on-surface" htmlFor="location">District / Country</label>
      <input className="px-3.5 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-secondary" id="location" placeholder="e.g. Kampala / Jinja / International" type="text"/>
      </div>
      </div>
      <div className="flex flex-col gap-1">
      <label className="font-label-md text-label-md font-bold text-on-surface" htmlFor="petition">Prayer Petition Details</label>
      <textarea className="px-3.5 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-secondary" id="petition" placeholder="Describe your prayer need, health situation, or family condition in complete confidence..." required rows={4}></textarea>
      </div>
      <div className="flex items-center gap-2">
      <input className="w-4 h-4 rounded text-secondary focus:ring-secondary" id="callback" type="checkbox"/>
      <label className="font-body-sm text-body-sm text-on-surface-variant" htmlFor="callback">Request a pastoral phone call from a verified ministry elder</label>
      </div>
      <button className="w-full py-3.5 px-6 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-bold transition-all shadow-md flex items-center justify-center gap-2" type="submit">
      <span className="material-symbols-outlined text-[18px] text-secondary-fixed">send</span>
      <span>Dispatch Prayer Petition to the Altar</span>
      </button>
      <div className="hidden p-3 rounded-lg bg-secondary/20 text-on-surface font-body-sm text-body-sm" id="form-feedback">
                      Your petition has been securely received and assigned to our intercessory circle. Peace and grace be multiplied unto you.
                    </div>
      </form>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* COMMUNITY HEALTH & MISSION IMPACT METRICS */}
      <section className="w-full py-space-xl bg-surface-container">
      <div className="max-w-7xl mx-auto px-gutter">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg mb-space-xl">
      <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-2">
      <span className="material-symbols-outlined text-secondary text-[32px]">volunteer_activism</span>
      <span className="font-display-lg text-display-lg font-bold text-primary">1,400+</span>
      <span className="font-title-md text-title-md font-bold text-on-surface">Prayers &amp; Deliverance Sessions</span>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Ministration across our Kampala headquarters and regional tent fellowships.</p>
      </div>
      <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-2">
      <span className="material-symbols-outlined text-secondary text-[32px]">checkroom</span>
      <span className="font-display-lg text-display-lg font-bold text-primary">320+</span>
      <span className="font-title-md text-title-md font-bold text-on-surface">Vocational Apprentices</span>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Equipped with certified machine operation, carpentry, and agricultural skills.</p>
      </div>
      <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-2">
      <span className="material-symbols-outlined text-secondary text-[32px]">medical_services</span>
      <span className="font-display-lg text-display-lg font-bold text-primary">18+</span>
      <span className="font-title-md text-title-md font-bold text-on-surface">Free Medical Camps Held</span>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Providing maternal screenings, hygiene supplies, and nutritional aid to vulnerable youth.</p>
      </div>
      <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-2">
      <span className="material-symbols-outlined text-secondary text-[32px]">diversity_3</span>
      <span className="font-display-lg text-display-lg font-bold text-primary">100%</span>
      <span className="font-title-md text-title-md font-bold text-on-surface">Charitable Allocation</span>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Governed strictly under guarantee provisions, ensuring zero private capital drain.</p>
      </div>
      </div>
      {/* Legal & Governance Assurance Container */}
      <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
      <div className="flex flex-col md:flex-row items-center justify-between gap-space-lg">
      <div className="flex items-center gap-space-md">
      <div className="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-secondary text-[32px]">account_balance</span>
      </div>
      <div className="flex flex-col">
      <h4 className="font-headline-sm text-headline-sm font-bold text-primary">
                      Corporate Governance &amp; URSB Compliance
                    </h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant max-w-2xl">
                      World Healing Trinity Place Limited operates under strict reporting fidelity with audited accounts, registered board minutes, and legal oversight under Ugandan statutory authorities.
                    </p>
      </div>
      </div>
      <div className="flex items-center gap-space-sm shrink-0">
      <Link className="px-5 py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-bold transition-all" to="/about-legal-status">
                    Inspect Memorandum
                  </Link>
      <Link className="px-5 py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-bold transition-all" to="/contact-give">
                    Audit Inquiries
                  </Link>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* CALL TO ACTION BANNER */}
      <section className="w-full py-space-xl bg-primary text-on-primary" id="partner-section">
      <div className="max-w-7xl mx-auto px-gutter">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
      <div className="lg:col-span-8 flex flex-col gap-space-md">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-lowest/15 text-secondary-fixed font-label-sm text-label-sm uppercase font-bold self-start">
      <span className="material-symbols-outlined text-[16px]">handshake</span> Join the Sovereign Mission
                </div>
      <h2 className="font-headline-xl text-headline-xl lg:text-display-lg text-surface-container-lowest font-bold leading-tight">
                  Partner with World Healing Trinity Place Limited.
                </h2>
      <p className="font-body-lg text-body-lg text-primary-fixed max-w-2xl leading-relaxed">
                  Stand with us as we equip communities across Uganda with faith, dignity, and practical skills. Your partnership sponsors sewing equipment, discipleship training, and free health outreach for families in greatest need.
                </p>
      <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
      <Link className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-secondary-container hover:bg-secondary-fixed text-on-secondary-container font-label-md text-label-md font-bold transition-all shadow-lg" to="/partner-donate">
      <span className="material-symbols-outlined text-[20px]">favorite</span>
      <span>Become a Monthly Partner</span>
      </Link>
      <a className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary font-label-md text-label-md font-bold transition-all" href="#prayer-box">
      <span className="material-symbols-outlined text-[20px] text-secondary-fixed">mail</span>
      <span>Submit Prayer Needs</span>
      </a>
      </div>
      </div>
      <div className="lg:col-span-4 bg-surface-container-lowest/10 p-space-lg rounded-xl flex flex-col gap-space-md">
      <h3 className="font-title-lg text-title-lg text-surface-container-lowest font-bold">
                  Direct Ministry Support
                </h3>
      <p className="font-body-sm text-body-sm text-primary-fixed">
                  Contributions are directly received into official institutional accounts under the stewardship of the Board of Trustees.
                </p>
      <div className="flex flex-col gap-2 font-body-sm text-body-sm text-surface-container-lowest">
      <div className="flex items-center justify-between py-1 border-b border-surface-container-lowest/10">
      <span className="text-primary-fixed">Account Name:</span>
      <span className="font-bold">World Healing Trinity Place Ltd</span>
      </div>
      <div className="flex items-center justify-between py-1 border-b border-surface-container-lowest/10">
      <span className="text-primary-fixed">Mobile Money / Airtel:</span>
      <span className="font-bold">+256 772 000 000</span>
      </div>
      <div className="flex items-center justify-between py-1">
      <span className="text-primary-fixed">Currency Accounts:</span>
      <span className="font-bold">UGX / USD</span>
      </div>
      </div>
      <span className="font-label-sm text-label-sm text-secondary-fixed text-center font-bold uppercase tracking-wider">
                  Official Non-Profit Receipt Issued Upon Clearance
                </span>
      </div>
      </div>
      </div>
      </section>
    </div>
  )
}
