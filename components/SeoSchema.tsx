import Script from "next/script";

export default function SeoSchema() {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "RVHB — Meetings Room Blocks",
    "url": site,
    "image": site + "/og.png",
    "areaServed": "Worldwide",
    "telephone": "+1-917-484-2952",
    "email": "rvega@helmsbriscoe.com",
    "description": "Room blocks for meetings handled in ONE TOUCH. We source, negotiate, and present the best hotel options—at no cost to you."
  };

  return (
    <Script
      id="seo-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
