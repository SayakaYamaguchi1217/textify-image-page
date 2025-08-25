import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import smartphonePhoto from "@/assets/smartphone-photo.jpg";
import userProfilePhoto from "@/assets/user-profile-photo.jpg";
import careManagerRegistrationPhoto from "@/assets/care-manager-registration-photo.jpg";
import careTaxiPhoto from "@/assets/care-taxi-photo.jpg";

const AppFeatures = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Point 01 */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm">
              Point 01
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-japanese">
              対応エリアは<span className="marker-highlight-orange">日本全国</span>
            </h2>
          </div>
          
          <Card className="max-w-4xl mx-auto shadow-lg bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <p className="text-lg text-foreground font-semibold mb-4 font-japanese">
                  車椅子のまま移動できる介護タクシーを使ってみたいけど、どう予約したら良いかわからない…
                </p>
                <p className="text-lg text-primary font-bold mb-6 font-japanese">
                  こんな悩みはありませんか？
                </p>
              </div>
              
              <div className="text-center">
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  ムーブなら日本全国（エリア拡大中）対応可能です！
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  お手元のスマホより、お近くの介護タクシーが手配可能です。
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Point 02 */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm">
              Point 02
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-japanese">
              介護タクシーに特化！利用者情報の事前共有で安心
            </h2>
          </div>
          
          <Card className="max-w-4xl mx-auto shadow-lg bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  ムーブは介護タクシーに特化することで、介護等級や車椅子レンタルの有無などドライバーに事前共有が可能です。
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  簡単に配車予約が可能なことはもちろん、事前共有で楽々・安心を実現しました。
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* サービスご利用の流れ */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-japanese">
            サービスご利用の流れ
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-all duration-300 border-accent/20">
            <CardContent className="p-6">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-4">
                1
              </div>
              <div className="mb-4 flex items-center justify-center overflow-hidden rounded-lg">
                <img src={smartphonePhoto} alt="スマートフォンアプリ" className="w-20 h-20 object-cover rounded-lg shadow-md" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3 font-japanese">
                Step1
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                お手元のスマホにムーブアプリをインストール
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300 border-accent/20">
            <CardContent className="p-6">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-4">
                2
              </div>
              <div className="mb-4 flex items-center justify-center overflow-hidden rounded-lg">
                <img src={userProfilePhoto} alt="ユーザー登録" className="w-20 h-20 object-cover rounded-lg shadow-md" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3 font-japanese">
                Step2
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                会員登録を行う
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300 border-accent/20">
            <CardContent className="p-6">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-4">
                3
              </div>
              <div className="mb-4 flex items-center justify-center overflow-hidden rounded-lg">
                <img src={careManagerRegistrationPhoto} alt="ケアマネージャーによる利用者登録" className="w-20 h-20 object-cover rounded-lg shadow-md" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3 font-japanese">
                Step3
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                利用者登録を行う
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300 border-accent/20">
            <CardContent className="p-6">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-4">
                4
              </div>
              <div className="mb-4 flex items-center justify-center overflow-hidden rounded-lg">
                <img src={careTaxiPhoto} alt="介護タクシー配車" className="w-20 h-20 object-cover rounded-lg shadow-md" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3 font-japanese">
                Step4
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                配車の利用開始(出発地・目的地・日時を入力するだけで予約可能)
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;