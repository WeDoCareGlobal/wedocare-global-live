import type { Metadata } from "next"
import "./styles/globals.css"

export const metadata: Metadata = {
  title: "We Do Care Global",
  description: "Seven open engineering systems for governed enterprise AI",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/logo-icon.svg" />
        <link rel="canonical" href="https://wedocare-global.com/" />
        <meta name="theme-color" content="#0a0b0c" />
      </head>
      <body className="antialiased">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <a href="/" className="flex items-center gap-2 brand text-xl font-bold tracking-wider">
                <img src="/logo-icon.svg" width="32" height="32" alt="" />
                <span className="serif">WE DO CARE <span className="text-sm font-sans tracking-[0.36em] text-bone/70">GLOBAL</span></span>
              </a>
              <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-bone/80">
                <a href="/" className="text-white">Home</a>
                <a href="/systems">Systems</a>
                <a href="/docs">Docs</a>
                <a href="#contact" className="text-white">Contact</a>
              </nav>
              <a href="#contact" className="border border-brass-500 text-brass-500 px-4 py-2 rounded hover:bg-brass-500 hover:text-black transition">
                Let's talk
              </a>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-white/10 bg-black py-12 text-bone/60 text-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p>We Do Care Global — governed enterprise AI. Open-source Apache-2.0.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
