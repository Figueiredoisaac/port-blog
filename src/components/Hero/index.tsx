import { cn } from "@/utils/cn";
import Avatar from "./Avatar";
import Descricao from "./Descricao";
import Saudacao from "./Saudacao";

export default function Hero() {
  return (
    <section
      className={cn(
        "flex flex-col justify-center items-center py-10",
        "bg-[url(/bg-colors.webp)] bg-no-repeat bg-contain bg-center",
        "min-h-[770px] space-y-6",
      )}
    >
      <Avatar />
      <Saudacao />
      <Descricao />
    </section>
  );
}
