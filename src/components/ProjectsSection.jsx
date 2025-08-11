import { Description } from "@radix-ui/react-toast";

const projects = [
  {
    id: 1,
    title: "Editor de Texto",
    description: "Un editor de texto enriquecido usando Tiptap y React.",
    image: "/projects/prewview_editor.png",
    tags: ["React", "CSS"],
    demoURL: "https://editordetextosimple.netlify.app/",
    githubURL: "https://github.com/sariasca/text_editor?tab=readme-ov-file"
  },
  {
    id: 2,
    title: "Editor de Texto",
    description: "Un editor de texto enriquecido usando Tiptap y React.",
    image: "/projects/prewview_editor.png",
    tags: ["React", "CSS"],
    demoURL: "https://editordetextosimple.netlify.app/",
    githubURL: "https://github.com/sariasca/text_editor?tab=readme-ov-file"
  },
  {
    id: 3,
    title: "Editor de Texto",
    description: "Un editor de texto enriquecido usando Tiptap y React.",
    image: "/projects/prewview_editor.png",
    tags: ["React", "CSS"],
    demoURL: "https://editordetextosimple.netlify.app/",
    githubURL: "https://github.com/sariasca/text_editor?tab=readme-ov-file"
  }
]

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
          Proyectos
          <span className="text-primary"> Destacados </span>
        </h2>
      </div>

    </section>
  );
}