import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "OS-Explorer: Menjelajah Jantung Komputer | Multimedia Pembelajaran Interaktif",
  description: "Media Pembelajaran Interaktif (MPI) berkonsep gamifikasi tentang Sistem Operasi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${plusJakartaSans.variable} font-sans min-h-screen flex flex-col justify-between selection:bg-sky-200 selection:text-sky-800`}>
        {children}
      </body>
    </html>
  );
}
