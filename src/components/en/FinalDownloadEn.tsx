import { Button } from "@/components/ui/button";

const FinalDownloadEn = () => {
  return (
    <section className="py-20 bg-primary/20 text-center">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <a 
            href="#" 
            className="inline-block"
          >
            <Button 
              size="lg" 
              className="text-lg px-12 py-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Visit Corporate Page
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalDownloadEn;