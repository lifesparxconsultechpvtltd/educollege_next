'use client';
import Section from "@/src/common/section-wrapper";
import { ProgramPageData, programsPageData } from "@/src/data/pages/program.data";
import Link from "next/link";
import React, { useState } from "react";
import { XMarkIcon, PlusIcon, CheckCircleIcon, XCircleIcon, MagnifyingGlassIcon, ClockIcon, CurrencyRupeeIcon, BookOpenIcon, DocumentIcon, ClipboardIcon } from '@heroicons/react/24/outline';

export default function Page() {
    const [selectedPrograms, setSelectedPrograms] = useState<ProgramPageData[]>([
        programsPageData[0],
        programsPageData[1]
    ]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const addProgram = (program: ProgramPageData) => {
        if (selectedPrograms.length < 3 && !selectedPrograms.find(p => p.id === program.id)) {
            setSelectedPrograms([...selectedPrograms, program]);
            setShowAddModal(false);
            setSearchTerm('');
        }
    };

    const removeProgram = (programId: string) => {
        if (selectedPrograms.length > 1) {
            setSelectedPrograms(selectedPrograms.filter(p => p.id !== programId));
        }
    };

    const availablePrograms = programsPageData.filter(p =>
        !selectedPrograms.find(sp => sp.id === p.id) &&
        (searchTerm === '' ||
            p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.university.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const features = [
        { key: 'duration', label: 'Duration', icon: <ClockIcon className="h-5 w-5 text-gray-600" /> },
        { key: 'fees', label: 'Tuition Fees', icon: <CurrencyRupeeIcon className="h-5 w-5 text-gray-600" /> },
        { key: 'mode', label: 'Study Mode', icon: <BookOpenIcon className="h-5 w-5 text-gray-600" /> },
        { key: 'accreditation', label: 'Accreditation', icon: <CheckCircleIcon className="h-5 w-5 text-gray-600" /> },
        { key: 'curriculum', label: 'Curriculum Highlights', icon: <DocumentIcon className="h-5 w-5 text-gray-600" /> },
        { key: 'eligibility', label: 'Eligibility Criteria', icon: <ClipboardIcon className="h-5 w-5 text-gray-600" /> },
    ];


    const getFeatureValue = (program: ProgramPageData, featureKey: string) => {
        switch (featureKey) {
            case 'duration':
                return `${program.duration} years`;
            case 'fees':
                return `$${program.fees.toLocaleString()}`;
            case 'mode':
                return program.mode;
            case 'accreditation':
                return program.accreditation;
            case 'curriculum':
                return program.curriculum;
            case 'eligibility':
                return program.eligibility;
            default:
                return '-';
        }
    };

    return (
        <>
            <Section
                crossesOffset='lg:translate-y-0'
                crosses
                customPaddings
                className="py-24 sm:py-5"
                id='compare-hero'
            >
                <div className="relative px-6 pt-14 lg:px-8">
                    <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                        <div
                            style={{
                                clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        />
                    </div>

                    <div className="max-w-4xl mx-auto mb-16">
                        <div className="text-center">
                            <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                                Compare Programs & Universities Effortlessly
                            </h1>
                            <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl leading-8">
                                Use our comparison tool to evaluate programs side-by-side, considering factors like fee, duration, and curriculum.
                            </p>

                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <Link
                                    href="#"
                                    className="bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-200"
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

            <Section crossesOffset='lg:translate-y-0' crosses customPaddings className="py-24 sm:py-5" id='compare-table'>
                <div className="relative px-6 pt-14 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                                Program Comparison
                            </h2>
                            <p className="mt-4 text-lg text-gray-500">
                                Compare up to three programs side-by-side to make an informed decision.
                            </p>
                        </div>

                        <div className="overflow-hidden border border-gray-200">
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead>
                                        <tr className="bg-gradient-to-r from-indigo-50 to-purple-50">
                                            <th className="px-6 py-5 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider w-1/5 sticky left-0 bg-gradient-to-r from-indigo-50 to-purple-50 z-10">
                                                <div className="flex items-center space-x-2">
                                                    <span>Features</span>
                                                </div>
                                            </th>
                                            {selectedPrograms.map((program) => (
                                                <th key={program.id} className="px-6 py-5 text-left w-1/4">
                                                    <div className="space-y-2">
                                                        <div className="flex items-start justify-between">
                                                            <div className="flex-1 pr-2">
                                                                <div className="text-sm font-bold text-gray-900 leading-tight">
                                                                    {program.title}
                                                                </div>
                                                                <div className="text-xs text-indigo-600 font-medium mt-1">
                                                                    {program.university.name}
                                                                </div>
                                                            </div>
                                                            {selectedPrograms.length > 1 && (
                                                                <button
                                                                    onClick={() => removeProgram(program.id)}
                                                                    className="flex-shrink-0 p-1 text-gray-400 hover:text-red-600 hover:bg-red-100 transition-all duration-200 cursor-pointer"
                                                                    title="Remove Program"
                                                                >
                                                                    <XMarkIcon className="h-5 w-5" />
                                                                </button>
                                                            )}
                                                        </div>
                                                    </div>
                                                </th>
                                            ))}
                                            {selectedPrograms.length < 3 && (
                                                <th className="px-6 py-5 text-center w-1/4">
                                                    <button
                                                        onClick={() => setShowAddModal(true)}
                                                        className="inline-flex items-center justify-center space-x-2 px-4 py-3 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-all duration-200 font-medium text-sm border-2 border-dashed border-indigo-300 hover:border-indigo-400 w-full cursor-pointer"
                                                    >
                                                        <PlusIcon className="h-5 w-5" />
                                                        <span>Add Program</span>
                                                    </button>
                                                </th>
                                            )}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {features.map((feature, idx) => (
                                            <tr key={feature.key} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                                <td className="px-6 py-4 text-sm font-semibold text-gray-900 sticky left-0 z-10" style={{ backgroundColor: idx % 2 === 0 ? 'white' : '#f9fafb' }}>
                                                    <div className="flex items-center space-x-2">
                                                        <span className="text-gray-600">
                                                            {React.cloneElement(feature.icon, { className: "h-5 w-5" })}
                                                        </span>
                                                        <span>{feature.label}</span>
                                                    </div>
                                                </td>
                                                {selectedPrograms.map(program => {
                                                    const value = getFeatureValue(program, feature.key);
                                                    const isArray = Array.isArray(value);

                                                    return (
                                                        <td key={program.id} className="px-6 py-4">
                                                            {isArray ? (
                                                                <ul className="space-y-1.5">
                                                                    {value.map((item: string, i: number) => (
                                                                        <li key={i} className="flex items-start space-x-2 text-sm text-gray-700">
                                                                            <CheckCircleIcon className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                                            <span className="leading-tight">{item}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            ) : (
                                                                <div className="text-sm font-medium text-gray-700">
                                                                    {value}
                                                                </div>
                                                            )}
                                                        </td>
                                                    );
                                                })}
                                                {selectedPrograms.length < 3 && (
                                                    <td className="px-6 py-4 text-center">
                                                        <span className="text-sm text-gray-400 italic">-</span>
                                                    </td>
                                                )}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-sm text-gray-500">
                                Comparing {selectedPrograms.length} {selectedPrograms.length === 1 ? 'program' : 'programs'}.
                                {selectedPrograms.length < 3 && ` Add ${3 - selectedPrograms.length} more to compare.`}
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {showAddModal && (
                <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">
                        <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">
                            <h3 className="text-xl font-semibold text-gray-900">Select a Program</h3>
                            <button
                                onClick={() => {
                                    setShowAddModal(false);
                                    setSearchTerm('');
                                }}
                                className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
                            >
                                <XMarkIcon className="h-6 w-6" />
                            </button>
                        </div>

                        <div className="px-6 py-4 border-b border-gray-200">
                            <div className="relative">
                                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search programs or universities..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 focus:ring-0 focus:ring-indigo-500 focus:border-transparent text-sm"
                                />
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto px-6 py-4">
                            {availablePrograms.length === 0 ? (
                                <div className="text-center py-12">
                                    <XCircleIcon className="mx-auto h-12 w-12 text-gray-400" />
                                    <p className="mt-4 text-sm text-gray-500">
                                        {searchTerm ? 'No programs found matching your search.' : 'No more programs available to add.'}
                                    </p>
                                </div>
                            ) : (
                                <ul className="space-y-3">
                                    {availablePrograms.map(program => (
                                        <li key={program.id}>
                                            <button
                                                onClick={() => addProgram(program)}
                                                className="w-full text-left px-4 py-4 border cursor-pointer border-gray-200 hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-200 group"
                                            >
                                                <div className="flex items-start justify-between">
                                                    <div className="flex-1">
                                                        <div className="font-semibold text-gray-900 text-sm group-hover:text-indigo-600">
                                                            {program.title}
                                                        </div>
                                                        <div className="text-xs text-gray-600 mt-1">
                                                            {program.university.name}
                                                        </div>
                                                        <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                                                            <span>⏱️ {program.duration} years</span>
                                                            <span>💰 ${program.fees.toLocaleString()}</span>
                                                            <span>📚 {program.mode}</span>
                                                        </div>
                                                    </div>
                                                    <PlusIcon className="h-5 w-5 text-gray-400 hover:bg-indigo-600 hover:text-gray-200 group-hover:text-indigo-600 flex-shrink-0 ml-4" />
                                                </div>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <div className="px-6 py-4 border-t flex justify-end border-gray-200 bg-gray-50">
                            <button
                                onClick={() => {
                                    setShowAddModal(false);
                                    setSearchTerm('');
                                }}
                                className="w-1/4 px-4 py-2.5 cursor-pointer bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors text-sm font-medium"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}