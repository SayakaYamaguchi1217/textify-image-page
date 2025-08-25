import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const HeroSectionEn = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <LanguageSwitcher />
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Easy booking of<br />
              <span className="text-primary">care taxis</span><br />
              from your smartphone
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Move is a specialized app for care taxis.<br />
              Book wheelchair-accessible vehicles easily from your smartphone.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                Download App
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Care taxi service illustration" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-50 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionEn;