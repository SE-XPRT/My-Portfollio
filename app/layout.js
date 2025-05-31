import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // Ajoute les poids que tu veux utiliser
  variable: "--font-roboto",
  display: "swap",
});

export const metadata = {
  title: "Portfolio | Développeur Web Full Stack",
  description:
    "Portfolio de développeur web full stack spécialisé en React, Next.js et Node.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={roboto.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
