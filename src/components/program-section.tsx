import Image from 'next/image';
import Section from '../common/section-wrapper';
import { programs } from '../data/hero.data';
import { ClockIcon, CurrencyRupeeIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function ProgramSection() {
    return (
        <Section
            className="py-24 sm:py-32"
            crosses
            crossesOffset="lg:translate-y-0"
            customPaddings
            id="programs"
        >
            <div className="mx-auto max-w-6xl px-6 lg:px-8 overflow-hidden">
                <div className="mx-auto grid max-w-xl grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 
                lg:max-w-none lg:grid-cols-2 lg:items-center">

                    {/* LEFT COLUMN */}
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold text-indigo-600">
                                PROGRAMS
                            </h2>
                            <p className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                                Discover Our Featured Programs
                            </p>
                            <p className="mt-4 text-base text-gray-700">
                                Explore our curated selection of top-rated programs from
                                accredited universities, designed to elevate your career and
                                learning journey.
                            </p>

                            <dl className="mt-10 space-y-8 text-base text-gray-600 lg:max-w-none">
                                {programs.slice(0, 2).map((program) => (
                                    <div
                                        key={program.id}
                                        className="relative flex items-start gap-4 border-t border-gray-200 pt-6"
                                    >
                                        {/* ICON / LOGO */}
                                        <div className="flex-shrink-0">
                                            {program.university.logo ? (
                                                <Image
                                                    src={program.university.logo}
                                                    alt={program.university.name}
                                                    width={48}
                                                    height={48}
                                                    className="rounded-full border border-gray-200 object-contain bg-white p-1"
                                                />
                                            ) : (
                                                <program.icon className="h-10 w-10 text-indigo-600" />
                                            )}
                                        </div>

                                        {/* TEXT DETAILS */}
                                        <div>
                                            <dt className="text-lg font-semibold text-gray-900">
                                                {program.title}
                                            </dt>
                                            <dd className="text-gray-600 mt-1">
                                                <p className="text-sm">{program.university.name}</p>
                                                <div className="flex flex-wrap gap-x-6 gap-y-1 mt-2 text-sm text-gray-700">
                                                    <span className="flex items-center gap-1">
                                                        <ClockIcon className="h-4 w-4 text-indigo-500" />{" "}
                                                        {program.duration} Years
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <ComputerDesktopIcon className="h-4 w-4 text-indigo-500" />{" "}
                                                        {program.mode}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <CurrencyRupeeIcon className="h-4 w-4 text-indigo-500" /> ₹
                                                        {program.fees.toLocaleString()}
                                                    </span>
                                                </div>
                                            </dd>
                                        </div>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>

                    {/* RIGHT COLUMN (with overlay SVG) */}
                    <div className="relative flex items-center justify-center lg:justify-end">
                        {/* BACKGROUND GLOW EFFECT */}
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-50 rounded-3xl blur-3xl opacity-40 -z-10"></div>

                        {/* IMAGE CONTAINER */}
                        <div className="relative">
                            {/* IMAGE */}
                            <Image
                                alt="Programs Overview"
                                src="/images/student/student_image.png"
                                width={2432}
                                height={1442}
                                className="w-full max-w-md shadow-2xl ring-1 ring-indigo-900/10 sm:max-w-xl lg:max-w-3xl relative z-10 bg-indigo-600"
                            />

                            {/* GRADIENT OVERLAY */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/10 via-transparent to-purple-600/10 rounded-2xl pointer-events-none"></div>

                            {/* FLOATING ELEMENTS */}
                            <div className="absolute top-4 right-4 w-16 h-16 bg-indigo-500/10 rounded-full blur-xl animate-pulse"></div>
                            <div className="absolute bottom-8 left-8 w-20 h-20 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-8 sm:mt-10 md:mt-12">
                    <Link
                        href="/programs"
                        className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm sm:text-base md:text-lg px-4 sm:px-6 py-2 sm:py-3 flex items-center justify-center transition-all duration-300"
                    >
                        Explore More Programs
                    </Link>
                </div>

            </div>
        </Section>
    );
}
