import Link from "next/link";
import Section from "../common/section-wrapper";

export default function Hero() {

    return (
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
                    {/* Announcement Badge */}
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 transition-all duration-300">
                            Explore programs & universities.{' '}
                            <Link href="/programs" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                <span aria-hidden="true" className="absolute inset-0" />
                                Read more <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </div>
                    </div>

                    {/* Hero Text */}
                    <div className="text-center">
                        <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                            Educollege for modern education
                        </h1>
                        <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl leading-8">
                            Online education is a great way to learn new skills and advance your career. Our platform offers a wide range of courses and programs to help you achieve your goals.
                        </p>

                        {/* CTA Buttons */}
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                href="#"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-200"
                            >
                                Get started
                            </Link>
                            <Link href="/universities" className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700 transition-colors duration-200">
                                Learn more <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}
