import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return (
      <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Sobre <span className="text-primary"> mí </span> 
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 items-center">
              <h3 className="text-2xl font-bold">Apasionado del Desarrollador Web y la tecnología</h3>
              <p className="text-foreground">
                Experiencia en desarrollo con Java, PHP, Javascript... Y conocimientos de ciberseguridad,
                me especializo en crear webs responsive, accesibles y con buen desempeño usando 
                tecnologías modernas.
              </p>
            

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Ponte en contacto
              </a>
              <a href="#getCV" className="px-6 py-2 rounded-full border-primary text-primary 
              border-2 hover:bg-primary/30 hover:text-white/80 transition-colors duration-300">
                Descargar CV
              </a>
            </div>
          </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary"/>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg"> Web Development</h4>
                    <p className="text-foreground">
                      Crear sitios web responsive y aplicaciones web con frameworks modernos.
                    </p>
                  </div>
                </div>
              </div>
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <User className="h-6 w-6 text-primary"/>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Diseño UI/UX</h4>
                    <p className="text-foreground">
                      Diseñar interfaces de usuario intuitivas y experiencia de usuario fluida.
                    </p>
                  </div>
                </div>
              </div>
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary"/>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg"> Project Management</h4>
                    <p className="text-foreground">
                      Leading projects from conception to completion with agile methodologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    );
};