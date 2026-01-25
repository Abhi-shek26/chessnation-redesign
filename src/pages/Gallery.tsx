import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Link } from "react-router-dom";

import trainingCenterImage from "@/assets/gallery/chessnation_training_center_interior.png";
import tournamentVenueImage from "@/assets/gallery/chessnation_tournament_venue.png";
import coachingSessionImage from "@/assets/gallery/chessnation_coaching_session.png";
import groupClassImage from "@/assets/gallery/chessnation_group_class.png";
import onlineCoachingImage from "@/assets/gallery/online_coaching_session.png";
import virtualBoardImage from "@/assets/gallery/virtual_chess_board.png";
import analysisDashboardImage from "@/assets/gallery/chess_analysis_dashboard.png";

const galleryImages = [
  {
    id: 1,
    src: onlineCoachingImage,
    title: "Online Coaching Sessions",
    description: "Live video coaching with expert instructors from anywhere in the world",
  },
  {
    id: 2,
    src: virtualBoardImage,
    title: "Virtual Chess Boards",
    description: "Interactive digital boards for real-time training and analysis",
  },
  {
    id: 3,
    src: analysisDashboardImage,
    title: "AI-Powered Analysis",
    description: "Advanced analytics dashboards for tracking progress and improvement",
  },
  {
    id: 4,
    src: coachingSessionImage,
    title: "One-on-One Coaching",
    description: "Personalized coaching sessions with expert instructors",
  },
  {
    id: 5,
    src: tournamentVenueImage,
    title: "Tournament Venue",
    description: "Professional tournament space hosting competitive chess events",
  },
  {
    id: 6,
    src: groupClassImage,
    title: "Group Classes",
    description: "Engaging group lessons for young chess enthusiasts",
  },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16 glass-panel-strong p-8">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6" data-testid="text-gallery-title">
                ChessNation Gallery
              </h1>
              <p className="text-lg text-muted-foreground" data-testid="text-gallery-subtitle">
                Explore our online training platform, virtual coaching sessions, and tournament 
                events where champions are developed through structured programs and cutting-edge technology.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image) => (
                <Dialog key={image.id}>
                  <DialogTrigger asChild>
                    <Card className="group cursor-pointer overflow-hidden hover-lift" data-testid={`card-gallery-${image.id}`}>
                      <CardContent className="p-0">
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={image.src}
                            alt={image.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            data-testid={`img-gallery-${image.id}`}
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-heading font-semibold text-lg mb-1">{image.title}</h3>
                          <p className="text-sm text-muted-foreground">{image.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0 overflow-hidden">
                    <div className="relative">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-auto"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <h3 className="font-heading font-bold text-xl text-white mb-2">{image.title}</h3>
                        <p className="text-white/80">{image.description}</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>

            <div className="mt-16 text-center glass-panel p-8 max-w-3xl mx-auto">
              <h2 className="text-2xl font-heading font-bold mb-4">Start Training Online</h2>
              <p className="text-muted-foreground mb-4">
                Ready to experience ChessNation's online training platform? 
                Contact us to schedule your evaluation and begin your chess journey.
              </p>
              <Link to="/contact">
                <Button variant="hero" data-testid="button-gallery-contact">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
