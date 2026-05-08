import { useEffect, useRef } from "react";

interface GHLFormEmbedProps {
  formId: string;
  formName: string;
  height: number;
  onSubmitted?: () => void;
}

/**
 * Embeds a GoHighLevel / LeadConnector inline form and listens for the
 * post-submission message so the parent app can react (e.g. show a
 * confirmation page).
 */
export const GHLFormEmbed = ({ formId, formName, height, onSubmitted }: GHLFormEmbedProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = `<iframe
      src="https://api.leadconnectorhq.com/widget/form/${formId}"
      style="width:100%;height:${height}px;border:none;border-radius:3px"
      id="inline-${formId}"
      data-layout="{'id':'INLINE'}"
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="${formName}"
      data-height="${height}"
      data-layout-iframe-id="inline-${formId}"
      data-form-id="${formId}"
      title="${formName}"
    ></iframe>`;

    // Inject the embed script (only once)
    if (!document.getElementById("ghl-form-embed-script")) {
      const script = document.createElement("script");
      script.id = "ghl-form-embed-script";
      script.src = "https://link.msgsndr.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [formId, formName, height]);

  useEffect(() => {
    if (!onSubmitted) return;
    const handleMessage = (event: MessageEvent) => {
      // GHL/LeadConnector iframes post messages from their domain on submit.
      if (typeof event.origin !== "string") return;
      if (
        !event.origin.includes("leadconnectorhq.com") &&
        !event.origin.includes("msgsndr.com")
      ) {
        return;
      }
      const data = event.data;
      const stringified = typeof data === "string" ? data : JSON.stringify(data ?? "");
      if (/form[_-]?submit|form_submitted|formsubmitted|onFormSubmit/i.test(stringified)) {
        onSubmitted();
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [onSubmitted]);

  return <div ref={containerRef} style={{ minHeight: height }} />;
};
