import Image from "next/image";
import Section from "../common/section-wrapper";

export default function AboutSection() {
    return (
        <Section
            className="py-12 sm:py-6 relative overflow-hidden" // reduced padding for mobile
            crossesOffset="lg:translate-y-0"
            crosses
            customPaddings
            id="about"
        > 
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Header */}
                <div className="mx-auto max-w-2xl lg:text-center mb-10 sm:mb-8"> {/* reduced bottom margin */}
                    <h2 className="text-base font-semibold text-indigo-600 capitalize">ABOUT US</h2>
                    <p className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900"> {/* smaller mobile heading */}
                        Why Choose Our Platform, for Your Educational Journey?
                    </p>
                    <p className="mt-4 text-base sm:text-lg text-gray-600"> {/* reduced spacing */}
                        We are dedicated to connecting students with top universities and programs, ensuring a seamless
                        and enriching educational experience.
                    </p>
                </div>

                <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-10 sm:gap-y-12 lg:gap-y-16 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:items-center"> {/* reduced gap for mobile */}

                    {/* RIGHT COLUMN */}
                    <div className="relative flex items-center justify-center lg:justify-end">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-50 rounded-3xl blur-2xl opacity-40 -z-10"></div> {/* reduced blur */}

                        <div className="relative">
                            <Image
                                alt="Programs Overview"
                                src="/business_women.jpg"
                                width={2432}
                                height={1442}
                                className="w-full h-[360px] sm:h-[420px] lg:h-[520px] max-w-md sm:max-w-xl lg:max-w-3xl object-contain object-center relative z-10"
                            />
                        </div>
                    </div>

                    {/* LEFT COLUMN */}
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900"> {/* smaller mobile title */}
                                Welcome To Educollege
                            </p>

                            <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed"> {/* reduced top margin */}
                                At Educollege, we are committed to empowering working professionals by providing flexible, high-quality online degree programs designed to align with your career aspirations and busy schedules. Our mission is to make education accessible and impactful, helping you unlock new opportunities and achieve your goals without compromise.
                            </p>

                            <p className="mt-3 text-base sm:text-lg text-gray-700 leading-relaxed"> {/* reduced spacing */}
                                We understand the unique challenges faced by professionals balancing work, life, and education. That’s why we recommend the best-suited programs as per your current professional needs, whether you are looking to enhance your current skills or embark on a new career path.
                            </p>

                            <p className="mt-3 text-base sm:text-lg text-gray-700 leading-relaxed"> {/* reduced spacing */}
                                Thank you for trusting Eduplor as your partner in lifelong learning. Together, we’ll pave the way for a brighter and more successful future.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </Section>
    );
}
