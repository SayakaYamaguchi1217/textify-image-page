import { Card, CardContent } from "@/components/ui/card";

const FAQ = () => {
  const faqs = [
    {
      question: "ムーブの利用には専用の機材が必要でしょうか",
      answer: "いいえ、不要です。\nお手元のスマートフォンにアプリストアからインストールすることで利用が可能となります"
    },
    {
      question: "予約できる事業者はムーブ専任にドライバーですか？",
      answer: "ムーブで予約できる事業者は、一般的な介護タクシー事業者（福祉車両限定車両をもっているタクシー事業者）です。\nご利用者様の出発地にお迎えできる、お近くの事業者様が予約できます。"
    },
    {
      question: "介護タクシーとは何でしょうか？",
      answer: "介護タクシーとは、車椅子やストレッチャーのまま乗車できる福祉専用のタクシーのことです。酸素ボンベの持ち込みも可能です。福祉タクシーとも言われます。\nドライバーは介護の知識も有しているため安心してご乗車可能です。\nムーブではそんな地域の介護タクシーを予約可能です。"
    },
    {
      question: "車椅子やストレッチャーをレンタルしたいのですが、可能でしょうか？",
      answer: "介護タクシー事業者によっては可能です。\nほとんどの事業者様で車椅子やストレッチャーがレンタル可能です。ご自宅から車内はもちろん、病院のベッドまでお借りいただけます。\nムーブでは、車椅子やストレッチャーのレンタル希望有無を事前にドライバーに共有することができます。"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-japanese">
            よくあるご質問
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-all duration-300 bg-background">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex items-start">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
                      Q
                    </span>
                    <h3 className="text-lg font-bold text-foreground leading-relaxed font-japanese">
                      {faq.question}
                    </h3>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
                    A
                  </span>
                  <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {faq.answer}
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

export default FAQ;