// ===========================================
// app/about/page.tsx - About Page
// ===========================================
export default function About() {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">About Me</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 mb-6">
            I'm a Senior Software Engineer with over 10 years of experience building real-time 3D 
            applications for defense, training, and commercial applications. My work focuses on the 
            intersection of game engine technology, system architecture, and emerging AI capabilities.
          </p>
  
          <h2 className="text-2xl font-bold mt-8 mb-4">Background</h2>
          <p className="text-gray-700 mb-6">
            My journey started at the University of Alabama in Huntsville, where I developed a passion 
            for interactive systems and robotics. Since then, I've worked on everything from autonomous 
            vehicles to VR training systems to AI-powered game development tools.
          </p>
  
          <h2 className="text-2xl font-bold mt-8 mb-4">What I Do</h2>
          <p className="text-gray-700 mb-4">
            Currently at HigherEchelon, I lead technical initiatives for the Army Game Studio, including:
          </p>
          <ul className="list-disc ml-6 text-gray-700 mb-6">
            <li>Architecting LLM integration systems that secured $2.6M in follow-on funding</li>
            <li>Leading Unity training platform maturation efforts</li>
            <li>Building deployable AI infrastructure for game engines</li>
            <li>Designing next-generation scenario building tools</li>
          </ul>
  
          <h2 className="text-2xl font-bold mt-8 mb-4">Technical Philosophy</h2>
          <p className="text-gray-700 mb-6">
            I believe in building systems that are performant, maintainable, and deliver measurable value. 
            Whether it's deterministic physics simulation or networked multiplayer architecture, I focus 
            on solutions that work reliably in production environments.
          </p>
  
          <h2 className="text-2xl font-bold mt-8 mb-4">Beyond Code</h2>
          <p className="text-gray-700">
            When I'm not coding, I'm exploring new technologies, mentoring junior developers, and staying 
            current with advancements in AI, real-time rendering, and interactive systems.
          </p>
        </div>
      </div>
    )
  }