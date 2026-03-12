import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

const Contact = () => {
  return (
      <section id="contact" className="flex-center section-padding">
        <div className="w-full h-full md:px-10 px-5">
          <TitleHeader
              title="Let's Build AI Solutions Together"
              sub="🤖 Open to AI/ML collaborations, internships, and innovative projects"
          />

          <div className="grid-12-cols mt-16">
            <div className="xl:col-span-5">
              <div className="flex flex-col gap-5 card-border rounded-xl p-10 text-white">
                <p className="text-lg font-semibold">Name</p>
                <p className="text-white-50">Muhammad Zafri bin Shaifull Naim</p>

                <p className="text-lg font-semibold mt-4">Email</p>
                <p className="text-white-50">muhdzafri2015@Gmail.com</p>

                <p className="text-lg font-semibold mt-4">Interested In</p>
                <p className="text-white-50">AI/ML Projects · Internships · Research Collaborations · Consulting</p>

                <a
                    href="https://www.linkedin.com/in/zafrishaifull"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block"
                >
                  <div className="cta-button group ai-glow-hover">
                    <div className="bg-circle" />
                    <p className="text">Connect on LinkedIn</p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="xl:col-span-7 min-h-96">
              <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
                <ContactExperience />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;
