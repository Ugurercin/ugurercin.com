import Hero from "@/components/home/hero";
import AppsPreview from "@/components/home/apps-preview";
import AboutStrip from "@/components/home/about-strip";
import NewsletterSection from "@/components/home/newsletter-section";
import BlogPreview from "@/components/home/blog-preview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AppsPreview />
      <AboutStrip />
      <BlogPreview />
      <NewsletterSection />
    </>
  );
}
