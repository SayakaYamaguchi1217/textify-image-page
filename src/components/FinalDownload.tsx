import { Button } from "@/components/ui/button";

const FinalDownload = () => {
  return (
    <section className="py-20 bg-primary-gradient text-center">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-6">
          <a 
            href="https://apps.apple.com/jp/app/%E3%83%A0%E3%83%BC%E3%83%96dx-%E4%BB%8B%E8%AD%B7%E3%83%89%E3%83%A9%E3%82%A4%E3%83%90%E3%83%BC%E3%82%A2%E3%83%97%E3%83%AA/id6746466200"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105"
          >
            <img 
              src="/placeholder.svg" 
              alt="App Storeからダウンロード"
              width={150}
              height={55}
              className="h-14 w-auto"
            />
          </a>
        </div>
        <p className="text-hero-text text-lg font-japanese">
          2025年8月Androidアプリ配信予定
        </p>
      </div>
    </section>
  );
};

export default FinalDownload;