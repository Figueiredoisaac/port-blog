import type { Metadata } from "next";
import { Chakra_Petch, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Common/Header";

const chakraPetch = Chakra_Petch({
  variable: '--font-chakra-petch',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: '%s | Fernanda Mascheti',
    default: 'Fernanda Mascheti',
  },
  description: "Eu ensino sobre programação e tecnologia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${chakraPetch.variable} ${inter.variable} antialiased scroll-smooth`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
