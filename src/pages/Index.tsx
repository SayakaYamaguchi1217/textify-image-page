import HeroSection from "@/components/HeroSection";
import UserVoices from "@/components/UserVoices";
import ServiceExplanation from "@/components/ServiceExplanation";
import AppFeatures from "@/components/AppFeatures";
import CustomerTestimonials from "@/components/CustomerTestimonials";
import FAQ from "@/components/FAQ";
import FinalDownload from "@/components/FinalDownload";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <UserVoices />
      <ServiceExplanation />
      <AppFeatures />
      <CustomerTestimonials />
      <FAQ />
      <FinalDownload />
    </main>
  );
};

export default Index;
