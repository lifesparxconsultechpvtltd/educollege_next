'use client';
import { useState } from "react";
import Section from "@/src/common/section-wrapper";
import { blogs } from "@/src/data/pages/blog.data";
import Image from "next/image";
import Link from "next/link";

const PAGE_SIZE = 2; // Number of blogs per page

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogs.length / PAGE_SIZE);

  // Slice blogs array for current page
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const currentBlogs = blogs.slice(startIndex, endIndex);

  return (
    <>
      <Section
        className="py-24 sm:py-5"
        crosses
        crossesOffset="lg:translate-y-0"
        customPaddings
        id="hero"
      >
        <div className="relative px-6 pt-14 lg:px-8">
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

          <div className="mx-auto max-w-4xl mb-16">
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                Explore Our Blog, <br /> for Career Guidance
              </h1>
              <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl leading-8">
                With latest updates, trends, and insights from the world of education, our blog is your go-to resource for making informed decisions about your academic journey.
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

      <Section crosses crossesOffset="lg:translate-y-0" customPaddings id="blog-page" className="py-12 sm:py-16">
        <div className="w-full px-4 py-2 mx-auto max-w-7xl md:w-3/4 lg:w-2/4">
          <div className="flex flex-col space-y-2 divide-y divide-gray-200 last:divide-none">
            {currentBlogs.slice(0, 4).map((blog, index) => (
              <div key={index} className="pb-12 mb-8">
                <div>
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-48"
                  />
                </div>
                <div>
                  <p className="pt-3 text-sm font-normal text-gray-500">{blog.date}</p>
                  <h2 className="mb-2 text-xl font-semibold leading-snug tracking-tight text-gray-800 md:text-3xl">
                    <Link href={`/blogs/${blog.slug}`} className="text-gray-900 hover:text-indigo-600">{blog.title}</Link>
                  </h2>
                  <p className="mb-4 text-base font-normal text-gray-600">{blog.excerpt}</p>
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="text-white bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-200"
                  >
                    Continue Reading
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Buttons */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="text-sm font-semibold px-3.5 py-2.5 text-gray-900 transition-all duration-300 border border-transparent hover:border-gray-300 hover:text-gray-700 hover:scale-105 cursor-pointer"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-200 cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>
      </Section>
    </>
  );
}
