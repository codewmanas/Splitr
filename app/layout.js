import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Splitr",
  description: "Smartest way to Split Expenses With Friends",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body
        className={`${inter.className}`}
      >
        <Header />
      <main className="min-h-screen">
        {children}
      </main>
      </body>
    </html>
  );
}
