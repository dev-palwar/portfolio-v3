import Image from "next/image";
import type { Testimonial } from "@/types/portfolio";
import { Typography } from "../ui/typography";
import { RenderQuote } from "../render-quote";

interface TestimonialsProps {
  testimonials: Testimonial[];
  title?: string;
}

export function Testimonials({ testimonials, title }: TestimonialsProps) {
  return (
    <section className="">
      <div className="spacing-secondary">
        {/* Section header */}
        <Typography variant="heading1" className="animate-fade-in-up">
          <span className="text-muted-foreground">{">"}</span> {title}
        </Typography>

        <div className="mt-10 space-y-12">
          {testimonials.map((testimonial, index) => (
            <figure
              key={testimonial.id}
              className="space-y-6 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <RenderQuote quote={testimonial.quote} />

              <div className="flex items-center gap-3">
                {testimonial.avatarUrl && (
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border border-border bg-[#111111]">
                    <Image
                      src={testimonial.avatarUrl}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex flex-col">
                  <Typography variant="heading3">{testimonial.name}</Typography>
                  {testimonial.role && (
                    <Typography variant="bodySm">{testimonial.role}</Typography>
                  )}
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
