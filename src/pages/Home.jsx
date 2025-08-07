import { ThemeToggle } from "../components/ThemeToggle";
import { StarsBackground } from "../components/StarsBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";

export const Home = () => {
  return (
   <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    {/* Theme Toggle */}
      <ThemeToggle />
    {/* Background Effects */}
      <StarsBackground />
    {/* Navigation Bar */}
      <Navbar />
    {/* Main Content */}
    <main className="container mx-auto px-4 py-16">
      <HeroSection />
    </main>
    {/* Footer */}

   </div>
  );
};
