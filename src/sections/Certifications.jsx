import { certifications } from "../constants";
import TitleHeader from "../components/TitleHeader";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Certifications & Training"
          sub="🎓 AI/ML Professional Development"
        />

        <div className="mt-20 flex flex-col gap-10">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="card-border rounded-xl p-8 flex flex-col md:flex-row gap-6 bg-black/10 hover:bg-black/20 transition-all duration-300 ai-glow-hover"
            >
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg bg-black-200 flex items-center justify-center p-4">
                  <img
                    src={cert.logoPath}
                    alt={cert.issuer}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
                  <h3 className="text-white text-2xl md:text-3xl font-semibold">
                    {cert.title}
                  </h3>
                  <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] text-white text-sm font-semibold w-fit">
                    {cert.badge}
                  </span>
                </div>

                <p className="text-[#00d4ff] text-lg font-medium mb-2">
                  {cert.issuer}
                </p>
                <p className="text-white-50 text-sm mb-4">{cert.date}</p>
                <p className="text-white-50 text-base leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
