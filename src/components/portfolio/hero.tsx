import Image from "next/image";
import bannerImage from "@/assets/banner2.png";

interface HeroProps {
  bannerText?: string;
}

export function Hero({ bannerText }: HeroProps) {
  return (
    <section className="w-full">
      {/* Banner Image - scales responsively */}
      <Image
        src={bannerImage}
        alt="Portfolio"
        priority
        className="object-contain object-center w-full h-auto"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 900px"
      />
    </section>
  );
}
