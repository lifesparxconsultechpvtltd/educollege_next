import React from 'react';
import Section from '../common/section-wrapper';
import { features } from '../data/hero.data';


export default function UniversitySection() {
  return (
    <Section
      className="py-24 sm:py-8"
      crosses
      crossesOffset='lg:translate-y-0'
      customPaddings
      id="universities"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold text-indigo-600 capitalize">UNIVERSITY</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Explore top universities of India
          </p>
          <p className="mt-6 text-lg text-gray-600">
            Discover a curated list of India's premier universities, renowned for their academic excellence and vibrant campus life.
          </p>
        </div>
        
        {/* Bento Grid Layout */}
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
            {/* Left Card */}
            <div className="lg:row-span-2 border border-gray-200 rounded-lg p-6 flex flex-col">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 mb-4">
                {React.createElement(features[0].icon, { className: "w-5 h-5 text-gray-700" })}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {features[0].name}
              </h3>
              <p className="text-sm text-gray-600">
                {features[0].description}
              </p>
            </div>

            {/* Top Middle Card */}
            <div className="lg:col-span-1 border border-gray-200 rounded-lg p-6 flex flex-col">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 mb-4">
                {React.createElement(features[1].icon, { className: "w-5 h-5 text-gray-700" })}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {features[1].name}
              </h3>
              <p className="text-sm text-gray-600">
                {features[1].description}
              </p>
            </div>

            {/* Bottom Middle Card */}
            <div className="lg:col-span-1 border border-gray-200 rounded-lg p-6 flex flex-col">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 mb-4">
                {React.createElement(features[2].icon, { className: "w-5 h-5 text-gray-700" })}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {features[2].name}
              </h3>
              <p className="text-sm text-gray-600">
                {features[2].description}
              </p>
            </div>

            {/* Right Card */}
            <div className="lg:row-span-2 lg:row-start-1 lg:col-start-3 border border-gray-200 rounded-lg p-6 flex flex-col">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 mb-4">
                {React.createElement(features[3].icon, { className: "w-5 h-5 text-gray-700" })}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {features[3].name}
              </h3>
              <p className="text-sm text-gray-600">
                {features[3].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )}