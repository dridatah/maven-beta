import "./globals.css";

export const metadata = {
  title: "Mavenstry",
  description: "Mavenstry landing page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
