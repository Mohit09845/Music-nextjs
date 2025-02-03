import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MovingCard from "@/components/MovingCard";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
      <HeroSection/>
      <FeaturedSection/>
      <WhyChooseUs/>
      <MovingCard/>
      <UpcomingWebinars/>
      <Instructors/>
    </main>
  );
} 
