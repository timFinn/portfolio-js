export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <section className="relative bg-slate-950 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-slate-400">
            Let's discuss how we can work together on your next project
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-8 hover:border-cyan-500/30 transition-all">
              <div className="text-3xl mb-4">📧</div>
              <h2 className="text-xl font-bold text-slate-100 mb-2">Email</h2>
              <a 
                href="mailto:timothyfnngn@gmail.com" 
                className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
              >
                timothyfnngn@gmail.com
              </a>
            </div>

            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-8 hover:border-cyan-500/30 transition-all">
              <div className="text-3xl mb-4"><img src="github-light.svg" width={32} height={32} /></div>
              <h2 className="text-xl font-bold text-slate-100 mb-2">GitHub</h2>
              <a 
                href="https://github.com/timfinn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
              >
                github.com/timfinn
              </a>
            </div>

            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-8 hover:border-cyan-500/30 transition-all">
              <div className="text-3xl mb-4"><img src="linkedin.svg" width={32} height={32} /></div>
              <h2 className="text-xl font-bold text-slate-100 mb-2">LinkedIn</h2>
              <a 
                href="https://linkedin.com/in/timothyfinnegan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
              >
                linkedin.com/in/timothyfinnegan
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-slate-100 mb-6">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-800 border-2 border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-slate-800 border-2 border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Message</label>
                <textarea 
                  rows={5}
                  className="w-full bg-slate-800 border-2 border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-cyan-600 text-white px-6 py-4 rounded-lg font-bold hover:bg-cyan-500 transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-cyan-500/20"
              >
                Send Message
              </button>
              <p className="text-sm text-slate-500 text-center">
                Note: Set up form handling with Formspree or Resend
              </p>
            </form>
          </div>
        </div>

        {/* Resume Download Section */}
        <div className="mt-12 bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/10 rounded-full mb-4">
            <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-100 mb-2">Need My Resume?</h2>
          <p className="text-slate-400 mb-6">
            Download a PDF copy of my full resume with detailed work history and technical skills.
          </p>
          <a
            href="/resume.pdf"
            download="Timothy_Finnegan_Resume.pdf"
            className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-600 hover:bg-cyan-500 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg shadow-cyan-500/20"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume (PDF)
          </a>
        </div>
        
        {/* Availability Notice */}
        <div className="mt-12 bg-emerald-500/10 border-2 border-emerald-500/20 rounded-xl p-8 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-emerald-300 font-bold">Available for new opportunities</span>
          </div>
          <p className="text-slate-400">
            Open to senior engineering roles, technical leadership positions, and consulting opportunities 
            in game engines, AI integration, and real-time systems.
          </p>
        </div>
      </section>
    </div>
  )
}