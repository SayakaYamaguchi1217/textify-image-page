import { Card, CardContent } from "@/components/ui/card";
import worriedFaceIcon from "@/assets/worried-face-icon.png";

const UserVoices = () => {
  const voices = [
    {
      icon: worriedFaceIcon,
      text: "車椅子だけど本当は出かけたい"
    },
    {
      icon: worriedFaceIcon, 
      text: "ちょっと自宅に帰りたいけど\n面倒だから諦めよう"
    },
    {
      icon: worriedFaceIcon,
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
                <div className="mb-4">
                  <img src={voice.icon} alt="心配している表情" className="w-16 h-16 mx-auto opacity-70" />
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