import assets from "../assets/assets";

const Hero = () => {
    return (
        <div className="container flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 text-center w-full overflow-hidden text-gray-700 dark:text-white">

            {/* Badge */}
            <div
                data-aos="fade-down"
                className="border border-gray-300 dark:border-gray-700 gap-2 p-1.5 pr-4 inline-flex items-center rounded-full"
            >
                <img className="w-20" src={assets.group_profile} alt="group_profile" />
                <p className="text-xs font-medium">Trusted by 10k+ people</p>
            </div>

            {/* Title */}
            <h1
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-3xl sm:text-4xl md:text-5xl xl:text-[84px] max-w-5xl"
            >
                Turning imagination into{" "}
                <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
                    digital
                </span>{" "}
                impact.
            </h1>

            {/* Description */}
            <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-sm sm:text-lg font-medium text-gray-700 dark:text-gray-500 max-w-4/5 sm:max-w-lg pb-3"
            >
                Creating meaningful connections and turning big ideas into interactive digital experiences.
            </p>

            {/* Hero Image */}
            <div
                data-aos="zoom-in"
                data-aos-delay="300"
                className="relative"
            >
                <img
                    src={assets.hero_img}
                    sizes="(max-width: 600px) 400px, 800px"
                    fetchPriority="high"
                    className="w-full max-w-6xl"
                    alt="Hero_image"
                />
            </div>

        </div>
    );
};

export default Hero;