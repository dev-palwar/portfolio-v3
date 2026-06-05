import React from "react";
import { cn } from "@/lib/utils";

type TypographyVariant =
  | "heading1"
  | "heading2"
  | "heading3"
  | "body"
  | "bodySm"
  | "listItem"
  | "helpText";

type TypographyProps = React.HTMLAttributes<HTMLElement> & {
  as?: React.ElementType;
  variant?: TypographyVariant;
};

const VARIANT_CLASSES: Record<TypographyVariant, string> = {
  heading1:
    "text-2xl md:text-3xl font-medium tracking-tight animate-fade-in-up capitalize",
  heading2:
    "text-base md:text-lg font-medium tracking-tight capitalize",
  heading3:
    "text-sm md:text-sm font-medium tracking-tight capitalize",
  body: "md:text-lg whitespace-pre-wrap animate-fade-in-up animate-stagger-1",
  bodySm: "text-sm",
  listItem: "text-base",
  helpText: "text-xs font-medium",
};

export function Typography({
  className,
  as: Tag = "p",
  variant = "body",
  ...props
}: TypographyProps) {
  const classes = VARIANT_CLASSES[variant] || VARIANT_CLASSES["body"];
  return (
    <Tag className={cn(classes + " leading-relaxed", className)} {...props} />
  );
}
