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
            
            {/* Business App Section */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                Care Taxi Operator App
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a 
                  href="https://apps.apple.com/jp/app/%E3%83%A0%E3%83%BC%E3%83%96dx-%E4%BB%8B%E8%AD%B7%E3%83%89%E3%83%A9%E3%82%A4%E3%83%90%E3%83%BC%E3%82%A2%E3%83%97%E3%83%AA/id6746466200"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  Download from App Store
                </a>
                
                <a 
                  href="https://play.google.com/store/apps/details?id=com.japanmove.move_dx&fbclid=PAZXh0bgNhZW0CMTEAAacZGUDzDY5yVmE3PMABJ7lX32i3UIGcNioN6UqRFhMdS2evZz01OA2nguwIUg_aem_IBX1MHd46eZT722SVaKVVg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  Download from Google Play
                </a>
              </div>
            </div>
            
            {/* General User App Section */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-foreground">
                For General Users
              </h3>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="https://apps.apple.com/jp/app/%E3%83%A0%E3%83%BC%E3%83%96-%E4%BB%8B%E8%AD%B7%E3%82%BF%E3%82%AF%E3%82%B7%E3%83%BC%E9%85%8D%E8%BB%8A%E3%82%A2%E3%83%97%E3%83%AA/id6745237717"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground hover:bg-secondary/80 font-semibold rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  Download from App Store
                </a>
                
                <a 
                  href="https://play.google.com/store/apps/details?id=com.japanmove.move"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground hover:bg-secondary/80 font-semibold rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  Download from Google Play
                </a>
              </div>
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