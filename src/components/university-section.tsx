import Section from '../common/section-wrapper';
import { university } from '../data/hero.data';
import Image from 'next/image';


export default function UniversitySection() {
  return (
    <Section
      className="py-24 sm:py-8"
      crosses
      crossesOffset="lg:translate-y-0"
      customPaddings
      id="universities"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold text-indigo-600 capitalize">UNIVERSITY</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Explore top universities of India
          </p>
          <p className="mt-6 text-lg text-gray-600">
            Discover a curated list of India&#39;s premier universities, renowned for their academic excellence and
            vibrant campus life.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* --- CARD 1 (Large) --- */}
            <div
              className="lg:col-span-2 border border-gray-200 rounded-none p-8 flex flex-col justify-end h-[280px] lg:h-[320px] bg-cover bg-center relative overflow-hidden"
              style={{ backgroundImage: `url(${university[0].image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-0" />

              {/* Logo */}
              <div className="flex items-center justify-center w-12 h-12 rounded-none border border-gray-200 mb-4 relative z-10 bg-white/10 backdrop-blur-sm">
                <Image src={university[0].icon} alt={university[0].name} className="object-contain" width={32} height={32} />
              </div>

              {/* Text */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2">{university[0].name}</h3>
                <p className="text-sm text-white">{university[0].description}</p>
              </div>
            </div>

            {/* --- CARD 2 (Small) --- */}
            <div
              className="lg:col-span-1 border border-gray-200 rounded-none p-6 flex flex-col justify-end h-[280px] lg:h-[320px] bg-cover bg-center relative overflow-hidden"
              style={{ backgroundImage: `url(${university[1].image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-0" />

              {/* Logo */}
              <div className="flex items-center justify-center w-12 h-12 rounded-none border border-gray-200 mb-4 relative z-10 bg-white/10 backdrop-blur-sm">
                <Image src={university[1].icon} alt={university[1].name} className="object-contain" width={32} height={32} />
              </div>

              {/* Text */}
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-white mb-2">{university[1].name}</h3>
                <p className="text-sm text-white">{university[1].description}</p>
              </div>
            </div>

            {/* --- CARD 3 (Small) --- */}
            <div
              className="lg:col-span-1 border border-gray-200 rounded-none p-6 flex flex-col justify-end h-[280px] lg:h-[320px] bg-cover bg-center relative overflow-hidden"
              style={{ backgroundImage: `url(${university[2].image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-0" />

              {/* Logo */}
              <div className="flex items-center justify-center w-12 h-12 rounded-none border border-gray-200 mb-4 relative z-10 bg-white/10 backdrop-blur-sm">
                <Image src={university[2].icon} alt={university[2].name} className="object-contain" width={32} height={32} />
              </div>

              {/* Text */}
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-white mb-2">{university[2].name}</h3>
                <p className="text-sm text-white">{university[2].description}</p>
              </div>
            </div>

            {/* --- CARD 4 (Large) --- */}
            <div
              className="lg:col-span-2 border border-gray-200 rounded-none p-8 flex flex-col justify-end h-[280px] lg:h-[320px] bg-cover bg-center relative overflow-hidden"
              style={{ backgroundImage: `url(${university[3].image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-0" />

              {/* Logo */}
              <div className="flex items-center justify-center w-12 h-12 rounded-none border border-gray-200 mb-4 relative z-10 bg-white/10 backdrop-blur-sm">
                <Image src={university[3].icon} alt={university[3].name} className="object-contain" width={32} height={32} />
              </div>

              {/* Text */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-white mb-3">{university[3].name}</h3>
                <p className="text-sm text-white mb-4">{university[3].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
