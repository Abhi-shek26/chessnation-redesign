import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles, ArrowRight } from "lucide-react";
import bgImg from "@/assets/hero-chess.jpg";

const Auth = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Navbar />
      <main className="relative z-10">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16">
          {/* Background image fixed to viewport */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
            style={{ backgroundImage: `url(${bgImg})` }}
          />
          <div className="absolute inset-0 bg-background/30 backdrop-blur-[2px]" />

          {/* Centered auth card */}
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-xl mx-auto">
              <div className="rounded-3xl bg-card shadow-royal border border-border/50 p-6 md:p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
                    <Sparkles className="w-4 h-4" />
                    Welcome
                  </div>
                  <h1 className="text-3xl md:text-4xl font-heading font-bold mt-4">Registration</h1>
                </div>

                <Tabs defaultValue="signup" className="w-full">
                  <TabsList className="grid grid-cols-2 w-full rounded-xl">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="signup">Sign Up</TabsTrigger>
                  </TabsList>
                  <TabsContent value="login" className="mt-6">
                    <form className="space-y-6">
                      <div>
                        <Label htmlFor="login-email">Email</Label>
                        <Input id="login-email" type="email" placeholder="you@example.com" className="mt-2 bg-transparent border-none border-b-2 border-primary/40 focus-visible:ring-0 focus-visible:border-primary" />
                      </div>
                      <div>
                        <Label htmlFor="login-password">Password</Label>
                        <Input id="login-password" type="password" placeholder="••••••••" className="mt-2 bg-transparent border-none border-b-2 border-primary/40 focus-visible:ring-0 focus-visible:border-primary" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Button type="submit" variant="hero" className="gap-2">
                          Continue
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                        <a href="#" className="text-sm text-muted-foreground hover:text-primary">Forgot password?</a>
                      </div>
                    </form>
                  </TabsContent>
                  <TabsContent value="signup" className="mt-6">
                    <form className="space-y-6">
                      <div>
                        <Label htmlFor="signup-name">Enter your full name</Label>
                        <Input id="signup-name" type="text" placeholder="Your name" className="mt-2 bg-transparent border-none border-b-2 border-primary/40 focus-visible:ring-0 focus-visible:border-primary" />
                      </div>
                      <div>
                        <Label htmlFor="signup-email">Enter your email</Label>
                        <Input id="signup-email" type="email" placeholder="you@example.com" className="mt-2 bg-transparent border-none border-b-2 border-primary/40 focus-visible:ring-0 focus-visible:border-primary" />
                      </div>
                      <div>
                        <Label htmlFor="signup-password">Create a password</Label>
                        <Input id="signup-password" type="password" placeholder="••••••••" className="mt-2 bg-transparent border-none border-b-2 border-primary/40 focus-visible:ring-0 focus-visible:border-primary" />
                      </div>
                      <div>
                        <Label htmlFor="signup-confirm">Confirm a password</Label>
                        <Input id="signup-confirm" type="password" placeholder="••••••••" className="mt-2 bg-transparent border-none border-b-2 border-primary/40 focus-visible:ring-0 focus-visible:border-primary" />
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Checkbox id="terms" />
                        <label htmlFor="terms">I accepted all terms and conditions</label>
                      </div>
                      <Button type="submit" variant="hero" className="w-full">Signup</Button>
                      <p className="text-center text-sm text-muted-foreground">Already a member? <a href="#" className="text-primary hover:underline">Login Now</a></p>
                    </form>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Auth;
