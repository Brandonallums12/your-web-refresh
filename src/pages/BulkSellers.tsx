import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Send, Package } from "lucide-react";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { LiveBadge } from "@/components/LiveBadge";

const bulkSellerSchema = z.object({
  name: z
    .string()
    .trim()
    .nonempty({ message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  phone: z
    .string()
    .trim()
    .nonempty({ message: "Phone is required" })
    .max(20, { message: "Phone must be less than 20 characters" }),
  company: z
    .string()
    .trim()
    .max(100, { message: "Company must be less than 100 characters" })
    .optional()
    .or(z.literal("")),
  quantity: z
    .string()
    .trim()
    .nonempty({ message: "Estimated quantity is required" })
    .max(50, { message: "Quantity must be less than 50 characters" }),
  details: z
    .string()
    .trim()
    .max(1000, { message: "Details must be less than 1000 characters" })
    .optional()
    .or(z.literal("")),
});

const BulkSellers = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    quantity: "",
    details: "",
    shipping: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = bulkSellerSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) fieldErrors[String(issue.path[0])] = issue.message;
      });
      setErrors(fieldErrors);
      toast({
        title: "Please fix the errors below",
        variant: "destructive",
      });
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      await fetch(
        "https://mcp.zapier.com/api/v1/connect?token=NTNhOGMzNmYtN2FjNC00OWRkLThjY2EtNmI1YWJmMDA0MGFmOmVFTk5CSTkxWHd6emZXZUlMaUt0dThVdUZKZmlaTEN2cGl5blJKYUh5QnM9",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...result.data,
            shipping: form.shipping,
            source: "bulk-sellers-form",
            submittedAt: new Date().toISOString(),
          }),
        }
      );
      toast({
        title: "Request received",
        description: "We'll reach out within 24 hours about your bulk lot.",
      });
      setForm({ name: "", email: "", phone: "", company: "", quantity: "", details: "", shipping: false });
    } catch (err) {
      console.error("Bulk seller submission failed:", err);
      toast({
        title: "Submission failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-grad-hero relative overflow-hidden">
      <div className="absolute inset-0 grid-noise opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-3xl px-5 md:px-8 py-12 md:py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-silver-300 hover:text-primary transition-colors font-mono text-xs uppercase tracking-widest mb-10"
        >
          <ArrowLeft className="size-4" />
          Back to home
        </Link>

        <div className="text-center mb-10">
          <LiveBadge className="mb-6 mx-auto">For wholesalers & resellers</LiveBadge>
          <h1 className="font-display text-4xl sm:text-6xl uppercase tracking-tighter text-balance leading-[0.9]">
            Bulk <span className="text-primary">Sellers</span>
          </h1>
          <p className="mt-5 text-lg text-silver-200 max-w-xl mx-auto text-pretty">
            Selling <span className="text-white font-semibold">5+ devices</span> at a time?
            We offer <span className="text-primary font-semibold">Special Pricing</span> beyond
            our standard quotes. We'd love to buy your lot and build a long-term relationship
            with you — and yes, we <span className="text-white font-semibold">accept shipped lots</span> too.
          </p>
        </div>

        <div className="min-h-[60vh]" />
      </div>
    </main>
  );
};

interface FieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
  placeholder?: string;
  maxLength?: number;
}

const Field = ({ label, name, value, onChange, error, type = "text", placeholder, maxLength }: FieldProps) => (
  <div>
    <label className="block font-mono text-xs uppercase tracking-widest text-silver-400 mb-2">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
      className="w-full bg-background border border-silver-700 px-4 py-3 text-white placeholder:text-silver-500 focus:outline-none focus:border-primary transition-colors"
    />
    {error && <p className="mt-1.5 text-xs text-primary">{error}</p>}
  </div>
);

export default BulkSellers;
