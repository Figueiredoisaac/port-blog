import Image from "next/image";

type FooterProps = {
  simple?: boolean;
};

export default function Footer({ simple = false }: FooterProps) {
  return (
    <footer className="container mx-auto">
      {!simple && (
        <div className="w-full py-10 px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex-1 lg:flex-2">
            <p className="text-secondary font-title font-semibold mb-1">
              Vamos conversar?
            </p>
            <h2 className="text-4xl lg:text-6xl font-title font-bold text-primary">
              Entre em contato
            </h2>
          </div>
          <div className="flex-1 lg:flex-1 flex flex-col gap-3 text-neutral text-base">
            <a
              href="mailto:fernandamascheti@gmail.com"
              className="flex items-center gap-2 hover:text-secondary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/icons/mail.svg" alt="Email" width={24} height={24} />
              fernandamascheti@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/fernandamascheti/"
              className="flex items-center gap-2 hover:text-secondary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/linkedin.svg"
                alt="Linkedin"
                width={24}
                height={24}
              />
              Fernanda Mascheti
            </a>
            <a
              href="https://github.com/fernandamascheti"
              className="flex items-center gap-2 hover:text-secondary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/github.svg"
                alt="Github"
                width={24}
                height={24}
              />
              fernandamascheti
            </a>
          </div>
        </div>
      )}
      <div className="text-center py-4 px-4 text-neutral">
        © Copyright {new Date().getFullYear()}. Produzido por Fernanda Mascheti
      </div>
    </footer>
  );
}
