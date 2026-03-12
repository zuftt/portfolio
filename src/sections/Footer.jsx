import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col items-center gap-4">
          <p className="text-white-50 text-center">
            AI/ML Specialist · Building Intelligent Systems · Transforming Data into Actionable Intelligence
          </p>
          <div className="socials">
            {socialImgs.map((social, index) => (
              <a
                key={index}
                href={social.link || "#"}
                target={social.link ? "_blank" : "_self"}
                rel={social.link ? "noopener noreferrer" : ""}
                className="icon ai-glow-hover"
              >
                <img src={social.imgPath} alt={social.name} />
              </a>
            ))}
          </div>
          <p className="text-white-50 text-sm text-center">
            © {new Date().getFullYear()} Muhammad Zafri Shaifull Naim. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
