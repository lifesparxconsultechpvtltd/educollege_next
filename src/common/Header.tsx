'use client'

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navigation } from "../data/hero.data";
import logo from '@/public/images/logo/logo.svg'
import Form from "./Form";
import { motion } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const pathname = usePathname();

  const handleFormSubmit = (data: FormData) => {
    console.log("Form submitted:", Object.fromEntries(data.entries()));
    setIsFormOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gray-200/70 backdrop-blur-md bg-white/80">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-4 lg:px-8 max-w-6xl mx-auto"
        >
          {/* Left Logo */}
          <div className="flex-1">
            <Link href="/" className="flex items-center">
              <Image src={logo} alt="Educollege Logo" width={140} height={50} />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-gray-700"
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-10">
            {navigation.map((item) => {
              const isActive =
                pathname === item.href ||
                (pathname.startsWith(item.href) && item.href !== "/");

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group relative text-sm font-semibold transition-colors duration-300
                    ${isActive ? "text-indigo-600" : "text-gray-900 hover:text-indigo-600"}`}
                >
                  {item.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-indigo-600 transition-all duration-300
                      ${isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"}`}
                  ></span>
                </Link>
              );
            })}
          </div>

          {/* Right — Apply Now button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button
              className="text-sm font-semibold text-gray-900 hover:text-indigo-600"
              onClick={() => setIsFormOpen(true)}
            >
              Apply Now →
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" aria-hidden="true" />

          <DialogPanel className="lg:hidden fixed inset-0 z-50 p-0! bg-black/20 backdrop-blur-sm">

            <motion.div
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="
              absolute top-0 left-0 right-0
              bg-white shadow-xl ring-1 ring-gray-900/10
              w-full max-w-full
              p-4
              "
            >
              {/* Header Row */}
              <div className="flex items-center justify-between mb-6">
                <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                  <Image src={logo} alt="Educollege Logo" width={140} height={50} />
                </Link>

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-gray-700"
                >
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Links */}
              <div className="space-y-2 py-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-base font-semibold hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsFormOpen(true);
                }}
                className="mt-6 w-full bg-indigo-600 text-white font-semibold py-2"
              >
                Apply Now →
              </button>
            </motion.div>
          </DialogPanel>

        </Dialog>
      </header>

      {/* Form Modal */}
      <Form open={isFormOpen} onClose={() => setIsFormOpen(false)} onSubmit={handleFormSubmit} />
    </>
  );
}
