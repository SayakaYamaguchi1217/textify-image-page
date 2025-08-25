import { Card, CardContent } from "@/components/ui/card";
import hopefulWheelchairIllustration from "@/assets/hopeful-wheelchair-illustration.png";
import sighingIllustration from "@/assets/sighing-illustration.png";
import thinkingIllustration from "@/assets/thinking-illustration.png";

const UserVoicesEn = () => {
  const voices = [
    {
      icon: hopefulWheelchairIllustration,
      text: "I'm in a wheelchair but I really want to go out"
    },
    {
      icon: sighingIllustration, 
      text: "I want to go home but it's too much trouble, so I'll give up"
    },
    {
      icon: thinkingIllustration,
      text: "I want to use a care taxi but I don't know how"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {voices.map((voice, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-background/80">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <img src={voice.icon} alt="Expression illustration" className="w-24 h-24 mx-auto rounded-full object-cover shadow-md" />
                </div>
                <p className="text-foreground leading-relaxed">
                  {voice.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserVoicesEn;