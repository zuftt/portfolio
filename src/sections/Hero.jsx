import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Building Intelligent Systems with
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="ai-tech"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span className="ai-gradient-text">{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>Transforming Data into</h1>
              <h1 className="ai-gradient-text">Actionable Intelligence</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I'm Zafri — an <span className="text-[#00d4ff] font-semibold">AI/ML Specialist</span> and Software Engineering student at UKM, 
              passionate about deep learning, neural networks, and deploying production-ready AI models. 
              I specialize in building intelligent systems using TensorFlow, PyTorch, and modern LLMs, 
              with hands-on experience in model training, deployment with FastAPI, and creating AI-powered applications. 
              Currently seeking opportunities to contribute to cutting-edge AI projects and advance the field of machine learning.
            </p>

            <Button
              text="Explore AI Projects"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>


    </section>
  );
};

export default Hero;
