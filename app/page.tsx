import { Database, Github } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "jax - the permissionlessly incentivized file storage layer for Ethereum",
  description:
    "jax provides a decentralized storage network where anyone can participate as a storage provider and earn rewards. Built on Ethereum, it ensures your files remain accessible, censorship-resistant, and secure.",
  openGraph: {
    title: "jax - the permissionlessly incentivized file storage layer for Ethereum",
    description: "jax provides a decentralized storage network where anyone can participate as a storage provider and earn rewards. Built on Ethereum, it ensures your files remain accessible, censorship-resistant, and secure.",
  },
}

export default function Home() {
  return (
    <div className="dark flex min-h-screen flex-col bg-black text-slate-300 font-mono">
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            <span className="text-xl font-bold text-white">jax</span>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:text-white transition-colors"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>
        </div>
      </header>

      <main className="container mx-auto flex flex-1 flex-col items-center justify-center px-4 text-center">
        <div className="max-w-2xl space-y-12">
          <div className="flex flex-col items-center space-y-6">
            <Database className="h-16 w-16 text-white" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal leading-tight text-white">
              a permissionlessly incentivized file storage layer for Ethereum
            </h1>
          </div>

          <p className="text-sm sm:text-base leading-relaxed">
            jax provides a decentralized storage network where anyone can participate as a storage provider and earn
            rewards. Built on Ethereum, it ensures your files remain accessible, censorship-resistant, and secure.
          </p>
        </div>
      </main>

      <footer className="container mx-auto border-t border-gray-800 px-4 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">&copy; {new Date().getFullYear()} jax protocol</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-gray-600 hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="text-xs text-gray-600 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="text-xs text-gray-600 hover:text-white transition-colors">
              Docs
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

