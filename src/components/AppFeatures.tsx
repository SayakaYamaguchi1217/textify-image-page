import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AppFeatures = () => {
  const features = [
    {
      title: "簡単予約",
      description: "スマホで簡単に介護タクシーを予約できます",
      icon: "📱"
    },
    {
      title: "車椅子対応",
      description: "車椅子での移動も安心してお任せください",
      icon: "♿"
    },
    {
      title: "24時間サポート", 
      description: "いつでもお気軽にご相談ください",
      icon: "🕐"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-primary font-medium">
            アプリの特徴
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-japanese">
            ムーブDXで安心の移動を
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            高齢者の方々の外出をサポートする、使いやすい介護タクシー予約アプリです
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-foreground font-japanese">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;