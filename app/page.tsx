// ===========================================
// app/page.tsx - Home Page
// ===========================================
import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="mb-20">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">
          Hi, I'm Tim
        </h1>
        <p className="text-2xl text-gray-600 mb-6">
          Senior Software Engineer specializing in game engines and real-time 3D systems
        </p>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl">
          I build high-performance interactive applications using Unreal Engine, Unity, and modern tech stacks. 
          With 10 years of experience, I focus on technical leadership, system architecture, and emerging 
          technologies including AI/LLM integration for defense and commercial applications.
        </p>
        <div className="flex gap-4">
          <Link 
            href="/projects" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            View Projects
          </Link>
          <Link 
            href="/contact" 
            className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="border rounded-lg p-6">
          <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
          <div className="text-gray-700">Years Experience</div>
        </div>
        <div className="border rounded-lg p-6">
          <div className="text-3xl font-bold text-blue-600 mb-2">$2.6M</div>
          <div className="text-gray-700">Funding Secured</div>
        </div>
        <div className="border rounded-lg p-6">
          <div className="text-3xl font-bold text-blue-600 mb-2">Multiple</div>
          <div className="text-gray-700">Technical Lead Roles</div>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Core Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Game Engines</h3>
            <p className="text-gray-600">Unreal Engine 4/5, Unity, custom engine development</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Technical Leadership</h3>
            <p className="text-gray-600">Team management, architecture design, stakeholder coordination</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Real-time Systems</h3>
            <p className="text-gray-600">Networked multiplayer, deterministic simulation, XR/VR</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">AI Integration</h3>
            <p className="text-gray-600">LLM infrastructure, AI-powered tools, emerging tech</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">DevOps</h3>
            <p className="text-gray-600">CI/CD pipelines, Docker, cloud infrastructure</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Defense Tech</h3>
            <p className="text-gray-600">Training systems, tactical interfaces, R&D</p>
          </div>
        </div>
      </section>
    </div>
  )
}