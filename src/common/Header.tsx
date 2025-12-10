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

  const handleCloseMenu = () => {
    setMobileMenuOpen(false);
  };

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
        <Dialog open={mobileMenuOpen} onClose={handleCloseMenu} className="lg:hidden">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" 
            aria-hidden="true" 
            onClick={handleCloseMenu}
          />

          <DialogPanel className="lg:hidden fixed inset-0 z-50 pointer-events-none">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ 
                duration: 0.35,
                ease: [0.32, 0.72, 0, 1]
              }}
              className="absolute top-0 right-0 h-full w-[280px] bg-white shadow-2xl pointer-events-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <Link href="/" onClick={handleCloseMenu}>
                  <Image src={logo} alt="Educollege Logo" width={120} height={40} />
                </Link>
                <button
                  type="button"
                  onClick={handleCloseMenu}
                  className="p-2 text-gray-400 hover:text-gray-900 transition-colors"
                >
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Links */}
              <div className="p-6 space-y-1">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={handleCloseMenu}
                      className="block px-4 py-3 text-base font-semibold text-gray-900 hover:bg-gray-50 hover:text-indigo-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Apply Button */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.3 }}
                  onClick={() => {
                    handleCloseMenu();
                    setIsFormOpen(true);
                  }}
                  className="w-full bg-indigo-600 text-white font-semibold py-3 hover:bg-indigo-700 transition-colors"
                >
                  Apply Now →
                </motion.button>
              </div>
            </motion.div>
          </DialogPanel>

        </Dialog>
      </header>

      {/* Form Modal */}
      <Form open={isFormOpen} onClose={() => setIsFormOpen(false)} onSubmit={handleFormSubmit} />
    </>
  );
}