export default function About() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <section className="relative bg-slate-950 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-slate-400">
            Senior Software Engineer passionate about pushing the boundaries of interactive systems
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-8 md:p-12">
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              I'm a Senior Software Engineer with over 10 years of experience building real-time 3D 
              applications for public sector, training, and commercial applications. My work focuses on the 
              intersection of game engine technology, system architecture, and emerging AI capabilities.
            </p>

            <h2 className="text-3xl font-bold text-slate-100 mt-12 mb-4">Background</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              My journey started at the University of Alabama in Huntsville, where I developed a passion 
              for interactive systems and robotics. Since then, I've worked on everything from autonomous 
              vehicles to VR training systems to AI-powered game development tools.
            </p>

            <h2 className="text-3xl font-bold text-slate-100 mt-12 mb-4">What I Do</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Currently at HigherEchelon, I lead technical initiatives for the Army Game Studio, including:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              {[
                'Architecting LLM integration systems ($2M funding)',
                'Leading Unity training platform maturation',
                'Building deployable AI infrastructure',
                'Designing next-generation visualization tools'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-cyan-500/10 border border-cyan-500/20 p-4 rounded-lg">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-slate-100 mt-12 mb-4">Technical Philosophy</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              I believe in building systems that are performant, maintainable, and deliver measurable value. 
              Whether it's deterministic physics simulation or networked multiplayer architecture, I focus 
              on solutions that work reliably in production environments while pushing technical boundaries.
            </p>

            <h2 className="text-3xl font-bold text-slate-100 mt-12 mb-4">Leadership</h2>
            <p className="text-slate-300 leading-relaxed">
              When I'm not coding, I'm exploring emerging technologies and mentoring other developers. I 
              believe in sharing knowledge and contributing to the broader engineering community is 
              the only way to achieve success.
            </p>

            <h2 className="text-3xl font-bold text-slate-100 mt-12 mb-4">Beyond Code</h2>
            <p className="text-slate-300 leading-relaxed">
              Outside the office I'm regularly exploring emerging technologies and experimenting to identify 
              real world results. I like to apply my technical skills to other domains like horticulture, 
              which gives me a chance to step away from the keyboard. I also enjoy hiking, reading, playing music, and cooking.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}