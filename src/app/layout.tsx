import { lato, cabin } from "@/styles/fonts";
import "./globals.css";

export const metadata = {
  title: "Bugaboo",
  description: "The best bug tracker in the world!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
