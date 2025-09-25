"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface MenuItemProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function MenuItem({ href, children, className }: MenuItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "font-semibold text-sm md:text-base transition-colors",
        isActive ? "text-secondary" : "text-neutral hover:text-secondary",
        className,
      )}
    >
      {children}
    </Link>
  );
}
