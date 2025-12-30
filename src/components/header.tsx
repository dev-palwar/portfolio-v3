"use client";

import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { HiDocument, HiPaperAirplane } from "react-icons/hi";
import { useTheme } from "next-themes";
import { portfolioData } from "@/data/portfolio-data";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SiEndeavouros } from "react-icons/si";
import { BiSolidMessage } from "react-icons/bi";

export function Header() {
  const { setTheme } = useTheme();
  const { socials } = portfolioData;

  return (
    // fixed top-0 right-0
    <header className="flex justify-end py-4">
      <div className="flex items-center gap-2">
        <Button asChild>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <HiDocument className="w-4 h-4" />
            Resume/ CV
          </a>
        </Button>

        <Button asChild variant="outline">
          <a
            href={socials.find((s) => s.platform === "email")?.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiSolidMessage className="w-4 h-4" />
            Get in touch
          </a>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="relative overflow-hidden"
            >
              <BsSunFill className="absolute inset-0 h-[1.2rem] w-[1.2rem] m-auto scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 dark:opacity-0" />
              <BsMoonFill className="absolute inset-0 h-[1.2rem] w-[1.2rem] m-auto scale-0 rotate-90 opacity-0 transition-all dark:scale-100 dark:rotate-0 dark:opacity-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
