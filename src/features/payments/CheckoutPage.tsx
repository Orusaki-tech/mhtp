import { Link, useSearchParams } from "react-router-dom"
import { Icon } from "@/components/ui/Icon"

/**
 * Checkout shell for future Stripe / Flutterwave / Mobile Money integration.
 * Do not collect card data here until a PCI-compliant provider is wired.
 */
export default function CheckoutPage() {
  const [params] = useSearchParams()
  const courseId = params.get("course") ?? "general-support"

  return (
    <div className="flex flex-col w-full">
      <section className="max-w-3xl mx-auto w-full px-gutter py-space-xl">
        <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-md flex flex-col gap-space-md">
          <div className="flex items-center gap-2 text-secondary">
            <Icon name="payments" className="text-[24px]" />
            <span className="font-label-sm text-label-sm uppercase font-bold tracking-wider">
              Secure Checkout (Preview)
            </span>
          </div>
          <h1 className="font-headline-md text-headline-md font-bold text-on-surface">
            Payment integration coming soon
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Selected item: <strong className="text-on-surface">{courseId}</strong>. Online card
            payments, Mobile Money, and course entitlements will connect here. Until then, please
            use our Partner & Donate channels.
          </p>
          <div className="flex flex-wrap gap-space-sm pt-space-xs">
            <Link
              to="/partner-donate"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-bold"
            >
              Partner / Donate
            </Link>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md font-bold"
            >
              Back to Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
