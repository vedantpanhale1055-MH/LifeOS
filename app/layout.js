import "./globals.css";

export const metadata = {
  title: "LifeOS",
  description: "Your intelligent life operating system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}