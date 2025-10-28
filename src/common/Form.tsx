"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface FormProps {
  open?: boolean;
  onClose: () => void;
  onSubmit?: (data: FormData) => void;
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      course: formData.get('course') as string,
    };

    try {
      // Replace with your Google Apps Script Web App URL
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbypk5TpPGavAkLNQ-WMfl3poSPqnDRvPIOiSvE04PWDswYx_eh_kHPWJEHaYfd8nnmQ/exec';
      
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // With no-cors mode, we can't read the response
      // So we assume success if no error is thrown
      setSubmitStatus('success');
      
      // Call the original onSubmit if provided
      if (onSubmit) {
        onSubmit(formData);
      }

      // Close form after 2 seconds
      setTimeout(() => {
        onClose();
        setSubmitStatus('idle');
      }, 2000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="bg-white w-full max-w-md shadow-xl p-6 sm:p-8 relative">
        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={onClose}
          disabled={isSubmitting}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer border-[1px] border-transparent hover:border-gray-300 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="sr-only">Close</span>
          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        </button>

        {/* HEADER */}
        <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">
          Enquiry Form
        </h2>

        {/* SUCCESS MESSAGE */}
        {submitStatus === 'success' && (
          <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800 text-center font-medium">
              ✓ Form submitted successfully! We'll contact you soon.
            </p>
          </div>
        )}

        {/* ERROR MESSAGE */}
        {submitStatus === 'error' && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-800 text-center font-medium">
              ✕ Something went wrong. Please try again.
            </p>
          </div>
        )}

        {/* FORM FIELDS */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              name="name"
              defaultValue={name}
              required
              type="text"
              placeholder="Enter your name"
              disabled={isSubmitting}
              className="w-full border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 text-sm px-3 py-2 border disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              defaultValue={email}
              required
              type="email"
              placeholder="Enter your email"
              disabled={isSubmitting}
              className="w-full border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 text-sm px-3 py-2 border disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              name="phone"
              defaultValue={phone}
              required
              type="tel"
              placeholder="Enter your phone number"
              disabled={isSubmitting}
              className="w-full border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 text-sm px-3 py-2 border disabled:bg-gray-100 disabled:cursor-not-allowed"
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
              disabled={isSubmitting}
              className="w-full border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 text-sm px-3 py-2 border disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
          </div>

          {/* SUBMIT BUTTON */}
          <div className="mb-4 flex flex-row gap-3">
            <button 
              type="button" 
              onClick={onClose}
              disabled={isSubmitting}
              className="border border-transparent hover:border-gray-300 hover:text-gray-700 hover:scale-105 w-1/2 text-sm font-semibold px-3.5 py-2.5 text-gray-900 transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-1/2 bg-indigo-600 hover:bg-indigo-700 cursor-pointer text-white font-medium py-2.5 transition-all duration-200 disabled:bg-indigo-400 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                'Submit'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}