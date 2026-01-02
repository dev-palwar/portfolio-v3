import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import errorImage from "@/assets/error.jpg";

export default function NotFound() {
  return (
    <main className="section-spacing flex flex-col items-center justify-center gap-4">
      <Image src={errorImage} alt="Error" width={100} height={100} />
      <Typography variant="heading1">Page not found</Typography>
      <Typography variant="body">
        The page you are looking for does not exist.
      </Typography>
      <Link href="/">
        <Button variant="outline">Go back to home</Button>
      </Link>
    </main>
  );
}
