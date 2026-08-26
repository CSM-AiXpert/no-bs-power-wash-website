"use client";

import Script from "next/script";

export default function QuoteForm() {
  return (
    <div className="rounded-2xl border glass p-6 sm:p-8">
      <iframe
        src="https://app.coastaflow.ai/widget/form/36fE9EOmL1h2zzX8K2aj"
        style={{ width: "100%", height: "100%", border: "none", borderRadius: "8px" }}
        id="inline-36fE9EOmL1h2zzX8K2aj"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Contact Us - Web"
        data-height="976"
        data-layout-iframe-id="inline-36fE9EOmL1h2zzX8K2aj"
        data-form-id="36fE9EOmL1h2zzX8K2aj"
        title="Contact Us - Web"
      />
      <Script src="https://app.coastaflow.ai/js/form_embed.js" strategy="afterInteractive" />
    </div>
  );
}
