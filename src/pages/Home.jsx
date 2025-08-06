import { ThemeToggle } from "../components/ThemeToggle";
import { StarsBackground } from "../components/StarsBackground";

export const Home = () => {
  return (
   <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    {/* Theme Toggle */}
      <ThemeToggle />
    {/* Background Effects */}
      <StarsBackground />
    {/* Navigation Bar */}

    {/* Main Content */}

    {/* Footer */}

   </div>
  );
};
