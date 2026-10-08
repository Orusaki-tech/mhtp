import { type FormEvent } from 'react'

export default function VocationalEnrollmentPage() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <div className="flex flex-col w-full">
      {/* Top Statutory Ribbon & Context Nav */}
      <section className="w-full bg-surface-container-low py-space-sm px-gutter">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
      <nav aria-label="Breadcrumb" className="flex items-center gap-space-xs text-label-sm font-label-sm text-on-surface-variant flex-wrap">
      <a className="hover:text-on-surface transition-colors" href="#">Portal Registry</a>
      <span className="material-symbols-outlined text-[12px] text-outline">chevron_right</span>
      <a className="hover:text-on-surface transition-colors" href="#">Vocational Guilds Directorate</a>
      <span className="material-symbols-outlined text-[12px] text-outline">chevron_right</span>
      <span className="text-on-surface font-semibold">2025/2026 Cohort Admissions</span>
      </nav>
      <div className="inline-flex items-center gap-2 self-start md:self-auto bg-surface-container-highest px-3 py-1 rounded-DEFAULT text-label-sm font-label-sm text-on-surface">
      <span className="material-symbols-outlined text-[15px] text-secondary">verified_user</span>
      <span>Statutory Charter: Clause 3(c) &amp; Object 4 — Vocational Guilds &amp; Economic Self-Reliance</span>
      </div>
      </div>
      </section>
      {/* Editorial Admissions Headline Banner */}
      <section className="w-full bg-surface-container-lowest px-gutter py-space-xl">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-md">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
      <div className="max-w-3xl flex flex-col gap-space-sm">
      <div className="flex items-center gap-2 text-label-sm font-label-sm uppercase tracking-widest text-secondary font-bold">
      <span className="inline-block w-2.5 h-2.5 rounded-full bg-secondary"></span>
                  Republic of Uganda • Reg. Companies Act 2012
                </div>
      <h1 className="font-headline-xl text-headline-xl font-bold text-on-surface tracking-tight leading-tight">
                  Vocational Guild Student Admissions &amp; Apprenticeship Enrollment
                </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  Equipping vulnerable youth, widows, and community leaders across Uganda with accredited practical trades, Christian character mentorship, comprehensive startup toolkits, and market integration.
                </p>
      </div>
      {/* Offline Download & Registry Info Card */}
      <div className="bg-surface-container p-space-md rounded-xl flex flex-col gap-space-xs shrink-0 lg:max-w-xs shadow-sm">
      <div className="flex items-center gap-2 text-on-surface font-semibold font-title-md text-title-md">
      <span className="material-symbols-outlined text-secondary">feed</span>
      <span>Parish Paper Admissions</span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
                  For village churches, LC1 leaders, and applicants without steady internet connectivity.
                </p>
      <button className="mt-2 inline-flex items-center justify-center gap-2 bg-primary text-on-primary font-label-md text-label-md py-2.5 px-4 rounded-lg hover:bg-primary-container transition-all shadow-sm" type="button">
      <span className="material-symbols-outlined text-[18px]">download</span>
      <span>Download Offline Form (PDF)</span>
      </button>
      </div>
      </div>
      {/* Trust Metrics Ticker */}
      <div className="mt-space-md grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
      <div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-0.5 shadow-sm">
      <span className="font-label-sm text-label-sm text-secondary font-bold uppercase">Bursary Provision</span>
      <span className="font-headline-sm text-headline-sm font-bold text-on-surface">100% Tuition</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Fully endowed fellowships</span>
      </div>
      <div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-0.5 shadow-sm">
      <span className="font-label-sm text-label-sm text-secondary font-bold uppercase">Accreditation</span>
      <span className="font-headline-sm text-headline-sm font-bold text-on-surface">DIT Certified</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">National skills benchmark</span>
      </div>
      <div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-0.5 shadow-sm">
      <span className="font-label-sm text-label-sm text-secondary font-bold uppercase">Graduation Grant</span>
      <span className="font-headline-sm text-headline-sm font-bold text-on-surface">Full Tool-Kit</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Equipped for self-employment</span>
      </div>
      <div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-0.5 shadow-sm">
      <span className="font-label-sm text-label-sm text-secondary font-bold uppercase">Training Term</span>
      <span className="font-headline-sm text-headline-sm font-bold text-on-surface">6 Months</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Intensive guild modules</span>
      </div>
      <div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-0.5 shadow-sm col-span-2 sm:col-span-1">
      <span className="font-label-sm text-label-sm text-secondary font-bold uppercase">Verified Alumni</span>
      <span className="font-headline-sm text-headline-sm font-bold text-on-surface">320+ Artisans</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Deployed across Uganda</span>
      </div>
      </div>
      </div>
      </section>
      {/* Interactive Multi-Step Application System */}
      <section className="w-full px-gutter py-space-xl bg-surface">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
      {/* Stepper Header Container */}
      <div className="bg-surface-container-lowest p-space-md sm:p-space-lg rounded-xl shadow-md flex flex-col gap-space-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
      <div className="flex items-center gap-space-sm">
      <span className="w-9 h-9 rounded-lg bg-primary-container text-secondary-fixed flex items-center justify-center font-bold">
      <span className="material-symbols-outlined text-[20px]">assignment</span>
      </span>
      <div>
      <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">Application Registration Console</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Official Registry Intake Reference: 2025/UG-ADM-TRINITY</p>
      </div>
      </div>
      <div className="flex items-center gap-space-sm self-end sm:self-auto">
      <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-DEFAULT font-label-md text-label-md font-bold" id="stepProgressBadge">
                    Step 1 of 4: 25% Completed
                  </span>
      </div>
      </div>
      {/* Track Visual Stepper Bar */}
      <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
      <div className="h-full bg-secondary transition-all duration-500 ease-out" id="applicationProgressBar" style={{width: '25%'}}></div>
      </div>
      {/* 4 Phase Stepper Pills Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-space-xs" id="stepPillNav">
      <button className="step-pill text-left p-3 rounded-lg flex items-center gap-3 bg-surface-container-high transition-all text-on-surface" data-step="1" type="button">
      <span className="step-pill-indicator w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-md text-label-md font-bold shrink-0">1</span>
      <div className="flex flex-col min-w-0">
      <span className="font-label-sm text-label-sm font-bold truncate">Personal Details</span>
      <span className="font-body-sm text-[11px] text-on-surface-variant truncate">NIN &amp; Residency</span>
      </div>
      </button>
      <button className="step-pill text-left p-3 rounded-lg flex items-center gap-3 bg-surface-container-low hover:bg-surface-container-high transition-all text-on-surface" data-step="2" type="button">
      <span className="step-pill-indicator w-7 h-7 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-label-md text-label-md font-bold shrink-0">2</span>
      <div className="flex flex-col min-w-0">
      <span className="font-label-sm text-label-sm font-bold truncate">Guild Trade Choice</span>
      <span className="font-body-sm text-[11px] text-on-surface-variant truncate">Trade &amp; Shift Times</span>
      </div>
      </button>
      <button className="step-pill text-left p-3 rounded-lg flex items-center gap-3 bg-surface-container-low hover:bg-surface-container-high transition-all text-on-surface" data-step="3" type="button">
      <span className="step-pill-indicator w-7 h-7 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-label-md text-label-md font-bold shrink-0">3</span>
      <div className="flex flex-col min-w-0">
      <span className="font-label-sm text-label-sm font-bold truncate">Bursary Assessment</span>
      <span className="font-body-sm text-[11px] text-on-surface-variant truncate">Sponsorship Need</span>
      </div>
      </button>
      <button className="step-pill text-left p-3 rounded-lg flex items-center gap-3 bg-surface-container-low hover:bg-surface-container-high transition-all text-on-surface" data-step="4" type="button">
      <span className="step-pill-indicator w-7 h-7 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-label-md text-label-md font-bold shrink-0">4</span>
      <div className="flex flex-col min-w-0">
      <span className="font-label-sm text-label-sm font-bold truncate">Endorsement &amp; Send</span>
      <span className="font-body-sm text-[11px] text-on-surface-variant truncate">Pastor / LC1 Witness</span>
      </div>
      </button>
      </div>
      </div>
      {/* Stepper Form Body Layout */}
      <form className="relative" id="enrollmentForm" onSubmit={handleSubmit}>
      {/* STEP 1: Applicant Demographics & Residency */}
      <div className="step-section flex flex-col gap-space-lg bg-surface-container-lowest p-space-md sm:p-space-xl rounded-xl shadow-md" id="stepSection1">
      <div className="flex flex-col gap-1 pb-space-sm">
      <span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">Phase I of IV</span>
      <h3 className="font-headline-md text-headline-md font-bold text-on-surface">Applicant Demographics, Identity &amp; Residence</h3>
      <p className="font-body-md text-body-md text-on-surface-variant">Accurate details are verified against the National Identification and Registration Authority (NIRA) database or UNHCR refugee documentation.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
      {/* Full Name */}
      <div className="flex flex-col gap-1.5 md:col-span-2">
      <label className="font-label-md text-label-md font-bold text-on-surface" htmlFor="fullName">Applicant Full Legal Name (As in Official Records) *</label>
      <input className="w-full bg-surface-container-low text-on-surface px-4 py-3 rounded-lg focus:outline-none focus:bg-surface-container-lowest font-body-md text-body-md shadow-sm" id="fullName" placeholder="e.g. Namusoke Grace Kyomugisha" required type="text"/>
      </div>
      {/* Gender */}
      <div className="flex flex-col gap-1.5">
      <label className="font-label-md text-label-md font-bold text-on-surface" htmlFor="genderSelect">Gender *</label>
      <select className="w-full bg-surface-container-low text-on-surface px-4 py-3 rounded-lg focus:outline-none focus:bg-surface-container-lowest font-body-md text-body-md shadow-sm" id="genderSelect" required>
      <option value="">Select Gender</option>
      <option value="Female">Female</option>
      <option value="Male">Male</option>
      </select>
      </div>
      {/* Date of Birth */}
      <div className="flex flex-col gap-1.5">
      <label className="font-label-md text-label-md font-bold text-on-surface" htmlFor="birthDate">Date of Birth *</label>
      <input className="w-full bg-surface-container-low text-on-surface px-4 py-3 rounded-lg focus:outline-none focus:bg-surface-container-lowest font-body-md text-body-md shadow-sm" id="birthDate" required type="date"/>
      </div>
      {/* NIN or Refugee No */}
      <div className="flex flex-col gap-1.5">
      <label className="font-label-md text-label-md font-bold text-on-surface" htmlFor="idNumber">National ID (NIN) / Refugee Reg. No. *</label>
      <input className="w-full bg-surface-container-low text-on-surface px-4 py-3 rounded-lg focus:outline-none focus:bg-surface-container-lowest font-body-md text-body-md shadow-sm" id="idNumber" placeholder="CM98000000XXXX or Refugee No." required type="text"/>
      </div>
      {/* Contact Phone / WhatsApp line */}
      <div className="flex flex-col gap-1.5">
      <label className="font-label-md text-label-md font-bold text-on-surface" htmlFor="phoneLine">Active Phone / WhatsApp Line (SMS Cohort Alerts) *</label>
      <input className="w-full bg-surface-container-low text-on-surface px-4 py-3 rounded-lg focus:outline-none focus:bg-surface-container-lowest font-body-md text-body-md shadow-sm" id="phoneLine" placeholder="+256 700 000 000" required type="tel"/>
      </div>
      {/* District of Residence */}
      <div className="flex flex-col gap-1.5">
      <label className="font-label-md text-label-md font-bold text-on-surface" htmlFor="districtSelect">District of Primary Residence *</label>
      <select className="w-full bg-surface-container-low text-on-surface px-4 py-3 rounded-lg focus:outline-none focus:bg-surface-container-lowest font-body-md text-body-md shadow-sm" id="districtSelect" required>
      <option value="">Select District</option>
      <option value="Kampala">Kampala</option>
      <option value="Wakiso">Wakiso</option>
      <option value="Mukono">Mukono</option>
      <option value="Jinja">Jinja</option>
      <option value="Luweero">Luweero</option>
      <option value="Mpigi">Mpigi</option>
      <option value="Masaka">Masaka</option>
      <option value="Soroti">Soroti</option>
      <option value="Arua">Arua</option>
      <option value="Gulu">Gulu</option>
      <option value="Other">Other District (Uganda)</option>
      </select>
      </div>
      {/* Sub-county / Parish / LC1 Village */}
      <div className="flex flex-col gap-1.5">
      <label className="font-label-md text-label-md font-bold text-on-surface" htmlFor="parishAddress">Sub-County / Parish / LC1 Village *</label>
      <input className="w-full bg-surface-container-low text-on-surface px-4 py-3 rounded-lg focus:outline-none focus:bg-surface-container-lowest font-body-md text-body-md shadow-sm" id="parishAddress" placeholder="e.g. Nakawa Division, Mutungo LC1" required type="text"/>
      </div>
      {/* Next of Kin / Guardian Contact */}
      <div className="flex flex-col gap-1.5 md:col-span-2">
      <label className="font-label-md text-label-md font-bold text-on-surface" htmlFor="nextOfKin">Next of Kin / Guardian (Full Name, Relationship &amp; Phone) *</label>
      <input className="w-full bg-surface-container-low text-on-surface px-4 py-3 rounded-lg focus:outline-none focus:bg-surface-container-lowest font-body-md text-body-md shadow-sm" id="nextOfKin" placeholder="e.g. Sarah Babirye (Mother) - +256 772 123 456" required type="text"/>
      </div>
      </div>
      {/* Bottom Action Buttons */}
      <div className="flex justify-end pt-space-md">
      <button className="inline-flex items-center gap-2 bg-primary text-on-primary font-label-md text-label-md py-3 px-6 rounded-lg hover:bg-primary-container transition-all shadow-md" type="button">
      <span>Continue to Trade Selection</span>
      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
      </button>
      </div>
      </div>
      {/* STEP 2: Guild Trade Selection & Preferred Shift */}
      <div className="step-section hidden flex flex-col gap-space-lg bg-surface-container-lowest p-space-md sm:p-space-xl rounded-xl shadow-md" id="stepSection2">
      <div className="flex flex-col gap-1 pb-space-sm">
      <span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">Phase II of IV</span>
      <h3 className="font-headline-md text-headline-md font-bold text-on-surface">Guild Trade Specialization &amp; Shift Selection</h3>
      <p className="font-body-md text-body-md text-on-surface-variant">Select ONE vocational guild trade. Practical guild workshops take place 5 days weekly under certified master craftsmen.</p>
      </div>
      {/* Interactive Guild Trade Cards */}
      <div className="flex flex-col gap-space-sm">
      <label className="font-label-md text-label-md font-bold text-on-surface">Select Your Dedicated Trade Guild *</label>
      <input id="selectedGuildTrade" name="selectedGuildTrade" type="hidden" value="tailoring"/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md" id="guildTradeGrid">
      {/* Trade 1 */}
      <div className="guild-card cursor-pointer bg-surface-container-low p-space-md rounded-xl transition-all shadow-sm flex flex-col justify-between gap-space-sm bg-surface-container-highest">
      <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
      <span className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
      <span className="material-symbols-outlined text-[24px]">styler</span>
      </span>
      <span className="selection-check w-6 h-6 rounded-full bg-secondary text-on-secondary flex items-center justify-center text-[14px] font-bold">
      <span className="material-symbols-outlined text-[16px]">check</span>
      </span>
      </div>
      <h4 className="font-title-lg text-title-lg font-bold text-on-surface">Tailoring, Garment Design &amp; Apparel</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Pattern drafting, industrial singer sewing maintenance, uniform batch production, embroidery, and textile retail costing.</p>
      </div>
      <div className="flex items-center justify-between pt-space-xs text-label-sm font-label-sm text-on-surface-variant">
      <span>Tool-Kit: Sewing Machine &amp; Kit</span>
      <span className="font-semibold text-secondary">DIT Level I/II</span>
      </div>
      </div>
      {/* Trade 2 */}
      <div className="guild-card cursor-pointer bg-surface-container-low p-space-md rounded-xl transition-all shadow-sm flex flex-col justify-between gap-space-sm">
      <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
      <span className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
      <span className="material-symbols-outlined text-[24px]">carpenter</span>
      </span>
      <span className="selection-check w-6 h-6 rounded-full bg-surface-container-highest text-surface-container-highest flex items-center justify-center text-[14px] font-bold">
      <span className="material-symbols-outlined text-[16px]">check</span>
      </span>
      </div>
      <h4 className="font-title-lg text-title-lg font-bold text-on-surface">Joinery, Carpentry &amp; Construction Craft</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Timber engineering, roof truss fabrication, fine indoor furniture, cabinet making, safety joinery, and varnish finishing.</p>
      </div>
      <div className="flex items-center justify-between pt-space-xs text-label-sm font-label-sm text-on-surface-variant">
      <span>Tool-Kit: Plane, Chisel &amp; Saw Set</span>
      <span className="font-semibold text-secondary">DIT Level I/II</span>
      </div>
      </div>
      {/* Trade 3 */}
      <div className="guild-card cursor-pointer bg-surface-container-low p-space-md rounded-xl transition-all shadow-sm flex flex-col justify-between gap-space-sm">
      <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
      <span className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
      <span className="material-symbols-outlined text-[24px]">agriculture</span>
      </span>
      <span className="selection-check w-6 h-6 rounded-full bg-surface-container-highest text-surface-container-highest flex items-center justify-center text-[14px] font-bold">
      <span className="material-symbols-outlined text-[16px]">check</span>
      </span>
      </div>
      <h4 className="font-title-lg text-title-lg font-bold text-on-surface">Sustainable Agronomy &amp; Urban Farming</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Solar drip irrigation, greenhouse vegetable production, broiler &amp; kuroiler poultry brooding, and vermicompost processing.</p>
      </div>
      <div className="flex items-center justify-between pt-space-xs text-label-sm font-label-sm text-on-surface-variant">
      <span>Tool-Kit: Starter Seeds &amp; Drip Rig</span>
      <span className="font-semibold text-secondary">DIT Level I</span>
      </div>
      </div>
      {/* Trade 4 */}
      <div className="guild-card cursor-pointer bg-surface-container-low p-space-md rounded-xl transition-all shadow-sm flex flex-col justify-between gap-space-sm">
      <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
      <span className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
      <span className="material-symbols-outlined text-[24px]">solar_power</span>
      </span>
      <span className="selection-check w-6 h-6 rounded-full bg-surface-container-highest text-surface-container-highest flex items-center justify-center text-[14px] font-bold">
      <span className="material-symbols-outlined text-[16px]">check</span>
      </span>
      </div>
      <h4 className="font-title-lg text-title-lg font-bold text-on-surface">Electrical Wiring &amp; Solar PV Installation</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Domestic distribution panels, conduit laying, solar battery inverters, circuit testing, and off-grid home lighting kits.</p>
      </div>
      <div className="flex items-center justify-between pt-space-xs text-label-sm font-label-sm text-on-surface-variant">
      <span>Tool-Kit: Multimeter &amp; Wire Tools</span>
      <span className="font-semibold text-secondary">DIT Level I/II</span>
      </div>
      </div>
      {/* Trade 5 */}
      <div className="guild-card cursor-pointer bg-surface-container-low p-space-md rounded-xl transition-all shadow-sm flex flex-col justify-between gap-space-sm md:col-span-2 lg:col-span-2">
      <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
      <span className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
      <span className="material-symbols-outlined text-[24px]">devices</span>
      </span>
      <span className="selection-check w-6 h-6 rounded-full bg-surface-container-highest text-surface-container-highest flex items-center justify-center text-[14px] font-bold">
      <span className="material-symbols-outlined text-[16px]">check</span>
      </span>
      </div>
      <h4 className="font-title-lg text-title-lg font-bold text-on-surface">Digital Literacy, SACCO Micro-Bookkeeping &amp; Clerical</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Practical computer operation, cloud spreadsheets for community SACCOs, mobile money agency records, digital invoicing, and point-of-sale clerical support.</p>
      </div>
      <div className="flex items-center justify-between pt-space-xs text-label-sm font-label-sm text-on-surface-variant">
      <span>Tool-Kit: Micro-Fin Accounting Suite Starter</span>
      <span className="font-semibold text-secondary">DIT Level I</span>
      </div>
      </div>
      </div>
      </div>
      {/* Cohort Period & Shift Preference */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-sm">
      <div className="flex flex-col gap-1.5">
      <label className="font-label-md text-label-md font-bold text-on-surface" htmlFor="cohortIntake">Preferred Cohort Intake *</label>
      <select className="w-full bg-surface-container-low text-on-surface px-4 py-3 rounded-lg focus:outline-none focus:bg-surface-container-lowest font-body-md text-body-md shadow-sm" id="cohortIntake" required>
      <option value="March - August 2025 Intake">March – August 2025 Intake (Active Admissions)</option>
      <option value="September 2025 - February 2026 Intake">September 2025 – February 2026 Intake (Advance Placement)</option>
      </select>
      </div>
      <div className="flex flex-col gap-1.5">
      <label className="font-label-md text-label-md font-bold text-on-surface" htmlFor="guildShift">Preferred Workshop Shift *</label>
      <select className="w-full bg-surface-container-low text-on-surface px-4 py-3 rounded-lg focus:outline-none focus:bg-surface-container-lowest font-body-md text-body-md shadow-sm" id="guildShift" required>
      <option value="Morning Shift (8:30 AM - 1:00 PM)">Morning Guild Workshop (8:30 AM – 1:00 PM, Mon-Fri)</option>
      <option value="Afternoon Shift (2:00 PM - 5:30 PM)">Afternoon Guild Workshop (2:00 PM – 5:30 PM, Mon-Fri)</option>
      </select>
      </div>
      </div>
      {/* Bottom Action Buttons */}
      <div className="flex items-center justify-between pt-space-md">
      <button className="inline-flex items-center gap-2 bg-surface-container-high text-on-surface font-label-md text-label-md py-3 px-5 rounded-lg hover:bg-surface-container-highest transition-all" type="button">
      <span className="material-symbols-outlined text-[18px]">arrow_back</span>
      <span>Back</span>
      </button>
      <button className="inline-flex items-center gap-2 bg-primary text-on-primary font-label-md text-label-md py-3 px-6 rounded-lg hover:bg-primary-container transition-all shadow-md" type="button">
      <span>Continue to Need Assessment</span>
      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
      </button>
      </div>
      </div>
      {/* STEP 3: Background & Sponsorship / Bursary Assessment */}
      <div className="step-section hidden flex flex-col gap-space-lg bg-surface-container-lowest p-space-md sm:p-space-xl rounded-xl shadow-md" id="stepSection3">
      <div className="flex flex-col gap-1 pb-space-sm">
      <span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">Phase III of IV</span>
      <h3 className="font-headline-md text-headline-md font-bold text-on-surface">Vulnerability Evaluation &amp; Tuition Bursary Application</h3>
      <p className="font-body-md text-body-md text-on-surface-variant">The Ministry awards 100% tuition-free scholarships through international and local donors to individuals facing severe economic constraints.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
      {/* Bursary Eligibility Category */}
      <div className="flex flex-col gap-1.5">
      <label className="font-label-md text-label-md font-bold text-on-surface" htmlFor="bursaryCategory">Primary Bursary Eligibility Category *</label>
      <select className="w-full bg-surface-container-low text-on-surface px-4 py-3 rounded-lg focus:outline-none focus:bg-surface-container-lowest font-body-md text-body-md shadow-sm" id="bursaryCategory" required>
      <option value="">Select Vulnerability / Fellowship Criteria</option>
      <option value="Widow / Single Mother">Widow / Single Mother Head of Household</option>
      <option value="Unemployed Out-of-School Youth">Unemployed Out-of-School Youth (Ages 16-30)</option>
      <option value="Destitute Family Breadwinner">Destitute Family Breadwinner / Low-Income Caregiver</option>
      <option value="Returning / Post-Deliverance Trainee">Rehabilitating / Post-Deliverance Trainee</option>
      <option value="Church Partner / Mission Referral">Parish Church / Local Fellowship Endorsed</option>
      <option value="Self-Sponsored / Community Contributor">Self-Sponsored / Small Enterprise Upskilling</option>
      </select>
      </div>
      {/* Highest Education Attained */}
      <div className="flex flex-col gap-1.5">
      <label className="font-label-md text-label-md font-bold text-on-surface" htmlFor="educationAttained">Highest Education Level Attained *</label>
      <select className="w-full bg-surface-container-low text-on-surface px-4 py-3 rounded-lg focus:outline-none focus:bg-surface-container-lowest font-body-md text-body-md shadow-sm" id="educationAttained" required>
      <option value="">Select Education Level</option>
      <option value="Non-Formal / Basic Reading">Non-Formal / Basic Functional Literacy</option>
      <option value="Primary Leaving Examination (PLE)">Primary Leaving Examination (PLE)</option>
      <option value="Uganda Certificate of Education (UCE / O-Level)">Uganda Certificate of Education (UCE / O-Level)</option>
      <option value="Uganda Advanced Certificate of Education (UACE / A-Level)">Uganda Advanced Certificate of Education (UACE / A-Level)</option>
      <option value="Vocational Certificate / Other">Previous Vocational Certificate or Artisan Training</option>
      </select>
      </div>
      {/* Household Dependents Interactive Counter */}
      <div className="flex flex-col gap-1.5 bg-surface-container-low p-4 rounded-xl">
      <label className="font-label-md text-label-md font-bold text-on-surface">Number of Direct Dependents / Children Under Your Care *</label>
      <p className="font-body-sm text-[12px] text-on-surface-variant mb-2">Used by the Admissions Committee to quantify socio-economic responsibility.</p>
      <div className="flex items-center gap-4">
      <button className="w-10 h-10 rounded-lg bg-surface-container-high hover:bg-surface-container-highest flex items-center justify-center text-on-surface font-bold text-title-lg transition-colors" type="button">
      <span className="material-symbols-outlined text-[18px]">remove</span>
      </button>
      <span className="font-headline-sm text-headline-sm font-bold text-on-surface w-12 text-center" id="dependentCountDisplay">2</span>
      <input id="dependentsInput" type="hidden" value="2"/>
      <button className="w-10 h-10 rounded-lg bg-surface-container-high hover:bg-surface-container-highest flex items-center justify-center text-on-surface font-bold text-title-lg transition-colors" type="button">
      <span className="material-symbols-outlined text-[18px]">add</span>
      </button>
      <span className="font-body-sm text-body-sm text-on-surface-variant pl-2">Dependents Recorded</span>
      </div>
      </div>
      {/* Current Employment Status */}
      <div className="flex flex-col gap-1.5">
      <label className="font-label-md text-label-md font-bold text-on-surface" htmlFor="employmentStatus">Current Economic / Employment Situation *</label>
      <select className="w-full bg-surface-container-low text-on-surface px-4 py-3 rounded-lg focus:outline-none focus:bg-surface-container-lowest font-body-md text-body-md shadow-sm" id="employmentStatus" required>
      <option value="">Select Situation</option>
      <option value="Completely Unemployed / No Income">Completely Unemployed / No Steady Income</option>
      <option value="Informal Casual Laborer">Informal Day / Casual Laborer (Irregular)</option>
      <option value="Subsistence Farming / Small Kiosk">Subsistence Farming / Small Village Stall</option>
      <option value="Supported by Family / Well-wishers">Dependent on Family / Local Well-wishers</option>
      </select>
      </div>
      {/* Statement of Need */}
      <div className="flex flex-col gap-1.5 md:col-span-2">
      <label className="font-label-md text-label-md font-bold text-on-surface" htmlFor="hardshipStatement">Brief Statement of Need &amp; Future Vision *</label>
      <p className="font-body-sm text-[12px] text-on-surface-variant">Explain in 2-4 sentences how this vocational qualification and tool-kit will transform your life and household.</p>
      <textarea className="w-full bg-surface-container-low text-on-surface px-4 py-3 rounded-lg focus:outline-none focus:bg-surface-container-lowest font-body-md text-body-md shadow-sm" id="hardshipStatement" placeholder="Describe your current struggle, how this training will help you earn sustainable income, and your commitment to completing the 6-month intensive training..." required rows={3}></textarea>
      </div>
      </div>
      {/* Bottom Action Buttons */}
      <div className="flex items-center justify-between pt-space-md">
      <button className="inline-flex items-center gap-2 bg-surface-container-high text-on-surface font-label-md text-label-md py-3 px-5 rounded-lg hover:bg-surface-container-highest transition-all" type="button">
      <span className="material-symbols-outlined text-[18px]">arrow_back</span>
      <span>Back</span>
      </button>
      <button className="inline-flex items-center gap-2 bg-primary text-on-primary font-label-md text-label-md py-3 px-6 rounded-lg hover:bg-primary-container transition-all shadow-md" type="button">
      <span>Continue to Pastoral Endorsement</span>
      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
      </button>
      </div>
      </div>
      {/* STEP 4: Pastoral Endorsement & Declaration of Commitment */}
      <div className="step-section hidden flex flex-col gap-space-lg bg-surface-container-lowest p-space-md sm:p-space-xl rounded-xl shadow-md" id="stepSection4">
      <div className="flex flex-col gap-1 pb-space-sm">
      <span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">Phase IV of IV</span>
      <h3 className="font-headline-md text-headline-md font-bold text-on-surface">Pastoral Endorsement &amp; Statutory Commitment</h3>
      <p className="font-body-md text-body-md text-on-surface-variant">World Healing Trinity Place Limited pairs practical craftsmanship with spiritual discipleship and ethics to build trustworthy community leaders.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
      {/* Faith Fellowship */}
      <div className="flex flex-col gap-1.5">
      <label className="font-label-md text-label-md font-bold text-on-surface" htmlFor="homeChurch">Home Church / Religious Fellowship / Parish *</label>
      <input className="w-full bg-surface-container-low text-on-surface px-4 py-3 rounded-lg focus:outline-none focus:bg-surface-container-lowest font-body-md text-body-md shadow-sm" id="homeChurch" placeholder="e.g. World Healing Trinity Place Fellowship, or St. Luke Church" required type="text"/>
      </div>
      {/* Referee Category */}
      <div className="flex flex-col gap-1.5">
      <label className="font-label-md text-label-md font-bold text-on-surface" htmlFor="refereeType">Referee / Recommending Authority *</label>
      <select className="w-full bg-surface-container-low text-on-surface px-4 py-3 rounded-lg focus:outline-none focus:bg-surface-container-lowest font-body-md text-body-md shadow-sm" id="refereeType" required>
      <option value="Resident Pastor / Spiritual Elder">Resident Pastor / Spiritual Elder</option>
      <option value="LC1 Local Council Chairperson">Local Council Chairperson (LC1)</option>
      <option value="Community / Clan Elder">Community / Clan Elder</option>
      <option value="Recognized CBO / Women Group Leader">Registered CBO / Women’s Group Leader</option>
      </select>
      </div>
      {/* Referee Name */}
      <div className="flex flex-col gap-1.5">
      <label className="font-label-md text-label-md font-bold text-on-surface" htmlFor="refereeName">Referee Full Legal Name *</label>
      <input className="w-full bg-surface-container-low text-on-surface px-4 py-3 rounded-lg focus:outline-none focus:bg-surface-container-lowest font-body-md text-body-md shadow-sm" id="refereeName" placeholder="e.g. Pastor Emmanuel Mukasa" required type="text"/>
      </div>
      {/* Referee Phone Number */}
      <div className="flex flex-col gap-1.5">
      <label className="font-label-md text-label-md font-bold text-on-surface" htmlFor="refereePhone">Referee Official Phone Contact *</label>
      <input className="w-full bg-surface-container-low text-on-surface px-4 py-3 rounded-lg focus:outline-none focus:bg-surface-container-lowest font-body-md text-body-md shadow-sm" id="refereePhone" placeholder="+256 782 000 000" required type="tel"/>
      </div>
      </div>
      {/* Statutory Declaration and Checkboxes */}
      <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-sm mt-2">
      <h4 className="font-title-md text-title-md font-bold text-on-surface flex items-center gap-2">
      <span className="material-symbols-outlined text-secondary">gavel</span>
      <span>Applicant Commitments &amp; Guild By-Laws</span>
      </h4>
      <label className="flex items-start gap-3 cursor-pointer">
      <input className="mt-1 w-4 h-4 rounded text-secondary focus:ring-0" id="commitAttendance" required type="checkbox"/>
      <span className="font-body-sm text-body-sm text-on-surface">
      <strong>Mandatory Attendance Commitment:</strong> I commit to attending at least 90% of all hands-on technical workshop hours, weekly spiritual discipleship, and enterprise accounting modules without unexcused absence.
                    </span>
      </label>
      <label className="flex items-start gap-3 cursor-pointer">
      <input className="mt-1 w-4 h-4 rounded text-secondary focus:ring-0" id="commitToolkit" required type="checkbox"/>
      <span className="font-body-sm text-body-sm text-on-surface">
      <strong>Graduation Tool-Kit Integrity:</strong> I acknowledge that graduation enterprise tool-kits (sewing machines, carpentry chests, agronomy rigs) remain ministry-monitored equipment for initial micro-enterprise launch and cannot be pawned, sold, or liquidated.
                    </span>
      </label>
      <label className="flex items-start gap-3 cursor-pointer">
      <input className="mt-1 w-4 h-4 rounded text-secondary focus:ring-0" id="commitStatutory" required type="checkbox"/>
      <span className="font-body-sm text-body-sm text-on-surface">
      <strong>Truth of Declaration:</strong> I declare that all entries made in this application are accurate and true. Providing fraudulent identification or falsifying hardship criteria results in immediate revocation under the corporate charter of World Healing Trinity Place Limited.
                    </span>
      </label>
      </div>
      {/* Bottom Action Buttons */}
      <div className="flex items-center justify-between pt-space-md">
      <button className="inline-flex items-center gap-2 bg-surface-container-high text-on-surface font-label-md text-label-md py-3 px-5 rounded-lg hover:bg-surface-container-highest transition-all" type="button">
      <span className="material-symbols-outlined text-[18px]">arrow_back</span>
      <span>Back</span>
      </button>
      <button className="inline-flex items-center gap-2 bg-secondary text-on-secondary font-label-md text-label-md py-3.5 px-8 rounded-lg hover:bg-secondary-fixed transition-all font-bold shadow-lg" type="submit">
      <span className="material-symbols-outlined text-[20px]">send</span>
      <span>Submit Formal Enrollment Application</span>
      </button>
      </div>
      </div>
      </form>
      </div>
      </section>
      {/* Interactive Confirmation Modal Backdrop */}
      <div className="fixed inset-0 z-50 bg-primary/70 backdrop-blur-sm hidden flex items-center justify-center p-4" id="confirmationModal">
      <div className="bg-surface-container-lowest max-w-xl w-full rounded-2xl shadow-2xl p-space-lg flex flex-col gap-space-md max-h-[921px] overflow-y-auto">
      <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
      <span className="w-10 h-10 rounded-full bg-secondary/20 text-secondary flex items-center justify-center">
      <span className="material-symbols-outlined text-[24px]">verified</span>
      </span>
      <span className="font-title-lg text-title-lg font-bold text-on-surface">Application Received</span>
      </div>
      <button className="text-on-surface-variant hover:text-on-surface" type="button">
      <span className="material-symbols-outlined text-[24px]">close</span>
      </button>
      </div>
      <div className="flex flex-col gap-2">
      <p className="font-body-md text-body-md text-on-surface">
                Congratulations, <strong className="text-on-surface" id="modalApplicantName">Applicant</strong>! Your formal application for the Vocational Guild Apprenticeship has been indexed in the registrar registry.
              </p>
      <div className="bg-surface-container-low p-4 rounded-xl flex flex-col gap-1 my-2">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Official Registration Reference ID:</span>
      <span className="font-headline-sm text-headline-sm font-bold text-secondary tracking-wider" id="modalRegistrationId">WHTP-ENR-2025-0842</span>
      <span className="font-body-sm text-[12px] text-on-surface-variant">Please keep this ID for your verification interview in Kampala.</span>
      </div>
      </div>
      {/* Application Details Summary */}
      <div className="grid grid-cols-2 gap-3 text-body-sm font-body-sm bg-surface-container p-3 rounded-lg">
      <div>
      <span className="text-on-surface-variant block text-[11px] font-bold uppercase">Guild Specialization:</span>
      <span className="text-on-surface font-semibold capitalize" id="modalGuildSummary">Tailoring &amp; Apparel</span>
      </div>
      <div>
      <span className="text-on-surface-variant block text-[11px] font-bold uppercase">Selected Shift:</span>
      <span className="text-on-surface font-semibold" id="modalShiftSummary">Morning Guild</span>
      </div>
      <div>
      <span className="text-on-surface-variant block text-[11px] font-bold uppercase">District:</span>
      <span className="text-on-surface font-semibold" id="modalDistrictSummary">Kampala</span>
      </div>
      <div>
      <span className="text-on-surface-variant block text-[11px] font-bold uppercase">Bursary Status:</span>
      <span className="text-secondary font-bold">100% Tuition Bursary Pending</span>
      </div>
      </div>
      <div className="flex flex-col gap-2 bg-surface-container-high/40 p-3 rounded-lg text-body-sm font-body-sm text-on-surface-variant">
      <div className="flex items-center gap-2 text-on-surface font-semibold">
      <span className="material-symbols-outlined text-[18px] text-secondary">calendar_today</span>
      <span>Next Steps &amp; Intake Interview Schedule:</span>
      </div>
      <p>1. An SMS notification has been queued for your WhatsApp line.</p>
      <p>2. Bring your original National ID (or LC1 letter) to the Admissions Registrar at Plot 14 Trinity Heights Road within 7 calendar days.</p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
      <button className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md" type="button">
                Print Confirmation Docket
              </button>
      <button className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-bold" type="button">
                Done &amp; Return to Portal
              </button>
      </div>
      </div>
      </div>
      {/* Editorial Visual Storytelling Section */}
      <section className="w-full px-gutter py-space-xl bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
      <div className="max-w-3xl flex flex-col gap-2">
      <span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-widest">Equipping Hands • Renewing Hearts</span>
      <h2 className="font-headline-xl text-headline-xl font-bold text-on-surface">The Anatomy of Our Vocational Guild Ecosystem</h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant">
                We do not merely teach trade mechanics; we build dignified entrepreneurs equipped with godly work ethics, certified industrial standards, and lifetime fellowship.
              </p>
      </div>
      {/* Bento Visual Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
      {/* Feature 1 */}
      <div className="bg-surface-container-low rounded-2xl overflow-hidden flex flex-col shadow-sm">
      <div className="h-56 w-full relative overflow-hidden">
      <img className="w-full h-full object-cover" data-alt="A focused young Ugandan woman working diligently at a modern industrial sewing machine in a sunlit vocational workshop in Kampala, with rolls of vibrant fabric around her, warm institutional tones, documentary style lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPyNMXkfJX-5NzeVr9AzEsy5-rRx-cQs5bWQTUC5Pg7TYBXF1kBnAR0oFoQE8H4cceXI8xMRucGABqZ_uxvvXSoV2JYN0aYjLSRw-rNen2J0piIHGGVt8_oB7lwcMiM85PsFpXTrku3Pvq7t2cu_NIfg_PoJvlFMS-9sahyUR02LRxUKrFX1h8cPZNPJSl9xXyxP9nj0GE2gZMj-WSeh_VFUfvn1HA_XE9FAycOOD4"/>
      <div className="absolute top-3 left-3 bg-primary/90 text-on-primary px-3 py-1 rounded-DEFAULT text-label-sm font-label-sm uppercase font-bold">
                    Guild Workshop
                  </div>
      </div>
      <div className="p-space-md flex flex-col gap-2 flex-1 justify-between">
      <div className="flex flex-col gap-1">
      <h3 className="font-title-lg text-title-lg font-bold text-on-surface">DIT Standard Practice Hours</h3>
      <p className="font-body-md text-body-md text-on-surface-variant">Trainees spend 75% of classroom time directly handling commercial equipment, ensuring high-speed competence for competitive contracts.</p>
      </div>
      <div className="pt-2 text-label-sm font-label-sm text-secondary font-semibold">600+ Practical Hours Logged</div>
      </div>
      </div>
      {/* Feature 2 */}
      <div className="bg-surface-container-low rounded-2xl overflow-hidden flex flex-col shadow-sm">
      <div className="h-56 w-full relative overflow-hidden">
      <img className="w-full h-full object-cover" data-alt="A dedicated Ugandan instructor teaching two enthusiastic apprentices how to assemble a timber joinery roofing frame in an airy Kampala workshop, warm afternoon light, safety gear, institutional framing." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJDmtueu3Eovx3fcHLxaWtwojmrPOQ2m42jfpUPP67vpyhX9OX6fdWZHvkLtHegsXe3V9S_9B4Y-FIhkRlpmAmtb-t1o_qrBFkFifx56vzP82DS-EatD0HiIgcAMYeOVctxc8H10b_hMpnxTlbB58UZNU8ptlmonNIZL_UHceLaIOrGskw9lKXNxw2lEc7maN3xjcH3KOVXYrjV89yQe9R83vtNWd8L7ZXat_rnQQJ"/>
      <div className="absolute top-3 left-3 bg-primary/90 text-on-primary px-3 py-1 rounded-DEFAULT text-label-sm font-label-sm uppercase font-bold">
                    Master Mentorship
                  </div>
      </div>
      <div className="p-space-md flex flex-col gap-2 flex-1 justify-between">
      <div className="flex flex-col gap-1">
      <h3 className="font-title-lg text-title-lg font-bold text-on-surface">Ugandan Master Craftsmen</h3>
      <p className="font-body-md text-body-md text-on-surface-variant">Guild instructors hold senior certification and coach apprentices in client bidding, product finishing, and cooperative contracts.</p>
      </div>
      <div className="pt-2 text-label-sm font-label-sm text-secondary font-semibold">1:8 Mentor-to-Student Ratio</div>
      </div>
      </div>
      {/* Feature 3 */}
      <div className="bg-surface-container-low rounded-2xl overflow-hidden flex flex-col shadow-sm">
      <div className="h-56 w-full relative overflow-hidden">
      <img className="w-full h-full object-cover" data-alt="A triumphant vocational graduation ceremony in Kampala, Uganda, where a smiling mother receives a brand new sewing machine and startup toolkit with an official certificate, warm golden ambient sunlight." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFm_9IZSco4N4b2uz0TVWpF4SM5WpfNxC1M7DJ1yjOTJ3lIu6GkIovAqJfAiJdE234fSCeOoKnsA1Ikc1QuBlYHB0IIE-3Mf7cfvciijcbWFDtZ_CmktN4k9Cw6nH8amMzf8nJmZz2xUjoYKy3nmSOxWzeUYvFslWorsKlWX9MrtSx7zeTH66DNa05GBWr_DJK9gnEcCjfwNCmKJ0j3gvMdcbQJgi_1GgVeewpCn-o"/>
      <div className="absolute top-3 left-3 bg-secondary text-on-secondary px-3 py-1 rounded-DEFAULT text-label-sm font-label-sm uppercase font-bold">
                    Graduation Grant
                  </div>
      </div>
      <div className="p-space-md flex flex-col gap-2 flex-1 justify-between">
      <div className="flex flex-col gap-1">
      <h3 className="font-title-lg text-title-lg font-bold text-on-surface">Complete Tool-Kit Grant</h3>
      <p className="font-body-md text-body-md text-on-surface-variant">Every graduate with 90%+ attendance leaves with their own trade equipment, stopping debt cycles and facilitating day-one revenues.</p>
      </div>
      <div className="pt-2 text-label-sm font-label-sm text-secondary font-semibold">100% Retained by Trainee</div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Interactive Admissions Guide & FAQs Accordion Section */}
      <section className="w-full px-gutter py-space-xl bg-surface">
      <div className="max-w-5xl mx-auto flex flex-col gap-space-lg">
      <div className="text-center flex flex-col gap-2 max-w-2xl mx-auto">
      <span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-widest">Admissions Transparency</span>
      <h2 className="font-headline-xl text-headline-xl font-bold text-on-surface">Frequently Asked Questions</h2>
      <p className="font-body-md text-body-md text-on-surface-variant">Everything prospective students, church pastors, and sponsors need to understand about the guild enrollment process.</p>
      </div>
      {/* Accordion Container */}
      <div className="flex flex-col gap-3">
      {/* Accordion 1 */}
      <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
      <button className="w-full text-left p-space-md flex items-center justify-between gap-space-md hover:bg-surface-container-low transition-colors" type="button">
      <span className="font-title-lg text-title-lg font-bold text-on-surface">What is completely covered under the 100% Tuition Bursary?</span>
      <span className="material-symbols-outlined text-secondary transition-transform text-[22px]" id="faqIcon-faq1">expand_more</span>
      </button>
      <div className="px-space-md pb-space-md font-body-md text-body-md text-on-surface-variant hidden" id="faq1">
                  The full bursary, sponsored through World Healing Trinity Place Limited and international partners, covers 100% of instruction tuition, daily workshop raw materials (fabrics, timber, solar parts, agricultural seeds), required safety PPE (overalls, safety boots, goggles), assessment preparation, and the complete personal tool-kit awarded upon successful graduation. Students are only responsible for their personal transport to our training center.
                </div>
      </div>
      {/* Accordion 2 */}
      <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
      <button className="w-full text-left p-space-md flex items-center justify-between gap-space-md hover:bg-surface-container-low transition-colors" type="button">
      <span className="font-title-lg text-title-lg font-bold text-on-surface">Who is eligible to apply for enrollment?</span>
      <span className="material-symbols-outlined text-secondary transition-transform text-[22px]" id="faqIcon-faq2">expand_more</span>
      </button>
      <div className="px-space-md pb-space-md font-body-md text-body-md text-on-surface-variant hidden" id="faq2">
                  Admissions prioritize vulnerable Ugandan youth ages 16-35, single mothers, widows, and referred community members who lack the financial means for formal tertiary education. No formal academic qualification (PLE or UCE) is mandatory for baseline guild trades; applicants need only basic functional literacy or willingness to learn under our bilingual instructors (Luganda &amp; English).
                </div>
      </div>
      {/* Accordion 3 */}
      <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
      <button className="w-full text-left p-space-md flex items-center justify-between gap-space-md hover:bg-surface-container-low transition-colors" type="button">
      <span className="font-title-lg text-title-lg font-bold text-on-surface">How are students assessed and certified upon graduation?</span>
      <span className="material-symbols-outlined text-secondary transition-transform text-[22px]" id="faqIcon-faq3">expand_more</span>
      </button>
      <div className="px-space-md pb-space-md font-body-md text-body-md text-on-surface-variant hidden" id="faq3">
                  Our curriculum directly aligns with the Uganda Directorate of Industrial Training (DIT) Modular Assessment Framework. At the conclusion of the 6-month intensive cycle, candidates complete an external trade practical assessment to receive both the accredited DIT National Certificate and the World Healing Trinity Place Limited Vocational Guild Diploma.
                </div>
      </div>
      {/* Accordion 4 */}
      <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
      <button className="w-full text-left p-space-md flex items-center justify-between gap-space-md hover:bg-surface-container-low transition-colors" type="button">
      <span className="font-title-lg text-title-lg font-bold text-on-surface">Is spiritual discipleship compulsory for all enrolled students?</span>
      <span className="material-symbols-outlined text-secondary transition-transform text-[22px]" id="faqIcon-faq4">expand_more</span>
      </button>
      <div className="px-space-md pb-space-md font-body-md text-body-md text-on-surface-variant hidden" id="faq4">
                  Yes. True community transformation pairs technical skill with integrity and moral transformation. All students attend a 2-hour weekly morning character, trauma recovery, and Christian discipleship class designed to cultivate honest business dealings, cooperative community savings, and family restoration.
                </div>
      </div>
      {/* Accordion 5 */}
      <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
      <button className="w-full text-left p-space-md flex items-center justify-between gap-space-md hover:bg-surface-container-low transition-colors" type="button">
      <span className="font-title-lg text-title-lg font-bold text-on-surface">Can an applicant apply using a paper form?</span>
      <span className="material-symbols-outlined text-secondary transition-transform text-[22px]" id="faqIcon-faq5">expand_more</span>
      </button>
      <div className="px-space-md pb-space-md font-body-md text-body-md text-on-surface-variant hidden" id="faq5">
                  Yes. Pastors, local parish churches, and LC1 leaders can download and print the standard 4-page enrollment packet from this page, assist applicants with handwritten entries, and deliver the completed physical documents directly to our Admissions Registrar at Plot 14 Trinity Heights Road, Kampala.
                </div>
      </div>
      </div>
      </div>
      </section>
      {/* Physical Registrar Office & In-Person Help Desk */}
      <section className="w-full px-gutter py-space-xl bg-surface-container-low">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
      {/* Contact Info */}
      <div className="lg:col-span-7 flex flex-col gap-space-md">
      <div className="flex items-center gap-2 text-label-sm font-label-sm uppercase tracking-widest text-secondary font-bold">
      <span className="material-symbols-outlined text-[16px]">location_on</span>
      <span>Central Kampala Admissions Bureau</span>
      </div>
      <h2 className="font-headline-xl text-headline-xl font-bold text-on-surface">Admissions Registrar &amp; Verification Desk</h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant">
                Have questions about the application or require in-person assistance filling out your guild documents? Our registrar team welcomes applicants and recommending pastors Monday through Friday.
              </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs">
      <div className="bg-surface-container-lowest p-space-md rounded-xl flex flex-col gap-1 shadow-sm">
      <span className="font-label-sm text-label-sm text-secondary font-bold uppercase">Physical Registry</span>
      <span className="font-title-md text-title-md font-bold text-on-surface">Plot 14 Trinity Heights Road</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Ntinda / Kampala Corridor, Republic of Uganda</span>
      </div>
      <div className="bg-surface-container-lowest p-space-md rounded-xl flex flex-col gap-1 shadow-sm">
      <span className="font-label-sm text-label-sm text-secondary font-bold uppercase">Enrollment Hotlines</span>
      <span className="font-title-md text-title-md font-bold text-on-surface">+256 (0) 772 000 000</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Direct WhatsApp &amp; Inquiries: +256 (0) 414 000 000</span>
      </div>
      <div className="bg-surface-container-lowest p-space-md rounded-xl flex flex-col gap-1 shadow-sm">
      <span className="font-label-sm text-label-sm text-secondary font-bold uppercase">Working Hours</span>
      <span className="font-title-md text-title-md font-bold text-on-surface">Monday – Friday</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">8:00 AM – 5:00 PM EAT</span>
      </div>
      <div className="bg-surface-container-lowest p-space-md rounded-xl flex flex-col gap-1 shadow-sm">
      <span className="font-label-sm text-label-sm text-secondary font-bold uppercase">Electronic Inquiries</span>
      <span className="font-title-md text-title-md font-bold text-on-surface">admissions@worldhealingtrinity.org</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Official Registry Correspondence</span>
      </div>
      </div>
      </div>
      {/* Google Map Container & Location Card */}
      <div className="lg:col-span-5 flex flex-col gap-space-sm">
      <div className="w-full h-80 bg-cover bg-center rounded-2xl shadow-md overflow-hidden relative" data-location="Kampala, Uganda" style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuB9WL31_o4k_hqKuR6sjyyjkz1ty_ik1yECbCQ0J27hUYEbVxDUByauUWer2aKo1b_h22DLsLfgA4t8K1JBmHvHBLriHLFQLopRI1vBLyzYATevj4LnXed0OLwoqWxSCvIFGPA_Fzcyi6MzeZK3wChUNv1hDTfxo0RPYuPqt9qzztMXFI-SplvrD1NODi4SFK3i1iQVUeARhnlL2UUyx9302-o1XfDg6FRr-bgqsefc\')'}}>
      <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/95 backdrop-blur-md p-space-sm rounded-xl flex items-center justify-between shadow-lg">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-secondary text-[22px]">domain</span>
      <div>
      <span className="font-label-md text-label-md font-bold text-on-surface block">Trinity Vocational Campus</span>
      <span className="font-body-sm text-[11px] text-on-surface-variant">Plot 14 Trinity Heights Road, Kampala</span>
      </div>
      </div>
      <a className="px-3 py-1.5 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm font-semibold hover:bg-primary-container transition-colors" href="https://maps.google.com" target="_blank">
                    Directions
                  </a>
      </div>
      </div>
      </div>
      </div>
      </section>
    </div>
  )
}
