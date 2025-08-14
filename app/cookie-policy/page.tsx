import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Cookie Policy | Ireland Best Casino Sites",
  description: "Learn how Ireland Best Casino Sites uses cookies and how you can manage your preferences.",
}

export default function CookiePolicy() {
  return (
    <main className="min-h-screen flex flex-col bg-zinc-900 text-white">
      <SiteHeader />

      <section className="pt-28 pb-12 flex-grow">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-400 mb-8 text-center">Cookie Policy</h1>

          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p className="text-sm text-gray-500">Last updated: August 2025</p>

            <p>
              This Cookie Policy explains how Ireland Best Casino Sites uses cookies and similar technologies to
              recognize you when you visit our website. It clarifies what these technologies are, why we use them, and
              your rights to control their use.
            </p>

            <h2 className="text-2xl font-bold text-gold-400 pt-4">1. What Are Cookies?</h2>
            <p>
              Cookies are small data files placed on your computer or mobile device when you visit a website. They are
              widely used by website owners to make their websites work, or to work more efficiently, as well as to
              provide reporting information.
            </p>

            <h2 className="text-2xl font-bold text-gold-400 pt-4">2. How We Use Cookies</h2>
            <p>We use cookies for several reasons:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Essential Cookies:</strong> These cookies are strictly necessary to provide you with services
                available through our website and to use some of its features, such as accessing secure areas.
              </li>
              <li>
                <strong>Performance and Analytics Cookies:</strong> These cookies collect information about how visitors
                use our website, for instance, which pages visitors go to most often, and if they get error messages
                from web pages. This helps us improve how the website works.
              </li>
              <li>
                <strong>Functionality Cookies:</strong> These cookies allow our website to remember choices you make
                (such as your language or region) and provide enhanced, more personal features.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gold-400 pt-4">3. Third-Party Cookies</h2>
            <p>
              In addition to our own cookies, we may also use various third-parties cookies to report usage statistics
              of the website, deliver advertisements on and through the website, and so on. These third parties may use
              information about your visits to this and other websites in order to provide relevant advertisements about
              goods and services that you may be interested in.
            </p>

            <h2 className="text-2xl font-bold text-gold-400 pt-4">4. Your Cookie Choices</h2>
            <p>
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences
              by setting or amending your web browser controls to accept or refuse cookies. If you choose to reject
              cookies, you may still use our website though your access to some functionality and areas of our website
              may be restricted.
            </p>
            <p>
              Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your
              browser to remove or reject browser cookies. Please note that if you choose to remove or reject cookies,
              this could affect the availability and functionality of our website.
            </p>

            <h2 className="text-2xl font-bold text-gold-400 pt-4">5. Changes to This Policy</h2>
            <p>
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new
              Cookie Policy on this page and updating the "Last updated" date. You are advised to review this Cookie
              Policy periodically for any changes.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
