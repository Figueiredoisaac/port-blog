import Image from "next/image";

export default function Avatar() {
  return (
    <div className="flex justify-center">
      <Image
        src="/avatar.png"
        alt="Foto de Fernanda"
        width={224}
        height={224}
        priority
      />
    </div>
  );
}
