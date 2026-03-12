import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5 }
    );

    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
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
            delay: 0.3 * (index + 1),
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
            },
          }
      );
    });
  }, []);

  return (
      <div id="work" ref={sectionRef} className="app-showcase">
        <div className="w-full">
          <div className="showcaselayout">
            <div ref={libraryRef} className="first-project-wrapper">
              <div className="image-wrapper">
                <img src="/images/ai-project.png" alt="AI PDF Summariser" />
              </div>
              <div className="text-content">
                <h2 className="text-xl font-semibold mb-2">
                  🧠 AI PDF Summariser Web App
                </h2>
                <p className="text-white-50 text-sm mb-1">
                  <strong>Tech Stack:</strong> Next.js, TypeScript, Tailwind CSS, Supabase, DeepSeek API, Clerk, Node.js
                </p>
                <ul className="text-white-50 list-disc list-inside text-sm space-y-1">
                  <li>Built a production-ready full-stack AI web application that processes and summarizes uploaded PDFs using advanced LLM integration.</li>
                  <li>Implemented custom API routes for secure DeepSeek API interactions with robust error handling and rate limiting.</li>
                  <li>Integrated user authentication with Clerk and managed user data with Supabase for scalable cloud storage.</li>
                  <li>Designed intuitive UI with real-time processing feedback and optimized performance for large document handling.</li>
                </ul>
              </div>
            </div>

            <div className="project-list-wrapper overflow-hidden">
              <div className="project" ref={rydeRef}>
                <div className="image-wrapper bg-[#000000]">
                  <img src="/images/project1.png" alt="Reporting App Interface" />
                </div>
                <div className="text-content mt-4">
                  <h2 className="text-lg font-semibold mb-1">
                    📱 Reporting and Alert App
                  </h2>
                  <p className="text-white-50 text-sm mb-1">
                    <strong>Tech Stack:</strong> React Native, Expo, TypeScript, Firebase Firestore, Firebase Auth, Google Maps API
                  </p>
                  <ul className="text-white-50 list-disc list-inside text-sm space-y-1">
                    <li>Developed a mobile app for real-time incident reporting and location-based alerts.</li>
                    <li>Integrated secure email authentication, cloud data storage, and map-based location capture.</li>
                  </ul>
                </div>
              </div>

              <div className="project" ref={ycDirectoryRef}>
                <div className="image-wrapper bg-[#000000]">
                  <img src="/images/website.png" alt="3D Portfolio Website" />
                </div>
                <div className="text-content mt-4">
                  <h2 className="text-lg font-semibold mb-1">
                    🌐 3D Interactive Portfolio Website
                  </h2>
                  <p className="text-white-50 text-sm mb-1">
                    <strong>Tech Stack:</strong> Next.js, TypeScript, Three.js, Framer Motion, Vercel
                  </p>
                  <ul className="text-white-50 list-disc list-inside text-sm space-y-1">
                    <li>Showcases personal projects with immersive 3D visuals using Three.js.</li>
                    <li>Deployed via Vercel with optimized routing and animations.</li>
                  </ul>
                </div>
              </div>

              <div className="project">
                <div className="image-wrapper bg-[#000000]">
                  <img src="/images/unity.png" alt="Unity Game" />
                </div>
                <div className="text-content mt-4">
                  <h2 className="text-lg font-semibold mb-1">
                    🎮 Unity Game Development
                  </h2>
                  <p className="text-white-50 text-sm mb-1">
                    <strong>Tech Stack:</strong> Unity, C#
                  </p>
                  <ul className="text-white-50 list-disc list-inside text-sm space-y-1">
                    <li>Developed a 3D interactive game with immersive environments and player logic.</li>
                    <li>Scripted gameplay mechanics and UI with C# and Unity's component system.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AppShowcase;