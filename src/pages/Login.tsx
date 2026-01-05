import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Mail, Lock, User, ArrowRight } from "lucide-react";
import chessBgImage from "@/assets/backgrounds/chess_pieces_login_background.png";

const Login = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Coming Soon",
        description: "Login functionality will be available soon. Please contact us for more information.",
      });
    }, 1000);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Coming Soon",
        description: "Registration will be available soon. Please contact us to join our training programs.",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{ backgroundImage: `url(${chessBgImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/80" />
        <section className="py-16 md:py-24 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4" data-testid="text-login-title">
                  Welcome to ChessNation
                </h1>
                <p className="text-muted-foreground">
                  Sign in to access training programs, tournaments, and more.
                </p>
              </div>

              <Card>
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl text-center">Get Started</CardTitle>
                  <CardDescription className="text-center">
                    Choose to sign in or create a new account
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="login" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="login" data-testid="tab-login">Sign In</TabsTrigger>
                      <TabsTrigger value="signup" data-testid="tab-signup">Sign Up</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="login" className="space-y-4 mt-4">
                      <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="login-email">Email</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                              id="login-email"
                              type="email"
                              placeholder="your@email.com"
                              className="pl-10"
                              required
                              data-testid="input-login-email"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="login-password">Password</Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                              id="login-password"
                              type="password"
                              placeholder="Enter your password"
                              className="pl-10"
                              required
                              data-testid="input-login-password"
                            />
                          </div>
                        </div>
                        <Button 
                          type="submit" 
                          className="w-full" 
                          disabled={isLoading}
                          data-testid="button-login-submit"
                        >
                          {isLoading ? "Signing in..." : "Sign In"}
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </form>
                    </TabsContent>
                    
                    <TabsContent value="signup" className="space-y-4 mt-4">
                      <form onSubmit={handleSignup} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="signup-name">Full Name</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                              id="signup-name"
                              type="text"
                              placeholder="Your full name"
                              className="pl-10"
                              required
                              data-testid="input-signup-name"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="signup-email">Email</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                              id="signup-email"
                              type="email"
                              placeholder="your@email.com"
                              className="pl-10"
                              required
                              data-testid="input-signup-email"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="signup-password">Password</Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                              id="signup-password"
                              type="password"
                              placeholder="Create a password"
                              className="pl-10"
                              required
                              data-testid="input-signup-password"
                            />
                          </div>
                        </div>
                        <Button 
                          type="submit" 
                          className="w-full" 
                          disabled={isLoading}
                          data-testid="button-signup-submit"
                        >
                          {isLoading ? "Creating account..." : "Create Account"}
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </form>
                    </TabsContent>
                  </Tabs>

                  <div className="mt-6 text-center text-sm text-muted-foreground">
                    <p>
                      Have questions?{" "}
                      <Link to="/contact" className="text-primary hover:underline" data-testid="link-contact">
                        Contact us
                      </Link>
                    </p>
                  </div>
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

export default Login;
