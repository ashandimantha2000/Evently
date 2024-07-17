import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
 });

export const metadata: Metadata = {
  title: "Evently",
  description: "Evently is a platform for organizing events.",
  icons: {
    icon: '../public/assets/images/logo.svg'
  }
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <body className={poppins.variable}>{children}</body>
    </main>
  );
}
