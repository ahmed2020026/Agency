import { company_logos } from "../assets/assets";

const TrustedBy = () => {
    return (
        <div className="container">

            <div
                data-aos="fade-up"
                className="flex flex-col items-center text-gray-700 dark:text-gray-500 px-4 sm:px-12 lg:px-24 my-7"
            >

                <h2 className="font-semibold mb-5">
                    Trusted by Leading Companies
                </h2>

                <div className="flex justify-center items-center gap-10 mt-4 flex-wrap">

                    {company_logos.map((item, index) => (
                        <img
                            key={index}
                            src={item}
                            alt="Company logo"
                            loading="lazy"
                            decoding="async"
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                            className="max-h-5 sm:max-h-6 dark:drop-shadow-2xl"
                        />
                    ))}

                </div>

            </div>
        </div>
    );
};

export default TrustedBy;