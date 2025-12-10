import Image from "next/image";
import Section from "../common/section-wrapper";
import { LOGOS } from "../data/pages/partner.data";

export default function LogoCloud() {
    return (
        <Section
            crosses
            crossesOffset="lg:translate-y-0"
            customPaddings
            id="logos"
            className="py-14 sm:py-20"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mx-auto max-w-2xl text-center mb-14">
                    <h2 className="text-sm sm:text-base font-semibold text-indigo-600 uppercase">
                        OUR PARTNERS
                    </h2>

                    <p className="mt-2 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
                        Our Trusted Universities
                    </p>

                    <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600">
                        We collaborate with top universities worldwide to deliver world-class education.
                    </p>
                </div>

                {/* Logo Grid */}
                <div
                    className="
                        mx-auto mt-10
                        grid 
                        grid-cols-2 
                        sm:grid-cols-3 
                        md:grid-cols-4 
                        lg:grid-cols-5 
                        gap-x-10 gap-y-12
                        sm:gap-x-12 sm:gap-y-14
                        items-center
                    "
                >
                    {LOGOS.map((logo) => (
                        <div
                            key={logo.name}
                            className="
                                group flex justify-center items-center
                                transition-transform 
                                duration-300 
                                hover:scale-110
                            "
                        >
                            <Image
                                src={logo.gray}
                                alt={logo.name}
                                width={260}
                                height={100}
                                className="
                                    h-16 
                                    xs:h-20
                                    sm:h-24
                                    md:h-28
                                    lg:h-32
                                    w-auto 
                                    object-contain
                                "
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
