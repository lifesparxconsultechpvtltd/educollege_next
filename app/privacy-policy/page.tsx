import Section from "@/src/common/section-wrapper";
import Link from "next/link";

export default function Page(){
    return (
        <>
        <Section
            className="py-24 sm:py-5"
            crosses
            crossesOffset="lg:translate-y-0"
            customPaddings
            id="hero">
            <div className="relative px-6 pt-14 lg:px-8 max-w-6xl mx-auto">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                    <div
                        style={{
                            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    />
                </div>
                {/* Main Content */}
                <div className="mx-auto max-w-4xl mb-16">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                            Privacy Policy
                        </h1>
                        <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl leading-8">
                            At Educollege, we are committed to protecting your privacy. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information when you use our website and services.
                        </p>
                    </div>
                </div>
            </div>
        </Section>

        <Section
            className="pb-24 sm:pb-5 p-10"
            crosses
            crossesOffset="lg:translate-y-0"
            customPaddings
            id="privacy-policy-content">
            <div className="relative px-6 lg:px-8 max-w-6xl mx-auto">
                <div className="mx-auto max-w-4xl">
                    
                    {/* Last Updated */}
                    <div className="mb-12 pb-6 border-b border-gray-200">
                        <p className="text-sm text-gray-500 italic">
                            <span className="font-semibold">Last Updated:</span> October 28, 2025
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="mb-12">
                        <p className="text-gray-700 leading-relaxed">
                            This Privacy Policy describes how Educollege ("we," "us," or "our") collects, uses, and protects your personal information. By using our services, you agree to the terms outlined in this policy.
                        </p>
                    </div>

                    {/* 1. Information We Collect */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Information We Collect</h2>
                        
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">1.1 Personal Information</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We collect personal information that you provide directly to us, including:
                        </p>
                        <ul className="space-y-2 ml-6 mb-6">
                            <li className="flex items-start">
                                <span className="text-indigo-600 mr-3 mt-1">•</span>
                                <span className="text-gray-700">Name, email address, and phone number</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-600 mr-3 mt-1">•</span>
                                <span className="text-gray-700">Educational background and qualifications</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-600 mr-3 mt-1">•</span>
                                <span className="text-gray-700">Payment and billing information</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-600 mr-3 mt-1">•</span>
                                <span className="text-gray-700">Academic records and transcripts (if applicable)</span>
                            </li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mb-4">1.2 Usage Information</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We automatically collect certain information when you use our platform:
                        </p>
                        <ul className="space-y-2 ml-6">
                            <li className="flex items-start">
                                <span className="text-indigo-600 mr-3 mt-1">•</span>
                                <span className="text-gray-700">Device information, IP address, and browser type</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-600 mr-3 mt-1">•</span>
                                <span className="text-gray-700">Pages visited, time spent, and navigation patterns</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-600 mr-3 mt-1">•</span>
                                <span className="text-gray-700">Cookies and similar tracking technologies</span>
                            </li>
                        </ul>
                    </div>

                    {/* 2. How We Use Your Information */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">2. How We Use Your Information</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We use the information we collect for the following purposes:
                        </p>
                        <div className="bg-gray-50 p-6 space-y-4">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-indigo-600 font-bold text-sm">1</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Service Delivery</h4>
                                    <p className="text-gray-700 text-sm">To provide, maintain, and improve our educational services and platform functionality</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-indigo-600 font-bold text-sm">2</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Account Management</h4>
                                    <p className="text-gray-700 text-sm">To create and manage your account, process enrollments, and handle payments</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-indigo-600 font-bold text-sm">3</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Communication</h4>
                                    <p className="text-gray-700 text-sm">To send course updates, important notifications, and respond to your inquiries</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-indigo-600 font-bold text-sm">4</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Personalization</h4>
                                    <p className="text-gray-700 text-sm">To customize your experience and recommend relevant programs and courses</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-indigo-600 font-bold text-sm">5</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Marketing</h4>
                                    <p className="text-gray-700 text-sm">To send promotional materials and special offers (only with your consent)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. Data Security */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Data Security</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Our security practices include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="border border-gray-200 p-4">
                                <div className="flex items-center mb-2">
                                    <span className="text-2xl mr-3">🔒</span>
                                    <h4 className="font-semibold text-gray-900">Encryption</h4>
                                </div>
                                <p className="text-gray-600 text-sm">SSL/TLS encryption for data transmission</p>
                            </div>
                            <div className="border border-gray-200 p-4">
                                <div className="flex items-center mb-2">
                                    <span className="text-2xl mr-3">🛡️</span>
                                    <h4 className="font-semibold text-gray-900">Access Control</h4>
                                </div>
                                <p className="text-gray-600 text-sm">Restricted access to authorized personnel only</p>
                            </div>
                            <div className="border border-gray-200 p-4">
                                <div className="flex items-center mb-2">
                                    <span className="text-2xl mr-3">🔐</span>
                                    <h4 className="font-semibold text-gray-900">Secure Storage</h4>
                                </div>
                                <p className="text-gray-600 text-sm">Protected servers and databases</p>
                            </div>
                            <div className="border border-gray-200 p-4">
                                <div className="flex items-center mb-2">
                                    <span className="text-2xl mr-3">📊</span>
                                    <h4 className="font-semibold text-gray-900">Regular Audits</h4>
                                </div>
                                <p className="text-gray-600 text-sm">Periodic security assessments and updates</p>
                            </div>
                        </div>
                    </div>

                    {/* 4. Information Sharing */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Information Sharing and Disclosure</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We do not sell your personal information. We may share your information with:
                        </p>
                        <div className="space-y-4">
                            <div className="border-l-4 border-indigo-600 pl-4 py-2">
                                <h4 className="font-semibold text-gray-900 mb-1">Educational Institutions</h4>
                                <p className="text-gray-700 text-sm">Universities and colleges you apply to through our platform</p>
                            </div>
                            <div className="border-l-4 border-indigo-600 pl-4 py-2">
                                <h4 className="font-semibold text-gray-900 mb-1">Service Providers</h4>
                                <p className="text-gray-700 text-sm">Trusted third-party vendors who assist in payment processing, email delivery, and analytics</p>
                            </div>
                            <div className="border-l-4 border-indigo-600 pl-4 py-2">
                                <h4 className="font-semibold text-gray-900 mb-1">Legal Requirements</h4>
                                <p className="text-gray-700 text-sm">When required by law, court order, or government regulation</p>
                            </div>
                            <div className="border-l-4 border-indigo-600 pl-4 py-2">
                                <h4 className="font-semibold text-gray-900 mb-1">Business Transfers</h4>
                                <p className="text-gray-700 text-sm">In connection with a merger, acquisition, or sale of assets</p>
                            </div>
                        </div>
                    </div>

                    {/* 5. Cookies and Tracking */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Cookies and Tracking Technologies</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We use cookies and similar technologies to enhance your experience. You can control cookie preferences through your browser settings.
                        </p>
                        <div className="bg-indigo-50 border border-indigo-200 p-4">
                            <p className="text-sm text-gray-700">
                                <span className="font-semibold">Types of cookies we use:</span> Essential cookies (required for site functionality), Performance cookies (analytics), Functional cookies (preferences), and Marketing cookies (personalized ads).
                            </p>
                        </div>
                    </div>

                    {/* 6. Your Rights */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Your Rights and Choices</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            You have the following rights regarding your personal information:
                        </p>
                        <div className="bg-white border border-gray-200 overflow-hidden">
                            <div className="divide-y divide-gray-200">
                                <div className="p-4 hover:bg-gray-50 transition-colors">
                                    <div className="flex items-start">
                                        <span className="text-green-600 font-bold mr-4">✓</span>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Access</h4>
                                            <p className="text-gray-600 text-sm">Request a copy of your personal data</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 hover:bg-gray-50 transition-colors">
                                    <div className="flex items-start">
                                        <span className="text-green-600 font-bold mr-4">✓</span>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Correction</h4>
                                            <p className="text-gray-600 text-sm">Update or correct inaccurate information</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 hover:bg-gray-50 transition-colors">
                                    <div className="flex items-start">
                                        <span className="text-green-600 font-bold mr-4">✓</span>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Deletion</h4>
                                            <p className="text-gray-600 text-sm">Request deletion of your personal data (subject to legal obligations)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 hover:bg-gray-50 transition-colors">
                                    <div className="flex items-start">
                                        <span className="text-green-600 font-bold mr-4">✓</span>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Opt-Out</h4>
                                            <p className="text-gray-600 text-sm">Unsubscribe from marketing communications at any time</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 hover:bg-gray-50 transition-colors">
                                    <div className="flex items-start">
                                        <span className="text-green-600 font-bold mr-4">✓</span>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Portability</h4>
                                            <p className="text-gray-600 text-sm">Receive your data in a structured, machine-readable format</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 7. Data Retention */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Data Retention</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. When data is no longer needed, we securely delete or anonymize it.
                        </p>
                    </div>

                    {/* 8. Children's Privacy */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Children's Privacy</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                        </p>
                    </div>

                    {/* 9. International Data Transfers */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">9. International Data Transfers</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.
                        </p>
                    </div>

                    {/* 10. Changes to Policy */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Changes to This Privacy Policy</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of significant changes by posting the updated policy on this page with a revised "Last Updated" date. Continued use of our services after changes constitutes acceptance of the updated policy.
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className="mb-12 bg-gradient-to-br from-indigo-50 to-purple-50 p-8 border border-indigo-100">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center">
                                <span className="text-indigo-600 font-semibold w-24">Email:</span>
                                <Link href="mailto:support@educollege.com" className="text-indigo-600 hover:text-indigo-800 underline">
                                    support@educollege.com
                                </Link>
                            </div>
                            <div className="flex items-center">
                                <span className="text-indigo-600 font-semibold w-24">Phone:</span>
                                <span className="text-gray-700">+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-start">
                                <span className="text-indigo-600 font-semibold w-24">Address:</span>
                                <span className="text-gray-700">123 Education Street, Suite 100<br />Learning City, LC 12345</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Section>
        </>
    )
}