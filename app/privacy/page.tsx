import type { Metadata } from "next";
import { site } from "@/lib/data/site";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for No BS Power Wash & Soft Wash, including SMS/text messaging and mobile data policies.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 pb-24 pt-32 sm:px-6">
      <Reveal>
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 font-hero text-4xl font-extrabold text-white">Privacy Policy</h1>
        <p className="mt-2 text-sm text-mist">Last Updated: August 12, 2026</p>
      </Reveal>
      <div className="article-body mt-8">
        <p>
          This Privacy Policy describes how {site.name} (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), owned and operated by {site.owner}, collects, uses, and protects your personal information when you interact with us.
        </p>
        <h2>1. Information We Collect</h2>
        <p>
          We may collect the following types of personal information: full name, email address, phone number (including mobile number), property address, general location information, and communications submitted through quote forms, phone calls, text messages, or in-person interactions.
        </p>
        <h2>2. How We Use Your Information</h2>
        <p>
          We use the information we collect to respond to inquiries and provide requested services, prepare and deliver quotes, schedule and confirm appointments, send updates related to your service or account, deliver SMS/text message communications you have consented to receive, improve our services and customer experience, and comply with applicable laws and regulations.
        </p>
        <h2>3. SMS / Text Messaging &amp; Mobile Data</h2>
        <p>
          <strong>3.1 Consent.</strong> When you provide your mobile phone number to {site.name}, whether verbally, in person, via a web form, or through any other channel, you are consenting to receive SMS/MMS messages from us related to our services, quotes, appointments, and marketing communications.
        </p>
        <p>
          <strong>3.2 Mobile Data Sharing Policy.</strong> MOBILE OPT-IN DATA AND CONSENT WILL NOT BE SHARED WITH ANY THIRD PARTIES OR AFFILIATES FOR MARKETING OR PROMOTIONAL PURPOSES. Your phone number and SMS consent status are used exclusively for direct communication between you and {site.name}. We do not sell, rent, trade, or share your mobile opt-in data with any outside parties.
        </p>
        <p>
          <strong>3.3 Opt-Out.</strong> You may opt out of SMS communications at any time by replying STOP to any message. You will receive a one-time confirmation and no further messages will be sent. You may re-subscribe at any time by replying START.
        </p>
        <p>
          <strong>3.4 Message &amp; Data Rates.</strong> Message and data rates may apply. {site.name} is not responsible for charges imposed by your mobile carrier.
        </p>
        <h2>4. How We Share Your Information</h2>
        <p>
          We do not sell, rent, or trade your personal information. We may share information only in the following limited circumstances: with trusted service providers who assist us in operating our business under strict confidentiality agreements, when required by law or legal process, or to protect the rights, safety, or property of {site.name} or others. We will never share your personal information, including your mobile number or SMS consent, with third parties for their own marketing or promotional use.
        </p>
        <h2>5. Data Retention</h2>
        <p>
          We retain your personal information for as long as necessary to provide our services or as required by law. If you opt out of SMS communications, your number will be removed from our active messaging list within a commercially reasonable time.
        </p>
        <h2>6. Data Security</h2>
        <p>
          We implement reasonable technical and organizational safeguards to protect your personal information from unauthorized access, disclosure, or misuse.
        </p>
        <h2>7. Your Rights</h2>
        <p>
          You may have the right to access, correct, or delete the personal information we hold about you, and to opt out of marketing communications at any time. To exercise these rights, contact us at <a href={site.emailHref} className="text-electric underline underline-offset-4">{site.email}</a>.
        </p>
        <h2>8. Children&apos;s Privacy</h2>
        <p>
          Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
        </p>
        <h2>9. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be reflected on this page with an updated effective date.
        </p>
        <h2>10. Contact Us</h2>
        <p>
          {site.name} | Owner: {site.owner} | Serving {site.areasLine} | Email: <a href={site.emailHref} className="text-electric underline underline-offset-4">{site.email}</a> | Phone: <a href={site.phoneHref} className="text-electric underline underline-offset-4">{site.phone}</a> | Website: {site.url}
        </p>
      </div>
    </section>
  );
}
