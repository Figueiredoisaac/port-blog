import Image from "next/image";

export default function Lines() {
  return (
    <div className="flex justify-between w-full max-w-[686px] mx-auto mt-24 px-4 md:px-0">
      <Image src="/icons/line-l.svg" alt="Linhas" width={28} height={28} />
      <Image src="/icons/line-c.svg" alt="Linhas" width={28} height={28} />
      <Image src="/icons/line-r.svg" alt="Linhas" width={28} height={28} />
    </div>
  )
}