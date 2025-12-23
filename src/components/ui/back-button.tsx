"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { useRouter } from "next/navigation";

interface BackButtonProps {
  href?: string;
  label?: string;
  className?: string;
}

export function BackButton({
  href,
  label = "Back",
  className,
}: BackButtonProps) {
  const router = useRouter();
  if (!href) {
    return (
      <Button
        variant="ghost"
        onClick={() => router.back()}
        className={cn(
          "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group",
          className
        )}
      >
        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        <Typography variant="bodySm">{label}</Typography>
      </Button>
    );
  }
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group",
        className
      )}
    >
      <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
      <Typography variant="bodySm">{label}</Typography>
    </Link>
  );
}
