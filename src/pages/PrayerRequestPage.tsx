import { type FormEvent } from 'react'

export default function PrayerRequestPage() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <div className="flex flex-col w-full">
      {/* Sacred Sanctuary Intro & Scriptural Banner */}
      <section className="relative bg-surface-container-low px-gutter py-space-xl overflow-hidden">
      <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-secondary-fixed/20 blur-3xl pointer-events-none"></div>
      <div className="absolute left-1/4 -bottom-20 w-80 h-80 rounded-full bg-tertiary-fixed/30 blur-3xl pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-space-lg">
      {/* Breadcrumb Bar & Legal Reference */}
      <div className="flex flex-wrap items-center justify-between gap-space-sm text-body-sm">
      <nav className="flex items-center gap-space-xs text-on-surface-variant">
      <span className="font-label-sm uppercase tracking-wider text-secondary">Portal Registry</span>
      <span className="material-symbols-outlined text-[14px]">chevron_right</span>
      <span className="font-label-sm uppercase tracking-wider">Altar of Intercession</span>
      <span className="material-symbols-outlined text-[14px]">chevron_right</span>
      <span className="text-on-surface font-semibold">Confidential Petitions</span>
      </nav>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm">
      <span className="material-symbols-outlined text-[16px] text-secondary">verified_user</span>
      <span>Memorandum Clause 3, Objects 1 &amp; 2 • Faith Advancement &amp; Spiritual Liberation</span>
      </div>
      </div>
      {/* Main Heading Block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end">
      <div className="lg:col-span-8 flex flex-col gap-space-sm">
      <span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-bold flex items-center gap-2">
      <span className="w-6 h-0.5 bg-secondary inline-block"></span>
                  Kampala Prayer Tabernacle &amp; Altar of Grace
                </span>
      <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                  Intercessory Prayer, Healing Petitions &amp; Pastoral Counseling
                </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
                  Submit your confidential prayer requests and spiritual petitions directly to our 24/7 dedicated intercessory prayer altar and pastoral counseling team in Kampala. Carried in reverence, confidentiality, and biblical faith.
                </p>
      </div>
      {/* Scriptural Emblem Box */}
      <div className="lg:col-span-4 bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-2">
      <div className="flex items-center gap-2 text-secondary">
      <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: '\'FILL\' 1'}}>menu_book</span>
      <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider">Scriptural Anchor</span>
      </div>
      <blockquote className="font-headline-sm text-headline-sm italic text-on-surface leading-snug">
                  “Is anyone among you sick? Let them call the elders of the church to pray over them and anoint them with oil in the name of the Lord.”
                </blockquote>
      <span className="font-label-md text-label-md text-on-surface-variant text-right font-medium">— James 5:14</span>
      </div>
      </div>
      {/* Stat Badges Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md pt-space-sm">
      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center gap-space-sm">
      <div className="w-12 h-12 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-[24px]">schedule</span>
      </div>
      <div className="flex flex-col">
      <span className="font-headline-sm text-headline-sm font-bold text-on-surface leading-none">24/7</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-1">Altar Vigil</span>
      </div>
      </div>
      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center gap-space-sm">
      <div className="w-12 h-12 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-[24px]">front_hand</span>
      </div>
      <div className="flex flex-col">
      <span className="font-headline-sm text-headline-sm font-bold text-on-surface leading-none">1,400+</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-1">Petitions Carried</span>
      </div>
      </div>
      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center gap-space-sm">
      <div className="w-12 h-12 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-[24px]">lock</span>
      </div>
      <div className="flex flex-col">
      <span className="font-title-md text-title-md font-bold text-on-surface leading-none">Strict Pastoral</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-1">Confidentiality</span>
      </div>
      </div>
      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center gap-space-sm">
      <div className="w-12 h-12 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-[24px]">volunteer_activism</span>
      </div>
      <div className="flex flex-col">
      <span className="font-title-md text-title-md font-bold text-on-surface leading-none">100% Free</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-1">Pastoral Care</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Interactive Sanctuary Altar Console & Sidebar */}
      <section className="max-w-7xl mx-auto w-full px-gutter py-space-xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
      {/* Main Petition Console (8 cols) */}
      <div className="lg:col-span-8 flex flex-col gap-space-md">
      <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-md flex flex-col gap-space-md">
      <div className="flex flex-col gap-1 pb-space-sm">
      <div className="flex items-center gap-2">
      <span className="w-3 h-3 rounded-full bg-secondary inline-block animate-pulse"></span>
      <span className="font-label-sm text-label-sm font-bold uppercase tracking-widest text-secondary">Sacred Intention Form</span>
      </div>
      <h2 className="font-headline-md text-headline-md text-on-surface">Submit Your Intercessory Petition</h2>
      <p className="font-body-md text-body-md text-on-surface-variant">
                    Every petition submitted is received with pastoral reverence and placed before the Kampala Ministry Prayer Altar across all four prayer watches.
                  </p>
      </div>
      <form className="flex flex-col gap-space-md" id="petitionForm" onSubmit={handleSubmit}>
      {/* Category Selector Pills */}
      <div className="flex flex-col gap-space-xs">
      <label className="font-label-md text-label-md font-bold text-on-surface">Select Primary Petition Nature *</label>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2" id="categoryPillGroup">
      <button className="category-pill active flex items-center gap-2 p-3 rounded-lg text-left bg-primary text-on-primary text-body-sm font-medium transition-all" type="button">
      <span className="material-symbols-outlined text-[18px]">healing</span>
      <span>Physical Illness &amp; Healing</span>
      </button>
      <button className="category-pill flex items-center gap-2 p-3 rounded-lg text-left bg-surface-container hover:bg-surface-container-high text-on-surface text-body-sm font-medium transition-all" type="button">
      <span className="material-symbols-outlined text-[18px]">shield</span>
      <span>Spiritual Deliverance</span>
      </button>
      <button className="category-pill flex items-center gap-2 p-3 rounded-lg text-left bg-surface-container hover:bg-surface-container-high text-on-surface text-body-sm font-medium transition-all" type="button">
      <span className="material-symbols-outlined text-[18px]">psychology</span>
      <span>Emotional Healing &amp; Peace</span>
      </button>
      <button className="category-pill flex items-center gap-2 p-3 rounded-lg text-left bg-surface-container hover:bg-surface-container-high text-on-surface text-body-sm font-medium transition-all" type="button">
      <span className="material-symbols-outlined text-[18px]">diversity_1</span>
      <span>Family &amp; Marriage Restoration</span>
      </button>
      <button className="category-pill flex items-center gap-2 p-3 rounded-lg text-left bg-surface-container hover:bg-surface-container-high text-on-surface text-body-sm font-medium transition-all" type="button">
      <span className="material-symbols-outlined text-[18px]">payments</span>
      <span>Financial &amp; Debt Deliverance</span>
      </button>
      <button className="category-pill flex items-center gap-2 p-3 rounded-lg text-left bg-surface-container hover:bg-surface-container-high text-on-surface text-body-sm font-medium transition-all" type="button">
      <span className="material-symbols-outlined text-[18px]">handshake</span>
      <span>Vocational Student &amp; Business</span>
      </button>
      </div>
      <input id="selectedCategory" name="selectedCategory" type="hidden" value="Physical Illness &amp; Sickness Healing"/>
      </div>
      {/* Vigil Urgency Radio Group */}
      <div className="flex flex-col gap-space-xs">
      <label className="font-label-md text-label-md font-bold text-on-surface">Urgency Level on Altar</label>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
      <label className="flex items-center gap-space-sm p-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer transition-colors">
      <input checked className="w-4 h-4 accent-secondary" name="urgency" type="radio" value="standard"/>
      <div className="flex flex-col">
      <span className="font-title-md text-title-md font-bold text-on-surface">Standard Prayer Vigil</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Carried during the regular 4 daily altar watches</span>
      </div>
      </label>
      <label className="flex items-center gap-space-sm p-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer transition-colors">
      <input className="w-4 h-4 accent-secondary" name="urgency" type="radio" value="urgent"/>
      <div className="flex flex-col">
      <span className="font-title-md text-title-md font-bold text-error flex items-center gap-1">
      <span className="material-symbols-outlined text-[18px]">emergency</span>
                            Urgent / Critical Intercession
                          </span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Pastoral elder team alerted within 24 hours</span>
      </div>
      </label>
      </div>
      </div>
      {/* Petitioner Identification */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
      <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
      <label className="font-label-md text-label-md font-bold text-on-surface" htmlFor="petitionerName">Petitioner Full Name</label>
      <label className="flex items-center gap-1 text-label-sm text-on-surface-variant cursor-pointer">
      <input className="w-3.5 h-3.5 accent-secondary" id="anonToggle" type="checkbox"/>
      <span>Keep Anonymous</span>
      </label>
      </div>
      <input className="w-full px-4 py-2.5 rounded-lg bg-surface-container text-on-surface placeholder:text-on-surface-variant/60 font-body-md focus:outline-none focus:bg-surface-container-highest transition-colors" id="petitionerName" placeholder="e.g. Grace Nakato Mukasa" required type="text"/>
      </div>
      <div className="flex flex-col gap-1">
      <label className="font-label-md text-label-md font-bold text-on-surface" htmlFor="petitionerLocation">Location / District</label>
      <input className="w-full px-4 py-2.5 rounded-lg bg-surface-container text-on-surface placeholder:text-on-surface-variant/60 font-body-md focus:outline-none focus:bg-surface-container-highest transition-colors" id="petitionerLocation" placeholder="e.g. Kampala, Mukono, Jinja, or Overseas Diaspora" required type="text"/>
      </div>
      </div>
      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
      <div className="flex flex-col gap-1">
      <label className="font-label-md text-label-md font-bold text-on-surface" htmlFor="petitionerPhone">WhatsApp / Phone for Prayer Receipt</label>
      <input className="w-full px-4 py-2.5 rounded-lg bg-surface-container text-on-surface placeholder:text-on-surface-variant/60 font-body-md focus:outline-none focus:bg-surface-container-highest transition-colors" id="petitionerPhone" placeholder="+256 700 000 000" type="tel"/>
      </div>
      <div className="flex flex-col gap-1">
      <label className="font-label-md text-label-md font-bold text-on-surface" htmlFor="petitionerEmail">Email Address (Optional)</label>
      <input className="w-full px-4 py-2.5 rounded-lg bg-surface-container text-on-surface placeholder:text-on-surface-variant/60 font-body-md focus:outline-none focus:bg-surface-container-highest transition-colors" id="petitionerEmail" placeholder="yourname@domain.org" type="email"/>
      </div>
      </div>
      {/* Detailed Petition Description */}
      <div className="flex flex-col gap-1">
      <label className="font-label-md text-label-md font-bold text-on-surface" htmlFor="petitionNarrative">Detailed Petition &amp; Specific Prayer Focus *</label>
      <textarea className="w-full p-4 rounded-lg bg-surface-container text-on-surface placeholder:text-on-surface-variant/60 font-body-md focus:outline-none focus:bg-surface-container-highest transition-colors" id="petitionNarrative" placeholder="Describe your burden, affliction, or petition in full confidence. Include names of loved ones, medical context, or spiritual oppression indicators so elders pray specifically..." required rows={5}></textarea>
      </div>
      {/* Pastoral Call Preference */}
      <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-sm">
      <label className="flex items-start gap-space-sm cursor-pointer">
      <input className="w-4 h-4 mt-1 accent-secondary" id="pastoralCallCheck" type="checkbox"/>
      <div className="flex flex-col">
      <span className="font-title-md text-title-md font-bold text-on-surface">I would like a pastoral elder to call me for one-on-one phone prayer</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Our ordained intercessors conduct telephone ministry sessions free of charge.</span>
      </div>
      </label>
      <div className="hidden pl-7 pt-2 flex flex-col gap-2" id="preferredTimeBlock">
      <span className="font-label-sm text-label-sm uppercase font-bold text-on-surface-variant">Preferred Calling Time (EAT Timezone)</span>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      <label className="p-2.5 rounded-lg bg-surface-container text-on-surface flex items-center gap-2 cursor-pointer font-body-sm">
      <input checked className="accent-secondary" name="callTime" type="radio" value="morning"/>
      <span>Morning (8am – 12pm)</span>
      </label>
      <label className="p-2.5 rounded-lg bg-surface-container text-on-surface flex items-center gap-2 cursor-pointer font-body-sm">
      <input className="accent-secondary" name="callTime" type="radio" value="afternoon"/>
      <span>Afternoon (2pm – 6pm)</span>
      </label>
      <label className="p-2.5 rounded-lg bg-surface-container text-on-surface flex items-center gap-2 cursor-pointer font-body-sm">
      <input className="accent-secondary" name="callTime" type="radio" value="evening"/>
      <span>Evening (7pm – 10pm)</span>
      </label>
      </div>
      </div>
      </div>
      {/* Anointing of Oil / In-Person Appointment */}
      <div className="bg-surface-container-low p-space-md rounded-xl flex items-start justify-between gap-space-md">
      <div className="flex items-start gap-space-sm">
      <div className="w-9 h-9 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-[20px]">water_drop</span>
      </div>
      <div className="flex flex-col">
      <span className="font-title-md text-title-md font-bold text-on-surface">Request In-Person Anointing with Oil (James 5:14)</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Check this box if you or a family member can visit our Ntinda Trinity Heights Chapel for laying on of hands.</span>
      </div>
      </div>
      <label className="relative inline-flex items-center cursor-pointer shrink-0">
      <input className="sr-only peer" id="anointingToggle" type="checkbox"/>
      <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
      </label>
      </div>
      {/* Submit CTA */}
      <div className="pt-space-sm flex flex-col sm:flex-row items-center justify-between gap-space-md">
      <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
      <span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
      <span>Protected by pastoral oath &amp; data privacy standards</span>
      </div>
      <button className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-primary text-on-primary hover:bg-primary-container transition-all shadow-md font-label-md text-label-md font-bold uppercase tracking-wider flex items-center justify-center gap-2" type="submit">
      <span className="material-symbols-outlined text-[20px]">send</span>
      <span>Place Petition on the Ministry Altar</span>
      </button>
      </div>
      </form>
      {/* Interactive Success Toast */}
      <div className="hidden p-space-md rounded-xl bg-secondary-container text-on-secondary-container flex items-start gap-space-md" id="confirmationToast">
      <span className="material-symbols-outlined text-[28px] text-secondary">check_circle</span>
      <div className="flex flex-col gap-1">
      <span className="font-title-lg text-title-lg font-bold">Your Petition Has Been Carried to the Altar</span>
      <p className="font-body-md text-body-md">
                      We have recorded your petition under reference <strong id="petitionRefCode">#WHT-ALT-9082</strong>. The intercessory prayer team at our Kampala altar will hold your burden in the upcoming prayer watch. May the peace of God, which transcends all understanding, guard your heart and mind.
                    </p>
      <button className="self-start mt-2 font-label-md text-label-md underline font-semibold">Submit another request</button>
      </div>
      </div>
      </div>
      </div>
      {/* Altar Sidebar / Live Status & Vigil Overseers (4 cols) */}
      <div className="lg:col-span-4 flex flex-col gap-space-md">
      {/* Live Altar Vigil Card */}
      <div className="bg-primary-container text-on-primary-container p-space-md rounded-xl shadow-md flex flex-col gap-space-sm">
      <div className="flex items-center justify-between">
      <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed font-bold flex items-center gap-1.5">
      <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-ping"></span>
                    Live Intercession Status
                  </span>
      <span className="px-2 py-0.5 rounded bg-surface-container-highest/20 font-label-sm text-[11px] text-on-primary-container">EAT (UTC+3)</span>
      </div>
      <div className="flex flex-col gap-1 pt-2">
      <span className="font-headline-sm text-headline-sm font-bold text-on-primary">Current Watch: 24/7 Perpetual Fire</span>
      <p className="font-body-sm text-body-sm text-on-primary-container/80">
                    The altar of World Healing Trinity Place is never unstaffed. Ordained elders, vocational students, and intercessors rotate in perpetual vigil.
                  </p>
      </div>
      {/* Flame SVG Visual Indicator */}
      <div className="py-2 flex items-center justify-center">
      <svg className="w-24 h-24 text-secondary-fixed animate-pulse" fill="currentColor" viewBox="0 0 100 100">
      <path d="M50 5 C45 25, 30 35, 30 55 C30 75, 45 95, 50 95 C55 95, 70 75, 70 55 C70 35, 55 25, 50 5 Z M50 25 C47 40, 38 48, 38 62 C38 75, 48 85, 50 85 C52 85, 62 75, 62 62 C62 48, 53 40, 50 25 Z" opacity="0.9"></path>
      <path d="M50 45 C48 55, 44 60, 44 70 C44 78, 48 82, 50 82 C52 82, 56 78, 56 70 C56 60, 52 55, 50 45 Z" fill="#ffffff" opacity="0.8"></path>
      </svg>
      </div>
      <div className="bg-surface-container-highest/10 p-space-sm rounded-lg flex flex-col gap-1">
      <span className="font-label-sm text-label-sm uppercase tracking-wide text-secondary-fixed">Pastoral Elder On Vigil</span>
      <span className="font-title-md text-title-md font-semibold text-on-primary">Pastor Jonathan Kizito &amp; Elder Ruth Namutebi</span>
      <span className="font-body-sm text-body-sm text-on-primary-container/70">Trinity Heights Sanctuary Altar, Kampala</span>
      </div>
      </div>
      {/* Sacred Confidentiality Accord */}
      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm">
      <div className="flex items-center gap-2 text-on-surface">
      <span className="material-symbols-outlined text-secondary text-[22px]">gavel</span>
      <h3 className="font-title-lg text-title-lg font-bold">Pastoral Confidentiality Pact</h3>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Under Uganda Law and the spiritual canons of Christian ministry, all matters shared via this altar are held under strict spiritual privilege. Your records are never published, shared with third parties, or commercialized.
                </p>
      <div className="flex flex-col gap-2 pt-2 text-body-sm text-on-surface">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
      <span>Encrypted transmission to ministerial server</span>
      </div>
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
      <span>Access restricted to ordained prayer elders</span>
      </div>
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
      <span>Petitions archived with sacred discretion</span>
      </div>
      </div>
      </div>
      {/* Dedicated Intercession Chapel Image Card */}
      <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
      <img className="w-full h-48 object-cover" data-alt="Interior of a serene, reverent Christian prayer chapel sanctuary in Kampala Uganda with warm mahogany pews, soft amber illumination, stained glass accents, a central altar draped in fine linen, and a gentle aura of tranquil contemplative intercession." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZeKDkvv98dGmbGvM-eXvHXqB44D5zrcq1cEcCpwDRdCyl5f0Jp-DyvYpOxagwmbBxQME4qIGnqrS6Fc0zoYOtOTFmTwzF_C7Mta3Uq7KjNBb6pBzRV-1mtriINnzVRbfuvou0g3Vv63w6ayccm-B74OHp_I_QDZrU0PEn0lV2JYXXTFCoJHI_w6Q2QitsVpjRYbMdH-oIS6aQpm9avu1sOWmPfw2XmthH-v67FNQg"/>
      <div className="p-space-md flex flex-col gap-1">
      <span className="font-label-sm text-label-sm uppercase font-bold text-secondary">Private Meditation</span>
      <span className="font-title-md text-title-md font-bold text-on-surface">Ntinda Trinity Heights Prayer Chapel</span>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Open daily from 6:00 AM to 9:00 PM for private personal intercession, silent meditation, and pastoral counsel.</p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Daily Prayer Watch & Intercessory Schedule (The 4 Watches) */}
      <section className="w-full bg-surface-container-low px-gutter py-space-xl">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
      <div className="flex flex-col gap-1">
      <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">Rhythm of Perpetual Prayer</span>
      <h2 className="font-headline-xl text-headline-xl text-on-surface">The 4 Daily Altar Watches</h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                  Patterned after biblical watches, our intercessors stand in continuous vigil to present national burdens, individual afflictions, and community petitions before the Throne of Grace.
                </p>
      </div>
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container text-on-surface font-label-md">
      <span className="material-symbols-outlined text-secondary text-[18px]">av_timer</span>
      <span>East Africa Time (UTC+3)</span>
      </div>
      </div>
      {/* 4 Watches Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
      {/* Watch 1 */}
      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between gap-space-md group hover:shadow-md transition-all">
      <div className="flex flex-col gap-space-sm">
      <div className="flex items-center justify-between">
      <span className="px-2.5 py-1 rounded bg-secondary-container text-on-secondary-container font-label-sm uppercase tracking-wider font-bold">1st Watch</span>
      <span className="material-symbols-outlined text-on-surface-variant text-[20px]">wb_twilight</span>
      </div>
      <div className="flex flex-col">
      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">Morning Dawn Watch</span>
      <span className="font-label-md text-label-md font-semibold text-secondary">6:00 AM – 7:30 AM</span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Dedicated to National Thanksgiving, protection over schools and children, vulnerable widow care, and urgent sickness healing petitions.
                  </p>
      </div>
      <div className="pt-2 border-t border-surface-container flex items-center justify-between text-label-sm text-on-surface-variant">
      <span>Primary Focus: Health &amp; Dawn Grace</span>
      <span className="material-symbols-outlined text-[16px] text-secondary">check</span>
      </div>
      </div>
      {/* Watch 2 */}
      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between gap-space-md group hover:shadow-md transition-all">
      <div className="flex flex-col gap-space-sm">
      <div className="flex items-center justify-between">
      <span className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface font-label-sm uppercase tracking-wider font-bold">2nd Watch</span>
      <span className="material-symbols-outlined text-on-surface-variant text-[20px]">wb_sunny</span>
      </div>
      <div className="flex flex-col">
      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">Midday Intercession</span>
      <span className="font-label-md text-label-md font-semibold text-secondary">12:00 PM – 1:00 PM</span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Targeted prayers for Vocational Guild Students, artisans, economic breakthrough, debt relief, business integrity, and national leadership.
                  </p>
      </div>
      <div className="pt-2 border-t border-surface-container flex items-center justify-between text-label-sm text-on-surface-variant">
      <span>Primary Focus: Industry &amp; Students</span>
      <span className="material-symbols-outlined text-[16px] text-secondary">check</span>
      </div>
      </div>
      {/* Watch 3 */}
      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between gap-space-md group hover:shadow-md transition-all">
      <div className="flex flex-col gap-space-sm">
      <div className="flex items-center justify-between">
      <span className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface font-label-sm uppercase tracking-wider font-bold">3rd Watch</span>
      <span className="material-symbols-outlined text-on-surface-variant text-[20px]">routine</span>
      </div>
      <div className="flex flex-col">
      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">Sunset Deliverance</span>
      <span className="font-label-md text-label-md font-semibold text-secondary">6:00 PM – 7:30 PM</span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Focused on spiritual warfare, breaking substance abuse and generational bondages, marital reconciliation, and family unity.
                  </p>
      </div>
      <div className="pt-2 border-t border-surface-container flex items-center justify-between text-label-sm text-on-surface-variant">
      <span>Primary Focus: Deliverance &amp; Homes</span>
      <span className="material-symbols-outlined text-[16px] text-secondary">check</span>
      </div>
      </div>
      {/* Watch 4 */}
      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between gap-space-md group hover:shadow-md transition-all">
      <div className="flex flex-col gap-space-sm">
      <div className="flex items-center justify-between">
      <span className="px-2.5 py-1 rounded bg-primary-container text-on-primary-container font-label-sm uppercase tracking-wider font-bold">4th Watch</span>
      <span className="material-symbols-outlined text-on-surface-variant text-[20px]">dark_mode</span>
      </div>
      <div className="flex flex-col">
      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">Midnight Altar Vigil</span>
      <span className="font-label-md text-label-md font-semibold text-secondary">11:30 PM – 1:00 AM</span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Deep breakthrough prayer, countering spiritual oppression, divine defense over hospitals and travelers, and national peace across Uganda.
                  </p>
      </div>
      <div className="pt-2 border-t border-surface-container flex items-center justify-between text-label-sm text-on-surface-variant">
      <span>Primary Focus: Deep Warfare &amp; Peace</span>
      <span className="material-symbols-outlined text-[16px] text-secondary">check</span>
      </div>
      </div>
      </div>
      {/* Weekly In-Person Deliverance & Healing Service Notice */}
      <div className="bg-surface-container p-space-lg rounded-xl flex flex-col md:flex-row items-center justify-between gap-space-md">
      <div className="flex items-center gap-space-md">
      <div className="w-14 h-14 rounded-xl bg-primary text-on-primary flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-[32px]">church</span>
      </div>
      <div className="flex flex-col">
      <span className="font-title-lg text-title-lg font-bold text-on-surface">Weekly In-Person Deliverance &amp; Healing Gatherings</span>
      <p className="font-body-md text-body-md text-on-surface-variant">
                    Join the Ministry Altar elders live at the Kampala Headquarters Chapel for corporate intercession, anointing with oil, and laying on of hands.
                  </p>
      </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-space-sm w-full md:w-auto shrink-0">
      <div className="px-4 py-2 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm font-semibold flex items-center gap-2">
      <span className="material-symbols-outlined text-secondary text-[18px]">event</span>
      <span>Thursdays: 4:00 PM – 7:00 PM</span>
      </div>
      <div className="px-4 py-2 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm font-semibold flex items-center gap-2">
      <span className="material-symbols-outlined text-secondary text-[18px]">event</span>
      <span>Sundays: 9:00 AM – 1:00 PM</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Praise Reports & Answered Prayers Archive */}
      <section className="max-w-7xl mx-auto w-full px-gutter py-space-xl">
      <div className="flex flex-col gap-space-lg">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-md">
      <div className="flex flex-col gap-1">
      <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">Fruits of Intercession</span>
      <h2 className="font-headline-xl text-headline-xl text-on-surface">Praise Reports &amp; Answered Prayers</h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                  We return all glory to the Almighty God. Here are verified testimonies from petitioners whose burdens were carried upon the Kampala Altar.
                </p>
      </div>
      <button className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-secondary text-on-secondary hover:bg-on-secondary-container transition-colors font-label-md text-label-md font-semibold shrink-0 shadow-sm">
      <span className="material-symbols-outlined text-[18px]">rate_review</span>
      <span>Submit a Praise Report / Testimony</span>
      </button>
      </div>
      {/* Testimonial Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
      {/* Testimony 1 */}
      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between gap-space-md">
      <div className="flex flex-col gap-space-sm">
      <div className="flex items-center justify-between text-secondary">
      <span className="material-symbols-outlined text-[24px]">verified</span>
      <span className="font-label-sm text-label-sm font-semibold uppercase text-on-surface-variant">Confirmed Healing</span>
      </div>
      <h3 className="font-title-lg text-title-lg font-bold text-on-surface leading-snug">
                    “Healed of Chronic Respiratory Affliction After Prayer Vigil”
                  </h3>
      <p className="font-body-md text-body-md text-on-surface-variant italic">
                    “For eight months, I suffered from severe breathing distress that paralyzed my work in Kawempe. I submitted a critical petition to the Thursday watch. The elders prayed and phoned me for scripture confession. The next medical check showed lungs completely cleared. All praise to Christ.”
                  </p>
      </div>
      <div className="pt-space-sm flex items-center justify-between border-t border-surface-container">
      <div className="flex flex-col">
      <span className="font-title-md text-title-md font-bold text-on-surface">Mbabazi Sarah</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Kawempe Division, Kampala</span>
      </div>
      <span className="font-label-sm text-label-sm text-on-surface-variant">James 5:15 Vigil</span>
      </div>
      </div>
      {/* Testimony 2 */}
      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between gap-space-md">
      <div className="flex flex-col gap-space-sm">
      <div className="flex items-center justify-between text-secondary">
      <span className="material-symbols-outlined text-[24px]">verified</span>
      <span className="font-label-sm text-label-sm font-semibold uppercase text-on-surface-variant">Vocational Blessing</span>
      </div>
      <h3 className="font-title-lg text-title-lg font-bold text-on-surface leading-snug">
                    “Breakthrough in Employment After Guild Completion”
                  </h3>
      <p className="font-body-md text-body-md text-on-surface-variant italic">
                    “I came to World Healing Trinity Place destitute, with no trade. After enrolling in the Electrical Guild, the elders anointed our hands in the Midday Intercession. Before graduating, I was signed by an infrastructure contractor in Jinja. The ministry taught me both hands and heart.”
                  </p>
      </div>
      <div className="pt-space-sm flex items-center justify-between border-t border-surface-container">
      <div className="flex flex-col">
      <span className="font-title-md text-title-md font-bold text-on-surface">Denis O.</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Electrical Guild Graduate</span>
      </div>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Midday Watch</span>
      </div>
      </div>
      {/* Testimony 3 */}
      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between gap-space-md">
      <div className="flex flex-col gap-space-sm">
      <div className="flex items-center justify-between text-secondary">
      <span className="material-symbols-outlined text-[24px]">verified</span>
      <span className="font-label-sm text-label-sm font-semibold uppercase text-on-surface-variant">Emotional Restoration</span>
      </div>
      <h3 className="font-title-lg text-title-lg font-bold text-on-surface leading-snug">
                    “Peace and Restored Sleep After Trauma Counseling”
                  </h3>
      <p className="font-body-md text-body-md text-on-surface-variant italic">
                    “Severe panic attacks followed the sudden loss of my mother. I requested pastoral counseling through this website. Elder Ruth called me weekly, ministering deliverance and biblical grief counseling. For the first time in two years, sleep is peaceful without medication.”
                  </p>
      </div>
      <div className="pt-space-sm flex items-center justify-between border-t border-surface-container">
      <div className="flex flex-col">
      <span className="font-title-md text-title-md font-bold text-on-surface">Anonymous Sister</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Entebbe Municipality</span>
      </div>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Pastoral Care</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Direct Intercession Hotline & Crisis Support Strip */}
      <section className="w-full bg-primary-container text-on-primary-container px-gutter py-space-xl">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
      {/* Urgent Pastoral Contact Info (7 cols) */}
      <div className="lg:col-span-7 flex flex-col gap-space-md">
      <div className="flex items-center gap-2">
      <span className="px-2.5 py-1 rounded bg-secondary-container text-on-secondary-container font-label-sm font-bold uppercase tracking-wider">Direct Ministerial Lifeline</span>
      <span className="text-on-primary-container font-label-sm">24/7 Telephone &amp; Emergency Vigil</span>
      </div>
      <h2 className="font-headline-xl text-headline-xl text-on-primary">
                  In Critical Need of Immediate Prayer or Spiritual Counseling?
                </h2>
      <p className="font-body-lg text-body-lg text-on-primary-container/80">
                  You do not have to walk through the valley of shadow alone. Our pastoral team is on standby around the clock to stand in faith with you.
                </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
      {/* Line 1 */}
      <a className="p-space-md rounded-xl bg-surface-container-highest/10 hover:bg-surface-container-highest/20 transition-colors flex items-center gap-space-sm group" href="tel:+256772000000">
      <div className="w-12 h-12 rounded-lg bg-secondary text-on-secondary flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-[24px]">call</span>
      </div>
      <div className="flex flex-col">
      <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed">Mobile Prayer Line (MTN)</span>
      <span className="font-title-lg text-title-lg font-bold text-on-primary group-hover:text-secondary-fixed transition-colors">+256 (0) 772 000 000</span>
      <span className="font-body-sm text-body-sm text-on-primary-container/70">Voice &amp; WhatsApp Petitions</span>
      </div>
      </a>
      {/* Line 2 */}
      <a className="p-space-md rounded-xl bg-surface-container-highest/10 hover:bg-surface-container-highest/20 transition-colors flex items-center gap-space-sm group" href="tel:+256414000000">
      <div className="w-12 h-12 rounded-lg bg-secondary text-on-secondary flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-[24px]">phone_in_talk</span>
      </div>
      <div className="flex flex-col">
      <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed">Kampala Landline Office</span>
      <span className="font-title-lg text-title-lg font-bold text-on-primary group-hover:text-secondary-fixed transition-colors">+256 (0) 414 000 000</span>
      <span className="font-body-sm text-body-sm text-on-primary-container/70">Administrative &amp; Elder Desk</span>
      </div>
      </a>
      </div>
      </div>
      {/* Location Card / Chapel Walk-in (5 cols) */}
      <div className="lg:col-span-5 bg-surface-container-lowest text-on-surface p-space-lg rounded-xl shadow-xl flex flex-col gap-space-sm">
      <div className="flex items-center gap-2 text-secondary">
      <span className="material-symbols-outlined text-[22px]">pin_drop</span>
      <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider">Physical Sanctuary</span>
      </div>
      <h3 className="font-title-lg text-title-lg font-bold text-on-surface">Ntinda Trinity Heights Intercession Chapel</h3>
      <p className="font-body-md text-body-md text-on-surface-variant">
                  Located at the central headquarters campus, the intercession chapel is consecrated for quiet prayer, pastoral consultations, and sacramental anointing.
                </p>
      <div className="p-space-sm rounded-lg bg-surface-container flex flex-col gap-1 text-body-sm">
      <div className="flex items-center justify-between font-semibold">
      <span>Visiting Hours for Pastoral Care:</span>
      <span className="text-secondary">Mon – Sat (8:00 AM – 6:00 PM)</span>
      </div>
      <div className="text-on-surface-variant">Plot 14 Trinity Heights Road, Ntinda – Kampala, Uganda</div>
      </div>
      <div className="w-full h-36 bg-cover bg-center rounded-lg mt-1" data-location="Ntinda Kampala Uganda" style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuDRpI8JwcXl8wcQAsn06qlNvLISRcB8lJsdgnwSJN-LHmq8OPGLIYYFr9jfC98nbAvQjlLA3Bwl56_qAW2cecNTgIEX0Akov8lN9iB6qu4UjMGRiLFeWdqJky35XX7DlaqqeMmMPxC6xOF25h-Wlda_S0kpgBlz7sdmMjjwU-rTXLFZUbWZ1n5NxUjiaeHiFyveM_LInC02JFwYwGxUCENM14A1nJYuCvd1HzKiAa-9\')'}}></div>
      </div>
      </div>
      </div>
      </section>
      {/* Client-side Interactive Modal for Testimony Submission */}
      <div className="fixed inset-0 z-50 bg-primary/70 backdrop-blur-sm hidden items-center justify-center p-gutter" id="testimonyModal">
      <div className="bg-surface-container-lowest max-w-xl w-full p-space-lg rounded-xl shadow-2xl flex flex-col gap-space-md">
      <div className="flex items-center justify-between pb-2 border-b border-surface-container">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-secondary text-[24px]">grade</span>
      <h3 className="font-title-lg text-title-lg font-bold text-on-surface">Share Your Answered Prayer</h3>
      </div>
      <button className="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center">
      <span className="material-symbols-outlined text-[18px]">close</span>
      </button>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
              “And they overcame him by the blood of the Lamb and by the word of their testimony.” (Rev 12:11). Your testimony strengthens believers across Uganda and the world.
            </p>
      <form className="flex flex-col gap-space-sm">
      <div className="flex flex-col gap-1">
      <label className="font-label-md text-label-md font-bold text-on-surface">Your Name (or specify 'Keep Anonymous')</label>
      <input className="w-full px-3 py-2 rounded-lg bg-surface-container text-on-surface font-body-sm focus:outline-none" id="testimonyName" placeholder="e.g. John K. or Anonymous Sister" required type="text"/>
      </div>
      <div className="flex flex-col gap-1">
      <label className="font-label-md text-label-md font-bold text-on-surface">Testimony Category</label>
      <select className="w-full px-3 py-2 rounded-lg bg-surface-container text-on-surface font-body-sm focus:outline-none">
      <option>Physical Healing</option>
      <option>Financial &amp; Employment Provision</option>
      <option>Family &amp; Marriage Restored</option>
      <option>Spiritual Deliverance &amp; Peace</option>
      <option>Vocational Guild Success</option>
      </select>
      </div>
      <div className="flex flex-col gap-1">
      <label className="font-label-md text-label-md font-bold text-on-surface">What God Did (Your Testimony)</label>
      <textarea className="w-full p-3 rounded-lg bg-surface-container text-on-surface font-body-sm focus:outline-none" placeholder="Detail the answered prayer, how the elders stood with you, and the outcome..." required rows={4}></textarea>
      </div>
      <button className="w-full py-3 rounded-lg bg-primary text-on-primary font-label-md font-bold uppercase tracking-wider hover:bg-primary-container transition-colors" type="submit">
                Publish for God's Glory
              </button>
      </form>
      </div>
      </div>
    </div>
  )
}
