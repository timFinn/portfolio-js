'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import ResumeButton from './ResumeButton'

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
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
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
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
            
            {/* Resume Button - Desktop */}
            <ResumeButton variant="primary" className="ml-2" />
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-400 hover:text-cyan-400 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 border-t border-slate-800 pt-4">
            {[
              { href: '/', label: 'Home' },
              { href: '/projects', label: 'Projects' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact' }
            ].map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 px-4 rounded-lg transition-colors ${
                  pathname === link.href 
                    ? 'text-cyan-400 bg-cyan-500/10' 
                    : 'text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Resume Button - Mobile */}
            <div className="pt-2">
              <ResumeButton variant="primary" className="w-full justify-center" />
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}