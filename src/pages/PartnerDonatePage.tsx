import { Link } from 'react-router-dom'

export default function PartnerDonatePage() {

  return (
    <div className="flex flex-col w-full">
      {/* Top Sovereign Assurance Banner */}
      <section className="w-full bg-primary-container text-on-primary-container px-gutter py-space-sm shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-space-sm text-label-sm font-label-sm">
      <div className="flex items-center gap-space-sm tracking-wide">
      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-secondary-container text-on-secondary-container">
      <span className="material-symbols-outlined text-[13px]">gavel</span>
      </span>
      <span className="uppercase tracking-widest text-on-primary-fixed">Statutory Charter: Clause 7 (Resource Mobilisation &amp; Investment Mandate)</span>
      </div>
      <div className="flex items-center gap-space-md text-on-primary-container">
      <span className="flex items-center gap-1">
      <span className="material-symbols-outlined text-[15px] text-secondary-fixed">verified_user</span>
                Audited under Uganda Companies Act 2012
              </span>
      <span className="hidden sm:inline-block opacity-40">|</span>
      <span className="hidden sm:flex items-center gap-1 text-on-primary-fixed">
      <span className="material-symbols-outlined text-[15px] text-secondary-fixed">assured_workload</span>
                Trustee Oversight Body
              </span>
      </div>
      </div>
      </section>
      {/* Hero Header Section with Keylines & Visual Dignity */}
      <section className="relative w-full bg-surface-container-lowest px-gutter py-space-xl overflow-hidden">
      <div className="absolute -top-32 right-0 w-96 h-96 rounded-full bg-secondary-fixed-dim/15 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-primary-fixed-dim/20 blur-3xl pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
      <div className="lg:col-span-8 flex flex-col gap-space-md">
      {/* Certified Fiduciary Badge */}
      <div className="inline-flex items-center gap-space-xs px-3.5 py-1.5 rounded-full bg-surface-container text-on-surface w-fit shadow-sm">
      <span className="material-symbols-outlined text-secondary text-[16px]">account_balance</span>
      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">
                  Certified Fiduciary Governance • Founding Trustees Panel
                </span>
      </div>
      <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight leading-tight max-w-3xl">
                Partner with Us in <span className="italic font-display-lg text-secondary">Healing</span> and Transformation
              </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Your tax-deductible gifts, tithes, and project grants empower healing ministries, sponsor vocational students, and build community rehabilitation clinics in Uganda.
              </p>
      {/* Statutory Endorsement Card */}
      <div className="bg-surface-container-low rounded-xl p-space-md shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-space-md max-w-2xl">
      <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary shrink-0">
      <span className="material-symbols-outlined text-[26px]">contract</span>
      </div>
      <div className="flex flex-col">
      <span className="font-title-md text-title-md font-bold text-on-surface">Administered with Strict Accountability</span>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
                    In full fidelity to Clause 7 • Regulated stewardship by certified accounting and management trustees under the Companies Act of Uganda.
                  </p>
      </div>
      </div>
      </div>
      {/* Live Allocation Impact Visual Card */}
      <div className="lg:col-span-4 flex flex-col gap-space-md bg-surface-container rounded-xl p-space-lg shadow-md relative">
      <div className="flex items-center justify-between pb-space-xs">
      <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant font-bold">Quarterly Stewardship Audit</span>
      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container-highest text-secondary text-label-sm font-semibold">Active Cycle 2025</span>
      </div>
      <div className="flex items-center gap-space-md my-1">
      {/* Donut Graphic Allocation Chart */}
      <svg className="w-24 h-24 shrink-0 transform -rotate-90" viewBox="0 0 36 36">
      {/* Background circle */}
      <path className="text-surface-container-highest" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
      {/* Programmatic Operations (82%) */}
      <path className="text-secondary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="82, 100" strokeLinecap="round" strokeWidth="3.5"></path>
      {/* Reserve / Ops (18%) */}
      <path className="text-primary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="18, 100" strokeDashoffset="-82" strokeWidth="3.5"></path>
      </svg>
      <div className="flex flex-col gap-1">
      <span className="font-headline-md text-headline-md font-bold text-on-surface">82.4%</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Direct Directives: Field Outreach, Healing Clinics &amp; Vocational Apprenticeship</span>
      </div>
      </div>
      <div className="flex flex-col gap-space-xs pt-space-xs">
      <div className="flex items-center justify-between text-body-sm font-body-sm">
      <span className="flex items-center gap-2 text-on-surface"><span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>Direct Community Projects</span>
      <span className="font-semibold text-on-surface">82.4%</span>
      </div>
      <div className="flex items-center justify-between text-body-sm font-body-sm">
      <span className="flex items-center gap-2 text-on-surface"><span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>Prudent Statutory Reserves</span>
      <span className="font-semibold text-on-surface">11.6%</span>
      </div>
      <div className="flex items-center justify-between text-body-sm font-body-sm">
      <span className="flex items-center gap-2 text-on-surface"><span className="w-2.5 h-2.5 rounded-full bg-surface-container-highest"></span>Audit &amp; Compliance Reporting</span>
      <span className="font-semibold text-on-surface">6.0%</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Interactive Giving Designation & Pledge Configuration Section */}
      <section className="w-full bg-surface-container-low px-gutter py-space-xl">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-sm">
      <div className="flex flex-col gap-space-xs max-w-2xl">
      <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Kingdom Stewardship</span>
      <h2 className="font-headline-xl text-headline-xl text-on-surface">Choose Your Giving Designation</h2>
      <p className="font-body-md text-body-md text-on-surface-variant">
                  Under Article 7 of the Memorandum &amp; Articles of Association, funds are ring-fenced to safeguard the specific charitable intent instructed by every benefactor.
                </p>
      </div>
      <div className="inline-flex p-1 bg-surface-container-highest rounded-xl shrink-0">
      <button className="px-4 py-2 rounded-lg font-label-md text-label-md font-semibold text-on-primary bg-primary shadow-sm transition-all" id="freq-one-time" type="button">One-Time Contribution</button>
      <button className="px-4 py-2 rounded-lg font-label-md text-label-md font-semibold text-on-surface-variant hover:text-on-surface transition-all" id="freq-covenant" type="button">Monthly Covenant Partner</button>
      </div>
      </div>
      {/* Designation Cards Grid (5 Objectives) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md" id="designation-grid">
      {/* 1. General Ministry & Evangelism Fund */}
      <div className="designation-card cursor-pointer bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between group" data-designation="general-evangelism">
      <div className="flex flex-col gap-space-sm">
      <div className="flex items-center justify-between">
      <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface group-hover:bg-primary group-hover:text-on-primary transition-colors">
      <span className="material-symbols-outlined text-[22px]">campaign</span>
      </div>
      <span className="designation-check hidden text-secondary font-bold material-symbols-outlined">check_circle</span>
      </div>
      <h3 className="font-title-lg text-title-lg text-on-surface font-bold">General Ministry &amp; Evangelism Fund</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Underwrites nationwide open-air healing crusades, community gospel outreaches, regional intercessory summits, and pastoral counseling services.
                  </p>
      </div>
      <div className="pt-space-md flex items-center justify-between text-label-sm font-label-sm text-secondary font-semibold">
      <span>Clause 3(a) • Spiritual Mandate</span>
      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
      </div>
      </div>
      {/* 2. Vocational Training & Skills Institute */}
      <div className="designation-card cursor-pointer bg-surface-container-lowest rounded-xl p-space-md shadow-md transition-all flex flex-col justify-between group" data-designation="vocational-guilds">
      <div className="flex flex-col gap-space-sm">
      <div className="flex items-center justify-between">
      <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface group-hover:bg-primary group-hover:text-on-primary transition-colors">
      <span className="material-symbols-outlined text-[22px]">handyman</span>
      </div>
      <span className="designation-check text-secondary font-bold material-symbols-outlined">check_circle</span>
      </div>
      <h3 className="font-title-lg text-title-lg text-on-surface font-bold">Vocational Training &amp; Skills Institute</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Funds industrial sewing machinery, carpentry tools, digital literacy hardware, and covers full tuition bursaries for orphaned youth and vulnerable widows.
                  </p>
      </div>
      <div className="pt-space-md flex items-center justify-between text-label-sm font-label-sm text-secondary font-semibold">
      <span>Clause 3(c) • Economic Empowerment</span>
      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
      </div>
      </div>
      {/* 3. Holistic Healing & Medical Outreaches */}
      <div className="designation-card cursor-pointer bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between group" data-designation="medical-healing">
      <div className="flex flex-col gap-space-sm">
      <div className="flex items-center justify-between">
      <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface group-hover:bg-primary group-hover:text-on-primary transition-colors">
      <span className="material-symbols-outlined text-[22px]">vital_signs</span>
      </div>
      <span className="designation-check hidden text-secondary font-bold material-symbols-outlined">check_circle</span>
      </div>
      <h3 className="font-title-lg text-title-lg text-on-surface font-bold">Holistic Healing &amp; Medical Outreaches</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Mobilizes field medical supplies, triage clinic tents, mobile maternal healthcare units, malaria therapies, and trauma restoration counseling teams.
                  </p>
      </div>
      <div className="pt-space-md flex items-center justify-between text-label-sm font-label-sm text-secondary font-semibold">
      <span>Clause 3(d) • Compassion Care</span>
      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
      </div>
      </div>
      {/* 4. Land & Infrastructure Acquisition */}
      <div className="designation-card cursor-pointer bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between group" data-designation="land-infrastructure">
      <div className="flex flex-col gap-space-sm">
      <div className="flex items-center justify-between">
      <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface group-hover:bg-primary group-hover:text-on-primary transition-colors">
      <span className="material-symbols-outlined text-[22px]">domain_add</span>
      </div>
      <span className="designation-check hidden text-secondary font-bold material-symbols-outlined">check_circle</span>
      </div>
      <h3 className="font-title-lg text-title-lg text-on-surface font-bold">Land &amp; Infrastructure Acquisition</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Anchored directly in Object 9: Capital fundraising for permanent land acquisition to establish the Central Sanctuary, Regional Healing Clinic, and Vocational Classrooms.
                  </p>
      </div>
      <div className="pt-space-md flex items-center justify-between text-label-sm font-label-sm text-secondary font-semibold">
      <span>Object 9 • Capital Development</span>
      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
      </div>
      </div>
      {/* 5. Tithes & Sacrificial Offerings */}
      <div className="designation-card cursor-pointer bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between group md:col-span-2 lg:col-span-2" data-designation="tithes-offerings">
      <div className="flex flex-col gap-space-sm">
      <div className="flex items-center justify-between">
      <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface group-hover:bg-primary group-hover:text-on-primary transition-colors">
      <span className="material-symbols-outlined text-[22px]">volunteer_activism</span>
      </div>
      <span className="designation-check hidden text-secondary font-bold material-symbols-outlined">check_circle</span>
      </div>
      <h3 className="font-title-lg text-title-lg text-on-surface font-bold">Tithes &amp; Sacrificial Offerings</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Biblical obedience and spiritual covenant giving under Malachi 3:10 and 2 Corinthians 9:7. Directly sustaining daily ministry intercession, pastoral care, and holy stewardship operations.
                  </p>
      </div>
      <div className="pt-space-md flex items-center justify-between text-label-sm font-label-sm text-secondary font-semibold">
      <span>Clause 7 • Covenant Ministry Stewardship</span>
      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
      </div>
      </div>
      </div>
      {/* Quick Amount Matrix & Input */}
      <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col lg:flex-row items-center justify-between gap-space-md">
      <div className="flex flex-col gap-1 w-full lg:w-auto">
      <span className="font-title-md text-title-md font-bold text-on-surface">Enter Gift Valuation</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant" id="selected-summary-text">Allocated toward: <strong className="text-on-surface">Vocational Training &amp; Skills Institute</strong></span>
      </div>
      <div className="flex flex-wrap items-center gap-space-xs w-full lg:w-auto">
      <button className="amount-btn px-4 py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md font-semibold hover:bg-surface-container-highest transition-colors" type="button">UGX 50,000</button>
      <button className="amount-btn px-4 py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md font-semibold hover:bg-surface-container-highest transition-colors" type="button">UGX 200,000</button>
      <button className="amount-btn px-4 py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold shadow-sm transition-colors" type="button">UGX 500,000</button>
      <button className="amount-btn px-4 py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md font-semibold hover:bg-surface-container-highest transition-colors" type="button">$150 USD</button>
      <button className="amount-btn px-4 py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md font-semibold hover:bg-surface-container-highest transition-colors" type="button">$500 USD</button>
      <div className="relative flex items-center w-full sm:w-48 mt-2 sm:mt-0">
      <input className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container text-on-surface placeholder:text-on-surface-variant/60 font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest focus:shadow-sm" placeholder="Custom Amount" type="text"/>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Flexible Gateways & Banking Rails (Uganda Domestic & Global) */}
      <section className="w-full bg-surface px-gutter py-space-xl">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
      <div className="flex flex-col gap-space-xs text-center max-w-3xl mx-auto">
      <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Transparent Remittance Rails</span>
      <h2 className="font-headline-xl text-headline-xl text-on-surface">Payment Gateways &amp; Banking Channels</h2>
      <p className="font-body-md text-body-md text-on-surface-variant">
                Contributions are acknowledged with official digital receipts endorsed by our registered finance office in Kampala.
              </p>
      </div>
      {/* 4 Pillars of Remittance */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
      {/* Rail 1: Mobile Money Uganda */}
      <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between">
      <div className="flex flex-col gap-space-sm">
      <div className="flex items-center justify-between pb-space-xs">
      <span className="w-10 h-10 rounded-lg bg-secondary-container/20 text-secondary flex items-center justify-center">
      <span className="material-symbols-outlined text-[24px]">phone_android</span>
      </span>
      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Domestic Uganda</span>
      </div>
      <h3 className="font-title-lg text-title-lg text-on-surface font-bold">Mobile Money</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Instant domestic giving via MTN MoMo and Airtel Money merchant lines.
                  </p>
      <div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-space-xs">
      <div className="flex flex-col">
      <span className="font-label-sm text-label-sm text-on-surface-variant">MTN MoMo Merchant Code:</span>
      <span className="font-title-md text-title-md font-bold text-on-surface select-all">648 291</span>
      <span className="font-body-sm text-body-sm text-secondary">Dial *165*3# • WORLD HEALING TRINITY</span>
      </div>
      <div className="h-px bg-surface-container-highest my-1"></div>
      <div className="flex flex-col">
      <span className="font-label-sm text-label-sm text-on-surface-variant">Airtel Money Merchant Code:</span>
      <span className="font-title-md text-title-md font-bold text-on-surface select-all">120 4492</span>
      <span className="font-body-sm text-body-sm text-secondary">Dial *185*9# • WORLD HEALING TRINITY</span>
      </div>
      </div>
      </div>
      <div className="pt-space-md">
      <button className="w-full py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold transition-colors flex items-center justify-center gap-2" type="button">
      <span className="material-symbols-outlined text-[16px]">content_copy</span>
                    Copy USSD Steps
                  </button>
      </div>
      </div>
      {/* Rail 2: Bank Wire Transfer (Stanbic & Centenary) */}
      <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between">
      <div className="flex flex-col gap-space-sm">
      <div className="flex items-center justify-between pb-space-xs">
      <span className="w-10 h-10 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center">
      <span className="material-symbols-outlined text-[24px]">account_balance</span>
      </span>
      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Institutional Wire</span>
      </div>
      <h3 className="font-title-lg text-title-lg text-on-surface font-bold">Bank Wire Transfer</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Commercial accounts dedicated solely to institutional grants and large gifts.
                  </p>
      <div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-space-xs">
      <div className="flex flex-col">
      <span className="font-label-sm text-label-sm text-on-surface-variant">Account Name (Both Banks):</span>
      <span className="font-body-sm text-body-sm font-bold text-on-surface select-all leading-tight">WORLD HEALING TRINITY PLACE LIMITED</span>
      </div>
      <div className="h-px bg-surface-container-highest my-1"></div>
      <div className="flex flex-col">
      <span className="font-label-sm text-label-sm text-on-surface-variant">Stanbic Bank Uganda (UGX/USD):</span>
      <span className="font-title-md text-title-md font-bold text-on-surface select-all">9030018823419</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Main Branch, Kampala</span>
      </div>
      <div className="h-px bg-surface-container-highest my-1"></div>
      <div className="flex flex-col">
      <span className="font-label-sm text-label-sm text-on-surface-variant">Centenary Bank (Development Fund):</span>
      <span className="font-title-md text-title-md font-bold text-on-surface select-all">3100084592011</span>
      </div>
      </div>
      </div>
      <div className="pt-space-md">
      <button className="w-full py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold transition-colors flex items-center justify-center gap-2" type="button">
      <span className="material-symbols-outlined text-[16px]">file_download</span>
                    Bank Remittance Slip (PDF)
                  </button>
      </div>
      </div>
      {/* Rail 3: International Online Giving */}
      <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between">
      <div className="flex flex-col gap-space-sm">
      <div className="flex items-center justify-between pb-space-xs">
      <span className="w-10 h-10 rounded-lg bg-surface-container-highest text-on-surface flex items-center justify-center">
      <span className="material-symbols-outlined text-[24px]">public</span>
      </span>
      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Global Diaspora</span>
      </div>
      <h3 className="font-title-lg text-title-lg text-on-surface font-bold">Card &amp; SWIFT Wire</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Secure global processing for cards, PayPal, and international SWIFT telegraphic transfers.
                  </p>
      <div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-space-xs">
      <div className="flex flex-col">
      <span className="font-label-sm text-label-sm text-on-surface-variant">SWIFT / BIC Code:</span>
      <span className="font-title-md text-title-md font-bold text-on-surface select-all tracking-wider">SBICUGKX</span>
      </div>
      <div className="h-px bg-surface-container-highest my-1"></div>
      <div className="flex flex-col">
      <span className="font-label-sm text-label-sm text-on-surface-variant">Direct Card &amp; Online Processing:</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Visa, Mastercard, American Express • Encrypted 256-bit Stripe Gateway.</span>
      </div>
      <div className="h-px bg-surface-container-highest my-1"></div>
      <div className="flex flex-col">
      <span className="font-label-sm text-label-sm text-on-surface-variant">PayPal Giving Channel:</span>
      <span className="font-body-sm text-body-sm font-semibold text-secondary select-all">partners@worldhealingtrinity.org</span>
      </div>
      </div>
      </div>
      <div className="pt-space-md">
      <button className="w-full py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm" type="button">
      <span className="material-symbols-outlined text-[16px]">credit_card</span>
                    Give by Card Online
                  </button>
      </div>
      </div>
      {/* Rail 4: In-Kind Donations & Equipment */}
      <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between">
      <div className="flex flex-col gap-space-sm">
      <div className="flex items-center justify-between pb-space-xs">
      <span className="w-10 h-10 rounded-lg bg-surface-container text-secondary flex items-center justify-center">
      <span className="material-symbols-outlined text-[24px]">inventory_2</span>
      </span>
      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Material Aid</span>
      </div>
      <h3 className="font-title-lg text-title-lg text-on-surface font-bold">In-Kind Donations</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Tangible instruments for our community guilds, outreach dispensaries, and classrooms.
                  </p>
      <div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-space-xs">
      <div className="flex items-center gap-2 text-body-sm font-body-sm text-on-surface">
      <span className="material-symbols-outlined text-secondary text-[16px]">check</span>
      <span>Industrial sewing &amp; knitting tools</span>
      </div>
      <div className="flex items-center gap-2 text-body-sm font-body-sm text-on-surface">
      <span className="material-symbols-outlined text-secondary text-[16px]">check</span>
      <span>Carpentry kits &amp; electrical sets</span>
      </div>
      <div className="flex items-center gap-2 text-body-sm font-body-sm text-on-surface">
      <span className="material-symbols-outlined text-secondary text-[16px]">check</span>
      <span>Medical diagnostics &amp; triage tents</span>
      </div>
      <div className="flex items-center gap-2 text-body-sm font-body-sm text-on-surface">
      <span className="material-symbols-outlined text-secondary text-[16px]">check</span>
      <span>Bibles, hymnals &amp; textbooks</span>
      </div>
      </div>
      </div>
      <div className="pt-space-md">
      <button className="w-full py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold transition-colors flex items-center justify-center gap-2" type="button">
      <span className="material-symbols-outlined text-[16px]">local_shipping</span>
                    Logistics Shipment Desk
                  </button>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Photo-Narrative & Impact Deployment Gallery */}
      <section className="w-full bg-surface-container-lowest px-gutter py-space-xl">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
      <div className="lg:col-span-5 flex flex-col gap-space-md">
      <div className="inline-flex items-center gap-2 text-secondary font-label-sm text-label-sm uppercase tracking-widest font-bold">
      <span className="material-symbols-outlined text-[16px]">visibility</span>
                  Verified Impact on the Ground
                </div>
      <h2 className="font-headline-xl text-headline-xl text-on-surface">
                  How Every Shilling and Dollar Transforms Lives
                </h2>
      <p className="font-body-md text-body-md text-on-surface-variant">
                  Because our foundational charter insists on radical transparency, your generosity translates directly into certified apprentice certifications, active mobile healthcare dispatches, and permanent community infrastructure.
                </p>
      <div className="grid grid-cols-2 gap-space-md pt-space-xs">
      <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col">
      <span className="font-display-lg text-headline-xl text-on-surface font-bold">1,420+</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Youth Trained in Practical Guilds</span>
      </div>
      <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col">
      <span className="font-display-lg text-headline-xl text-on-surface font-bold">38</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Community Healing Outreaches Hosted</span>
      </div>
      </div>
      </div>
      <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-space-md">
      <div className="flex flex-col gap-space-xs">
      <img className="w-full h-64 object-cover rounded-xl shadow-sm" data-alt="Ugandan young adults in a brightly lit technical workshop learning tailoring and mechanical assembly skills under the mentorship of senior guild instructors, warm golden ambient sunlight, institutional photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBptzl3thfC-1ooxRS7tnzj34_iLV9GSMvZUxE-79XJPrnkoRAn-AqrjsSBjClXRGy2M0PvMCt1i3vrZkGuwmOsmw9ZgUgZHaYxa5ekoq8hVjOFDLHnyiIYzbh_wYP9LAPd_jlMDq3kItKIXT0yXH1-HzF_nr3QMgC9K2xksVGk-rkOxpvQT5fhClwaw5Fv-u70sZYROOz7__v5TszogXyyGBFFXGO55hvZ8IkPWoBp"/>
      <span className="font-title-md text-title-md font-bold text-on-surface pt-1">Vocational Guild Workshops</span>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Beneficiaries completing 9-month certified training in tailoring and joinery.</p>
      </div>
      <div className="flex flex-col gap-space-xs">
      <img className="w-full h-64 object-cover rounded-xl shadow-sm" data-alt="Compassionate healthcare volunteer team conducting free maternal wellness checkups and health consultations under clean white medical marquee tents in rural Uganda, dignity and serene care" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnbNmsH0iFDPP2wBWXq2_rt6WuEZu0cARD3KeMMOsGG3T9LhQceuY7PjV7lCekV9bg6ObntB6Z2woKpUTaNRzxhSOGETnJR2VMHHyDlkV13SPMInGczL3yiP7S0KTCT_HO4-0IXBHZZNS-ZQWHWNjycFovkNj0Goouo1nic6GBahjMaP78qNVuzr0hpXVEQNBrIOlp9-_j8yp9GiWHiATKAKjtZfOKahfuj3-jAVlV"/>
      <span className="font-title-md text-title-md font-bold text-on-surface pt-1">Community Triage &amp; Healing</span>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Free medical consultations and prescription distribution in peri-urban Kampala.</p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Stewardship Promise & Fiduciary Oversight Section */}
      <section className="w-full bg-surface-container-high/40 px-gutter py-space-xl">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
      <div className="max-w-3xl flex flex-col gap-space-xs">
      <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Fiduciary Governance • Clause 7 Mandate</span>
      <h2 className="font-headline-xl text-headline-xl text-on-surface">Our Stewardship Promise &amp; Accountability</h2>
      <p className="font-body-md text-body-md text-on-surface-variant">
                World Healing Trinity Place Limited operates with open registers. We honor our donors through independent statutory audits, transparent expenditure tracking, and structured governance.
              </p>
      </div>
      {/* Governance Pillars & Trustee Reference Bento */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
      {/* Card 1: Statutory Audits & Subscriber Reference */}
      <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
      <div className="flex flex-col gap-space-sm">
      <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-on-surface">
      <span className="material-symbols-outlined text-[24px]">balance</span>
      </div>
      <h3 className="font-title-lg text-title-lg font-bold text-on-surface">Audited Financial Statements</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Accounts are supervised under the direction of certified accounting trustees—referencing founding subscriber <strong className="text-on-surface">Emojong-Odeke Joram, Accountant</strong>—and reviewed by certified external auditors in accordance with GAAP and Ugandan law.
                  </p>
      </div>
      <div className="pt-space-md text-label-sm font-label-sm text-secondary font-semibold flex items-center gap-1">
      <span className="material-symbols-outlined text-[16px]">verified</span>
                  Independent Annual Audit Registry
                </div>
      </div>
      {/* Card 2: Quarterly Transparency Dispatches */}
      <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
      <div className="flex flex-col gap-space-sm">
      <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-on-surface">
      <span className="material-symbols-outlined text-[24px]">description</span>
      </div>
      <h3 className="font-title-lg text-title-lg font-bold text-on-surface">Quarterly Dispatches</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Every partner receives quarterly granular receipts, disbursement breakdowns, and project milestones documenting exact allocations toward medicine, machinery, and campus land.
                  </p>
      </div>
      <div className="pt-space-md text-label-sm font-label-sm text-secondary font-semibold flex items-center gap-1">
      <span className="material-symbols-outlined text-[16px]">mail</span>
                  Direct Donor Delivery via Post / Email
                </div>
      </div>
      {/* Card 3: Prudent Investment & Object 9 Protection */}
      <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
      <div className="flex flex-col gap-space-sm">
      <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-on-surface">
      <span className="material-symbols-outlined text-[24px]">shield_with_heart</span>
      </div>
      <h3 className="font-title-lg text-title-lg font-bold text-on-surface">Object 9 Asset Ring-Fencing</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Building and land acquisition capital is held in restricted escrow accounts, inaccessible for administrative overhead, ensuring your permanent legacy remains inviolable.
                  </p>
      </div>
      <div className="pt-space-md text-label-sm font-label-sm text-secondary font-semibold flex items-center gap-1">
      <span className="material-symbols-outlined text-[16px]">lock</span>
                  URSB Registered Entity Protection
                </div>
      </div>
      </div>
      </div>
      </section>
      {/* Pastoral Prayer of Blessing & Spiritual Gratitude Section */}
      <section className="w-full bg-primary-container text-on-primary-container px-gutter py-space-xl relative overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-space-md relative z-10">
      <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shadow-md">
      <span className="material-symbols-outlined text-[24px]">spa</span>
      </div>
      <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed font-bold">
              A Pastoral Benediction for Our Benefactors &amp; Covenant Partners
            </span>
      <h2 className="font-headline-xl text-headline-xl text-on-primary text-center max-w-2xl">
              "May the God of Abundant Grace Multiply Every Seed Sown"
            </h2>
      <div className="bg-surface-container-lowest/10 backdrop-blur-md rounded-xl p-space-lg text-on-primary-fixed max-w-3xl shadow-sm">
      <p className="font-display-lg italic text-body-lg text-on-primary leading-relaxed mb-space-sm">
                "Now he who supplies seed to the sower and bread for food will also supply and increase your store of seed and will enlarge the harvest of your righteousness. You will be enriched in every way so that you can be generous on every occasion, and through us your generosity will result in thanksgiving to God."
              </p>
      <span className="font-label-md text-label-md text-secondary-fixed uppercase tracking-wider font-semibold">— 2 Corinthians 9:10–11</span>
      </div>
      <p className="font-body-md text-body-md text-on-primary-container max-w-2xl leading-relaxed">
              We lift up our partners daily during our morning intercession service. As you stand with the destitute, the ailing, and the disenfranchised across Uganda, may the Lord open windows of divine favor, restore your health, and establish peace in your household.
            </p>
      <div className="pt-space-sm flex flex-col sm:flex-row items-center gap-space-md">
      <Link className="px-6 py-3 rounded-lg font-label-md text-label-md font-semibold text-on-surface bg-secondary-fixed hover:bg-secondary-fixed-dim transition-colors shadow-sm" to="/prayer-request">
                Submit Personal Prayer Request
              </Link>
      <Link className="px-6 py-3 rounded-lg font-label-md text-label-md font-semibold text-on-primary bg-surface-container-highest/20 hover:bg-surface-container-highest/30 transition-colors" to="/contact-give">
                Speak with Trustee Treasury Desk
              </Link>
      </div>
      </div>
      </section>
    </div>
  )
}
