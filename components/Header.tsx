// ===========================================
// components/Header.tsx
// ===========================================
import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-900">
          YourName
        </Link>
        <div className="flex gap-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/projects" className="text-gray-700 hover:text-blue-600 transition">
            Projects
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}