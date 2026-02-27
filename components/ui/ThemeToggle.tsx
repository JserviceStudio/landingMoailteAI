"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => setMounted(true), []);

    if (!mounted) return <div className="p-3 w-10 h-10 rounded-xl glass" />;

    return (
        <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-3 rounded-xl glass hover:bg-primary/10 transition-colors relative h-10 w-10 flex items-center justify-center overflow-hidden border-border shadow-lg"
        >
            <motion.div
                initial={false}
                animate={{ y: theme === "dark" ? 0 : 40 }}
                transition={{ type: "spring", damping: 15 }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <Moon className="w-5 h-5 text-blue-400 fill-blue-400/20" />
            </motion.div>
            <motion.div
                initial={false}
                animate={{ y: theme === "dark" ? -40 : 0 }}
                transition={{ type: "spring", damping: 15 }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <Sun className="w-5 h-5 text-orange-400 fill-orange-400/20" />
            </motion.div>
        </motion.button>
    );
}
