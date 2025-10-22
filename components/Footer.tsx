import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-mono">
              <span className="text-cyan-400">{'<'}</span>
              Timothy Finnegan
              <span className="text-cyan-400">{' />'}</span>
            </h3>
            <p className="text-slate-400">
              Senior Software Engineer specializing in game engines and real-time 3D systems.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['Projects', 'About', 'Contact'].map((link) => (
                <Link 
                  key={link}
                  href={`/${link.toLowerCase()}`} 
                  className="block text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  {link}
                </Link>
              ))}
              {/* Add Resume Link */}
              <a 
                href="/resume.pdf"
                download="Timothy_Finnegan_Resume.pdf"
                className="block text-slate-400 hover:text-cyan-400 transition-colors"
              >
                Resume (PDF)
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="space-y-2">
              <a href="https://linkedin.com/in/timothyfinnegan" target="_blank" rel="noopener noreferrer" className="block text-slate-400 hover:text-cyan-400 transition-colors">
                <img src="linkedin.svg" width={64} height={64} />
              </a>
              <a href="https://github.com/timfinn" target="_blank" rel="noopener noreferrer" className="block text-slate-400 hover:text-cyan-400 transition-colors">
                <img src="github-light.svg" width={64} height={64} />
              </a>
              <a href="mailto:timothyfnngn@gmail.com" className="block text-slate-400 hover:text-cyan-400 transition-colors">
                Email
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-center text-slate-500">
          <p>© {new Date().getFullYear()} Timothy Finnegan. Built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}