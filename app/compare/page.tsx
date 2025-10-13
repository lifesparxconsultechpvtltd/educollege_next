import Section from "@/src/common/section-wrapper";

export default function Page() {
    return (
        <>
            <Section crossesOffset='lg:translate-y-0' crosses customPaddings className="py-24 sm:py-5" id='compare-hero'>
                <div className="relative px-6 pt-14 lg:px-8">
                    <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                        <div
                            style={{
                                clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        />
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                        <div className="text-center max-w-3xl mx-auto">
                            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-4">
                                Compare and Choose Your Ideal Program
                            </h1>
                            <p className="text-base sm:text-lg text-slate-600 mb-8">
                                Use our comparison tool to evaluate programs side-by-side, considering factors like fee, duration, and curriculum.
                            </p>

                        </div>
                    </div>
                </div>
            </Section>
            <Section crossesOffset='lg:translate-y-0' crosses customPaddings className="py-24 sm:py-5" id='compare-hero'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-4">  Find the Perfect Fit for You</h2>
                        <p className="text-base sm:text-lg text-slate-600 mb-8">
                            Explore our curated list of top programs, each designed to equip you with the skills and knowledge needed to excel in your career.
                        </p>
                    </div>
                </div>
            </Section>

        </>
    )
}

