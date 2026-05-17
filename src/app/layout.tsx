import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://enteropia.com"),
  title: {
    default: "Enteropia | Secure. Scale. Transform.",
    template: "%s | Enteropia",
  },
  description: "Modern IT, Cloud & Cybersecurity Solutions for Growing Businesses. Enteropia helps startups build secure, scalable digital infrastructure.",
  keywords: ["IT Solutions", "Cloud Computing", "Cybersecurity", "Web Development", "Managed IT", "Server Management"],
  authors: [{ name: "Enteropia Team" }],
  creator: "Enteropia",
  publisher: "Enteropia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://enteropia.com",
    siteName: "Enteropia",
    title: "Enteropia | Modern IT & Cybersecurity Solutions",
    description: "Build secure and scalable digital infrastructure with Enteropia.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Enteropia - Secure. Scale. Transform.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enteropia | Modern IT & Cybersecurity Solutions",
    description: "Build secure and scalable digital infrastructure with Enteropia.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${poppins.variable} selection:bg-cyan-500/30`}
    >
      <body className="min-h-screen bg-primary-dark text-white font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <SmoothScroll>
            <div className="relative flex min-h-screen flex-col">
              <div className="fixed inset-0 cyber-grid pointer-events-none opacity-20" />
              <main className="relative flex-1">{children}</main>
            </div>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
