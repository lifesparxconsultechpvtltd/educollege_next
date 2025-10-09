'use client'

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { navigation } from "../data/hero.data";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/70 backdrop-blur-md">
      <nav aria-label="Global" className="flex items-center justify-between p-4 lg:px-8 max-w-6xl mx-auto">
        {/* --- Logo --- */}
        <div className="flex-1">
          <Link href="/" className="flex items-center">
            <Image
              alt="Educollege Logo"
              src="/images/logo.svg" // Make sure this exists in /public/images/
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
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        {/* --- Desktop navigation --- */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold text-gray-900 hover:text-indigo-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
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
              <Image
                alt="Educollege Logo"
                src="/images/logo.svg"
                width={32}
                height={32}
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md p-2 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          <div className="flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
