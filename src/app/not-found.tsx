import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] gap-4">
      <h2 className="text-2xl font-title font-bold">Não Encontrado</h2>
      <p className="text-neutral dark:text-neutral-400">
        Não foi possível encontrar o recurso solicitado
      </p>
      <Link className="text-secondary underline" href="/">
        Voltar para a Home
      </Link>
    </div>
  );
}
