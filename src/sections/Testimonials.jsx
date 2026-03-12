import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";

const Testimonials = () => {
    return (
        <section
            id="testimonials"
            className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
        >
            <div className="w-full h-full md:px-20 px-5">
                <TitleHeader title="My Education" sub="🎓 Academic Background" />

                <div className="mt-20 flex flex-col gap-10">
                    {testimonials.map((card, index) => (
                        <div
                            key={index}
                            className="card-border rounded-xl p-8 flex flex-col gap-4 bg-black/10"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={card.imgPath}
                                    alt="institution"
                                    className="w-12 h-12 object-contain"
                                />
                                <div>
                                    <h3 className="text-white text-xl font-semibold">
                                        {card.name}
                                    </h3>
                                    <p className="text-white-50 text-sm">{card.date}</p>
                                </div>
                            </div>

                            <p className="text-white-50 mt-2 text-sm font-medium">
                                {card.mentions}
                            </p>
                            <p className="text-white-50 text-base leading-relaxed">
                                {card.review}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
