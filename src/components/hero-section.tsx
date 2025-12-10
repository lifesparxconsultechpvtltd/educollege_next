import Link from "next/link";
import Section from "../common/section-wrapper";
import Image from "next/image";

export default function Hero() {
  return (
    <Section
      className="py-20 sm:py-8 relative overflow-hidden"
      crosses
      crossesOffset="lg:translate-y-0"
      customPaddings
      id="hero"
    >
      {/* Background blob */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute left-1/2 top-[-20%] h-[40rem] w-[40rem] -translate-x-1/2 rotate-[30deg] rounded-full bg-gradient-to-tr from-indigo-300 to-pink-300 opacity-30 blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto lg:px-8">
        <div className="grid lg:grid-cols-2 items-center gap-16 lg:gap-20">
          {/* Text Content */}
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl leading-tight">
              Modern Education for a Bright Future
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-8">
              Learn new skills, build confidence, and unlock endless opportunities with our expertly curated online programs.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link
                href="/programs"
                className="bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 transition"
              >
                Explore Programs
              </Link>
              <Link
                href="/universities"
                className="text-sm font-semibold px-5 py-3 text-gray-900 transition-all duration-300 border border-transparent hover:border-gray-300 hover:text-gray-700 hover:scale-105"
              >
                Contact Us →
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-[380px] sm:h-[450px] lg:h-[500px] overflow-hidden">
            <Image
              src="/student_image.png"
              alt="Hero image"
              fill
              className="object-contain object-center bg-gradient-to-tr from-indigo-100 via-purple-50 to-pink-50 rounded-full"
              priority
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
