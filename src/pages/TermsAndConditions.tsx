import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsAndConditions = () => {
  useEffect(() => {
    document.title = "Terms & Conditions — Techbuyer";
    const desc = "Read our terms of service for selling and purchasing devices.";
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
            Terms & <span className="text-primary">Conditions</span>.
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
            Welcome to Allums&Co. These Terms and Conditions ("Terms") govern your access to and use of our services, including any content, functionality, and services offered on or through www.Webuyphoneswestcovina.com, as well as any other interactions you may have with Allums&Co. By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use our services.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight mb-4 text-white">
            2. Services Provided
          </h2>
          <p>
            Allums&Co specializes in the acquisition, refurbishment, and resale of phones and other electronic devices ("Products"). Our services include, but are not limited to, the evaluation of electronic devices, purchase of devices from sellers, refurbishment of devices to a saleable condition, and the resale of these devices to consumers.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight mb-4 text-white">
            3. Product Conditions
          </h2>
          <p>
            We categorize our Products into various conditions for sale, including but not limited to "new", "refurbished", and "used". Each Product listed for sale on our Website will include a detailed description of its condition. We make every effort to accurately represent the condition of our Products, but we do not guarantee that the descriptions are error-free.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight mb-4 text-white">
            4. Purchasing Terms
          </h2>
          <p>
            When you sell a device to Allums&Co you represent and warrant that you are the legal owner of the device or have obtained all necessary permissions from the legal owner to sell the device. You also affirm that the device is free from any legal claims, liens, or encumbrances. We reserve the right to refuse the purchase of any device that does not meet these criteria.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight mb-4 text-white">
            5. Pricing and Payment
          </h2>
          <p>
            Prices for our Products and services are subject to change without notice. We accept various forms of payment as specified on our Website. All transactions are conducted in U.S. dollars. Payment must be received and verified before any Product is shipped to the buyer.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight mb-4 text-white">
            6. Shipping and Handling
          </h2>
          <p>
            We ship to locations within the United States using various carriers. Shipping costs, delivery times, and carriers will vary depending on the destination and shipping method selected by the buyer. We are not responsible for any delays in shipping once the Product has been dispatched.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight mb-4 text-white">
            7. Returns and Refunds
          </h2>
          <p>
            We accept returns within 30 days of purchase, provided the Product is returned in the same condition as when sold. To initiate a return, contact our customer service team. Refunds will be processed in the original form of payment within a certain number of days after receiving the returned item.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight mb-4 text-white">
            8. Warranty
          </h2>
          <p>
            Certain Products may come with a limited warranty. The specifics of the warranty, including duration and coverage, will be detailed with the Product and on our Website. This warranty is limited and does not cover damages resulting from misuse, accidents, alterations, or unauthorized repairs.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight mb-4 text-white">
            9. Limitation of Liability
          </h2>
          <p>
            Allums&Co, its affiliates, and their respective officers, directors, employees, agents, suppliers, or licensors, shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the services; (ii) any conduct or content of any third party on the services; (iii) any content obtained from the services; and (iv) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight mb-4 text-white">
            10. Intellectual Property
          </h2>
          <p>
            The content on our Website, including without limitation, the text, software, scripts, graphics, photos, sounds, music, videos, and interactive features, and the trademarks, service marks, and logos contained therein, are owned by or licensed to Allums&Co, subject to copyright and other intellectual property rights under United States and international laws and conventions.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight mb-4 text-white">
            11. Privacy Policy
          </h2>
          <p>
            Your privacy is important to us. Our <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>, which is incorporated into these Terms by reference, is available on our Website. It describes how we collect, use, and protect your personal information.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight mb-4 text-white">
            12. Changes to Terms and Conditions
          </h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 7 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight mb-4 text-white">
            13. Governing Law
          </h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of California, United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
          </p>
        </section>

        <section className="border-t border-border pt-8">
          <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight mb-4 text-white">
            14. Contact Information
          </h2>
          <p>
            For any questions or concerns regarding these Terms and Conditions, please contact us at:
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

export default TermsAndConditions;