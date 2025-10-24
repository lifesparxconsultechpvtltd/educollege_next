"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";

interface FormProps {
  open?: boolean;
  onClose: () => void;
  onSubmit: (data: FormData) => void;
  name?: string;
  email?: string;
  phone?: string;
  course?: string;
}

export default function Form({
  onSubmit,
  name,
  email,
  phone,
  course,
  open = false,
  onClose,
}: FormProps) {
  if (!open) return null; // 👈 form won’t render unless `open` is true

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="bg-white w-full max-w-md shadow-xl p-6 sm:p-8 relative">
        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer border-[1px] border-transparent hover:border-gray-300 hover:scale-105 transition-all duration-300"
        >
          <span className="sr-only">Close</span>
          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        </button>

        {/* HEADER */}
        <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">
          Enquiry Form
        </h2>

        {/* FORM FIELDS */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              name="name"
              defaultValue={name}
              required
              type="text"
              placeholder="Enter your name"
              className="w-full border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 text-sm px-3 py-2 border"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              name="email"
              defaultValue={email}
              required
              type="email"
              placeholder="Enter your email"
              className="w-full border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 text-sm px-3 py-2 border"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              name="phone"
              defaultValue={phone}
              required
              type="tel"
              placeholder="Enter your phone number"
              className="w-full border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 text-sm px-3 py-2 border"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Course
            </label>
            <input
              name="course"
              defaultValue={course}
              type="text"
              placeholder="Interested course"
              className="w-full border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 text-sm px-3 py-2 border"
            />
          </div>

          {/* SUBMIT BUTTON */}
          <div className="mb-4 flex flex-row gap-3">
          <button type="button" onClick={onClose} className="border border-transparent hover:border-gray-300 hover:text-gray-700 hover:scale-105 w-1/2 text-sm font-semibold px-3.5 py-2.5 text-gray-900 transition-all duration-300 cursor-pointer">
            Cancel
          </button>
          <button
            type="submit"
            className="w-1/2 bg-indigo-600 hover:bg-indigo-700 cursor-pointer text-white font-medium py-2.5 transition-all duration-200"
          >
            Submit
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}
