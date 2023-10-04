import "./globals.css";
import type { Metadata } from "next";
import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cytaty 5C (2019-2024)",
  description: "Ściśle tajne zbiorowisko cytatów.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body
        className={`
          min-h-screen bg-gradient-to-r from-slate-100 to-slate-200
          `}
        // ${lora.className}
      >
        {children}
      </body>
    </html>
  );
}
