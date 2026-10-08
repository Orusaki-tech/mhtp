export const SITE = {
  name: "World Healing Trinity Place",
  legalName: "World Healing Trinity Place Limited",
  tagline: "Faith · Healing · Empowerment",
  address: "Plot 14 Trinity Heights Road, Kampala, Republic of Uganda",
  email: "stewardship@worldhealingtrinity.org",
  phone: "+256 (0) 414 000 000 / +256 (0) 772 000 000",
  phonePrimary: "+256 (0) 772 000 000",
  phoneLandline: "+256 (0) 414 000 000",
  emblem:
    "https://lh3.googleusercontent.com/aida/AEtjO1W5yFcCY_hFYohOWBACWWIWqcBwRwDN2csBjR_ZVrLkdyNVD-FchCA-SGpu-tXOVBNt0GYatoOHuClPCU2fAAoNUad7lDmiBSroFlUuxe2jEkpjwizXLYtcT6ucjeUYzZBHFejug5RcGSukZVg6lCdxhoe-2VoQO_de7_TMqH1AmG_kOk5kjThdlvwUJphkm5g7nwt-CCo2V3WN67__pSUUM2uby1Ae6_7l0Pe3s2GA",
  /** Top-bar note — company identity only (no registry bureau branding) */
  topBarNote: "Faith · Healing · Vocational Empowerment",
} as const

export type NavItem = {
  label: string
  to: string
  end?: boolean
}

export const PRIMARY_NAV: NavItem[] = [
  { label: "Home", to: "/", end: true },
  { label: "About", to: "/about-legal-status" },
  { label: "Pillars", to: "/pillars-of-ministry" },
  { label: "Vocational Programs", to: "/vocational-programs" },
  { label: "Enrollment", to: "/vocational-enrollment" },
  { label: "Outreach", to: "/outreach-healing" },
  { label: "Contact", to: "/contact-give" },
]

export const CTA_NAV = {
  prayer: { label: "Prayer Request", to: "/prayer-request" },
  partner: { label: "Partner / Donate", to: "/partner-donate" },
  courses: { label: "Online Courses", to: "/courses" },
} as const

export const FUTURE_ROUTES = {
  courses: "/courses",
  courseDetail: "/courses/:courseId",
  checkout: "/checkout",
  account: "/account",
} as const
