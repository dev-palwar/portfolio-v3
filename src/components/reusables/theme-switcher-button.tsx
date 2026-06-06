"use client";

import React, { useEffect, useState, useRef } from "react";
import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const clickCoords = useRef({ x: 0, y: 0 });

    // Ensure component is mounted to avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="flex items-center space-x-3 opacity-0">
                <Sun className="size-4" />
                <Switch disabled aria-label="Toggle theme" />
                <Moon className="size-4" />
            </div>
        );
    }

    const isDark = resolvedTheme === "dark";

    const handleToggle = (checked: boolean) => {
        const nextTheme = checked ? "dark" : "light";

        // Fallback for browsers that don't support View Transitions or if reduced motion is enabled
        if (
            !document.startViewTransition ||
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
            setTheme(nextTheme);
            return;
        }

        const { x, y } = clickCoords.current;
        const endRadius = Math.hypot(
            Math.max(x, window.innerWidth - x),
            Math.max(y, window.innerHeight - y)
        );

        const transition = document.startViewTransition(() => {
            setTheme(nextTheme);
        });

        transition.ready.then(() => {
            const clipPath = [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${endRadius}px at ${x}px ${y}px)`,
            ];
            document.documentElement.animate(
                {
                    clipPath: clipPath,
                },
                {
                    duration: 500,
                    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
                    pseudoElement: "::view-transition-new(root)",
                }
            );
        });
    };

    return (
        <div 
            className="flex items-center space-x-3"
            onPointerDown={(e) => {
                clickCoords.current = { x: e.clientX, y: e.clientY };
            }}
        >
            <Sun className="size-4" />
            <Switch
                checked={isDark}
                onCheckedChange={handleToggle}
                aria-label="Toggle theme"
            />
            <Moon className="size-4" />
        </div>
    );
}