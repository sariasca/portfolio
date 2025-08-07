import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-screen px-4"
    >
      <div className="container mx-auto text-center max-w-4xl z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">          
            <span className="opacity-0 animate-fade-in text-glow text-foreground"> Hola, soy </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1 font-bold">
              {" "}
              Santiago</span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> 
              {" "}
              Arias </span>          
          </h1>

          <p className="text-lg md:text-xl mx-auto opacity-0 animate-fade-in-delay-3">
            Creo webs con tecnologias modernas.
            Desarrollador Full-Stack, creo interfaces que son bellas y funcionales
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              Mira mi trabajo
            </a>
          </div>
        </div>
      </div>

    <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
      <span className="text-sm mb-2"> Desliza </span>
      <ArrowDown className="h-5 w-5 text-primary"/>
    </div>

    </section>
  );
};
