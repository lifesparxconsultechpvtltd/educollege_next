import Section from "@/src/common/section-wrapper";
import Link from "next/link";

export default function Page() {
    return (
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
                                Get in Touch with <br />Educollege
                            </h1>
                            <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl leading-8">
                                Whether you have questions about our programs, admissions, or campus life, our dedicated team is ready to assist you. Reach out to us via the form below or email us at <Link href="mailto:info@educollege.com" className="font-semibold text-indigo-600 hover:text-indigo-500">info@educollege.com</Link>.
                            </p>
                            {/* CTA Buttons */}
                            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6 px-4 sm:px-0">
                                <Link
                                    href="/programs"
                                    className="w-full sm:w-auto bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-200 text-center"
                                    >
                                    Explore Programs
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
            <Section className="pb-24 sm:pb-32" id="contact-form" crosses crossesOffset="lg:translate-y-0">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <form className="space-y-8" action="#" method="POST">
                        {/* Name */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-6">
                            <label htmlFor="name" className="text-sm font-medium text-slate-700">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                className="sm:col-span-2 w-full border-b border-slate-300 bg-transparent focus:outline-none focus:border-indigo-600 text-sm py-2 transition-colors"
                            />
                        </div>

                        {/* Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-6">
                            <label htmlFor="email" className="text-sm font-medium text-slate-700">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                className="sm:col-span-2 w-full border-b border-slate-300 bg-transparent focus:outline-none focus:border-indigo-600 text-sm py-2 transition-colors"
                            />
                        </div>

                        {/* Subject */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-6">
                            <label htmlFor="subject" className="text-sm font-medium text-slate-700">
                                Subject
                            </label>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                required
                                className="sm:col-span-2 w-full border-b border-slate-300 bg-transparent focus:outline-none focus:border-indigo-600 text-sm py-2 transition-colors"
                            />
                        </div>

                        {/* Message */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <label htmlFor="message" className="text-sm font-medium text-slate-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                required
                                className="sm:col-span-2 w-full border-b border-slate-300 bg-transparent focus:outline-none focus:border-indigo-600 text-sm py-2 transition-colors resize-none"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end pt-6">
                            <button
                                type="submit"
                                className="px-6 py-2 bg-indigo-600 text-white text-sm font-medium rounded-none hover:bg-indigo-700 transition-colors"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </Section>
        </>

    )
}