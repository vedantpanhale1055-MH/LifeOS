import "./globals.css";

export const metadata = {
  title: "LifeOS",
  description: "Your life. Organized intelligently.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}