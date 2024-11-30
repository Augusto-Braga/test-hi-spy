"use client";

import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow mb-5">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
