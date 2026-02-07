import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Youtube, Facebook, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import contactBgImage from "@/assets/backgrounds/chess_contact_page_background.png";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  interest: z.string().min(1, "Please select an area of interest"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      interest: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      try {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: data.name,
            from_email: data.email,
            reply_to: data.email,
            user_email: data.email,
            phone: data.phone || "Not provided",
            interest: data.interest,
            message: data.message,
            to_email: "chessnation2.us@gmail.com",
          },
          publicKey
        );

        toast({
          title: "Message sent successfully!",
          description: "Thank you for contacting ChessNation. We'll get back to you soon.",
        });
        form.reset();
      } catch (error) {
        console.error("EmailJS error:", error);
        toast({
          title: "Error sending message",
          description: "There was a problem sending your message. Please try again or email us directly.",
          variant: "destructive",
        });
      }
    } else {
      const mailtoLink = `mailto:chessnation2.us@gmail.com?subject=ChessNation Inquiry - ${data.interest}&body=Name: ${data.name}%0D%0AEmail: ${data.email}%0D%0APhone: ${data.phone || 'Not provided'}%0D%0AInterest: ${data.interest}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(data.message)}`;
      window.location.href = mailtoLink;
      
      toast({
        title: "Opening email client",
        description: "Your default email client should open with the message prepared.",
      });
      form.reset();
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
      {/* Fixed Background Layer */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${contactBgImage})` }} 
      />
      {/* Overlay for readability */}
      <div className="fixed inset-0 z-0 bg-background/30 backdrop-blur-[2px]" />

      <Navbar />
      
      <main className="flex-grow pt-24 relative z-10">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Header Section */}
            <div className="max-w-4xl mx-auto text-center mb-12 glass-panel-strong p-8 rounded-2xl border border-white/10">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground" data-testid="text-contact-title">
                Contact Us
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-subtitle">
                Ready to start your chess journey? Have questions about our programs?
                We'd love to hear from you.
              </p>
            </div>

            {/* Grid Layout - Changed to 12 columns for better spacing */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Contact Info Panel - Spans 4 columns */}
              <div className="lg:col-span-4 space-y-6">
                <div className="relative group">
                  <div className="relative bg-white/10 dark:bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-xl overflow-hidden hover:border-primary/50 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>

                    <div className="relative z-10 space-y-6">
                      <div>
                        <h2 className="text-xl font-heading font-semibold text-foreground mb-4">Get in Touch</h2>
                      </div>

                      <div className="space-y-4">
                        <a href="mailto:chessnation.us@gmail.com" className="flex items-center gap-3 group/item hover:translate-x-1 transition-transform">
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <Mail className="w-5 h-5 text-primary" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-foreground/70">Email</p>
                            <p className="text-sm text-foreground font-semibold truncate group-hover/item:text-primary transition-colors">chessnation.us@gmail.com</p>
                          </div>
                        </a>

                        <a href="tel:7708585756" className="flex items-center gap-3 group/item hover:translate-x-1 transition-transform">
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <Phone className="w-5 h-5 text-primary" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-foreground/70">Phone</p>
                            <p className="text-sm text-foreground font-semibold group-hover/item:text-primary transition-colors">(770) 858-5756</p>
                          </div>
                        </a>

                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-5 h-5 text-primary" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-foreground/70">Location</p>
                            <p className="text-sm text-foreground leading-snug">
                              11340 Lakefield Dr<br />
                              Johns Creek, GA 30097
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-4 pt-4 border-t border-white/10">
                        <a
                          href="https://youtube.com/@chessnation_us?si=FZGjqDcHPHDhReRG"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-red-600/20 hover:bg-red-600/40 flex items-center justify-center transition-all hover:scale-110"
                        >
                          <Youtube className="w-5 h-5 text-red-500" />
                        </a>
                        <a
                          href="https://www.facebook.com/profile.php?id=61570828734641"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-blue-600/20 hover:bg-blue-600/40 flex items-center justify-center transition-all hover:scale-110"
                        >
                          <Facebook className="w-5 h-5 text-blue-500" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Empty Spacer Column - Spans 1 column (Hidden on mobile) */}
              <div className="hidden lg:block lg:col-span-1" />

              {/* Form Card - Spans 7 columns */}
              <Card className="lg:col-span-7 bg-card/90 dark:bg-card/60 backdrop-blur-sm border-white/20 shadow-2xl">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-heading font-bold mb-6">Send a Message</h2>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Your name" {...field} className="bg-background/50" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="your@email.com" {...field} className="bg-background/50" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone (optional)</FormLabel>
                              <FormControl>
                                <Input type="tel" placeholder="(123) 456-7890" {...field} className="bg-background/50" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />

                        <FormField
                          control={form.control}
                          name="interest"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Area of Interest *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-background/50">
                                    <SelectValue placeholder="Select an area" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="training">Training</SelectItem>
                                  <SelectItem value="tournaments">Tournaments</SelectItem>
                                  <SelectItem value="franchise">Franchise</SelectItem>
                                  <SelectItem value="technology">Technology</SelectItem>
                                  <SelectItem value="general">General Inquiry</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )} />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us how we can help you..."
                                className="min-h-[150px] bg-background/50"
                                {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />

                      <Button
                        type="submit"
                        variant="default"
                        size="lg"
                        className="w-full md:w-auto"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                        <Send className="w-4 h-4 ml-2" />
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
