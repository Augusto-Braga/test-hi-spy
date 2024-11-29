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
        <div className="h-screen relative flex flex-col">
          <Header />
          <main className="flex-grow flex">{children}</main>
          <div className="absolute bottom-0 w-full">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
