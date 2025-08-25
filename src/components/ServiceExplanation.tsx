import { Card, CardContent } from "@/components/ui/card";
import smartphoneIcon from "@/assets/smartphone-icon.png";
import vanIcon from "@/assets/van-icon.png";
import supportIcon from "@/assets/support-icon.png";
import taxiIcon from "@/assets/taxi-icon.png";
import hospitalIcon from "@/assets/hospital-icon.png";
import wheelchairIcon from "@/assets/wheelchair-icon.png";

const ServiceExplanation = () => {
  const steps = [
    { icon: smartphoneIcon, label: "スマホで予約" },
    { icon: vanIcon, label: "介護タクシー" }, 
    { icon: supportIcon, label: "安心サポート" },
    { icon: taxiIcon, label: "移動" },
    { icon: hospitalIcon, label: "目的地到着" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-japanese">
            介護タクシーをお手元のスマホから<span className="text-primary">簡単</span>に呼ぶことができます
          </h2>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex justify-center items-center space-x-2 md:space-x-6 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-2 bg-accent/20 rounded-full p-3 md:p-4 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                  <img src={step.icon} alt={step.label} className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <span className="text-xs md:text-sm text-muted-foreground text-center font-japanese max-w-20 md:max-w-none">
                  {step.label}
                </span>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute h-px bg-accent w-6 mt-6 ml-10"></div>
                )}
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
                <h3 className="text-lg font-bold text-foreground font-japanese mb-4 min-h-[3.5rem] flex items-center justify-center">
                  ムーブアプリで目的地日時を指定
                </h3>
              </div>
              <div className="bg-primary/10 rounded-xl p-4 mt-auto flex items-center justify-center">
                <img src={smartphoneIcon} alt="スマートフォン" className="w-12 h-12" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg bg-accent/5 border-accent/20 h-full">
            <CardContent className="p-6 text-center flex flex-col justify-between h-full">
              <div>
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-4 mx-auto">
                  2
                </div>
                <h3 className="text-lg font-bold text-foreground font-japanese mb-4 min-h-[3.5rem] flex items-center justify-center">
                  提携介護タクシー会社の中からマッチしたタクシードライバーがお迎えに上がります
                </h3>
              </div>
              <div className="bg-primary/10 rounded-xl p-4 mt-auto flex items-center justify-center">
                <img src={taxiIcon} alt="タクシー" className="w-12 h-12" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg bg-accent/5 border-accent/20 h-full">
            <CardContent className="p-6 text-center flex flex-col justify-between h-full">
              <div>
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-4 mx-auto">
                  3
                </div>
                <h3 className="text-lg font-bold text-foreground font-japanese mb-4 min-h-[3.5rem] flex items-center justify-center">
                  介護タクシーなので車椅子のまま移動可能
                </h3>
              </div>
              <div className="bg-primary/10 rounded-xl p-4 mt-auto flex items-center justify-center">
                <img src={wheelchairIcon} alt="車椅子アクセシビリティ" className="w-12 h-12" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg bg-accent/5 border-accent/20 h-full">
            <CardContent className="p-6 text-center flex flex-col justify-between h-full">
              <div>
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-4 mx-auto">
                  4
                </div>
                <h3 className="text-lg font-bold text-foreground font-japanese mb-4 min-h-[3.5rem] flex items-center justify-center">
                  目的地で観光や用事などをお済ませください！
                </h3>
              </div>
              <div className="bg-primary/10 rounded-xl p-4 mt-auto flex items-center justify-center">
                <img src={hospitalIcon} alt="病院・目的地" className="w-12 h-12" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServiceExplanation;