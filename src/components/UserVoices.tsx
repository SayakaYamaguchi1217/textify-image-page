import { Card, CardContent } from "@/components/ui/card";
import hopefulIllustration from "@/assets/hopeful-illustration.png";
import resignedIllustration from "@/assets/resigned-illustration.png";
import anxiousIllustration from "@/assets/anxious-illustration.png";

const UserVoices = () => {
  const voices = [
    {
      icon: hopefulIllustration,
      text: "車椅子だけど本当は出かけたい"
    },
    {
      icon: resignedIllustration, 
      text: "ちょっと自宅に帰りたいけど\n面倒だから諦めよう"
    },
    {
      icon: anxiousIllustration,
      text: "介護タクシーを利用したいけど、\nどうしたら良いか分からない"
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
                  <img src={voice.icon} alt="表情イラスト" className="w-24 h-24 mx-auto rounded-full object-cover shadow-md" />
                </div>
                <p className="text-foreground leading-relaxed whitespace-pre-line font-japanese">
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

export default UserVoices;