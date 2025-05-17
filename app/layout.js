import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ConvexClientProvider } from "@/components/ConvexClientProvider";

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
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.className}`}
      >
        <ConvexClientProvider>
        <Header />
      <main className="min-h-screen">
        {children}
      </main>
      </ConvexClientProvider>
      </body>
    </html>
  );
}
