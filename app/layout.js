import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Imad Meknani | Développeur Web Full Stack à Lyon",
  description:
    "Développeur web full stack basé à Lyon, spécialisé en React, Next.js et Node.js. Création d'applications web performantes et responsives.",
  keywords: [
    "développeur web",
    "full stack",
    "Lyon",
    "React",
    "Next.js",
    "Node.js",
    "JavaScript",
    "Se-Digitals",
  ],
  authors: [{ name: "Imad Meknani" }],
  creator: "Imad Meknani",
  publisher: "Se-Digitals",
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://se-digitals.fr",
    title: "Imad Meknani | Développeur Web Full Stack à Lyon",
    description:
      "Développeur web full stack basé à Lyon, spécialisé en React, Next.js et Node.js. Création d'applications web performantes et responsives.",
    siteName: "Se-Digitals Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Ajoute ton image OG
        width: 1200,
        height: 630,
        alt: "Se-Digitals - Imad Meknani",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Imad Meknani | Développeur Web Full Stack à Lyon",
    description:
      "Développeur web full stack basé à Lyon, spécialisé en React, Next.js et Node.js",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={poppins.variable}>
      <head>
        <link rel="canonical" href="https://se-digitals.fr" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`font-sans antialiased ${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}
