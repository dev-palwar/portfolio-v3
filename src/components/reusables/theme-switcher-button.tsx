"use client";

import React, { useEffect } from "react";
import { Moon, Sun } from "lucide-react";

import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
    const { setTheme } = useTheme();

    const [checked, setChecked] = React.useState(false);

    useEffect(() => {
        if (checked) {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }, [checked])


    return (
        <div className="flex items-center space-x-3">
            <Sun className="size-4" />
            <Switch
                checked={checked}
                onCheckedChange={(value) => setChecked(value)}
                aria-label="Toggle theme"
            />
            <Moon className="size-4" />
        </div>
    )
}