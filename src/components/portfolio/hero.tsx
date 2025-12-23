import Image from "next/image";
import bannerImage from "@/assets/banner2.png";

interface HeroProps {
  bannerText?: string;
}

/**
 * Hero section component.
 * Displays full-width banner with optional text overlay.
 */
export function Hero({ bannerText }: HeroProps) {
  return (
    <section className="">
      {/* Banner Image */}
      <Image
        src={bannerImage}
        alt="Portfolio"
        height={1000}
        width={1000}
        priority
        className="object-contain object-center"
        // sizes="100vw"
      />

      {/* Gradient overlay for text readability */}
      {/* <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" /> */}

      {/* Text overlay */}
      {/* {bannerText && (
        <div className="absolute inset-0 flex items-end justify-end p-8 md:p-12">
          <span className="font-display text-4xl md:text-5xl lg:text-6xl text-white/90 italic tracking-wide animate-fade-in">
            {bannerText}
          </span>
        </div>
      )} */}
    </section>
  );
}
