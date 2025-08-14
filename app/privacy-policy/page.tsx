import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Privacy Policy | Ireland Best Casino Sites",
  description: "Understand how Ireland Best Casino Sites collects, uses, and protects your personal data.",
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen flex flex-col bg-zinc-900 text-white">
      <SiteHeader />

      <section className="pt-28 pb-12 flex-grow">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-400 mb-8 text-center">Privacy Policy</h1>

          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p className="text-sm text-gray-500">Last updated: August 2025</p>

            <p>
              At Ireland Best Casino Sites, we are committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, and safeguard your information when you visit our website.
            </p>

            <h2 className="text-2xl font-bold text-gold-400 pt-4">1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Usage Data:</strong> We automatically gather non-personal information about your interactions
                with our website, such as pages viewed, time spent on pages, and the type of device used. This helps us
                understand how our site is used and improve its functionality.
              </li>
              <li>
                <strong>Cookies and Similar Technologies:</strong> We use cookies to enhance your browsing experience.
                For more details, please refer to our Cookie Policy.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gold-400 pt-4">2. How We Use Your Information</h2>
            <p>The information we collect is used for various purposes, including:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Operating and maintaining the functionality of Ireland Best Casino Sites.</li>
              <li>Improving our website's content, features, and overall user experience.</li>
              <li>Analyzing website traffic and user behavior to enhance our services.</li>
              <li>Ensuring the security and integrity of our website.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gold-400 pt-4">3. Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties. We may share
              non-personal, aggregated data with partners for analytical purposes, but this data cannot be used to
              identify you personally. We may also disclose information if required by law or to protect our rights and
              safety.
            </p>

            <h2 className="text-2xl font-bold text-gold-400 pt-4">4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your information from
              unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the
              Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-gold-400 pt-4">5. Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your data, such as the right to access,
              correct, or request deletion of your information. As we do not collect personally identifiable information
              beyond basic usage data and cookie preferences, these rights primarily apply to the data collected via
              cookies, which you can manage through your browser settings or our cookie consent banner.
            </p>

            <h2 className="text-2xl font-bold text-gold-400 pt-4">6. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements.
              We will notify you of any significant changes by posting the revised policy on this page with an updated
              "Last updated" date. We encourage you to review this policy regularly.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
