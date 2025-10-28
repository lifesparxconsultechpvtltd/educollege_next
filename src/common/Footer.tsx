"use client";

import Section from "@/src/common/section-wrapper";
import {
    FaceSmileIcon,
    CameraIcon,
    GlobeAltIcon,
    CodeBracketIcon,
    MapPinIcon,
    PhoneIcon,
    EnvelopeIcon,
    ClockIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const SITEMAP = [
    {
        title: "Company",
        links: [
            { name: "About Us", href: "/about" },
            { name: "Careers", href: "/careers" },
            { name: "Our Team", href: "/team" },
            { name: "Projects", href: "/projects" }
        ],
    },
    {
        title: "Universities",
        links: [
            { name: "Lovely Professional University", href: "/universities" },
            { name: "Chandigarh University", href: "/universities" },
            { name: "DY Patil University", href: "/universities" },
            { name: "Manipal University", href: "/universities" },
            { name: "Vivekananda Global University", href: "/universities" }
        ],
    },
    {
        title: "Programs",
        links: [
            { name: "Online MBA", href: "/programs/mba" },
            { name: "Online MCA", href: "/programs/mca" },
            { name: "Online M.Com", href: "/programs/mcom" },
            { name: "Online BBA", href: "/programs/bba" },
            { name: "Online B.Com", href: "/programs/bcom" }
        ],
    },
    {
        title: "Resources",
        links: [
            { name: "Blog", href: "/blog" },
            { name: "All Universities", href: "/universities" },
            { name: "All Programs", href: "/programs" },
            { name: "Contact", href: "/contact" },
        ],
    },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
    return (
        <Section
            className="py-16 sm:py-2 overflow-hidden"
            crosses
            crossesOffset="lg:translate-y-0"
            customPaddings
            id="footer"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-10">
                
                {/* ===== TOP SECTION - COMPANY INFO ===== */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 pb-12">
                    
                    {/* Company Description & Contact */}
                    <div className="lg:col-span-2 space-y-6">
                        <div>
                            <Image 
                                src="/images/logo/logo.svg" 
                                alt="Educollege Logo" 
                                width={160} 
                                height={56} 
                                className="mb-6"
                            />
                            <p className="text-gray-600 leading-relaxed text-sm font-semibold mb-6">
                                Educollege is your trusted partner in online education, connecting students with top universities and accredited programs. We make quality education accessible, affordable, and flexible for learners worldwide.
                            </p>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-3">
                            <h4 className="text-sm font-semibold uppercase text-indigo-600 tracking-wide mb-4">
                                Contact Us
                            </h4>
                            
                            <div className="flex items-start gap-3 text-sm font-semibold">
                                <MapPinIcon className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                                <div className="text-gray-600">
                                    <p className="font-medium text-gray-900">Head Office</p>
                                    <p>123 Education Street, Suite 100</p>
                                    <p>Bhubaneswar, Odisha 751001, India</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 text-sm font-semibold">
                                <PhoneIcon className="w-5 h-5 text-indigo-600 shrink-0" />
                                <div className="text-gray-600">
                                    <a href="tel:+919876543210" className="hover:text-indigo-600 transition-colors">
                                        +91 98765 43210
                                    </a>
                                    <span className="mx-2">|</span>
                                    <a href="tel:+918765432109" className="hover:text-indigo-600 transition-colors">
                                        +91 87654 32109
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 text-sm font-semibold">
                                <EnvelopeIcon className="w-5 h-5 text-indigo-600 shrink-0" />
                                <a 
                                    href="mailto:info@educollege.com" 
                                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                                >
                                    info@educollege.com
                                </a>
                            </div>

                            <div className="flex items-start gap-3 text-sm font-semibold">
                                <ClockIcon className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                                <div className="text-gray-600">
                                    <p className="font-medium text-gray-900">Business Hours</p>
                                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                                    <p className="text-indigo-600 font-medium mt-1">24/7 Support Available</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ===== SITEMAP GRID ===== */}
                    <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-8">
                        {SITEMAP.map(({ title, links }) => (
                            <div key={title}>
                                <h3 className="mb-4 text-sm font-semibold uppercase text-indigo-600 tracking-wide">
                                    {title}
                                </h3>
                                <ul className="space-y-2.5">
                                    {links.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="text-gray-600 hover:text-indigo-600 text-sm font-semibold transition-colors duration-200 inline-block"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ===== DIVIDER ===== */}
                <div className="border-t border-gray-200"></div>

                {/* ===== BOTTOM SECTION ===== */}
                <div className="py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        
                        {/* Copyright & Legal Links */}
                        <div className="text-center md:text-left">
                            <p className="text-sm text-gray-600">
                                © {currentYear}{" "}
                                <span className="font-semibold text-indigo-600">
                                    Educollege
                                </span>
                                . All Rights Reserved.
                            </p>
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-2 text-sm font-semibold">
                                <Link 
                                    href="/privacy-policy" 
                                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                                >
                                    Privacy Policy
                                </Link>
                            </div>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-medium text-gray-700 mr-2">Follow Us:</span>
                            <a
                                href="https://facebook.com/educollege"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                            >
                                <FaceSmileIcon className="w-5 h-5" />
                            </a>
                            <a
                                href="https://instagram.com/educollege"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-pink-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                            >
                                <CameraIcon className="w-5 h-5" />
                            </a>
                            <a
                                href="https://twitter.com/educollege"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                            >
                                <GlobeAltIcon className="w-5 h-5" />
                            </a>
                            <a
                                href="https://linkedin.com/company/educollege"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                            >
                                <CodeBracketIcon className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}