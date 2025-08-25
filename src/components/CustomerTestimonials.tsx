import { Card, CardContent } from "@/components/ui/card";

const CustomerTestimonials = () => {
  const testimonials = [
    {
      age: "70代女性",
      type: "車椅子 利用者",
      title: "大好きな<span className=\"marker-highlight-yellow\">孫たちと外食</span>できるようになりました",
      content: (
        <>
          これまで孫が返ってきた際に、<span className="marker-highlight-yellow">ちょっとそこまでご飯を食べに行くのも一苦労でした。</span><br />
          孫が「お寿司を食べに行きたい」と言ったとき、私の車椅子での移動によりためらわれていたので、<span className="marker-highlight-yellow">とても心苦しい思い</span>をしてきました。<br />
          ところが、ムーブアプリを使用するようになってから、一変。<span className="marker-highlight-yellow">介護タクシーが簡単に呼べるので気軽にご飯に行けるようになりました。</span><br />
          今では孫たちと気兼ねなく<span className="marker-highlight-yellow">楽しい食事の時間を過ごすことができるようになりました。</span><br />
          もっと早くこのアプリのことを知っておけばよかったです。
        </>
      )
    },
    {
      age: "40代女性",
      type: "利用者 親族",
      title: "もう、<span className=\"marker-highlight-yellow\">たらい回しされることはなくなりました</span>",
      content: (
        <>
          介護タクシーは車椅子のまま乗車できてとても便利なものです。<br />
          しかし、<span className="marker-highlight-yellow">予約時はなかなか予約が取れず、多いときは4、５件タクシー業者に電話をかけて予約</span>していました。<br />
          ちょっと車で15分ほどの病院に連れて行きたいときでも、結構苦労していました。<br />
          <span className="marker-highlight-yellow">もうたらい回しには疲れました。</span><br />
          ムーブを使い始めてからは、<span className="marker-highlight-yellow">出発地、目的地、日時を指定するだけで簡単に介護タクシーが予約できる</span>ので、今までの苦労が嘘みたいです。<br />
          もうこれで行きたい時に行きたいところに母をつれていくことができます！
        </>
      )
    },
    {
      age: "30代女性",
      type: "ケアマネージャー",
      title: "<span className=\"marker-highlight-yellow\">複数の利用者の登録</span>ができて便利",
      content: (
        <>
          私は介護施設のケアマネを努めていて、10人以上の利用者様を担当しています。<br />
          利用者様の中には、月に1回定期的にご自宅に帰宅される方や定期通院されている方も多くいらっしゃいます。<br />
          そこで今では<span className="marker-highlight-yellow">ひとりひとりに合わせえた介護タクシーを手配するのに、相当な時間を費やしていました。</span><br />
          こういった間接的な業務もあり、<span className="marker-highlight-yellow">本業に集中できる時間も制限されていました。</span><br />
          しかし、ムーブを利用してからは、<span className="marker-highlight-yellow">私ひとりに対して複数の利用者を登録できる</span>ために、<span className="marker-highlight-yellow">それぞれの利用者様の要望に沿って簡単に介護タクシーを予約できる</span>ので、大変重宝しています。<br />
          おかげで業務に余裕ができ、利用者様との会話も楽しめる様になりました。
        </>
      )
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-japanese">
            お客様の声
          </h2>
          <p className="text-muted-foreground text-lg">
            実際にムーブをご利用いただいているお客様からの声をご紹介します
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-background h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {testimonial.age}
                    </div>
                    <div className="bg-accent/10 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {testimonial.type}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 font-japanese leading-relaxed testimonial-title-underline" dangerouslySetInnerHTML={{ __html: testimonial.title }}>
                  </h3>
                </div>
                
                <div className="flex-grow">
                  <div className="text-muted-foreground leading-relaxed text-sm font-japanese">
                    {testimonial.content}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;