import { HiDocument } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BiSolidMessage } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";
import ThemeSwitcher from "./theme-switcher-button";

export function Header() {

  return (
    <header className="flex items-center py-4 gap-2 justify-end">
      {/* Mobile menu */}
      <div className="sm:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <HiMenu className="w-5 h-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-48">
            <DropdownMenuItem asChild>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <HiDocument className="w-4 h-4" />
                Resume / CV
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a
                href="mailto:devpalwar06@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <BiSolidMessage className="w-4 h-4" />
                Get in touch
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Theme toggle - visible on all sizes */}
      <ThemeSwitcher />
    </header>
  );
}
