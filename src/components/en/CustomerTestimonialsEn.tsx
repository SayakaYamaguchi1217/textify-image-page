import { Card, CardContent } from "@/components/ui/card";

const CustomerTestimonialsEn = () => {
  const testimonials = [
    {
      age: "60s",
      type: "User",
      title: "Very convenient!",
      content: "I used to have trouble calling care taxis, but now I can easily book them from my smartphone. The drivers are also very kind and I feel at ease."
    },
    {
      age: "70s", 
      type: "User",
      title: "Peace of mind",
      content: "Since my information is shared in advance, the drivers understand my situation and I can use the service with confidence. I'm grateful that I can go out more often now."
    },
    {
      age: "50s",
      type: "Care Manager",
      title: "Efficient management",
      content: "Being able to manage multiple users' bookings from a single app has significantly improved work efficiency. Both users and their families are satisfied."
    },
    {
      age: "40s",
      type: "Driver",
      title: "Smoother service",
      content: "Since user information is shared in advance, I can provide appropriate support from the start. Both users and I feel more at ease."
    },
    {
      age: "80s",
      type: "User",
      title: "Regained freedom",
      content: "I had given up on going out because it was troublesome, but thanks to this app, I can easily go to the hospital or shopping. My life has become much brighter."
    },
    {
      age: "30s",
      type: "Family Member",
      title: "Great peace of mind",
      content: "I used to worry about my elderly parent's transportation, but now I can book with peace of mind knowing the app is specialized for care. Both my parent and I are very satisfied."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Customer Voices
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Many users are already enjoying the convenience and peace of mind
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background/80 border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {testimonial.age}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {testimonial.type}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {testimonial.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {testimonial.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonialsEn;