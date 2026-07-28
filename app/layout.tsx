import type { Metadata, Viewport } from "next";
import { GeistMono, GeistSans } from "geist/font";
import { Orbitron } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vajrix.ai"),
  title: {
    default: "Vajrix AI — Intelligence, Engineered",
    template: "%s — Vajrix AI",
  },
  description:
    "Vajrix AI builds intelligent products, enterprise platforms, and scalable technology systems for ambitious organizations.",
  applicationName: "Vajrix AI",
  keywords: [
    "artificial intelligence",
    "enterprise software",
    "intelligent automation",
    "digital transformation",
    "product engineering",
  ],
  openGraph: {
    title: "Vajrix AI — Intelligence, Engineered",
    description:
      "Enterprise-grade intelligence and software systems built for what comes next.",
    type: "website",
    url: "https://vajrix.ai",
    siteName: "Vajrix AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vajrix AI — Intelligence, Engineered",
    description:
      "Enterprise-grade intelligence and software systems built for what comes next.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05060a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} ${orbitron.variable}`}>
      <body>{children}</body>
    </html>
  );
}
