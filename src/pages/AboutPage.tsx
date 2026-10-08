import { Link } from 'react-router-dom'

export default function AboutPage() {

  return (
    <div className="flex flex-col w-full">
      {/* Top Statutory Bar / Breadcrumb Context */}
      <section className="w-full bg-surface-container py-space-sm px-gutter">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-space-xs text-label-sm font-label-sm">
      <div className="flex items-center gap-space-xs text-on-surface-variant">
      <Link className="hover:text-on-surface transition-colors" to="/">Portal</Link>
      <span>/</span>
      <span className="text-on-surface font-semibold">Institutional Governance</span>
      <span>/</span>
      <span className="text-secondary font-bold">URSB Registry File G260622-3597</span>
      </div>
      <div className="flex items-center gap-2 text-on-surface-variant">
      <span className="w-2 h-2 rounded-full bg-secondary inline-block animate-pulse"></span>
      <span className="text-on-surface font-medium uppercase tracking-wider text-[10px]">Verified Table C Part II Guarantee Charter</span>
      </div>
      </div>
      </section>
      {/* Editorial Hero: Authority & Mandate */}
      <section className="w-full bg-surface-container-lowest px-gutter py-space-xl">
      <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
      <div className="lg:col-span-8 flex flex-col gap-space-md">
      <div className="inline-flex items-center gap-2 self-start px-3 py-1 bg-secondary/10 text-secondary rounded-DEFAULT text-label-sm font-label-sm uppercase tracking-widest font-bold">
      <span className="material-symbols-outlined text-[15px]" style={{fontVariationSettings: '\'FILL\' 1'}}>gavel</span>
                  Statutory Legal Disclosure • Republic of Uganda
                </div>
      <h1 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
                  About Our Ministry &amp; Legal Governance
                </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
                  Established under <strong className="text-on-surface font-semibold">The Companies Act No. 1 of 2012</strong> (The Republic of Uganda) as a Company Limited by Guarantee and Not Having a Share Capital. World Healing Trinity Place Limited operates with transparent fiduciary accountability, clear civil oversight, and unwavering biblical fidelity.
                </p>
      <div className="flex flex-wrap items-center gap-space-md pt-2">
      <a className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold hover:bg-primary-container shadow-sm transition-all" href="#charter-manifesto">
      <span className="material-symbols-outlined text-[18px]">verified_user</span>
                    Inspect Certified Charter
                  </a>
      <a className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md font-semibold hover:bg-surface-container-high transition-colors" href="#subscribers">
      <span className="material-symbols-outlined text-[18px]">groups</span>
                    Founding Trustees &amp; Subscribers
                  </a>
      </div>
      </div>
      {/* URSB Digital Verification Quick Card */}
      <div className="lg:col-span-4 bg-surface-container-low rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
      <div className="flex items-center justify-between pb-space-xs">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-secondary text-[24px]">verified</span>
      <span className="font-title-md text-title-md font-bold text-on-surface">URSB Authenticated</span>
      </div>
      <span className="px-2 py-0.5 rounded-DEFAULT bg-secondary/20 text-on-secondary-fixed text-label-sm font-label-sm font-bold">CTC 260928101539.41</span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Full compliance certificate registered with the Uganda Registration Services Bureau Registrar of Companies under public record.
                </p>
      <div className="bg-surface-container-lowest p-space-sm rounded-lg flex flex-col gap-1.5 font-body-sm text-body-sm">
      <div className="flex justify-between items-center text-on-surface-variant">
      <span>Filing Tracking Ref:</span>
      <span className="font-mono text-on-surface font-semibold text-[12px]">G260622-3597</span>
      </div>
      <div className="flex justify-between items-center text-on-surface-variant">
      <span>Jurisdiction:</span>
      <span className="text-on-surface font-medium">Republic of Uganda</span>
      </div>
      <div className="flex justify-between items-center text-on-surface-variant">
      <span>Entity Classification:</span>
      <span className="text-on-surface font-medium">Non-Profit Guarantee</span>
      </div>
      <div className="flex justify-between items-center text-on-surface-variant">
      <span>Attesting Registrar:</span>
      <span className="text-on-surface font-medium">Nansamba Asha</span>
      </div>
      </div>
      <div className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant pt-1">
      <span className="flex items-center gap-1">
      <span className="material-symbols-outlined text-[16px] text-secondary">event</span>
                    Attested: 28 SEP 2026
                  </span>
      <span className="text-secondary font-semibold">Public Client Copy</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Section 1: Official Founding & Legal Charter Bento Grid */}
      <section className="w-full bg-surface py-space-xl px-gutter" id="charter-manifesto">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
      <div>
      <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">Statutory Articles Analysis</span>
      <h2 className="font-headline-md text-headline-md text-on-surface font-bold mt-1">Official Legal Charter &amp; Constitution</h2>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
                Structured precisely to uphold the integrity of charitable donations, public trusts, and community development missions across East Africa.
              </p>
      </div>
      {/* Bento Grid Elements */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
      {/* Tile 1: Legal Entity Name & Base */}
      <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between gap-space-md">
      <div className="flex flex-col gap-space-xs">
      <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary mb-2">
      <span className="material-symbols-outlined text-[22px]">badge</span>
      </div>
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Corporate Name &amp; Domicile</span>
      <h3 className="font-title-lg text-title-lg text-on-surface font-bold">WORLD HEALING TRINITY PLACE LIMITED</h3>
      <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                    Clause 1 &amp; 2: Registered and domiciled permanently within the Republic of Uganda as a distinct juridical faith and humanitarian body.
                  </p>
      </div>
      <div className="bg-surface-container-low p-space-sm rounded-lg text-label-sm font-label-sm text-on-surface-variant flex items-center gap-2">
      <span className="material-symbols-outlined text-[16px] text-secondary">pin_drop</span>
                  Registered Office: Kampala, Republic of Uganda
                </div>
      </div>
      {/* Tile 2: Entity Model & Guarantee Structure */}
      <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between gap-space-md">
      <div className="flex flex-col gap-space-xs">
      <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary mb-2">
      <span className="material-symbols-outlined text-[22px]">balance</span>
      </div>
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Company Model</span>
      <h3 className="font-title-lg text-title-lg text-on-surface font-bold">Company Limited by Guarantee</h3>
      <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                    Incorporated with <strong>No Share Capital</strong>. Governed under the statutory requirements of <span className="font-semibold text-on-surface">Table C Part II</span> of the Uganda Companies Act 2012, precluding private equity distribution.
                  </p>
      </div>
      <div className="bg-surface-container-low p-space-sm rounded-lg text-label-sm font-label-sm text-on-surface-variant flex items-center gap-2">
      <span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
                  All resources permanently assigned to charitable trust
                </div>
      </div>
      {/* Tile 3: Liability & Member Guarantee Undertaking */}
      <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between gap-space-md">
      <div className="flex flex-col gap-space-xs">
      <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary mb-2">
      <span className="material-symbols-outlined text-[22px]">security</span>
      </div>
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Statutory Indemnity</span>
      <h3 className="font-title-lg text-title-lg text-on-surface font-bold">Limited Member Liability</h3>
      <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                    Clauses 4 &amp; 5: Each subscriber provides a solemn formal undertaking not exceeding <strong className="text-on-surface font-semibold">UGX 1,000,000</strong> toward debts and liabilities in winding-up contingencies.
                  </p>
      </div>
      <div className="bg-surface-container-low p-space-sm rounded-lg text-label-sm font-label-sm text-on-surface-variant flex items-center justify-between">
      <span>Guarantor Cap:</span>
      <span className="font-bold text-on-surface">UGX 1,000,000 / member</span>
      </div>
      </div>
      {/* Tile 4: Legal Attestation & Witness */}
      <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between gap-space-md">
      <div className="flex flex-col gap-space-xs">
      <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary mb-2">
      <span className="material-symbols-outlined text-[22px]">draw</span>
      </div>
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Legal Counsel &amp; Witness</span>
      <h3 className="font-title-lg text-title-lg text-on-surface font-bold">Attested by Opio Charles</h3>
      <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                    Formal subscriber signatures, identity affirmations, and constitutional submissions witnessed and attested by legal counsel residing at Ntinda, Kampala.
                  </p>
      </div>
      <div className="bg-surface-container-low p-space-sm rounded-lg text-label-sm font-label-sm text-on-surface-variant flex items-center justify-between">
      <span>Counsel Designation:</span>
      <span className="font-bold text-on-surface">Lawyer • Ntinda, Kampala</span>
      </div>
      </div>
      {/* Tile 5: Core Statutory Objects Matrix */}
      <div className="lg:col-span-2 bg-primary-container text-on-primary-container p-space-lg rounded-xl shadow-md flex flex-col justify-between gap-space-md">
      <div>
      <div className="flex items-center justify-between mb-space-sm">
      <span className="px-2.5 py-1 rounded-DEFAULT bg-secondary/20 text-secondary-fixed text-label-sm font-label-sm font-bold uppercase tracking-wider">
                      Memorandum Clause 3: Objects (1 – 8)
                    </span>
      <span className="text-on-primary-container/70 text-body-sm font-body-sm">URSB Enacted 2026</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-primary font-bold mb-space-sm">
                    Eight Pillars of Authorized Public Mission
                  </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-space-md gap-y-2 text-body-sm font-body-sm text-on-primary-container/90">
      <div className="flex items-start gap-2">
      <span className="text-secondary-fixed font-bold text-label-sm font-label-sm">1.</span>
      <span>Advancement of Christian faith &amp; fellowships for the general public.</span>
      </div>
      <div className="flex items-start gap-2">
      <span className="text-secondary-fixed font-bold text-label-sm font-label-sm">2.</span>
      <span>Holistic spiritual, physical, financial, and emotional mental-health healing.</span>
      </div>
      <div className="flex items-start gap-2">
      <span className="text-secondary-fixed font-bold text-label-sm font-label-sm">3.</span>
      <span>Capacity building &amp; sustainable income-generating independence.</span>
      </div>
      <div className="flex items-start gap-2">
      <span className="text-secondary-fixed font-bold text-label-sm font-label-sm">4.</span>
      <span>Operating vocational training centres to eradicate economic dependency.</span>
      </div>
      <div className="flex items-start gap-2">
      <span className="text-secondary-fixed font-bold text-label-sm font-label-sm">5.</span>
      <span>Evangelical community outreaches, crusades, and global conferences.</span>
      </div>
      <div className="flex items-start gap-2">
      <span className="text-secondary-fixed font-bold text-label-sm font-label-sm">6.</span>
      <span>Christian theological discipleship and leadership mentoring institutes.</span>
      </div>
      <div className="flex items-start gap-2">
      <span className="text-secondary-fixed font-bold text-label-sm font-label-sm">7.</span>
      <span>Stewardship: tithes, offerings, grants, and prudent non-profit investment.</span>
      </div>
      <div className="flex items-start gap-2">
      <span className="text-secondary-fixed font-bold text-label-sm font-label-sm">8.</span>
      <span>Broad alliances with government, civic, and Christian bodies.</span>
      </div>
      </div>
      </div>
      <div className="pt-space-xs border-t border-on-primary-container/10 flex items-center justify-between text-label-sm font-label-sm text-on-primary-container/80">
      <span>Legally binding mandate registered under Act No. 1 of 2012</span>
      <span className="text-secondary-fixed font-semibold">100% Non-Profit Operation</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Section 2: Property & Real Estate Acquisition Powers (Objects 9 & 10) */}
      <section className="w-full bg-surface-container-lowest py-space-xl px-gutter">
      <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
      {/* Visual & Narrative */}
      <div className="lg:col-span-5 flex flex-col gap-space-md">
      <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">Property &amp; Asset Management</span>
      <h2 className="font-headline-md text-headline-md text-on-surface font-bold leading-tight">
                  Powers of Acquisition &amp; Institutional Expansion
                </h2>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  As delineated in <strong className="text-on-surface">Objects 9 and 10 of the Memorandum of Association</strong>, the ministry possesses full corporate authority to acquire, construct, and steward permanent infrastructure to house transformative community work across Uganda.
                </p>
      <div className="flex flex-col gap-space-sm pt-2">
      <div className="bg-surface-container p-space-md rounded-lg flex items-start gap-space-sm">
      <span className="material-symbols-outlined text-secondary text-[22px] mt-0.5">apartment</span>
      <div>
      <h4 className="font-title-md text-title-md text-on-surface font-bold">Object 9: Church &amp; Facility Procurement</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        Express corporate power to purchase, lease, hire, or acquire lands, buildings, and real estate for church auditoriums, rehabilitation clinics, training facilities, and administrative headquarters.
                      </p>
      </div>
      </div>
      <div className="bg-surface-container p-space-md rounded-lg flex items-start gap-space-sm">
      <span className="material-symbols-outlined text-secondary text-[22px] mt-0.5">task_alt</span>
      <div>
      <h4 className="font-title-md text-title-md text-on-surface font-bold">Object 10: Incidental &amp; Conducive Authority</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        Full capacity to execute all such other lawful acts and deeds conducive or incidental to the full achievement of spiritual healing, skills training, and community welfare.
                      </p>
      </div>
      </div>
      </div>
      </div>
      {/* Visual representation of physical ministry facilities planned */}
      <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-space-md">
      <div className="bg-surface-container-low rounded-xl overflow-hidden shadow-sm flex flex-col">
      <div className="h-48 w-full bg-cover bg-center" data-alt="Architectural perspective of modern community training institute in Kampala Uganda with warm natural lighting, spacious classrooms, landscaped grounds and institutional signage." style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuCxHdAJxUljo-isKuoPGz6oPAQM8fr-GbiBw6F0W-SfoHrAw7DdOd8IBoWg3IK3zquTV5d-swNWHUoWUG2maH5wy8eyUF7hj3dGAdNt8E-O0EetLv0KbmY5C3zJAivCyPL1CDfLyfr5eRaVQ5wIt2yUuKxtmh8PCrr04yY6mpoelraKBZ42OHr3dYNAQJZLW8jxD3oM9ZHi-jLxMERwXUnFIHyHzeci0tqtmi6obECF\')'}}></div>
      <div className="p-space-md flex flex-col gap-1">
      <span className="text-label-sm font-label-sm text-secondary font-bold uppercase">Vocational Guild Centers</span>
      <span className="font-title-md text-title-md text-on-surface font-bold">Skills Training Institutes</span>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Classrooms and maker spaces for tailoring, carpentry, and electrical trades.</p>
      </div>
      </div>
      <div className="bg-surface-container-low rounded-xl overflow-hidden shadow-sm flex flex-col sm:translate-y-6">
      <div className="h-48 w-full bg-cover bg-center" data-alt="Interior of a dignified fellowship sanctuary and counseling center in Uganda, warm ambient illumination, peaceful wooden finishes, rows of chairs, and uplifting architectural design." style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuBr6EInI7r_toewjxe83Nt3QPfkukgUOyDqCHxsvu3gS1LIRg1nIQONuXwNuuszN57sZfN4EW6bbiveiNidgptj1eDU2ZQ5he4O-SvRjOvkNTUpgiIgAXViFmtLysBhI34Wgm-wbvbsW9Anf7eAmuhswchafDnhr8bbdWJ6VKx5Pj2KFZYKWpLHLOFs8fIpIQj19sdh7Rk3jzF-wTXPjml3qEGawHHQTYvIyu1OydFn\')'}}></div>
      <div className="p-space-md flex flex-col gap-1">
      <span className="text-label-sm font-label-sm text-secondary font-bold uppercase">Holistic Care Facilities</span>
      <span className="font-title-md text-title-md text-on-surface font-bold">Auditoriums &amp; Clinics</span>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Restorative spaces dedicated to emotional healing, trauma recovery, and worship.</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Section 3: Key Subscribers & Founding Directors Profile */}
      <section className="w-full bg-surface py-space-xl px-gutter" id="subscribers">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
      <div className="text-center max-w-2xl mx-auto flex flex-col gap-space-xs">
      <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">Leadership &amp; Fiduciary Stewardship</span>
      <h2 className="font-headline-md text-headline-md text-on-surface font-bold">Founding Subscribers &amp; Trustees</h2>
      <p className="font-body-md text-body-md text-on-surface-variant">
                Duly subscribed under the Articles of Association dated 9th September 2026. Bringing commercial acumen and strict accounting rigor into ministry stewardship.
              </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
      {/* Profile 1: Florence Lawil */}
      <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col md:flex-row gap-space-md items-start">
      <div className="w-24 h-24 rounded-xl overflow-hidden bg-surface-container flex-shrink-0">
      <img className="w-full h-full object-cover" data-alt="Portrait of an African Ugandan female businesswoman and ministry founder dressed in elegant corporate attire, compassionate smile, soft indoor warm studio light." src="https://lh3.googleusercontent.com/aida-public/AB6AXuChs-GQjBi62BS7MaalnC-RVVDBgy0kyvFOS2DWW_api_uJ5PtzQl4AHpQ_6watq7QvLrVNZ49D0iQeiZbmV3o38lZCRsrenXljuHISXgM4jzaQZ8ypK2J3UFPXGkbKvKfbmUL__SpQUrGYpCLWBv_70ZK_RkJjrTmn22hbLDvl1inPyevUg-G33jxY6ECh3PFeWBxeknn20U8ZCtDtmRQxcYsZKBfQF8pDqeGVFqiv"/>
      </div>
      <div className="flex flex-col gap-space-xs flex-1">
      <div className="flex items-center justify-between">
      <span className="px-2 py-0.5 rounded-DEFAULT bg-secondary/15 text-secondary text-label-sm font-label-sm font-bold uppercase">Founding Subscriber</span>
      <span className="material-symbols-outlined text-[18px] text-on-surface-variant">draw</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">EMOJONG FLORENCE LAWIL</h3>
      <span className="font-body-sm text-body-sm text-secondary font-semibold">Business Woman • Executive Trustee</span>
      <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                    Subscribed as a founding director under the official URSB charter. Florence provides strategic leadership, linking community outreach with sustainable enterprise development. Her dedication centers on uplifting vulnerable women, youth, and families through practical skills and compassionate spiritual support.
                  </p>
      <div className="pt-space-xs flex items-center gap-space-md text-label-sm font-label-sm text-on-surface-variant">
      <span>Signatory Undertaking: <strong className="text-on-surface">Table C Guarantor</strong></span>
      <span>•</span>
      <span>Status: <strong className="text-on-surface">Verified Subscriber</strong></span>
      </div>
      </div>
      </div>
      {/* Profile 2: Joram Emojong-Odeke */}
      <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col md:flex-row gap-space-md items-start">
      <div className="w-24 h-24 rounded-xl overflow-hidden bg-surface-container flex-shrink-0">
      <img className="w-full h-full object-cover" data-alt="Portrait of an African Ugandan professional male accountant and trustee in sharp navy suit, spectacles, confident and trustworthy expression with warm office background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvCDQP2LBJJL2oPyIHZvzsgSkBgIC2xvsgckTEo08SZBljV7WbfUrKIkZdRSD1fz6nlFYas6DVbP9d21jNG9jQs61XonJ1Syv_N_Vl33_nbDAbL_hN5wqinvQy59w3fHnQNU8UlYdx4sy6CBb014_C2M6Yx4V6YXkO3eTnPAeZGdA_EhntsxsWUN0S-03fWaAFthw8-MLwkic7I1gbawb_PtokCiPsNvKMF2iXG5hh"/>
      </div>
      <div className="flex flex-col gap-space-xs flex-1">
      <div className="flex items-center justify-between">
      <span className="px-2 py-0.5 rounded-DEFAULT bg-secondary/15 text-secondary text-label-sm font-label-sm font-bold uppercase">Founding Subscriber</span>
      <span className="material-symbols-outlined text-[18px] text-on-surface-variant">account_balance</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">EMOJONG-ODEKE JORAM</h3>
      <span className="font-body-sm text-body-sm text-secondary font-semibold">Accountant • Financial Trustee</span>
      <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                    Subscribed under the official charter with primary oversight over financial governance and statutory compliance. Joram guarantees that tithes, grants, and external partner funds are administered with pristine accounting standards, annual external audits, and zero tolerance for malfeasance.
                  </p>
      <div className="pt-space-xs flex items-center gap-space-md text-label-sm font-label-sm text-on-surface-variant">
      <span>Statutory Role: <strong className="text-on-surface">Fiscal Transparency Officer</strong></span>
      <span>•</span>
      <span>Signatory: <strong className="text-on-surface">Active</strong></span>
      </div>
      </div>
      </div>
      </div>
      {/* Legal Counsel Callout Card */}
      <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col sm:flex-row items-center justify-between gap-space-md">
      <div className="flex items-center gap-space-md">
      <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface">
      <span className="material-symbols-outlined text-[24px]">policy</span>
      </div>
      <div>
      <h4 className="font-title-md text-title-md text-on-surface font-bold">Independent Legal Attestation &amp; Registration</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
                    All statutory instruments filed and witnessed by <strong className="text-on-surface font-semibold">Opio Charles (Advocate / Lawyer, Ntinda, Kampala)</strong> in compliance with the High Court and URSB standards.
                  </p>
      </div>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
      <span className="px-3 py-1.5 bg-surface-container-lowest text-on-surface rounded-lg font-label-sm text-label-sm font-bold shadow-sm">
                  URSB Ref: G260622-3597
                </span>
      </div>
      </div>
      </div>
      </section>
      {/* Section 4: Interactive Document Verification Showcase */}
      <section className="w-full bg-surface-container-lowest py-space-xl px-gutter">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-space-md">
      <div>
      <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">Authenticity &amp; Due Diligence</span>
      <h2 className="font-headline-md text-headline-md text-on-surface font-bold mt-1">Live Filing Verification Record</h2>
      </div>
      <div className="flex items-center gap-2">
      <button className="px-3.5 py-2 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold hover:bg-surface-container-high transition-colors flex items-center gap-1.5" id="btn-toggle-view">
      <span className="material-symbols-outlined text-[16px]">pageview</span>
                  Toggle View Mode
                </button>
      <span className="text-label-sm font-label-sm text-on-surface-variant">Updated: September 2026</span>
      </div>
      </div>
      {/* Institutional Registry Document Viewer Container */}
      <div className="bg-surface-container-low rounded-2xl p-space-md md:p-space-lg shadow-md flex flex-col gap-space-md">
      {/* Stamp and Barcode Header Simulator */}
      <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-md">
      <div className="flex items-center gap-space-md">
      <div className="p-3 bg-surface-container rounded-lg flex flex-col items-center justify-center text-center">
      <span className="material-symbols-outlined text-secondary text-[26px]">assured_workload</span>
      <span className="text-[10px] font-bold text-on-surface uppercase tracking-tight mt-1">URSB SEAL</span>
      </div>
      <div className="flex flex-col">
      <span className="font-title-md text-title-md text-on-surface font-bold">Uganda Registration Services Bureau</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">The Companies Act No. 1 of 2012 • Client Copy Extract</span>
      </div>
      </div>
      {/* Barcode Emulation */}
      <div className="flex flex-col items-start lg:items-end gap-1">
      <div className="flex items-center gap-0.5 h-7">
      <div className="w-1 h-full bg-on-surface"></div>
      <div className="w-0.5 h-full bg-on-surface"></div>
      <div className="w-2 h-full bg-on-surface"></div>
      <div className="w-0.5 h-full bg-on-surface"></div>
      <div className="w-1.5 h-full bg-on-surface"></div>
      <div className="w-0.5 h-full bg-on-surface"></div>
      <div className="w-1 h-full bg-on-surface"></div>
      <div className="w-2.5 h-full bg-on-surface"></div>
      <div className="w-0.5 h-full bg-on-surface"></div>
      <div className="w-1 h-full bg-on-surface"></div>
      <div className="w-2 h-full bg-on-surface"></div>
      <div className="w-0.5 h-full bg-on-surface"></div>
      <div className="w-1.5 h-full bg-on-surface"></div>
      <div className="w-0.5 h-full bg-on-surface"></div>
      <div className="w-2 h-full bg-on-surface"></div>
      </div>
      <span className="font-mono text-[11px] text-on-surface-variant font-bold tracking-widest">CTC 260928101539.41 CLIENT COPY</span>
      </div>
      </div>
      {/* Document Tabs / Inspector Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
      <div className="bg-surface-container-lowest p-space-md rounded-xl flex flex-col gap-2">
      <div className="flex items-center justify-between">
      <span className="text-label-sm font-label-sm text-secondary font-bold uppercase">Page 1 Filing</span>
      <span className="material-symbols-outlined text-[16px] text-on-surface-variant">description</span>
      </div>
      <h4 className="font-title-md text-title-md text-on-surface font-bold">Memorandum of Association</h4>
      <ul className="text-body-sm font-body-sm text-on-surface-variant flex flex-col gap-1.5 mt-1">
      <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Name clause defined in Section 1</li>
      <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Ugandan registered office clause</li>
      <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Objects 1 through 8 formalized</li>
      </ul>
      </div>
      <div className="bg-surface-container-lowest p-space-md rounded-xl flex flex-col gap-2">
      <div className="flex items-center justify-between">
      <span className="text-label-sm font-label-sm text-secondary font-bold uppercase">Page 2 Filing</span>
      <span className="material-symbols-outlined text-[16px] text-on-surface-variant">description</span>
      </div>
      <h4 className="font-title-md text-title-md text-on-surface font-bold">Articles of Association</h4>
      <ul className="text-body-sm font-body-sm text-on-surface-variant flex flex-col gap-1.5 mt-1">
      <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Property acquisition objects (9 &amp; 10)</li>
      <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>UGX 1,000,000 guarantee undertaking</li>
      <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Adoption of Table C Part II rules</li>
      </ul>
      </div>
      <div className="bg-surface-container-lowest p-space-md rounded-xl flex flex-col gap-2">
      <div className="flex items-center justify-between">
      <span className="text-label-sm font-label-sm text-secondary font-bold uppercase">Official Attestation</span>
      <span className="material-symbols-outlined text-[16px] text-on-surface-variant">verified</span>
      </div>
      <h4 className="font-title-md text-title-md text-on-surface font-bold">Registrar Certification</h4>
      <ul className="text-body-sm font-body-sm text-on-surface-variant flex flex-col gap-1.5 mt-1">
      <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Signed: 28 SEP 2026</li>
      <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Registrar: Nansamba Asha</li>
      <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Witnessed: Opio Charles, Lawyer</li>
      </ul>
      </div>
      </div>
      {/* Verification Checklist for External Donors & Institutional Partners */}
      <div className="bg-surface-container-lowest p-space-md rounded-xl flex flex-col lg:flex-row items-center justify-between gap-space-md">
      <div className="flex items-center gap-space-sm">
      <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-on-secondary-container">
      <span className="material-symbols-outlined text-[20px]">fact_check</span>
      </div>
      <div>
      <span className="font-title-md text-title-md font-bold text-on-surface">Institutional Compliance Standard</span>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Meets UN, USAID, EU NGO eligibility, and Ugandan Financial Intelligence Authority requirements.</p>
      </div>
      </div>
      <div className="flex items-center gap-space-sm">
      <span className="inline-flex items-center gap-1 text-label-sm font-label-sm text-on-surface font-semibold bg-surface-container px-3 py-1.5 rounded-lg">
      <span className="material-symbols-outlined text-[16px] text-secondary">check</span> Zero Share Capital
                  </span>
      <span className="inline-flex items-center gap-1 text-label-sm font-label-sm text-on-surface font-semibold bg-surface-container px-3 py-1.5 rounded-lg">
      <span className="material-symbols-outlined text-[16px] text-secondary">check</span> Non-Profit Guarantee
                  </span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Section 5: Downloadable Charter Summary & Legal Desk CTA */}
      <section className="w-full bg-primary-container text-on-primary-container py-space-xl px-gutter">
      <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
      <div className="lg:col-span-8 flex flex-col gap-space-md">
      <span className="px-3 py-1 bg-secondary/20 text-secondary-fixed rounded-DEFAULT self-start text-label-sm font-label-sm font-bold uppercase tracking-wider">
                  Transparency Repository
                </span>
      <h2 className="font-headline-xl text-headline-xl text-on-primary font-bold tracking-tight">
                  Review the Full Statutory Charter &amp; Annual Reports
                </h2>
      <p className="font-body-lg text-body-lg text-on-primary-container/90 max-w-2xl leading-relaxed">
                  International missions, philanthropic donors, and institutional partners can request authenticated certified true copies or schedule an introductory meeting with our legal trustees.
                </p>
      <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
      {/* Simulated Download Action */}
      <button className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md font-bold hover:bg-secondary/90 transition-all shadow-md">
      <span className="material-symbols-outlined text-[18px]">download</span>
                    Download Certified Summary (PDF)
                  </button>
      <Link className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-surface-container-highest/20 hover:bg-surface-container-highest/30 text-on-primary font-label-md text-label-md font-semibold transition-colors" to="/contact-give">
      <span className="material-symbols-outlined text-[18px]">contact_mail</span>
                    Inquire with Legal Trustees
                  </Link>
      </div>
      </div>
      {/* Legal Office Direct Channel */}
      <div className="lg:col-span-4 bg-primary text-on-primary p-space-lg rounded-xl shadow-xl flex flex-col gap-space-sm">
      <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider font-bold">Ministry Legal Registry</span>
      <h3 className="font-title-lg text-title-lg font-bold">Office of General Counsel</h3>
      <p className="font-body-sm text-body-sm text-on-primary/80">
                  Plot 14 Trinity Heights Road, Ntinda / Kampala Corridor, Republic of Uganda.
                </p>
      <div className="flex flex-col gap-2 pt-2 text-body-sm font-body-sm text-on-primary/90">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-[16px] text-secondary-fixed">mail</span>
      <span>governance@worldhealingtrinity.org</span>
      </div>
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-[16px] text-secondary-fixed">phone</span>
      <span>+256 (0) 414 000 000</span>
      </div>
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-[16px] text-secondary-fixed">schedule</span>
      <span>Mon–Fri, 08:30 – 17:00 EAT</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Interactive script for toggles and printable summary */}
    </div>
  )
}
