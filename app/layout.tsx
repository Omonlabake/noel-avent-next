import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";

const titre = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});
const texte = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata: Metadata = {
  title: "Vingt-Quatre — Calendriers de l'Avent à offrir",
  description:
    "Des calendriers de l'Avent gourmands, beauté, enfants et thé. Une offre à débloquer chaque jour jusqu'à Noël.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${titre.variable} ${texte.variable}`}>
      <body className="bg-neige font-texte text-nuit antialiased">
        {children}
      </body>
    </html>
  );
}