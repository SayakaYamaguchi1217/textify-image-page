import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="車椅子でお出かけする高齢者と介護者"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <p className="text-hero-text text-lg md:text-xl mb-8 font-light tracking-wider">
            〜ばあちゃんに空を見せるスマホアプリ〜
          </p>
          
          <h1 className="text-hero-text text-4xl md:text-6xl lg:text-7xl font-black mb-12 leading-tight font-japanese">
            <span className="block">車椅子で出かけるなら</span>
            <span className="block mt-4">「ムーブ」</span>
          </h1>
          
          {/* Business App Section */}
          <div className="mb-12">
            <h2 className="text-hero-text text-2xl md:text-3xl font-bold mb-8 font-japanese">
              介護タクシー事業者様アプリはこちら！
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="https://apps.apple.com/jp/app/%E3%83%A0%E3%83%BC%E3%83%96dx-%E4%BB%8B%E8%AD%B7%E3%83%89%E3%83%A9%E3%82%A4%E3%83%90%E3%83%BC%E3%82%A2%E3%83%97%E3%83%AA/id6746466200"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white/95 hover:bg-white text-primary font-semibold rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                App Storeからダウンロード
              </a>
              
              <a 
                href="https://play.google.com/store/apps/details?id=com.japanmove.move_dx&fbclid=PAZXh0bgNhZW0CMTEAAacZGUDzDY5yVmE3PMABJ7lX32i3UIGcNioN6UqRFhMdS2evZz01OA2nguwIUg_aem_IBX1MHd46eZT722SVaKVVg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white/95 hover:bg-white text-primary font-semibold rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Google Playからダウンロード
              </a>
            </div>
          </div>
          
          {/* General User App Section */}
          <div>
            <h3 className="text-hero-text text-xl md:text-2xl font-bold mb-6 font-japanese">
              一般の方はこちら！
            </h3>
            
            <div className="flex justify-center">
              <a 
                href="https://apps.apple.com/jp/app/%E3%83%A0%E3%83%BC%E3%83%96-%E4%BB%8B%E8%AD%B7%E3%82%BF%E3%82%AF%E3%82%B7%E3%83%BC%E9%85%8D%E8%BB%8A%E3%82%A2%E3%83%97%E3%83%AA/id6745237717"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white/95 hover:bg-white text-primary font-semibold rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                App Storeからダウンロード
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-background">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;