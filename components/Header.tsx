'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  
  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-slate-100 font-mono hover:text-cyan-400 transition-colors">
            <span className="text-cyan-400">visitor@timfinn.dev</span>
            <span className="text-slate-100">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-slate-100">$</span>
            <span className="text-cyan-400 animate-pulse"> _</span>
          </Link>
          <div className="flex gap-8">
            {[
              { href: '/', label: 'Home' },
              { href: '/projects', label: 'Projects' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact' }
            ].map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`font-medium transition-all relative group ${
                  pathname === link.href 
                    ? 'text-cyan-400' 
                    : 'text-slate-400 hover:text-cyan-400'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-400 transform origin-left transition-transform ${
                  pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}