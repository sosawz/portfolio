import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { getPersonJsonLd, getWebsiteJsonLd } from "@/lib/jsonld";

export default function Home() {
  const personJsonLd = getPersonJsonLd();
  const websiteJsonLd = getWebsiteJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Hero />
      <FeaturedProjects />
    </>
  );
}
