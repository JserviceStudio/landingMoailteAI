"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

interface MotionSectionProps {
    children: React.ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    className?: string;
    id?: string;
}

export function MotionSection({
    children,
    delay = 0,
    direction = "up",
    className = "",
    id
}: MotionSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    const getVariants = (): Variants => {
        const directions = {
            up: { y: 40, opacity: 0 },
            down: { y: -40, opacity: 0 },
            left: { x: 40, opacity: 0 },
            right: { x: -40, opacity: 0 }
        };

        return {
            hidden: directions[direction],
            visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                    duration: 0.8,
                    delay,
                    ease: [0.22, 1, 0.36, 1] // Custom quintic ease-out for better precision
                }
            }
        };
    };

    return (
        <motion.section
            ref={ref}
            id={id}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={getVariants()}
            className={className}
        >
            {children}
        </motion.section>
    );
}
