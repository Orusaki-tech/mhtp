import { type FormEvent } from 'react'

export default function ContactPage() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <div className="flex flex-col w-full">
      {/* Top Registry Header Banner */}
      <section className="relative w-full bg-primary-container text-on-primary-container overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffe088_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="relative max-w-7xl mx-auto px-gutter py-space-xl lg:py-24 flex flex-col gap-space-md">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-space-xs text-label-sm font-label-sm tracking-wide text-on-primary-container/70 uppercase">
      <span className="hover:text-secondary-fixed transition-colors">Institutional Registry</span>
      <span className="text-secondary-fixed/50">/</span>
      <span className="hover:text-secondary-fixed transition-colors">Headquarters &amp; Regional Desks</span>
      <span className="text-secondary-fixed/50">/</span>
      <span className="text-secondary-fixed font-semibold">Contact &amp; Inquiries</span>
      </nav>
      {/* Editorial Title & Statutory Baseline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end">
      <div className="lg:col-span-8 flex flex-col gap-space-sm">
      <div className="inline-flex items-center gap-2 self-start px-2.5 py-1 rounded-DEFAULT bg-secondary/30 text-secondary-fixed text-label-sm font-label-sm font-bold uppercase tracking-wider">
      <span className="material-symbols-outlined text-[15px]" style={{fontVariationSettings: '\'FILL\' 1'}}>account_balance</span>
                  Clause 2 Attestation • Republic of Uganda
                </div>
      <h1 className="font-display-lg text-display-lg text-on-primary tracking-tight leading-none">
                  Connect with Our Ministry Headquarters &amp; Regional Hubs
                </h1>
      <p className="font-body-lg text-body-lg text-on-primary-container/90 max-w-2xl font-normal leading-relaxed">
                  Reach our executive trustees, admissions registrar, pastoral counseling team, or regional outreach directors in Kampala and across Uganda.
                </p>
      </div>
      <div className="lg:col-span-4 flex flex-col gap-space-xs p-space-md rounded-xl bg-surface-container-lowest/5 backdrop-blur-md text-on-primary text-body-sm font-body-sm shadow-xl">
      <div className="flex items-center justify-between text-label-sm font-label-sm uppercase tracking-wider text-secondary-fixed">
      <span>Corporate Seal Reference</span>
      <span className="inline-flex items-center gap-1 font-mono text-[10px] text-on-primary/70">UGANDA URSB</span>
      </div>
      <p className="font-mono text-xs text-on-primary/90 tracking-tight">Ref: G260622-3597 | CTC 260928101539.41</p>
      <p className="text-on-primary-container/70 text-xs">Governed pursuant to the Companies Act No. 1 of 2012 (Clause 2: Kampala Principal Office).</p>
      </div>
      </div>
      {/* Quick Assistance Routing Bar */}
      <div className="mt-space-md pt-space-md grid grid-cols-2 sm:grid-cols-4 gap-space-sm">
      <button className="flex items-center gap-space-xs p-3 rounded-lg bg-surface-container-lowest/10 hover:bg-secondary/20 text-on-primary transition-all text-left group" type="button">
      <span className="material-symbols-outlined text-secondary-fixed group-hover:scale-110 transition-transform text-[20px]">school</span>
      <div className="flex flex-col min-w-0">
      <span className="font-label-md text-label-md font-semibold text-secondary-fixed truncate">Admissions Registrar</span>
      <span className="font-body-sm text-[11px] text-on-primary-container/80 truncate">Guilds &amp; Apprenticeship</span>
      </div>
      </button>
      <button className="flex items-center gap-space-xs p-3 rounded-lg bg-surface-container-lowest/10 hover:bg-secondary/20 text-on-primary transition-all text-left group" type="button">
      <span className="material-symbols-outlined text-secondary-fixed group-hover:scale-110 transition-transform text-[20px]">diversity_1</span>
      <div className="flex flex-col min-w-0">
      <span className="font-label-md text-label-md font-semibold text-secondary-fixed truncate">Pastoral &amp; Prayer</span>
      <span className="font-body-sm text-[11px] text-on-primary-container/80 truncate">Intercession &amp; Hospital Care</span>
      </div>
      </button>
      <button className="flex items-center gap-space-xs p-3 rounded-lg bg-surface-container-lowest/10 hover:bg-secondary/20 text-on-primary transition-all text-left group" type="button">
      <span className="material-symbols-outlined text-secondary-fixed group-hover:scale-110 transition-transform text-[20px]">account_balance_wallet</span>
      <div className="flex flex-col min-w-0">
      <span className="font-label-md text-label-md font-semibold text-secondary-fixed truncate">Fiduciary &amp; Giving</span>
      <span className="font-body-sm text-[11px] text-on-primary-container/80 truncate">Clause 7 Donor Oversight</span>
      </div>
      </button>
      <button className="flex items-center gap-space-xs p-3 rounded-lg bg-surface-container-lowest/10 hover:bg-secondary/20 text-on-primary transition-all text-left group" type="button">
      <span className="material-symbols-outlined text-secondary-fixed group-hover:scale-110 transition-transform text-[20px]">gavel</span>
      <div className="flex flex-col min-w-0">
      <span className="font-label-md text-label-md font-semibold text-secondary-fixed truncate">Legal &amp; Counsel</span>
      <span className="font-body-sm text-[11px] text-on-primary-container/80 truncate">URSB Public Inspection</span>
      </div>
      </button>
      </div>
      </div>
      </section>
      {/* Main Multi-Department Console & Strategic Locations */}
      <section className="w-full max-w-7xl mx-auto px-gutter py-space-xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
      {/* Interactive Inquiry & Dispatch Console (Left 7 Cols) */}
      <div className="lg:col-span-7 flex flex-col gap-space-md">
      <div className="bg-surface-container-lowest rounded-xl shadow-xl p-space-lg sm:p-10 flex flex-col gap-space-md">
      <div className="flex flex-col gap-1">
      <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-widest">Secretariat Dispatch Terminal</span>
      <h2 className="font-headline-md text-headline-md text-on-surface">Interactive Departmental Inquiries</h2>
      <p className="font-body-md text-body-md text-on-surface-variant">Communications are securely logged into our central institutional registry and routed directly to designated desk executives.</p>
      </div>
      <form className="flex flex-col gap-space-md mt-2" id="ministryInquiryForm" onSubmit={handleSubmit}>
      {/* Department Selection Dropdown / Pill Matrix */}
      <div className="flex flex-col gap-1.5">
      <label className="font-label-md text-label-md font-bold text-on-surface flex items-center justify-between">
      <span>Designated Registry Desk</span>
      <span className="text-secondary font-semibold text-xs tracking-normal" id="selectedDeskIndicator">General Administration</span>
      </label>
      <select className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary/40 transition-all cursor-pointer" id="departmentSelector">
      <option value="admin">General Administration &amp; Inquiries</option>
      <option value="admissions">Vocational Guild Admissions &amp; Sponsorship Desk</option>
      <option value="pastoral">Pastoral Intercession &amp; Hospital Visitation</option>
      <option value="stewardship">Partnership, Grants &amp; Clause 7 Donations Desk</option>
      <option value="legal">Legal Governance &amp; URSB Public Inspection Request (ref: Opio Charles, Advocate)</option>
      </select>
      </div>
      {/* Dynamic Desk Guidance Notice */}
      <div className="p-3.5 rounded-lg bg-surface-container flex items-start gap-3 transition-all" id="deskNoticeBox">
      <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">info</span>
      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed" id="deskNoticeText">
                      Standard registry processing timeframe is 24 to 48 business hours. For urgent hospital dispatch or critical pastoral prayer, dial the direct 24-hour line below.
                    </p>
      </div>
      {/* Personal Metadata Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
      <div className="flex flex-col gap-1.5">
      <label className="font-label-md text-label-md font-bold text-on-surface">Full Legal Name *</label>
      <input className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary/40 transition-all" placeholder="e.g. Deaconess Mary Namaganda" required type="text"/>
      </div>
      <div className="flex flex-col gap-1.5">
      <label className="font-label-md text-label-md font-bold text-on-surface">Email Address *</label>
      <input className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary/40 transition-all" placeholder="official@domain.org" required type="email"/>
      </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
      {/* Primary Phone with Uganda Flag Icon */}
      <div className="flex flex-col gap-1.5">
      <label className="font-label-md text-label-md font-bold text-on-surface">WhatsApp / Primary Phone *</label>
      <div className="relative flex items-center">
      <div className="absolute left-3.5 flex items-center gap-1.5 pointer-events-none text-xs font-semibold text-on-surface-variant">
      <span className="inline-block w-4 h-3 bg-primary rounded-xs text-[9px] text-center leading-3 font-mono text-secondary-fixed">UG</span>
      <span>+256</span>
      </div>
      <input className="w-full pl-20 pr-4 py-3 rounded-lg bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary/40 transition-all" placeholder="772 000 000" required type="tel"/>
      </div>
      </div>
      {/* Institutional Affiliation */}
      <div className="flex flex-col gap-1.5">
      <label className="font-label-md text-label-md font-bold text-on-surface">Organization / Parish Affiliation <span className="text-xs font-normal text-on-surface-variant">(Optional)</span></label>
      <input className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary/40 transition-all" placeholder="Church, NGO, Guild or Municipality" type="text"/>
      </div>
      </div>
      {/* Subject Line */}
      <div className="flex flex-col gap-1.5">
      <label className="font-label-md text-label-md font-bold text-on-surface">Inquiry Subject *</label>
      <input className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary/40 transition-all" id="inquirySubject" placeholder="Summary of ministry request, intake query, or inspection request" required type="text"/>
      </div>
      {/* Message Details */}
      <div className="flex flex-col gap-1.5">
      <label className="font-label-md text-label-md font-bold text-on-surface">Message &amp; Detailed Particulars *</label>
      <textarea className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary/40 transition-all resize-y" placeholder="Detail your prayer request, vocational guild intake particulars, grant specification, or legal file requisition..." required rows={4}></textarea>
      </div>
      {/* Preferred Response Channel */}
      <div className="flex flex-col gap-2">
      <span className="font-label-md text-label-md font-bold text-on-surface">Preferred Response Channel</span>
      <div className="grid grid-cols-3 gap-2">
      <label className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer text-on-surface transition-colors has-[:checked]:bg-secondary/20 has-[:checked]:text-secondary">
      <input checked className="accent-secondary" name="responseChannel" type="radio" value="whatsapp"/>
      <span className="font-label-sm text-label-sm font-semibold">WhatsApp</span>
      </label>
      <label className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer text-on-surface transition-colors has-[:checked]:bg-secondary/20 has-[:checked]:text-secondary">
      <input className="accent-secondary" name="responseChannel" type="radio" value="email"/>
      <span className="font-label-sm text-label-sm font-semibold">Official Email</span>
      </label>
      <label className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer text-on-surface transition-colors has-[:checked]:bg-secondary/20 has-[:checked]:text-secondary">
      <input className="accent-secondary" name="responseChannel" type="radio" value="call"/>
      <span className="font-label-sm text-label-sm font-semibold">Direct Call</span>
      </label>
      </div>
      </div>
      {/* Submission Action & Legal Disclaimer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-sm">
      <span className="font-body-sm text-[12px] text-on-surface-variant flex items-center gap-1.5">
      <span className="material-symbols-outlined text-[16px] text-secondary">verified_user</span>
                      Confidentiality certified under Ugandan NGO Stewardship.
                    </span>
      <button className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-bold transition-all shadow-md flex items-center justify-center gap-2 group" id="submitDispatchBtn" type="submit">
      <span>Transmit Official Message</span>
      <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">send</span>
      </button>
      </div>
      <div className="hidden p-4 rounded-lg bg-secondary/15 text-on-surface font-body-sm text-body-sm flex items-center gap-3" id="submissionAlert">
      <span className="material-symbols-outlined text-secondary text-[22px]">mark_email_read</span>
      <span>Inquiry successfully indexed into Secretariat Dispatch Registry. An automated receipt has been logged.</span>
      </div>
      </form>
      </div>
      </div>
      {/* Quick Registry Cards & Hotlines Directory (Right 5 Cols) */}
      <div className="lg:col-span-5 flex flex-col gap-space-lg">
      {/* Direct Telephone & Hotline Registry */}
      <div className="bg-surface-container-lowest rounded-xl shadow-xl p-space-md sm:p-space-lg flex flex-col gap-space-md">
      <div className="flex items-center justify-between">
      <h3 className="font-headline-sm text-headline-sm text-on-surface">Switchboard &amp; Direct Desks</h3>
      <span className="px-2 py-0.5 rounded-DEFAULT bg-secondary-fixed/50 text-on-secondary-fixed text-label-sm font-label-sm uppercase font-bold">Kampala EAT</span>
      </div>
      <div className="flex flex-col gap-space-sm">
      <div className="p-3.5 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors flex items-start gap-space-sm">
      <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-secondary-fixed shrink-0">
      <span className="material-symbols-outlined text-[20px]">call</span>
      </div>
      <div className="flex flex-col min-w-0">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Central Switchboard &amp; Registry</span>
      <a className="font-title-md text-title-md font-bold text-on-surface hover:text-secondary transition-colors" href="tel:+256414000000">+256 (0) 414 000 000</a>
      <span className="font-body-sm text-[12px] text-on-surface-variant">Mon – Fri: 8:00 AM – 5:00 PM (EAT)</span>
      </div>
      </div>
      <div className="p-3.5 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors flex items-start gap-space-sm">
      <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
      <span className="material-symbols-outlined text-[20px]">chat</span>
      </div>
      <div className="flex flex-col min-w-0">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">WhatsApp Direct Admissions</span>
      <a className="font-title-md text-title-md font-bold text-on-surface hover:text-secondary transition-colors" href="https://wa.me/256772000000" target="_blank">+256 (0) 772 000 000</a>
      <span className="font-body-sm text-[12px] text-on-surface-variant">Instant Student Guild Intake Consultations</span>
      </div>
      </div>
      <div className="p-3.5 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors flex items-start gap-space-sm">
      <div className="w-10 h-10 rounded-lg bg-primary text-secondary-fixed flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-[20px]">volunteer_activism</span>
      </div>
      <div className="flex flex-col min-w-0">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">24-Hour Urgent Prayer &amp; Intercession</span>
      <a className="font-title-md text-title-md font-bold text-on-surface hover:text-secondary transition-colors" href="tel:+256772000001">+256 (0) 772 000 001</a>
      <span className="font-body-sm text-[12px] text-on-surface-variant">Continuous pastoral coverage for critical crises</span>
      </div>
      </div>
      </div>
      </div>
      {/* Official Departmental Inboxes Directory */}
      <div className="bg-surface-container-lowest rounded-xl shadow-xl p-space-md sm:p-space-lg flex flex-col gap-space-md">
      <div className="flex items-center justify-between">
      <h3 className="font-headline-sm text-headline-sm text-on-surface">Institutional Email Directory</h3>
      <span className="material-symbols-outlined text-secondary">mark_email_unread</span>
      </div>
      <div className="flex flex-col gap-space-xs font-body-sm text-body-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-lg hover:bg-surface-container transition-colors">
      <span className="font-semibold text-on-surface">Executive Secretariat</span>
      <a className="font-mono text-secondary hover:underline truncate text-xs" href="mailto:administration@worldhealingtrinity.org">administration@worldhealingtrinity.org</a>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-lg hover:bg-surface-container transition-colors">
      <span className="font-semibold text-on-surface">Admissions Registrar</span>
      <a className="font-mono text-secondary hover:underline truncate text-xs" href="mailto:admissions@worldhealingtrinity.org">admissions@worldhealingtrinity.org</a>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-lg hover:bg-surface-container transition-colors">
      <span className="font-semibold text-on-surface">Fiduciary &amp; Giving (Clause 7)</span>
      <a className="font-mono text-secondary hover:underline truncate text-xs" href="mailto:stewardship@worldhealingtrinity.org">stewardship@worldhealingtrinity.org</a>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-lg hover:bg-surface-container transition-colors">
      <span className="font-semibold text-on-surface">Pastoral Altar &amp; Prayer</span>
      <a className="font-mono text-secondary hover:underline truncate text-xs" href="mailto:prayer@worldhealingtrinity.org">prayer@worldhealingtrinity.org</a>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-lg hover:bg-surface-container transition-colors">
      <span className="font-semibold text-on-surface">Legal Governance &amp; URSB</span>
      <a className="font-mono text-secondary hover:underline truncate text-xs" href="mailto:governance@worldhealingtrinity.org">governance@worldhealingtrinity.org</a>
      </div>
      </div>
      </div>
      {/* Operational Hours Badge Card */}
      <div className="p-space-md rounded-xl bg-surface-container-high flex items-center gap-space-md">
      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-on-secondary shrink-0">
      <span className="material-symbols-outlined text-[24px]">schedule</span>
      </div>
      <div className="flex flex-col">
      <span className="font-title-md text-title-md font-bold text-on-surface">Secretariat Registry Timings</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Public Reception: Mon - Fri, 8:00 AM - 5:00 PM EAT. Guild Training Sheds: Mon - Sat, 7:30 AM - 4:30 PM EAT.</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Physical Campuses & Regional Presence (With Verified Coordinates) */}
      <section className="w-full bg-surface-container-low py-space-xl">
      <div className="max-w-7xl mx-auto px-gutter flex flex-col gap-space-lg">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
      <div className="flex flex-col gap-1 max-w-2xl">
      <div className="inline-flex items-center gap-1.5 text-secondary text-label-sm font-label-sm uppercase font-bold tracking-widest">
      <span className="material-symbols-outlined text-[16px]">location_on</span>
                  Clause 2 Physical Presence
                </div>
      <h2 className="font-headline-xl text-headline-xl text-on-surface">Ministry Campuses &amp; Operational Depots</h2>
      <p className="font-body-md text-body-md text-on-surface-variant">All sites operate under official corporate stewardship across Kampala, Mukono, and Wakiso districts.</p>
      </div>
      <div className="flex items-center gap-2 text-label-sm font-label-sm text-on-surface-variant">
      <span className="inline-block w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
      <span>All 3 hubs actively accepting scheduled visitors</span>
      </div>
      </div>
      {/* 3-Column Spatial Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
      {/* Location 1: Headquarters & Sanctuary Campus */}
      <div className="bg-surface-container-lowest rounded-xl shadow-xl flex flex-col overflow-hidden group">
      <div className="relative h-48 w-full overflow-hidden bg-primary">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Architectural photograph of World Healing Trinity Place Limited headquarters campus in Ntinda Kampala Uganda under warm afternoon sunlight, featuring clean dignified corporate signage, red tiled roofing, tropical foliage, and peaceful prayer grounds." src="https://lh3.googleusercontent.com/aida-public/AB6AXuChfkgspn5wZkHPi0bfL-jW7O3KW5xRdE71EwvKmlKWWJlyR2KYFih8KvJLNhGLJmMawIaqX0MaSff0gEDjFVWEnEaJNcKwDHR7rnuSuZSDrypUSdo9ZtPVzjUNlaXDryAnzEn0EYiVqiPtnKzRheA5wS9S4xLGhwT8b3u-KB51ZH5tmLInM9Vq_zFA3ie6tN_YzY-RUXPDO3bG_vYO17zP4A_YEfpaWCtVqCgTVyaR"/>
      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-DEFAULT bg-primary-container/90 backdrop-blur-md text-secondary-fixed text-label-sm font-label-sm font-bold uppercase tracking-wider">
                    Principal Headquarters
                  </div>
      </div>
      <div className="p-space-lg flex flex-col flex-1 gap-space-md">
      <div className="flex flex-col gap-1">
      <h3 className="font-title-lg text-title-lg font-bold text-on-surface">Headquarters &amp; Sanctuary Campus</h3>
      <p className="font-body-sm text-body-sm text-secondary font-medium">Plot 14 Trinity Heights Road, Ntinda / Kampala Corridor</p>
      </div>
      <div className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
      <div className="flex items-start gap-2">
      <span className="material-symbols-outlined text-[18px] text-on-surface shrink-0">apartment</span>
      <span><strong>Housed:</strong> Board of Trustees, General Secretariat, Pastoral Care, Intercessory Chapel.</span>
      </div>
      <div className="flex items-start gap-2">
      <span className="material-symbols-outlined text-[18px] text-on-surface shrink-0">event_available</span>
      <span><strong>Hours:</strong> Mon – Fri (8:00 AM – 5:00 PM EAT)<br/>Sunday Services (8:30 AM – 1:00 PM EAT)</span>
      </div>
      </div>
      {/* Embedded Visual Map Indicator */}
      <div className="w-full h-32 rounded-lg bg-cover bg-center overflow-hidden relative shadow-inner flex items-center justify-center" data-location="Plot 14 Trinity Heights Road Ntinda Kampala Uganda" style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuDRpI8JwcXl8wcQAsn06qlNvLISRcB8lJsdgnwSJN-LHmq8OPGLIYYFr9jfC98nbAvQjlLA3Bwl56_qAW2cecNTgIEX0Akov8lN9iB6qu4UjMGRiLFeWdqJky35XX7DlaqqeMmMPxC6xOF25h-Wlda_S0kpgBlz7sdmMjjwU-rTXLFZUbWZ1n5NxUjiaeHiFyveM_LInC02JFwYwGxUCENM14A1nJYuCvd1HzKiAa-9\')'}}>
      <div className="px-3 py-1.5 rounded bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface font-label-sm text-label-sm font-semibold flex items-center gap-1.5 shadow">
      <span className="material-symbols-outlined text-secondary text-[16px]">pin_drop</span>
                      Ntinda Central Corridor
                    </div>
      </div>
      <div className="mt-auto pt-space-sm flex items-center justify-between">
      <a className="inline-flex items-center gap-1.5 font-label-md text-label-md font-bold text-on-surface hover:text-secondary transition-colors" href="https://maps.google.com/?q=Ntinda+Kampala+Uganda" target="_blank">
      <span>View Route Map</span>
      <span className="material-symbols-outlined text-[16px]">north_east</span>
      </a>
      <span className="text-label-sm font-label-sm text-on-surface-variant font-mono">Plot 14 Reg.</span>
      </div>
      </div>
      </div>
      {/* Location 2: Central Vocational Guild Training Center */}
      <div className="bg-surface-container-lowest rounded-xl shadow-xl flex flex-col overflow-hidden group">
      <div className="relative h-48 w-full overflow-hidden bg-primary">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Vibrant vocational apprenticeship workshop in Mukono Uganda, showing students engaged in industrial tailoring on heavy machines and carpentry joinery benches, warmly lit by sunlight through large industrial clerestory windows." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3cTH3qO0LS3HbmlNZ1PxmMcG-YB9z7cnALbpDF7dHq3QIRrvmKpssX1-w7wszlwhW5BInKH_2_XVpPgLTKeOjzpvrotThpI-cIDH5HhqHLkhaNrWgd-cuD8jv9gDgNgyZ6b-TpJNQf8bHzNORGQfbtJcdhzJxjAlLXAnIPcNj_Y7wKAs1TLCkX2fEKzYfP0N2VCZ0WL_ucQSP0_0u8ncgkC0F9HcglU7AZ7WGF-9Q"/>
      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-DEFAULT bg-primary-container/90 backdrop-blur-md text-secondary-fixed text-label-sm font-label-sm font-bold uppercase tracking-wider">
                    Vocational Training Center
                  </div>
      </div>
      <div className="p-space-lg flex flex-col flex-1 gap-space-md">
      <div className="flex flex-col gap-1">
      <h3 className="font-title-lg text-title-lg font-bold text-on-surface">Central Guild Annex &amp; Workshops</h3>
      <p className="font-body-sm text-body-sm text-secondary font-medium">Mukono / Kampala East Industrial Training Annex</p>
      </div>
      <div className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
      <div className="flex items-start gap-2">
      <span className="material-symbols-outlined text-[18px] text-on-surface shrink-0">handyman</span>
      <span><strong>Housed:</strong> Industrial Tailoring Workshop, Carpentry &amp; Joinery Sheds, Agronomy Greenhouses.</span>
      </div>
      <div className="flex items-start gap-2">
      <span className="material-symbols-outlined text-[18px] text-on-surface shrink-0">event_available</span>
      <span><strong>Hours:</strong> Mon – Sat (7:30 AM – 4:30 PM EAT)<br/>Registrar Intake Desk Open Daily</span>
      </div>
      </div>
      {/* Embedded Visual Map Indicator */}
      <div className="w-full h-32 rounded-lg bg-cover bg-center overflow-hidden relative shadow-inner flex items-center justify-center" data-location="Mukono Industrial Training Annex Uganda" style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuCfDt3qVyC_scC_d6QyurpNpinojwzMlW98TbCf8S8aJhZv0WWb2fKHOY1mM9AU8W4gD3MaiNvBNsXsf2HkZWpP_p3R9GtUVRQI05TwwMGg7HH5kzcXKs_VI69LSp1_ViFv24T4lfKLpbXUv2BbgRq12rcCf-jiXamtR1z513OjKjJLsY95mam4bNBNFEDu18mk9e8hxPDSAamnqoL945gVHUFVjoOpBaQ8fEKo-LG2\')'}}>
      <div className="px-3 py-1.5 rounded bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface font-label-sm text-label-sm font-semibold flex items-center gap-1.5 shadow">
      <span className="material-symbols-outlined text-secondary text-[16px]">pin_drop</span>
                      Mukono Skills Hub
                    </div>
      </div>
      <div className="mt-auto pt-space-sm flex items-center justify-between">
      <a className="inline-flex items-center gap-1.5 font-label-md text-label-md font-bold text-on-surface hover:text-secondary transition-colors" href="https://maps.google.com/?q=Mukono+Uganda" target="_blank">
      <span>Workshop Directions</span>
      <span className="material-symbols-outlined text-[16px]">north_east</span>
      </a>
      <span className="text-label-sm font-label-sm text-on-surface-variant font-mono">East Annex</span>
      </div>
      </div>
      </div>
      {/* Location 3: Regional Outreach & Mobile Clinic Dispatch */}
      <div className="bg-surface-container-lowest rounded-xl shadow-xl flex flex-col overflow-hidden group">
      <div className="relative h-48 w-full overflow-hidden bg-primary">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Community outreach medical vehicle and humanitarian supplies depot in Kawempe Wakiso Uganda, featuring organized medical kits, triage stations, and compassionate frontline workers in navy uniforms." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2A7qhPNtX7fzru4AJHH02rXcMJ-3EsMyHgmC4inM2JbKwYHfsGBCmLMXhAU1Sh32b32YUKgqQ8OSF_Ipqtkx1fW_5NWptadS8RYyHvSwaOIPF0O-eM5TPs0rWza3NiHGxumLijwGPZsYqEEwZzSNbREXpIP3H9w6Z0amT-dwyD9L7Xbo1jXa-2yQlQtQ8CtujnwI90TdtBET3jEoG1LHwK_QsvpuBIt5R_J-czPvJ"/>
      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-DEFAULT bg-primary-container/90 backdrop-blur-md text-secondary-fixed text-label-sm font-label-sm font-bold uppercase tracking-wider">
                    Health &amp; Field Dispatch
                  </div>
      </div>
      <div className="p-space-lg flex flex-col flex-1 gap-space-md">
      <div className="flex flex-col gap-1">
      <h3 className="font-title-lg text-title-lg font-bold text-on-surface">Outreach &amp; Mobile Clinic Depot</h3>
      <p className="font-body-sm text-body-sm text-secondary font-medium">Kawempe / Wakiso Medical Triage Depot</p>
      </div>
      <div className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
      <div className="flex items-start gap-2">
      <span className="material-symbols-outlined text-[18px] text-on-surface shrink-0">local_hospital</span>
      <span><strong>Housed:</strong> Medical inventory warehouse, mobile clinic ambulances, community outreach staging.</span>
      </div>
      <div className="flex items-start gap-2">
      <span className="material-symbols-outlined text-[18px] text-on-surface shrink-0">event_available</span>
      <span><strong>Hours:</strong> Mobile Dispatch: 24/7 Rapid Response<br/>Station Hours: Mon – Fri (8:00 AM – 6:00 PM)</span>
      </div>
      </div>
      {/* Embedded Visual Map Indicator */}
      <div className="w-full h-32 rounded-lg bg-cover bg-center overflow-hidden relative shadow-inner flex items-center justify-center" data-location="Kawempe Wakiso Uganda" style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuCyCYfOHjv_OiThkC_yzL4wJSvWWuMfI2kYpF4dzCDacxJeU2QcqIMvwL_7EJ1P0phFjU0bCMVnU6K7aef5OsT1FkkRHBquaFHJPHDQgoNAOhgSi5W0JAel5CqZQcMM-9TdvArst9af-zSG7rNCeGkSJ5HLAGiWbEJZG0Sr-CzwZdGJOeBpHv2RoEtAWwur5w2NIQsx2pMxX-RfxBzQ-08mn6jII-Y9WnDUuz7Hisyq\')'}}>
      <div className="px-3 py-1.5 rounded bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface font-label-sm text-label-sm font-semibold flex items-center gap-1.5 shadow">
      <span className="material-symbols-outlined text-secondary text-[16px]">pin_drop</span>
                      Kawempe Field Depot
                    </div>
      </div>
      <div className="mt-auto pt-space-sm flex items-center justify-between">
      <a className="inline-flex items-center gap-1.5 font-label-md text-label-md font-bold text-on-surface hover:text-secondary transition-colors" href="https://maps.google.com/?q=Kawempe+Wakiso+Uganda" target="_blank">
      <span>Dispatch Coordinates</span>
      <span className="material-symbols-outlined text-[16px]">north_east</span>
      </a>
      <span className="text-label-sm font-label-sm text-on-surface-variant font-mono">Triage Unit</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Official Statutory Legal Registry Notice & Governance Panel */}
      <section className="w-full bg-surface-container py-space-xl">
      <div className="max-w-7xl mx-auto px-gutter flex flex-col gap-space-lg">
      <div className="bg-surface-container-lowest rounded-xl shadow-xl p-space-lg sm:p-10 flex flex-col gap-space-md">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm pb-space-sm">
      <div className="flex items-center gap-space-sm">
      <div className="w-10 h-10 rounded-lg bg-primary text-secondary-fixed flex items-center justify-center">
      <span className="material-symbols-outlined text-[22px]">policy</span>
      </div>
      <div className="flex flex-col">
      <h3 className="font-title-lg text-title-lg font-bold text-on-surface">Official Statutory Legal Registry Notice</h3>
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Public Record Attestation • URSB Compliance</span>
      </div>
      </div>
      <span className="px-3 py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold uppercase tracking-wider">
                  Limited by Guarantee
                </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md text-body-sm font-body-sm text-on-surface-variant">
      <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1">
      <span className="font-label-sm text-label-sm font-bold text-on-surface uppercase">Governing Legislation</span>
      <p>Incorporated under The Companies Act No. 1 of 2012, Republic of Uganda, as an entity Limited by Guarantee without share capital.</p>
      </div>
      <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1">
      <span className="font-label-sm text-label-sm font-bold text-on-surface uppercase">Registration Reference</span>
      <p className="font-mono text-xs font-semibold text-on-surface">G260622-3597</p>
      <p className="text-xs">CTC Docket Ref: 260928101539.41 Client Copy on file at URSB Registry.</p>
      </div>
      <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1">
      <span className="font-label-sm text-label-sm font-bold text-on-surface uppercase">Legal Counsel &amp; Oaths</span>
      <p className="font-semibold text-on-surface">Opio Charles, Advocate</p>
      <p className="text-xs">Commissioner for Oaths, Chambers at Ntinda, Kampala, Uganda.</p>
      </div>
      <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1">
      <span className="font-label-sm text-label-sm font-bold text-on-surface uppercase">Founding Trustees</span>
      <p className="font-semibold text-on-surface">Emojong Florence Lawil<br/>Emojong-Odeke Joram</p>
      <p className="text-xs">Custodians of the Perpetual Trust and Vocational Charter.</p>
      </div>
      </div>
      <div className="p-4 rounded-lg bg-surface-container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm text-body-sm font-body-sm text-on-surface-variant">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-secondary text-[20px]">assignment_turned_in</span>
      <span>Articles &amp; Memorandum Clause 2 and Clause 7 documents available for formal institutional inspection by statutory partners.</span>
      </div>
      <button className="inline-flex items-center gap-1 font-label-md text-label-md font-bold text-secondary hover:text-on-secondary-container transition-colors whitespace-nowrap" type="button">
      <span>Request Legal File Inspection</span>
      <span className="material-symbols-outlined text-[16px]">chevron_right</span>
      </button>
      </div>
      </div>
      </div>
      </section>
    </div>
  )
}
