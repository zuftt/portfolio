import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { aiProjects } from "../constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const AIProjects = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = sectionRef.current?.querySelectorAll(".ai-project-card");
    cards?.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="ai-projects"
      ref={sectionRef}
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="AI/ML Projects"
          sub="🤖 Showcasing Intelligent Solutions"
        />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {aiProjects.map((project, index) => (
            <div
              key={index}
              className="ai-project-card card-border rounded-xl overflow-hidden bg-black/10 hover:bg-black/20 transition-all duration-300 ai-glow-hover"
            >
              <div className="relative h-64 bg-black-200">
                <img
                  src={project.imagePath}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] text-white text-xs font-semibold">
                    AI/ML
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-white text-2xl font-semibold mb-3">
                  {project.title}
                </h3>
                <p className="text-white-50 text-base mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <p className="text-[#00d4ff] text-sm font-semibold mb-2">
                    Tech Stack:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 rounded-md bg-black-200 text-white-50 text-xs border border-black-50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[#8b5cf6] text-sm font-semibold mb-2">
                    Key Features:
                  </p>
                  <ul className="list-disc list-inside text-white-50 text-sm space-y-1">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIProjects;
