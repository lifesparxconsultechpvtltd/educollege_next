'use client'
import { useEffect, useState, useRef } from "react";
import Section from "../common/section-wrapper";

type StatItem = {
    label: string;
    value: number;
    format?: (val: number) => string;
};

export default function StatsCounterSection() {
    const stats: StatItem[] = [
        {
            label: "Million Students & Alumni",
            value: 10_000_000,
            format: (v) => `${(v / 1_000_000).toFixed(1)}M`,
        },
        {
            label: "End program rating",
            value: 4.6,
            format: (v) => `${v.toFixed(1)}/5`,
        },
        {
            label: "Avg. hike post program*",
            value: 50,
        },
        {
            label: "Hiring companies*",
            value: 3300,
            format: (v) => `${v}+`,
        }
    ];

    const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
    const ref = useRef<HTMLDivElement | null>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    startCounting();
                    setHasAnimated(true);
                }
            },
            { threshold: 0.4 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [hasAnimated]);

    const startCounting = () => {
        const duration = 1600;
        const intervalTime = 16;

        const intervals = stats.map((stat, idx) => {
            let start = 0;
            const end = stat.value;
            const increment = end / (duration / intervalTime);

            return setInterval(() => {
                start += increment;
                setCounts((prev) => {
                    const updated = [...prev];
                    updated[idx] = start >= end ? end : Math.floor(start);
                    return updated;
                });
            }, intervalTime);
        });

        setTimeout(() => intervals.forEach((i) => clearInterval(i)), duration + 100);
    };

    return (
        <Section
            id="stats"
            className="py-16 sm:py-20 bg-white relative overflow-hidden"
            customPaddings
        >
            <div ref={ref} className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
                        Invest in Yourself Today
                    </h2>
                    <p className="mt-2 text-lg text-gray-700">Unlock success for a lifetime.</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <span className="text-xl sm:text-2xl md:text-4xl font-semibold text-indigo-600">
                                {stat.format ? stat.format(counts[index]) : counts[index].toLocaleString()}
                            </span>
                            <p className="mt-2 text-gray-700 text-sm sm:text-base max-w-[160px]">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
