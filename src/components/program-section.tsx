import Image from 'next/image';
import Section from '../common/section-wrapper';
import { programs } from '../data/hero.data';

export default function ProgramSection() {
    return (
        <Section
            className="py-24 sm:py-32"
            crosses
            crossesOffset="lg:translate-y-0"
            customPaddings
            id="programs">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-xl grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold text-indigo-600">PROGRAMS</h2>
                            <p className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                                Discover our wide range of programs
                            </p>
                            <p className="mt-4 text-base text-gray-700">
                                We offer a variety of programs to suit your needs. Whether you&apos;re looking to learn a new skill or advance your career.
                            </p>
                            <dl className="mt-8 max-w-xl space-y-6 text-base text-gray-600 lg:max-w-none">
                                {programs.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <feature.icon aria-hidden="true" className="absolute top-1 left-1 h-5 w-5 text-gray-700" />
                                            {feature.name}
                                        </dt>{' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <div className="flex items-center justify-center lg:justify-end">
                        <Image
                            alt="Product screenshot"
                            src="https://tailwindcss.com/plus-assets/Image/component-images/project-app-screenshot.png"
                            width={2432}
                            height={1442}
                            className="w-full max-w-md rounded-none shadow-xl ring-1 ring-gray-400/10"
                        />
                    </div>
                </div>
            </div>
        </Section>
    );
}