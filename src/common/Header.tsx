'use client'

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navigation } from "../data/hero.data";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/70 backdrop-blur-md bg-white/80">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-4 lg:px-8 max-w-6xl mx-auto relative"
      >
        {/* --- Logo --- */}
        <div className="flex-1">
          <Link href="/" className="flex items-center">
            <Image
              alt="Educollege Logo"
              src="/images/logo/logo.svg"
              width={140}
              height={50}
            />
          </Link>
        </div>

        {/* --- Mobile menu button --- */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6 cursor-pointer" />
          </button>
        </div>

        {/* --- Desktop navigation --- */}
        <div className="hidden lg:flex lg:gap-x-10 relative">
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
                {/* Animated underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] rounded-full bg-indigo-600 transition-all duration-300 ease-in-out
                    ${isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"}`}
                ></span>
              </Link>
            );
          })}
        </div>

        {/* --- Right side (Apply Now) --- */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/apply"
            className="text-sm font-semibold text-gray-900 hover:text-indigo-600 transition-colors"
          >
            Apply Now <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>

      {/* --- Mobile menu --- */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" aria-hidden="true" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full sm:max-w-sm bg-white p-6 overflow-y-auto ring-1 ring-gray-900/10 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <Link href="/" className="flex items-center">
              <Image alt="Educollege Logo" src="/images/logo.svg" width={140} height={50} />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md p-2 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6 cursor-pointer" />
            </button>
          </div>

          <div className="flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 flex flex-col justify-center">
                {navigation.map((item) => {
                  const isActive =
                    pathname === item.href ||
                    (pathname.startsWith(item.href) && item.href !== "/");
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`-mx-3 block px-3 py-2 text-base font-semibold transition-colors
                        ${isActive ? "bg-indigo-50 text-indigo-600" : "text-gray-900 hover:bg-gray-50"}`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
