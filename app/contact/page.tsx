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
                href="mailto:your.email@example.com" 
                className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
              >
                your.email@example.com
              </a>
            </div>

            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-8 hover:border-cyan-500/30 transition-all">
              <div className="text-3xl mb-4">💻</div>
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
              <div className="text-3xl mb-4">💼</div>
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