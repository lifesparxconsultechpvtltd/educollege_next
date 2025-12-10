import Marquee from "../common/morque";
import Section from "../common/section-wrapper";
import TestimonialCard from "../common/testimonial-card";
import { testimonials } from "../data/pages/testimonial.data";

export default function TestimonialSection() {
    return (
        <Section 
            id="testimonials"
            className="py-24 sm:py-8"
            crosses
            crossesOffset="lg:translate-y-0"
            customPaddings>
            {/* Title */}
            <div className="text-center max-w-6xl mx-auto mb-14 px-4">
                <h2 className="text-indigo-600 font-semibold uppercase text-sm tracking-wide">
                    Testimonials
                </h2>

                <p className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
                    What Our Learners Say
                </p>

                <p className="text-gray-600 mt-4">
                    Hear directly from professionals who transformed their careers with us.
                </p>
            </div>

            {/* Row 1 */}
            <Marquee speed={45}>
                {testimonials.map((t, i) => (
                    <TestimonialCard key={i} card={t} />
                ))}
            </Marquee>

            {/* Row 2 */}
            <Marquee speed={45} reverse>
                {testimonials.map((t, i) => (
                    <TestimonialCard key={i} card={t} />
                ))}
            </Marquee>
        </Section>
    );
}