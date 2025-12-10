"use client";

import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useRef } from "react";

export default function Marquee({
    children,
    speed = 40,
    reverse = false,
}: {
    children: React.ReactNode;
    speed?: number;
    reverse?: boolean;
}) {
    const x = useMotionValue(0);
    const baseRef = useRef<HTMLDivElement>(null);

    useAnimationFrame((t, delta) => {
        const baseWidth = baseRef.current?.offsetWidth ?? 0;
        if (!baseWidth) return;

        const moveBy = (speed / 1000) * delta;
        const direction = reverse ? moveBy : -moveBy;

        let newX = x.get() + direction;

        // 🔥 TRUE INFINITE LOOP — seamless
        if (newX <= -baseWidth) newX += baseWidth;
        if (newX >= 0) newX -= baseWidth;

        x.set(newX);
    });

    return (
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto overflow-hidden py-6">
            <motion.div
                className="flex gap-6"
                style={{ x }}
            >
                {/* First copy (actual width reference) */}
                <div ref={baseRef} className="flex gap-6">
                    {children}
                </div>

                {/* Second copy (creates seamless infinite loop) */}
                <div className="flex gap-6">
                    {children}
                </div>
            </motion.div>
        </div>
    );
}
