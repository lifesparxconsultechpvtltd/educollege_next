'use client'

import { ReactNode } from 'react'
import SectionSvg from './section-svg';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  disablePadding?: boolean;
  customPaddings?: boolean;
  crosses?: boolean;
  crossesOffset?: string;
  id?: string;
}

export default function Section({
  children,
  className = '',
  disablePadding = false,
  customPaddings = false,
  crosses = false,
  crossesOffset = '',
  id
}: SectionWrapperProps) {
  return (
    <div
      id={id}
      className={`
      relative 
      ${
        customPaddings ||
        `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`
      } 
      ${className || ""}`}
    >
      {children}
      
      {/* Left vertical line */}
      <div className="hidden absolute top-0 left-5 w-px h-full bg-slate-400/30 pointer-events-none md:block lg:left-8 xl:left-10" />
      
      {/* Right vertical line */}
      <div className="hidden absolute top-0 right-5 w-px h-full bg-slate-400/30 pointer-events-none md:block lg:right-8 xl:right-10" />
      
      {crosses && (
        <>
          {/* Top horizontal line */}
          <div
            className={`hidden absolute top-0 left-8 right-8 h-px bg-slate-400/30 ${
              crossesOffset && crossesOffset
            } pointer-events-none lg:block xl:left-10 xl:right-10`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  )
}