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

  const updated = "April 26, 2026";

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
          <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight mb-4 text-white">
            1. Introduction
          </h2>
          <p>
            Welcome to Techbuyer. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. We respect your privacy and are committed to protecting your personal information.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight mb-4 text-white">
            2. Information Collection
          </h2>
          <p className="mb-4">
            We collect information that you provide to us directly, such as when you create an account, make a purchase, or communicate with us. This information may include your name, email address, phone number, shipping address, and payment information.
          </p>
          <p>
            We also automatically collect certain information when you visit our website, such as your IP address, browser type, operating system, referring URLs, and information about your interactions with our website.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight mb-4 text-white">
            3. Use of Information
          </h2>
          <p className="mb-4">The information we collect is used for various purposes, including to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide, operate, and maintain our website and services</li>
            <li>Improve, personalize, and expand our website and services</li>
            <li>Understand and analyze how you use our website and services</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you, either directly or through one of our partners, for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
            <li>Process your transactions and send you related information, including confirmations and invoices</li>
            <li>Find and prevent fraud</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight mb-4 text-white">
            4. Sharing of Information
          </h2>
          <p className="mb-4">
            We may share your information with third-party service providers that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
          </p>
          <p>
            We may also share your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight mb-4 text-white">
            5. Third-Party Websites
          </h2>
          <p>
            Our website may contain links to third-party websites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight mb-4 text-white">
            6. Security of Your Information
          </h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight mb-4 text-white">
            7. Children's Privacy
          </h2>
          <p>
            Our website is not intended for children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If we become aware that we have collected personal information from children under 13, we take steps to remove that information from our servers.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight mb-4 text-white">
            8. Changes to This Privacy Policy
          </h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We will let you know via email and/or a prominent notice on our website.
          </p>
        </section>

        <section className="border-t border-border pt-8">
          <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight mb-4 text-white">
            9. Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <div className="mt-4 font-mono text-sm text-silver-300">
            <a href="mailto:techbuyer@webuyphoneswestcovina.com" className="text-primary hover:underline">
              techbuyer@webuyphoneswestcovina.com
            </a>
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
