"use client";

import Section from "@/src/common/section-wrapper";
import {
    FaceSmileIcon,
    CameraIcon,
    GlobeAltIcon,
    CodeBracketIcon,
} from "@heroicons/react/24/outline";

const SITEMAP = [
    {
        title: "Company",
        links: ["About Us", "Careers", "Our Team", "Projects"],
    },
    {
        title: "Help Center",
        links: ["Discord", "Twitter", "GitHub", "Contact Us"],
    },
    {
        title: "Resources",
        links: ["Blog", "Newsletter", "Free Products", "Affiliate Program"],
    },
    {
        title: "Products",
        links: ["Templates", "UI Kits", "Icons", "Mockups"],
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
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
                {/* ===== SITEMAP GRID ===== */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-12 py-12 justify-items-center">
                    {SITEMAP.map(({ title, links }) => (
                        <div key={title}>
                            <h3 className="mb-4 text-sm font-semibold uppercase text-indigo-600 tracking-wide">
                                {title}
                            </h3>
                            <ul className="space-y-2">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-gray-700 hover:text-indigo-600 text-sm sm:text-base transition-colors duration-200"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* ===== DIVIDER ===== */}
                <div className="border-t border-gray-200 my-6"></div>

                {/* ===== BOTTOM SECTION ===== */}
                <div className="flex flex-col items-center justify-center gap-4 py-6 text-gray-600 text-sm">
                    {/* SOCIAL ICONS */}
                    <div className="flex gap-6">
                        <a
                            href="#"
                            aria-label="Facebook"
                            className="text-gray-600 hover:text-indigo-600 transition-transform transform hover:scale-110"
                        >
                            <FaceSmileIcon className="w-6 h-6" />
                        </a>
                        <a
                            href="#"
                            aria-label="Instagram"
                            className="text-gray-600 hover:text-indigo-600 transition-transform transform hover:scale-110"
                        >
                            <CameraIcon className="w-6 h-6" />
                        </a>
                        <a
                            href="#"
                            aria-label="Twitter"
                            className="text-gray-600 hover:text-indigo-600 transition-transform transform hover:scale-110"
                        >
                            <GlobeAltIcon className="w-6 h-6" />
                        </a>
                        <a
                            href="#"
                            aria-label="GitHub"
                            className="text-gray-600 hover:text-indigo-600 transition-transform transform hover:scale-110"
                        >
                            <CodeBracketIcon className="w-6 h-6" />
                        </a>
                    </div>

                    {/* COPYRIGHT */}
                    <p className="text-center text-gray-600 mt-3">
                        © {currentYear}{" "}
                        <span className="font-medium text-indigo-600 hover:text-indigo-700 transition-colors">
                            Educollege
                        </span>{" "}
                        — All Rights Reserved.
                    </p>
                </div>
            </div>
        </Section>
    );
}
