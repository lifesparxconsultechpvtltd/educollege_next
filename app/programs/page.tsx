'use client'

import { useState } from 'react';

import { AcademicCapIcon, ClockIcon, CurrencyRupeeIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import { programsPageData } from '@/src/data/pages/program.data';
import Section from '@/src/common/section-wrapper';


export default function Page() {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [selectedMode, setSelectedMode] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [priceRange, setPriceRange] = useState<string>('All');

    const categories = ['All', 'Engineering', 'Business', 'Arts', 'Science', 'Commerce'];
    const modes = ['All', 'Online', 'On-Campus', 'Hybrid'];
    const priceRanges = ['All', 'Under ₹30k', '₹30k-₹50k', '₹50k-₹70k', 'Above ₹70k'];

    const filteredPrograms = programsPageData.filter(program => {
        const matchesCategory = selectedCategory === 'All' || program.category === selectedCategory;
        const matchesMode = selectedMode === 'All' || program.mode === selectedMode;
        const matchesSearch = program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            program.description.toLowerCase().includes(searchQuery.toLowerCase());

        let matchesPrice = true;
        if (priceRange === 'Under ₹30k') matchesPrice = program.fees < 30000;
        else if (priceRange === '₹30k-₹50k') matchesPrice = program.fees >= 30000 && program.fees < 50000;
        else if (priceRange === '₹50k-₹70k') matchesPrice = program.fees >= 50000 && program.fees < 70000;
        else if (priceRange === 'Above ₹70k') matchesPrice = program.fees >= 70000;

        return matchesCategory && matchesMode && matchesSearch && matchesPrice;
    });

    return (
        <>
            <Section crossesOffset='lg:translate-y-0' crosses customPaddings className="py-24 sm:py-5" id='programs-hero'>
                <div className="relative px-6 pt-14 lg:px-8">
                    <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                        <div
                            style={{
                                clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        />
                    </div>

                    <div className="max-w-7xl mx-auto mb-16">
                        <div className="text-center max-w-3xl mx-auto">
                            <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-7xl">
                                Explore Our Programs, <br />Find Your Future
                            </h1>
                            <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl leading-8">
                                Browse through a wide range of programs from top universities. Filter by category, mode, duration, and fees to find the perfect fit for your career goals.
                            </p>

                            {/* Search Bar */}
                            <div className="relative max-w-2xl mx-auto mt-10">
                                <input
                                    type="text"
                                    placeholder="Search programs..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full px-4 py-3 pl-12 border border-slate-300 rounded-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    
            </Section>

            <Section crossesOffset='lg:translate-y-0' crosses customPaddings className="py-24 sm:py-5" id='programs-categories'>
                {/* Main Content */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Filters Sidebar */}
                        <div className="lg:w-64 shrink-0">
                            <div className="border border-slate-200 rounded-none p-6 sticky top-4">
                                <h2 className="text-lg font-semibold text-slate-900 mb-6">Filters</h2>

                                {/* Category Filter */}
                                <div className="mb-6">
                                    <h3 className="text-sm font-medium text-slate-700 mb-3">Category</h3>
                                    <div className="space-y-2">
                                        {categories.map((category) => (
                                            <button
                                                key={category}
                                                onClick={() => setSelectedCategory(category)}
                                                className={`w-full text-left px-3 py-2 cursor-pointer rounded-none text-sm transition-colors ${selectedCategory === category
                                                        ? 'bg-indigo-50 text-indigo-700 font-medium'
                                                        : 'text-slate-600 hover:bg-slate-50'
                                                    }`}
                                            >
                                                {category}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Mode Filter */}
                                <div className="mb-6 pb-6 border-b border-slate-200">
                                    <h3 className="text-sm font-medium text-slate-700 mb-3">Learning Mode</h3>
                                    <div className="space-y-2">
                                        {modes.map((mode) => (
                                            <button
                                                key={mode}
                                                onClick={() => setSelectedMode(mode)}
                                                className={`w-full text-left px-3 py-2 cursor-pointer rounded-none text-sm transition-colors ${selectedMode === mode
                                                        ? 'bg-indigo-50 text-indigo-700 font-medium'
                                                        : 'text-slate-600 hover:bg-slate-50'
                                                    }`}
                                            >
                                                {mode}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Price Range Filter */}
                                <div>
                                    <h3 className="text-sm font-medium text-slate-700 mb-3">Price Range</h3>
                                    <div className="space-y-2">
                                        {priceRanges.map((range) => (
                                            <button
                                                key={range}
                                                onClick={() => setPriceRange(range)}
                                                className={`w-full text-left px-3 py-2 cursor-pointer rounded-none text-sm transition-colors ${priceRange === range
                                                        ? 'bg-indigo-50 text-indigo-700 font-medium'
                                                        : 'text-slate-600 hover:bg-slate-50'
                                                    }`}
                                            >
                                                {range}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    onClick={() => {
                                        setSelectedCategory('All');
                                        setSelectedMode('All');
                                        setPriceRange('All');
                                        setSearchQuery('');
                                    }}
                                    className="w-full mt-6 px-4 py-2 text-sm font-medium cursor-pointer text-slate-600 hover:text-slate-900 border border-slate-300 rounded-none hover:bg-slate-50 transition-colors"
                                >
                                    Clear All Filters
                                </button>
                            </div>
                        </div>

                        {/* Programs Grid */}
                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-6">
                                <p className="text-sm text-slate-600">
                                    <span className="font-medium text-slate-900">{filteredPrograms.length}</span> programs found
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {filteredPrograms.map((program) => (
                                    <div key={program.id} className="bg-white border border-slate-200 rounded-none hover:shadow-lg transition-shadow overflow-hidden">
                                        {/* Program Header */}
                                        <div className="p-6 border-b border-slate-100">
                                            <div className="flex items-start gap-4">
                                                {/* <div className="w-12 h-12 bg-indigo-50 rounded-none flex items-center justify-center text-2xl flex-shrink-0">
                                                    <Icon  className="w-6 h-6 text-indigo-600" />
                                                </div> */}
                                                <div className="flex-1 min-w-0">                                                
                                                    <h3 className="text-lg font-semibold text-slate-900 mb-1">
                                                        {program.title}
                                                    </h3>
                                                    <div className="flex items-center gap-2 text-sm text-slate-600">
                                                        {/* <span className="text-xl">{program.university.logo}</span> */}
                                                        <span>{program.university.name}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Program Body */}
                                        <div className="p-6">
                                            <p className="text-sm text-slate-700 mb-4 line-clamp-2">
                                                {program.description}
                                            </p>

                                            {/* Stats */}
                                            <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-slate-100">
                                                <div className="text-center">
                                                    <ClockIcon className="w-4 h-4 text-slate-400 mx-auto mb-1" />
                                                    <p className="text-xs text-slate-500">Duration</p>
                                                    <p className="text-sm font-semibold text-slate-900">{program.duration} Years</p>
                                                </div>
                                                <div className="text-center">
                                                    <CurrencyRupeeIcon className="w-4 h-4 text-slate-400 mx-auto mb-1" />
                                                    <p className="text-xs text-slate-500">Fees</p>
                                                    <p className="text-sm font-semibold text-slate-900">₹{program.fees.toLocaleString()}</p>
                                                </div>
                                                <div className="text-center">
                                                    <BookOpenIcon className="w-4 h-4 text-slate-400 mx-auto mb-1" />
                                                    <p className="text-xs text-slate-500">Mode</p>
                                                    <p className="text-sm font-semibold text-slate-900">{program.mode}</p>
                                                </div>
                                            </div>

                                            {/* Accreditation */}
                                            <div className="mb-4">
                                                <div className="flex flex-wrap gap-2">
                                                    {program.accreditation.slice(0, 3).map((acc, idx) => (
                                                        <span key={idx} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-none">
                                                            {acc}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* CTA Buttons */}
                                            <div className="flex justify-end gap-3">
                                                <button className="px-4 py-2 cursor-pointer bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors">
                                                    Apply Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {filteredPrograms.length === 0 && (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-slate-100 rounded-none flex items-center justify-center mx-auto mb-4">
                                        <AcademicCapIcon className="w-8 h-8 text-slate-400" />
                                    </div>
                                    <h3 className="text-lg font-medium text-slate-900 mb-2">No programs found</h3>
                                    <p className="text-sm text-slate-600 mb-4">Try adjusting your filters or search query</p>
                                    <button
                                        onClick={() => {
                                            setSelectedCategory('All');
                                            setSelectedMode('All');
                                            setPriceRange('All');
                                            setSearchQuery('');
                                        }}
                                        className="px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-700"
                                    >
                                        Clear all filters
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Section>

        </>
    );
}