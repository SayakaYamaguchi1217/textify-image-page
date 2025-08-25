import { Card, CardContent } from "@/components/ui/card";

const ServiceExplanation = () => {
  const steps = [
    { icon: "📱", label: "スマホで予約" },
    { icon: "🚐", label: "介護タクシー" }, 
    { icon: "👥", label: "安心サポート" },
    { icon: "🚗", label: "移動" },
    { icon: "🏥", label: "目的地到着" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-japanese">
            介護タクシーを<span className="text-primary">簡単</span>に呼ぶことができます
          </h2>
          <p className="text-muted-foreground text-lg">
            お手元のスマホから簡単に呼ぶことができます
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex justify-center items-center space-x-4 md:space-x-8 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-3xl md:text-4xl mb-2 bg-accent/20 rounded-full p-4">
                  {step.icon}
                </div>
                <span className="text-xs md:text-sm text-muted-foreground text-center font-japanese">
                  {step.label}
                </span>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute h-px bg-accent w-8 mt-8 ml-12"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <Card className="max-w-2xl mx-auto shadow-lg bg-accent/5 border-accent/20">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">
                1
              </div>
              <h3 className="text-xl font-bold text-foreground font-japanese">
                ムーブアプリで目的地日時を指定
              </h3>
            </div>
            <div className="flex justify-center">
              <div className="text-6xl bg-primary/10 rounded-2xl p-6">
                📱
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ServiceExplanation;