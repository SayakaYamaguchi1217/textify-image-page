import { Card, CardContent } from "@/components/ui/card";
import smartphonePhoto from "@/assets/smartphone-photo.jpg";
import careTaxiPhoto from "@/assets/care-taxi-photo.jpg";
import driverSupportPhoto from "@/assets/driver-support-photo.jpg";
import mobilityTransportPhoto from "@/assets/mobility-transport-photo.jpg";
import hospitalPhoto from "@/assets/hospital-photo.jpg";
import wheelchairPhoto from "@/assets/wheelchair-photo.jpg";

const ServiceExplanationEn = () => {
  const steps = [
    { icon: smartphonePhoto, label: "Book with smartphone" },
    { icon: careTaxiPhoto, label: "Care taxi" }, 
    { icon: driverSupportPhoto, label: "Safe support" },
    { icon: mobilityTransportPhoto, label: "Transport" },
    { icon: hospitalPhoto, label: "Destination arrival" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          {/* Down arrow visual guide */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-0 h-0 border-l-[40px] border-r-[40px] border-t-[30px] border-l-transparent border-r-transparent border-t-primary/60 animate-pulse"></div>
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[30px] border-r-[30px] border-t-[22px] border-l-transparent border-r-transparent border-t-primary/40"></div>
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[20px] border-r-[20px] border-t-[15px] border-l-transparent border-r-transparent border-t-primary/20"></div>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Call care taxis <span className="text-primary">easily</span> from your smartphone
          </h2>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex justify-center items-center space-x-2 md:space-x-6 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-2 bg-accent/20 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center overflow-hidden">
                  <img src={step.icon} alt={step.label} className="w-full h-full object-cover rounded-full" />
                </div>
                <span className="text-xs md:text-sm text-muted-foreground text-center max-w-20 md:max-w-none">
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="shadow-lg bg-accent/5 border-accent/20 h-full">
            <CardContent className="p-6 text-center flex flex-col justify-between h-full">
              <div>
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-4 mx-auto">
                  1
                </div>
                <h3 className="text-lg font-bold text-foreground mb-4 min-h-[3.5rem] flex items-center justify-center">
                  Specify destination and time with Move app
                </h3>
              </div>
              <div className="rounded-xl mt-auto flex items-center justify-center overflow-hidden">
                <img src={smartphonePhoto} alt="Smartphone" className="w-full h-40 object-cover rounded-xl" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg bg-accent/5 border-accent/20 h-full">
            <CardContent className="p-6 text-center flex flex-col justify-between h-full">
              <div>
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-4 mx-auto">
                  2
                </div>
                <h3 className="text-lg font-bold text-foreground mb-4 min-h-[3.5rem] flex items-center justify-center">
                  Matched taxi driver from partner care taxi companies will pick you up
                </h3>
              </div>
              <div className="rounded-xl mt-auto flex items-center justify-center overflow-hidden">
                <img src={careTaxiPhoto} alt="Care taxi" className="w-full h-40 object-cover rounded-xl" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg bg-accent/5 border-accent/20 h-full">
            <CardContent className="p-6 text-center flex flex-col justify-between h-full">
              <div>
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-4 mx-auto">
                  3
                </div>
                <h3 className="text-lg font-bold text-foreground mb-4 min-h-[3.5rem] flex items-center justify-center">
                  Travel in wheelchair as it's a care taxi
                </h3>
              </div>
              <div className="rounded-xl mt-auto flex items-center justify-center overflow-hidden">
                <img src={wheelchairPhoto} alt="Wheelchair accessibility" className="w-full h-40 object-cover rounded-xl" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg bg-accent/5 border-accent/20 h-full">
            <CardContent className="p-6 text-center flex flex-col justify-between h-full">
              <div>
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-4 mx-auto">
                  4
                </div>
                <h3 className="text-lg font-bold text-foreground mb-4 min-h-[3.5rem] flex items-center justify-center">
                  Enjoy sightseeing or handle your business at the destination!
                </h3>
              </div>
              <div className="rounded-xl mt-auto flex items-center justify-center overflow-hidden">
                <img src={hospitalPhoto} alt="Hospital/destination" className="w-full h-40 object-cover rounded-xl" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServiceExplanationEn;