import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import smartphonePhoto from "@/assets/smartphone-photo.jpg";
import userProfilePhoto from "@/assets/user-profile-photo.jpg";
import careManagerRegistrationPhoto from "@/assets/care-manager-registration-photo.jpg";
import careTaxiPhoto from "@/assets/care-taxi-photo.jpg";

const AppFeaturesEn = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Point 01 */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm">
              Point 01
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Coverage area across Japan
            </h2>
          </div>
          
          <Card className="max-w-4xl mx-auto shadow-lg bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <p className="text-lg text-foreground font-semibold mb-4">
                  Want to use a care taxi that allows wheelchair travel but don't know how to book?
                </p>
                <p className="text-lg text-primary font-bold mb-6">
                  Do you have such concerns?
                </p>
              </div>
              
              <div className="text-center">
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  Move is available nationwide in Japan (service area expanding)!
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  You can arrange nearby care taxis from your smartphone.
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Specialized for care taxis! Peace of mind with advance user information sharing
            </h2>
          </div>
          
          <Card className="max-w-4xl mx-auto shadow-lg bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  By specializing in care taxis, Move enables advance sharing of user details like care level and wheelchair rental status with drivers.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Easy booking is just the beginning - advance sharing ensures convenience and peace of mind.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Service Flow */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Service Usage Flow
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-all duration-300 border-accent/20">
            <CardContent className="p-6">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-4">
                1
              </div>
              <div className="mb-4 flex items-center justify-center overflow-hidden rounded-lg">
                <img src={smartphonePhoto} alt="Smartphone app" className="w-20 h-20 object-cover rounded-lg shadow-md" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                Step1
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Install Move app on your smartphone
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300 border-accent/20">
            <CardContent className="p-6">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-4">
                2
              </div>
              <div className="mb-4 flex items-center justify-center overflow-hidden rounded-lg">
                <img src={userProfilePhoto} alt="User registration" className="w-20 h-20 object-cover rounded-lg shadow-md" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                Step2
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Register as a member
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300 border-accent/20">
            <CardContent className="p-6">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-4">
                3
              </div>
              <div className="mb-4 flex items-center justify-center overflow-hidden rounded-lg">
                <img src={careManagerRegistrationPhoto} alt="Care manager user registration" className="w-20 h-20 object-cover rounded-lg shadow-md" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                Step3
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Register user information
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300 border-accent/20">
            <CardContent className="p-6">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-4">
                4
              </div>
              <div className="mb-4 flex items-center justify-center overflow-hidden rounded-lg">
                <img src={careTaxiPhoto} alt="Care taxi dispatch" className="w-20 h-20 object-cover rounded-lg shadow-md" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                Step4
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Start using dispatch service (just enter departure, destination, and date/time for booking)
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AppFeaturesEn;