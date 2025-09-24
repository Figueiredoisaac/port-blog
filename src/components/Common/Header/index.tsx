"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { cn } from "@/utils/cn";
import MenuList from "./MenuList";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all border-b border-transparent dark:border-transparent",
        scrolled && "border-neutral-200 dark:border-gray-400 backdrop-blur",
      )}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link href="/" className="flex items-center gap-2 group">
          <Image src="/logo-code.svg" alt="Logo" width={38} height={38} />
          <span className="font-title font-bold text-primary dark:text-white tracking-wide text-sm md:text-2xl">
            FERNANDA MASCHETI
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <MenuList />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
