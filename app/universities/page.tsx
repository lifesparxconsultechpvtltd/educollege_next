'use client'

import { useState } from 'react';
import { universitiesPage, UniversitiesPageData } from "@/src/data/pages/university.data";
import Section from "@/src/common/section-wrapper";
import Link from "next/link";
import Image from 'next/image';

export default function UniversityDirectory() {
    const [selectedUniversity, setSelectedUniversity] = useState<UniversitiesPageData>(universitiesPage[0]);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <Section
                className="py-24 sm:py-5"
                crosses
                crossesOffset="lg:translate-y-0"
                customPaddings
                id="university-hero-section">
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
                            <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-7xl">
                                Find Your Perfect University Match
                            </h1>
                            <p className="mt-6 text-base font-medium text-gray-500 sm:text-lg lg:text-xl sm:mt-8 leading-7 sm:leading-8 px-4 sm:px-0">
                                Discover top universities and colleges worldwide. Explore programs, campus life, and admissions to find your perfect fit.
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
            <Section
                className="py-12 sm:py-24 sm:py-x-5"
                crosses
                crossesOffset="lg:translate-y-0"
                customPaddings
                id="university-information-section">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row min-h-screen">
                        {/* Mobile Dropdown */}
                        <div className="lg:hidden mb-6">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="w-full flex items-center justify-between p-4 bg-white border border-slate-200 rounded-lg shadow-sm"
                            >
                                <span className="text-sm font-medium text-slate-900">{selectedUniversity.name}</span>
                                <svg
                                    className={`w-5 h-5 text-slate-500 transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {isMobileMenuOpen && (
                                <div className="mt-2 bg-white border border-slate-200 rounded-lg shadow-lg max-h-96 overflow-y-auto">
                                    <div className="p-2 space-y-1">
                                        {universitiesPage.map((uni, index) => (
                                            <button
                                                key={index}
                                                onClick={() => {
                                                    setSelectedUniversity(uni);
                                                    setIsMobileMenuOpen(false);
                                                }}
                                                className={`w-full text-left p-3 rounded-lg transition-all duration-300`}
                                            >
                                                <h3
                                                    className={`text-sm font-medium ${selectedUniversity.name === uni.name
                                                        ? 'text-indigo-700'
                                                        : 'text-slate-800'
                                                        } transition-all`}
                                                >
                                                    {uni.name}
                                                </h3>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Desktop Sidebar */}
                        <div className="hidden lg:block w-72 overflow-y-auto">
                            <div className="p-3 space-y-1">
                                {universitiesPage.map((uni, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedUniversity(uni)}
                                        className={`w-full text-left p-3 rounded-lg transition-all duration-300 group`}
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="flex-1 min-w-0">
                                                <h3
                                                    className={`text-sm font-medium truncate cursor-pointer ${selectedUniversity.name === uni.name
                                                        ? 'text-indigo-700'
                                                        : 'text-slate-800'
                                                        } transition-all`}
                                                >
                                                    {uni.name}
                                                </h3>
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>


                        {/* Main Content */}
                        <div className="flex-1 overflow-y-auto">
                            {/* Hero Section */}
                            <div className="relative h-48 sm:h-64 lg:h-72 overflow-hidden bg-white border border-slate-200 rounded-lg sm:rounded-none shadow-sm">
                                {selectedUniversity.image && (
                                    <div className="absolute inset-0">
                                        <Image
                                            src={selectedUniversity.image}
                                            alt={selectedUniversity.name}
                                            fill
                                            className="object-cover"
                                            priority
                                            sizes="(max-width: 1024px) 100vw, 1024px"
                                        />
                                    </div>
                                )}

                                {/* Soft light-to-dark gradient behind text */}
                                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 via-black/40 to-transparent"></div>

                                <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6">
                                    <div className="flex items-end gap-3 sm:gap-4">
                                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg shadow-sm flex items-center justify-center border border-slate-200/20 backdrop-blur-sm">
                                            <Image src={selectedUniversity.icon} alt={selectedUniversity.name} className="w-8 h-8 sm:w-12 sm:h-12 object-cover" width={48} height={48} />
                                        </div>
                                        <div className="pb-1">
                                            <h1 className="text-base sm:text-lg lg:text-xl font-semibold text-white drop-shadow-sm">
                                                {selectedUniversity.name}
                                            </h1>
                                            <p className="text-xs sm:text-sm text-slate-100/90 drop-shadow-sm mt-1">
                                                {selectedUniversity.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* Content */}
                            <div className="px-4 sm:px-6 lg:px-12 py-6 sm:py-8 lg:py-10">
                                {/* Stats Grid */}
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 pb-6 sm:pb-8 border-b border-slate-200">
                                    <div className="space-y-1">
                                        <p className="text-xs text-slate-500 font-medium">Established</p>
                                        <p className="text-base sm:text-lg font-semibold text-slate-900">{selectedUniversity.established}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-xs text-slate-500 font-medium">Students</p>
                                        <p className="text-base sm:text-lg font-semibold text-slate-900">{selectedUniversity.studentCount}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-xs text-slate-500 font-medium">Faculty</p>
                                        <p className="text-base sm:text-lg font-semibold text-slate-900">{selectedUniversity.facultyCount}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-xs text-slate-500 font-medium">Avg Package</p>
                                        <p className="text-base sm:text-lg font-semibold text-slate-900">{selectedUniversity.avgPackage}</p>
                                    </div>
                                </div>

                                {/* About */}
                                <div className="mb-8 sm:mb-10">
                                    <h2 className="text-base font-semibold mb-3 text-slate-900">Overview</h2>
                                    <p className="leading-relaxed text-slate-700 text-sm sm:text-[15px]">
                                        {selectedUniversity.description}
                                    </p>
                                    <p className="leading-relaxed text-slate-700 text-sm sm:text-[15px] mt-3">
                                        {selectedUniversity.highlights}
                                    </p>
                                </div>

                                {/* Programs */}
                                <div className="mb-8 sm:mb-10 pb-8 sm:pb-10 border-b border-slate-200">
                                    <h2 className="text-base font-semibold mb-3 text-slate-900">Programs</h2>
                                    <p className="leading-relaxed text-slate-700 text-sm sm:text-[15px]">
                                        {selectedUniversity.programs}
                                    </p>
                                </div>

                                {/* Two Column */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-10 pb-8 sm:pb-10 border-b border-slate-200">
                                    {/* Accreditation */}
                                    <div>
                                        <h2 className="text-base font-semibold mb-4 text-slate-900">Accreditation</h2>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedUniversity.accreditation.map((acc, idx) => (
                                                <span key={idx}
                                                    className="px-3 py-1.5 rounded-none text-xs sm:text-sm font-medium bg-slate-100 text-slate-900">
                                                    {acc}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Campus */}
                                    <div>
                                        <h2 className="text-base font-semibold mb-4 text-slate-900">Campus Details</h2>
                                        <div className="space-y-3">
                                            <div className="flex gap-3">
                                                <span className="text-xs sm:text-sm text-slate-500 w-20">Size</span>
                                                <span
                                                    className="text-xs sm:text-sm font-medium text-slate-900">{selectedUniversity.campusSize}</span>
                                            </div>
                                            <div className="flex gap-3">
                                                <span className="text-xs sm:text-sm text-slate-500 w-20">Ranking</span>
                                                <span
                                                    className="text-xs sm:text-sm font-medium text-slate-900">{selectedUniversity.ranking}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Facilities */}
                                <div className="mb-8 sm:mb-10">
                                    <h2 className="text-base font-semibold mb-4 text-slate-900">Campus Facilities</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                        {selectedUniversity.facilities.map((facility, idx) => (
                                            <div key={idx}
                                                className="flex items-center gap-2 px-3 py-2.5 bg-slate-50 rounded-none border border-slate-200">
                                                <div className="w-1.5 h-1.5 rounded-none bg-slate-400" />
                                                <span className="text-xs sm:text-sm text-slate-700">{facility}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="bg-slate-50 rounded-none px-4 sm:px-6 py-4 mb-6 sm:mb-8 border border-slate-200">
                                    <h2 className="text-sm font-semibold mb-2 text-slate-900">Campus Address</h2>
                                    <p className="text-xs sm:text-sm text-slate-700">{selectedUniversity.address}</p>
                                </div>

                                {/* CTA */}
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <button
                                        className="w-full sm:w-auto px-6 py-2.5 bg-indigo-600 text-white rounded-none text-sm font-medium hover:bg-slate-800 transition-colors">
                                        Apply Now
                                    </button>
                                    <button
                                        className="w-full sm:w-auto px-6 py-2.5 border border-slate-300 rounded-none text-sm font-medium text-slate-900 hover:bg-slate-50 transition-colors">
                                        Download Brochure
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}