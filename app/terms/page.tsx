import type { Metadata } from "next";
import { site } from "@/lib/data/site";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms & Conditions for No BS Power Wash & Soft Wash, including SMS/text messaging program terms.",
};

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 pb-24 pt-32 sm:px-6">
      <Reveal>
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 font-hero text-4xl font-extrabold text-white">Terms &amp; Conditions</h1>
        <p className="mt-2 text-sm text-mist">Last Updated: August 12, 2026</p>
      </Reveal>
      <div className="article-body mt-8">
        <p>
          These Terms and Conditions (&quot;Terms&quot;) govern your use of the services provided by {site.name} (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), owned and operated by {site.owner} and serving {site.areasLine}. By using our services or providing your contact information, you agree to these Terms.
        </p>
        <h2>1. Services</h2>
        <p>
          {site.name} provides exterior cleaning services including but not limited to house washing, soft washing, roof cleaning, concrete and driveway cleaning, pressure and power washing, and screened porch cleaning. By engaging with our services or submitting your contact information, you agree to be contacted by our team regarding service inquiries, quotes, appointments, and updates. Quotes are provided in good faith based on the information available at the time; final pricing is confirmed before work begins.
        </p>
        <h2>2. SMS / Text Messaging Terms</h2>
        <p>
          By providing your mobile phone number to {site.name} and consenting to receive text messages, whether verbally, in person, via a form, or through any other method, you agree to the following:
        </p>
        <p>
          <strong>2.1 Program Description.</strong> You may receive SMS/MMS text messages from {site.name} regarding: service information and updates, quote delivery and follow-up, appointment scheduling, confirmations, and reminders, follow-up communications related to service inquiries, and promotional offers and business updates.
        </p>
        <p>
          <strong>2.2 Message Frequency.</strong> Message frequency varies based on your interactions with us. You may receive up to 10 messages per month. We will never send unsolicited messages.
        </p>
        <p>
          <strong>2.3 Message &amp; Data Rates.</strong> Message and data rates may apply. Rates are determined by your mobile carrier and plan. {site.name} is not responsible for any charges incurred from your wireless carrier.
        </p>
        <p>
          <strong>2.4 How to Opt Out.</strong> You may opt out of SMS communications at any time by replying STOP to any text message you receive from us. Upon receiving your STOP request, we will send a one-time confirmation message and you will receive no further messages unless you re-subscribe.
        </p>
        <p>
          <strong>2.5 How to Get Help.</strong> For assistance with our SMS program, reply HELP to any message or contact us directly at: Email: <a href={site.emailHref} className="text-electric underline underline-offset-4">{site.email}</a> | Phone: <a href={site.phoneHref} className="text-electric underline underline-offset-4">{site.phone}</a>
        </p>
        <p>
          <strong>2.6 Eligibility.</strong> Our SMS program is available to users in the United States only. You must be 18 years of age or older to receive SMS communications from us.
        </p>
        <p>
          <strong>2.7 Supported Carriers.</strong> {site.name}&apos;s SMS program is supported by all major U.S. carriers including AT&amp;T, T-Mobile, and Verizon. Carrier is not liable for delayed or undelivered messages caused by carrier outages or technical issues.
        </p>
        <p>
          <strong>2.8 Consent Not Required for Purchase.</strong> You are not required to consent to receive SMS messages as a condition of purchasing any goods or services from {site.name}.
        </p>
        <h2>3. Property Access &amp; Service Conditions</h2>
        <p>
          By scheduling service, you confirm that you are the property owner or are authorized to approve work on the property, and that we have reasonable access to exterior water and the areas to be cleaned. We take care to protect landscaping, fixtures, and surfaces, and we will tell you before work begins if any condition on the property changes the recommended method or expected result.
        </p>
        <h2>4. Intellectual Property</h2>
        <p>
          All content, branding, photos, and materials on this website are the property of {site.name} and may not be reproduced without written permission.
        </p>
        <h2>5. Limitation of Liability</h2>
        <p>
          {site.name} shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or communications.
        </p>
        <h2>6. Changes to These Terms</h2>
        <p>
          We reserve the right to update these Terms at any time. Changes will be posted on this page with an updated effective date. Continued use of our services constitutes acceptance of the revised Terms.
        </p>
        <h2>7. Contact Us</h2>
        <p>
          {site.name} | Owner: {site.owner} | Serving {site.areasLine} | Email: <a href={site.emailHref} className="text-electric underline underline-offset-4">{site.email}</a> | Phone: <a href={site.phoneHref} className="text-electric underline underline-offset-4">{site.phone}</a> | Website: {site.url}
        </p>
      </div>
    </section>
  );
}
