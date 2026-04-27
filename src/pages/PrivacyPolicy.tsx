import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy — Techbuyer";
    const desc = "How Techbuyer collects, uses, and protects your information when you sell your device.";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", desc);
    window.scrollTo(0, 0);
  }, []);

  const updated = "April 2026";

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative bg-grad-hero overflow-hidden">
        <div className="absolute inset-0 grid-noise opacity-30 pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-5 md:px-8 py-16 md:py-24">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-silver-400 hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="size-3.5" /> Back to home
          </Link>
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
            // Legal
          </div>
          <h1 className="font-display text-5xl md:text-7xl uppercase tracking-tighter text-balance">
            Privacy <span className="text-primary">Policy</span>.
          </h1>
          <p className="mt-5 font-mono text-xs uppercase tracking-widest text-silver-500">
            Last updated: {updated}
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-5 md:px-8 py-16 md:py-20 space-y-10 text-silver-200 leading-relaxed">
        <section>
          <p className="text-lg text-pretty">
            Techbuyer ("we", "us", "our") is an independently owned device buyback business based in
            West Covina, California. We respect your privacy and are committed to protecting any
            information you share with us when you request a quote, sell us a device, or visit our
            site.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight mb-4 text-white">
            1. Information we collect
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="text-white">Contact details</span> you submit through our quote form
              — name, phone number, and (optionally) email.
            </li>
            <li>
              <span className="text-white">Device details</span> — make, model, storage, carrier,
              condition, and IMEI/serial when applicable.
            </li>
            <li>
              <span className="text-white">Transaction details</span> — payout amount, payment
              method, and any signed receipts or data-wipe certificates.
            </li>
            <li>
              <span className="text-white">Basic site analytics</span> — anonymous usage data such as
              pages visited and device type, used only to improve the site.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight mb-4 text-white">
            2. How we use your information
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To prepare and send you a personalized cash quote.</li>
            <li>To coordinate a local meetup or shipping for your device.</li>
            <li>To verify device ownership and confirm devices are not reported lost or stolen.</li>
            <li>To complete payment and keep transaction records as required by law.</li>
            <li>To respond to your questions and follow up on your offer.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight mb-4 text-white">
            3. Device data &amp; certified wipes
          </h2>
          <p>
            Every device we purchase is securely wiped before resale. We do not access, copy, or
            retain any personal data stored on your device. For phones and tablets, we recommend
            signing out of all accounts (iCloud, Google, Samsung) and performing a factory reset
            before handoff. We can assist with this on the spot.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight mb-4 text-white">
            4. How we share your information
          </h2>
          <p>
            We do <span className="text-white">not</span> sell or rent your personal information.
            We only share information when:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Required by law (e.g., law enforcement requests, tax records).</li>
            <li>
              Needed to verify a device's status with carrier or manufacturer databases (such as
              IMEI checks).
            </li>
            <li>
              Working with payment processors (Zelle, etc.) to complete your payout — only the
              minimum information required.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight mb-4 text-white">
            5. Data retention
          </h2>
          <p>
            Quote requests that don't lead to a sale are typically deleted within 90 days.
            Transaction records (receipts, IMEIs, payout details) are retained as long as required
            by California state and federal recordkeeping laws.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight mb-4 text-white">
            6. Your rights
          </h2>
          <p>
            California residents have rights under the CCPA, including the right to know what
            personal information we hold, request deletion, and opt out of any sale of personal
            information (we do not sell personal information). To exercise these rights, contact us
            using the information below.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight mb-4 text-white">
            7. Security
          </h2>
          <p>
            We use reasonable physical, administrative, and technical safeguards to protect your
            information. However, no system is 100% secure. If we ever become aware of a breach
            affecting your data, we will notify you as required by law.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight mb-4 text-white">
            8. Children's privacy
          </h2>
          <p>
            Our services are not directed to anyone under 18. We do not knowingly collect
            information from minors. Sellers must be 18 or older with valid ID.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight mb-4 text-white">
            9. Changes to this policy
          </h2>
          <p>
            We may update this policy from time to time. Material changes will be reflected by an
            updated "Last updated" date at the top of this page.
          </p>
        </section>

        <section className="border-t border-border pt-8">
          <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight mb-4 text-white">
            10. Contact us
          </h2>
          <p>
            Questions about this policy or a request about your information? Reach out and we'll
            respond promptly.
          </p>
          <div className="mt-4 font-mono text-sm text-silver-300">
            Techbuyer · West Covina, CA
          </div>
        </section>

        <div className="pt-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 border border-silver-600/60 px-6 py-4 uppercase font-bold tracking-widest text-silver-200 hover:border-primary hover:text-white transition-colors"
          >
            <ArrowLeft className="size-4" /> Back to home
          </Link>
        </div>
      </article>
    </main>
  );
};

export default PrivacyPolicy;
