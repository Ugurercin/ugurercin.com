import Hero from "@/components/home/hero";
import FeaturedApp from "@/components/home/featured-app";
import AppsPreview from "@/components/home/apps-preview";
import AboutStrip from "@/components/home/about-strip";
import NewsletterSection from "@/components/home/newsletter-section";
import ContactStrip from "@/components/home/contact-strip";
import BlogPreview from "@/components/home/blog-preview";
import FadeIn from "@/components/motion/fade-in";

export default function HomePage() {
  return (
    <>
      <FadeIn delay={0.1}><Hero /></FadeIn>
      <FadeIn delay={0.2}><FeaturedApp /></FadeIn>
      <FadeIn delay={0.0}><AppsPreview /></FadeIn>
      <FadeIn delay={0.0}><AboutStrip /></FadeIn>
      <FadeIn delay={0.0}><NewsletterSection /></FadeIn>
      <FadeIn delay={0.0}><ContactStrip /></FadeIn>
      <FadeIn delay={0.0}><BlogPreview /></FadeIn>
    </>
  );
}
