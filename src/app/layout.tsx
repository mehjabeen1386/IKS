import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prakruti | Ayurveda Classification System",
  description: "A transparent, rule-based expert system for exploring Ayurvedic prakruti patterns.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
