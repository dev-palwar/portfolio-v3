import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactProps {
  email?: string;
  heading?: string;
  subheading?: string;
}

/**
 * Contact section component.
 * Dark-themed CTA section for getting in touch.
 */
export function Contact({
  email = "hello@example.com",
  heading = "Let's work together",
  subheading = "Have a project in mind? I'd love to hear about it.",
}: ContactProps) {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
        {/* Avatar placeholder */}
        <div className="w-16 h-16 mx-auto mb-8 rounded-full border-2 border-dashed border-primary-foreground/30 bg-primary-foreground/5 flex items-center justify-center animate-fade-in">
          <Mail className="w-6 h-6" />
        </div>

        {/* Heading */}
        <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 animate-fade-in-up">
          {heading}
        </h2>
        <p className="mb-8 animate-fade-in-up animate-stagger-1">
          {subheading}
        </p>

        {/* CTA Button */}
        <div className="animate-fade-in-up animate-stagger-2">
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="rounded-full px-8"
          >
            <a href={`mailto:${email}`}>Get in touch</a>
          </Button>
        </div>

        {/* Footer text */}
        <p className="mt-12 text-sm /40 animate-fade-in-up animate-stagger-3">
          Or drop me a line at{" "}
          <a
            href={`mailto:${email}`}
            className="underline underline-offset-4 hover:/70 transition-colors"
          >
            {email}
          </a>
        </p>
      </div>
    </section>
  );
}
