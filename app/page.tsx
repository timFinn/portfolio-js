import Link from 'next/link'

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white overflow-hidden">
        {/* Grid pattern background */}
        <div className="absolute inset-0 grid-pattern opacity-40" />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950" />
        
        {/* Accent glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-6xl mx-auto px-4 py-32">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
              <span className="text-cyan-300 text-sm font-mono font-medium">AVAILABLE FOR HIRE</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-slate-100">Building the future of</span>
              <span className="block gradient-text glow-text">interactive systems</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl leading-relaxed">
              Senior Software Engineer architecting high-performance real-time 3D applications. 
              Specializing in <span className="text-cyan-400 font-semibold">AI integration</span>, 
              <span className="text-cyan-400 font-semibold"> XR/VR</span>, and 
              <span className="text-cyan-400 font-semibold"> embedded systems</span> with 10 years of proven impact.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Link 
                href="/projects" 
                className="group px-8 py-4 bg-cyan-600 hover:bg-cyan-500 rounded-lg font-semibold transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  View Projects
                  <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
              
              <a
                href="/resume.pdf"
                download="Timothy_Finnegan_Resume.pdf"
                className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-cyan-500/50 rounded-lg font-semibold transition-all duration-200 inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
              
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-cyan-500/50 rounded-lg font-semibold transition-all duration-200"
              >
                Get in Touch
              </Link>
            </div>

            {/* Key Achievement Highlight */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
              <div className="flex items-center justify-center w-10 h-10 bg-emerald-500/20 rounded-full">
                <span className="text-emerald-300 text-xl">💰</span>
              </div>
              <div>
                <div className="text-emerald-300 font-semibold text-lg">$2M in Secured Funding</div>
                <div className="text-slate-500 text-sm">Through AI/LLM integration initiative</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { number: '10+', label: 'Years Experience', sublabel: 'Building real-time 3D systems' },
            { number: '$2M', label: 'Funding Secured', sublabel: 'Through technical leadership' },
            { number: '15+', label: 'Major Projects', sublabel: 'From concept to production' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
            >
              <div className="text-5xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-slate-300 font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-slate-500">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Expertise Section */}
      <section className="max-w-6xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Core <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Specialized skills in cutting-edge technologies and technical leadership
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: '🎮',
              title: 'Game Engines',
              description: 'Unreal Engine 4/5, Unity DOTS, custom engine architecture',
              color: 'cyan'
            },
            {
              icon: '🤖',
              title: 'AI Integration',
              description: 'LLM infrastructure, AI-powered tools, emerging technologies',
              color: 'purple'
            },
            {
              icon: '👥',
              title: 'Technical Leadership',
              description: 'Team management, architecture design, stakeholder coordination',
              color: 'blue'
            },
            {
              icon: '🌐',
              title: 'Real-time Systems',
              description: 'Networked multiplayer, deterministic simulation, low-latency networking',
              color: 'green'
            },
            {
              icon: '🥽',
              title: 'XR/VR Development',
              description: 'Meta Quest, HoloLens, mixed reality training applications',
              color: 'pink'
            },
            {
              icon: '🏛️',
              title: 'Public Sector Technology',
              description: 'Training systems, data-rich interfaces, R&D',
              color: 'orange'
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="group bg-slate-900/30 backdrop-blur border border-slate-800 rounded-xl p-8 hover:border-cyan-500/30 hover:bg-slate-900/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="bg-slate-900/50 backdrop-blur border-y border-slate-800 py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
              Featured <span className="gradient-text">Work</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Highlights from my portfolio of real-time systems and game engine projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: 'LLM Integration for Game Engines',
                impact: '$2M funding secured',
                tech: 'Unity • Python • Microservices',
                gradient: 'from-cyan-500 to-blue-600'
              },
              {
                title: 'Uncrewed Command & Control Interface',
                impact: 'Real-time tactical operations',
                tech: 'UE5 • iOS • Protobuf • Multiplayer',
                gradient: 'from-purple-500 to-pink-600'
              }
            ].map((project, index) => (
              <div 
                key={index}
                className="relative group bg-slate-900/80 backdrop-blur border border-slate-800 rounded-xl p-8 overflow-hidden hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
                <h3 className="relative text-2xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <div className="relative inline-block px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-medium mb-4">
                  {project.impact}
                </div>
                <p className="relative text-slate-400 font-mono text-sm">{project.tech}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-600 hover:bg-cyan-500 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg shadow-cyan-500/20"
            >
              View All Projects
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 py-24">
        <div className="relative bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-700 rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl shadow-cyan-500/20 overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let&apos;s Build Something Amazing
            </h2>
            <p className="text-xl mb-8 text-cyan-50 max-w-2xl mx-auto">
              Looking for a senior engineer who can bridge cutting-edge R&D with production delivery? 
              Let&apos;s talk about your next project.
            </p>
            <Link 
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-slate-900 rounded-lg font-bold hover:bg-slate-100 transition-all duration-200 hover:scale-105 shadow-xl"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}