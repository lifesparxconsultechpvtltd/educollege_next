import Image from "next/image";
import Section from "../common/section-wrapper";

const LOGOS = [
    {
        name: "Transistor",
        gray: "https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg",
    },
    {
        name: "Reform",
        gray: "https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg",
    },
    {
        name: "Tuple",
        gray: "https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg",
    },
    {
        name: "SavvyCal",
        gray: "https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg",
    },
    {
        name: "Statamic",
        gray: "https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg",
    },
];

export default function LogoCloud() {
    return (
        <Section crosses crossesOffset="lg:translate-y-0" customPaddings id="logos" className="py-12 sm:py-16">
            <div className="mx-auto max-w-5xl px-4 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center mb-16">
                    <h2 className="text-base font-semibold text-indigo-600 capitalize">DEPLOY FASTER</h2>
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
                                className="max-h-10 w-auto object-contain transition-opacity duration-300"
                                width={158} height={48}
                            />                            
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
