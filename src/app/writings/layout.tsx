"use client";

import { NavigationButton } from "@/components/ui/navigation-button";
import { usePathname } from "next/navigation";

export default function WritingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <main className="min-h-screen">
      <NavigationButton
        label={pathname === "/writings" ? "Back to home" : "Back to writings"}
      />
      {children}
    </main>
  );
}
