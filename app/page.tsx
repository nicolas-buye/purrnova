import HeroBanner from "@/components/HeroBanner";
import SocialProof from "@/components/SocialProof";
import FeaturedProducts from "@/components/FeaturedProducts";
import BrandStory from "@/components/BrandStory";
import VideoShowcase from "@/components/VideoShowcase";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <SocialProof />
      <FeaturedProducts />
      <BrandStory />
      <VideoShowcase />
      <Testimonials />
      <Footer />
    </>
  );
}
