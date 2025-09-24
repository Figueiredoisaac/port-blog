import { cn } from "@/utils/cn";
import BgGradient from "../Common/BgGradient";
import Avatar from "./Avatar";
import Descricao from "./Descricao";
import Lines from "./Lines";
import Saudacao from "./Saudacao";

export default function Hero() {
  return (
    <section
      className={cn(
        "relative flex flex-col justify-center items-center py-10",
        "min-h-[770px] space-y-6",
      )}
    >
      <BgGradient className="absolute z-[-1] inset-0 w-full h-full" />
      <Avatar />
      <Saudacao />
      <Descricao />
      <Lines />
    </section>
  );
}
