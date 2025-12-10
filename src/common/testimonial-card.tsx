import Image from "next/image";

interface Testimonial {
    image: string;
    name: string;
    handle: string;
    date: string;
    text: string;
}
export default function TestimonialCard({ card }: { card: Testimonial }) {
    return (
        <div className="p-5 bg-white shadow-md border border-gray-200 w-72 min-w-[18rem] shrink-0 mx-4">
            {/* Header */}
            <div className="flex gap-3 items-start">
                <Image
                    src={card.image}
                    width={44}
                    height={44}
                    alt={card.name}
                    className="rounded-full object-cover"
                />

                <div>
                    <p className="font-medium text-gray-900 flex items-center gap-1">
                        {card.name}
                        <span className="text-indigo-500 text-lg">✓</span>
                    </p>
                    <span className="text-xs text-gray-500">{card.handle}</span>
                </div>
            </div>

            {/* Body */}
            <p className="text-sm text-gray-700 leading-relaxed py-4">
                {card.text}
            </p>

            {/* Footer */}
            <div className="text-xs text-gray-500 flex justify-between">
                <span>Posted on</span>
                <span>{card.date}</span>
            </div>
        </div>
    );
}
