import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Layout } from "@/components/layout/Layout"
import { ScrollToTop } from "@/components/ScrollToTop"
import {
  AboutPage,
  ContactPage,
  HomePage,
  OutreachPage,
  PartnerDonatePage,
  PillarsPage,
  PrayerRequestPage,
  VocationalEnrollmentPage,
  VocationalProgramsPage,
} from "@/pages"
import CoursesPage from "@/features/courses/CoursesPage"
import CheckoutPage from "@/features/payments/CheckoutPage"

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about-legal-status" element={<AboutPage />} />
          <Route path="pillars-of-ministry" element={<PillarsPage />} />
          <Route path="vocational-programs" element={<VocationalProgramsPage />} />
          <Route path="vocational-enrollment" element={<VocationalEnrollmentPage />} />
          <Route path="outreach-healing" element={<OutreachPage />} />
          <Route path="partner-donate" element={<PartnerDonatePage />} />
          <Route path="prayer-request" element={<PrayerRequestPage />} />
          <Route path="contact-give" element={<ContactPage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
