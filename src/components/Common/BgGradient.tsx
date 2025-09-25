import Image from "next/image";
import { cn } from "@/utils/cn";

export default function BgGradient({ className }: { className?: string }) {
  return (
    <Image
      src="/bg-colors.svg"
      alt="Gradient Background"
      width={412}
      height={770}
      className={className}
      fetchPriority="high"
    />
  );
}
