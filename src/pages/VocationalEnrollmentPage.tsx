import { Navigate } from "react-router-dom"

/** Enrollment lives on the Training page — keep this route for old links. */
export default function VocationalEnrollmentPage() {
  return <Navigate to="/vocational-programs#interest" replace />
}
