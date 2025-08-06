import { ThemeToggle } from "../components/ThemeToggle";
import { StarsBackground } from "../components/StarsBackground";
import { Navbar } from "../components/Navbar";

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

    {/* Footer */}

   </div>
  );
};
