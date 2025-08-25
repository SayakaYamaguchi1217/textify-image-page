import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQEn = () => {
  const faqs = [
    {
      question: "What is Move?",
      answer: "Move is a specialized app for booking care taxis. You can easily book wheelchair-accessible vehicles that allow travel while seated in a wheelchair from your smartphone."
    },
    {
      question: "What areas are covered?",
      answer: "We are currently expanding our service area across Japan. Please check the app for availability in your specific area."
    },
    {
      question: "How do I make a booking?",
      answer: "After installing the app and registering as a member, simply enter your departure point, destination, and desired date/time to make a booking. User information registered in advance will be shared with the driver."
    },
    {
      question: "What information is shared with drivers?",
      answer: "Information such as care level, wheelchair rental status, and special assistance needs are shared to ensure appropriate support. Personal information is handled securely."
    },
    {
      question: "How much does it cost?",
      answer: "Fees vary by distance and time. Detailed pricing is displayed during the booking process. Payment methods include credit card and cash."
    },
    {
      question: "Can family members make bookings?",
      answer: "Yes, after registering user information, family members and care managers can make bookings on behalf of users."
    },
    {
      question: "What should I do if I need to cancel?",
      answer: "You can cancel through the app. Please note that cancellation fees may apply depending on timing. Please check the terms for details."
    },
    {
      question: "What if the driver doesn't arrive?",
      answer: "If the driver doesn't arrive at the scheduled time, please contact our support team through the app. We will provide immediate assistance."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are answers to common questions about the Move service
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-muted/20 rounded-lg border-0 px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-foreground">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQEn;