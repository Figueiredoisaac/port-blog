import Image from "next/image";

export default function BgGradient({
  className,
}: {
  className?: string;
}) {
  return (
    <Image
      src="/bg-colors.webp"
      alt="Gradient Background"
      width={1355}
      height={1173}
      className={className}
      priority
    />
  );
}