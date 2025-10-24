import Image from "next/image";
import Section from "../common/section-wrapper";

const LOGOS = [
    {
        name: "LPU University",
        gray: "/images/lpu/lpu_logo.webp",
    },
    {
        name: "Manipal University",
        gray: "/images/manipal/manipal_logo.png",
    },
    {
        name: "VGU University",
        gray: "/images/vgu/vgu_logo.webp",
    },
    {
        name: "Chandigarh University",
        gray: "/images/cu/cu_logo.jpg",
    },
    {
        name: 'DY Patil University',
        gray: '/images/dy_patil/dy_patil_logo.webp'
    }
];

export default function LogoCloud() {
    return (
        <Section crosses crossesOffset="lg:translate-y-0" customPaddings id="logos" className="py-12 sm:py-16">
            <div className="mx-auto max-w-5xl px-4 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center mb-16">
                    <h2 className="text-base font-semibold text-indigo-600 capitalize">
                        OUR PARTNERS
                    </h2>
                    <p className="mt-2 text-xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                        Our Trusted University
                    </p>
                    <p className="mt-6 text-lg text-gray-600">
                        We are proud to collaborate with industry-leading universities that share our commitment to excellence and innovation.
                    </p>
                </div>

                <div className="mx-auto mt-8 grid max-w-lg grid-cols-2 sm:grid-cols-3 lg:max-w-none lg:grid-cols-5 gap-x-8 gap-y-8 items-center">
                    {LOGOS.map((logo) => (
                        <div
                            key={logo.name}
                            className="group flex justify-center items-center transition-transform duration-300 hover:scale-105"
                        >
                            <Image
                                src={logo.gray}
                                alt={logo.name}
                                width={158}
                                height={48}
                                className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto object-contain transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
