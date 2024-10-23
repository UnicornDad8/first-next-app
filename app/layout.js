import "./globals.css";

export const metadata = {
  title: "NextJS Course App",
  description:
    "in this layout file you can use the metadata to populate data in the head section of the page, the layout is like a wrapper around the page content.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
