"use client";

import { motion, useInView } from "framer-motion";
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

    const getVariants = () => {
        const directions = {
            up: { y: 40 },
            down: { y: -40 },
            left: { x: 40 },
            right: { x: -40 }
        };

        return {
            hidden: {
                opacity: 0,
                ...directions[direction]
            },
            visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                    duration: 0.8,
                    delay,
                    ease: "easeOut"
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
