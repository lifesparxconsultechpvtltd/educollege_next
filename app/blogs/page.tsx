import Section from "@/src/common/section-wrapper";
import Link from "next/link";

export default function Page(){
    return(
        <>
            <Section
            className="py-24 sm:py-5"
            crosses
            crossesOffset="lg:translate-y-0"
            customPaddings
            id="hero">
            <div className="relative px-6 pt-14 lg:px-8">
                {/* Top Gradient Blur */}
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    />
                </div>

                {/* Main Content */}
                <div className="mx-auto max-w-4xl mb-16">
                    {/* Hero Text */}
                    <div className="text-center">
                        <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                            Explore Our Blog for Career Guidance
                        </h1>
                        <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl leading-8">
                            With latest updates, trends, and insights from the world of education, our blog is your go-to resource for making informed decisions about your academic journey.
                        </p>

                        {/* CTA Buttons */}
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                href="#"
                                className="bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-200"
                            >
                                Read Articles
                            </Link>
                            <Link
                                href="/universities"
                                className="text-sm font-semibold px-3.5 py-2.5 text-gray-900 transition-all duration-300 border border-transparent hover:border-gray-300 hover:text-gray-700 hover:scale-105"
                            >
                                Contact Us <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
        </>
    )
}