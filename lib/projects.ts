// lib/projects.ts

export type ProjectCategory = 'professional' | 'personal'

export interface Project {
  id: string
  category: ProjectCategory
  title: string
  description: string
  tech: string[]
  highlight?: string
  image?: string
  // Detailed information for project pages
  detailedDescription?: string
  challenges?: string[]
  solutions?: string[]
  outcomes?: string[]
  images?: string[]
  demoUrl?: string
  repoUrl?: string
  year?: string
  role?: string
}

export const projects: Project[] = [
  {
    id: 'training-maturation',
    category: 'professional',
    title: 'Training Platform Maturation',
    description: 'Leading technical modernization of Unity training system after gap analysis. Recently secured an additional $3.5M in contract awards. Architecting improvements to ensure stability, performance, and maintainability.',
    tech: ['Unity', 'Requirements Definition', 'System Architecture', 'DevOps'],
    highlight: 'Contract Award',
    year: '2024-Present',
    role: 'Technical Lead',
    detailedDescription: `Conducting comprehensive technical assessment and leading the maturation of a Unity-based training platform used by multiple organizations. The gap analysis identified critical architectural and technical debt issues that needed to be addressed before the platform could scale to wider production use.
      Leading the requirements definition process with stakeholders across multiple organizations to prioritize improvements that deliver the most value. Architecting solutions for system stability, performance optimization, and long-term maintainability while ensuring minimal disruption to ongoing operations and training schedules.
      The systematic approach to analyzing and documenting the current state, along with a clear roadmap for improvements, was instrumental in securing the initial contract award for the maturation work.`,
    challenges: [
      'Identifying and prioritizing technical debt in a large existing codebase without comprehensive documentation',
      'Balancing new feature development with critical infrastructure improvements under tight deadlines',
      'Coordinating with multiple stakeholder groups with competing priorities and requirements',
      'Maintaining system availability and training schedules during modernization efforts',
      'Establishing objective metrics to measure improvement progress'
    ],
    solutions: [
      'Conducted systematic gap analysis documenting all technical, architectural, and process issues with risk assessments',
      'Created prioritized roadmap based on risk, business value, technical dependencies, and stakeholder input',
      'Implemented phased approach with clear milestones, success criteria, and rollback capabilities',
      'Established automated testing infrastructure and CI/CD pipelines to prevent regressions',
      'Defined measurable KPIs for performance, stability, and maintainability'
    ],
    outcomes: [
      'Gap analysis secured initial contract award for platform maturation',
      'Defined clear technical roadmap for next 18 months with stakeholder buy-in',
      'Established DevOps practices reducing deployment time by 50%',
      'Reduced critical bug count by 60% in first quarter',
      'Improved system uptime from 95% to 99.5%',
      'Product maturation led to additional $3.5M to develop additional training products'
    ],
  },
  {
    id: 'llm-integration',
    category: 'professional',
    title: 'LLM Integration for Game Engines',
    description: 'Architected AI-powered training system for government project, securing $2M in follow-on funding. Built production infrastructure and designed plugin architecture for seamless integration.',
    tech: ['Unity', 'WebGL', 'Python', 'Kubernetes', 'Langchain', 'Microservices'],
    highlight: 'Prototype to production in 8 months',
    image: '/projects/llm-integration.png',
    year: '2024-Present',
    role: 'Technical Lead & Architect',
    detailedDescription: `Led the architectural design and implementation of multiple AI-powered capabilities for Unity-based training applications. Created an underlying infrastructure that enables other developers to create their own services on top of a stable, foundational inferencing layer.
      The project required designing a scalable microservices architecture that could handle multiple concurrent LLM inference requests while maintaining low latency. Built using modern cloud-native patterns with Kubernetes orchestration, the system supports multiple LLM providers and can scale horizontally based on demand.
      The successful proof-of-concept demonstration to stakeholders resulted in $2M in follow-on funding, validating both the technical approach and business value. The system is now being deployed across multiple training programs.`,
    challenges: [
      'Managing latency and cost of LLM API calls in real-time training scenarios',
      'Designing a plugin architecture that integrated seamlessly with existing Unity workflows',
      'Ensuring output quality and consistency from LLM-generated content',
      'Scaling the system to handle multiple concurrent users and inference requests',
      'Implementing proper prompt engineering and context management for domain-specific generation',
      'Balancing between cloud costs and performance requirements'
    ],
    solutions: [
      'Implemented intelligent caching and request batching to reduce API calls by 60%',
      'Designed a modular plugin system using Unity\'s package manager with clear abstraction layers',
      'Developed validation pipelines and output post-processing to ensure content quality',
      'Built Kubernetes-based infrastructure with horizontal pod autoscaling and load balancing',
      'Created domain-specific prompt templates and fine-tuned retrieval strategies using Langchain',
      'Implemented hybrid approach with local models for low-latency inferencing'
    ],
    outcomes: [
      '$2M in secured follow-on funding',
      'Architecture patterns enable extensibility, modularity and reusability',
    ],
    images: [
      '/projects/llm-integration.png',
    ]
  },
  {
    id: 'baseball-training',
    category: 'professional',
    title: 'Deterministic Baseball Simulation',
    description: 'Led development of mobile training application using Unity DOTS, integrating computer vision pose and velocity estimation with deterministic physics for frame-perfect replay and analysis.',
    tech: ['Unity', 'DOTS', 'iOS', 'Cocoapods', 'Computer Vision'],
    highlight: 'Technical Lead',
    year: '2023-2024',
    role: 'Technical Lead & Architect',
    detailedDescription: `Led a small engineering team developing an innovative mobile baseball training application that combines computer vision pose and velocity estimation with deterministic physics simulation. The application enables coaches and players to capture batting mechanics using a standard smartphone camera, then replay and analyze the motion with frame-perfect accuracy.
      The technical challenge was creating a deterministic physics system that could reconstruct 3D motion from 2D pose estimates provided by computer vision algorithms. The system needed to run at high simulation rates (240fps) while maintaining 60fps rendering on mobile devices, requiring careful optimization of both the simulation and presentation layers.
      Architected the system using Unity's Data-Oriented Technology Stack (DOTS) to achieve the necessary performance characteristics while maintaining code maintainability.`,
    challenges: [
      'Creating deterministic physics replay from inherently noisy computer vision data',
      'Achieving 240fps simulation while maintaining 60fps rendering on mobile hardware',
      'Integrating third-party Objective-C computer vision library with Unity on iOS',
      'Architecting clean separation between simulation and presentation layers',
      'Maintaining deterministic behavior across different iOS device generations',
      'Building robust CI/CD pipeline for mobile deployment with external dependencies'
    ],
    solutions: [
      'Leveraged Unity DOTS architecture to run simulation and rendering on separate threads with minimal coupling',
      'Developed native plugin using CocoaPods to bridge Objective-C library with Unity, handling marshalling and memory management',
      'Designed clear abstraction layers separating physics simulation from visual representation',
      'Created extensive automated test suite validating deterministic replay across device types',
      'Established Jenkins-based CI/CD pipeline with TestFlight integration for nightly builds and automated testing'
    ],
    outcomes: [
      'Achieved <2cm accuracy in motion reconstruction validation tests',
      'Successfully maintained 240fps simulation with 60fps rendering on target devices',
      'Reduced build and deployment cycle from days to hours, enabling rapid iteration',
    ],
  },
  {
    id: 'crewed-uncrewed',
    category: 'professional',
    title: 'Uncrewed Command & Control Interface',
    description: 'Designed networked tactical interface for uncrewed operations using Unreal Engine 5 on dual iPads. Implemented custom RPCs and Protobuf messaging with <10ms latency for mission-critical operations.',
    tech: ['Unreal Engine 5', 'iOS', 'Protobuf', 'Networking', 'Cesium'],
    highlight: 'Advanced Visualization',
    year: '2022-2023',
    role: 'Technical Lead & Architect',
    detailedDescription: `Architected and implemented a real-time command-and-control interface for coordinating uncrewed operations using Unreal Engine 5 on networked iPads. The system enables operators to visualize and control multiple assets simultaneously while streaming real-time tactical data from external systems.
      The interface needed to support two networked tablets working in concert, with operators able to seamlessly hand off control and share situational awareness. Designed custom networking layer using Protobuf for efficient message serialization and implemented low-latency RPCs for mission-critical operations.
      Integrated Cesium geospatial visualization engine to render accurate terrain data and overlay real-time asset positions, requiring optimization to maintain performance while streaming large terrain datasets over potentially constrained network connections.`,
    challenges: [
      'Achieving <10ms end-to-end latency for mission-critical message delivery',
      'Rendering large-scale terrain datasets (100+ km²) on mobile hardware at 60fps',
      'Designing intuitive multi-touch interface for complex tactical operations without overwhelming operators',
      'Synchronizing state across 10+ networked devices in real-time with consistency guarantees',
      'Integrating with tactical messaging systems with fixed message formats',
      'Maintaining system responsiveness during network disruptions or high latency conditions'
    ],
    solutions: [
      'Implemented custom Protobuf-based RPC system optimized for low latency with message priority queuing',
      'Developed gesture-based interaction patterns validated through iterative user testing with actual operators',
      'Built robust state synchronization using deterministic update patterns with conflict resolution',
      'Created translation layer abstracting legacy message formats with bidirectional conversion',
      'Implemented graceful degradation with local prediction and reconciliation for network issues'
    ],
    outcomes: [
      'Successfully demonstrated system to end users in realistic field conditions',
      'Achieved consistent <10ms latency even under network stress testing',
      'Maintained solid 60fps rendering with 100+ km² terrain coverage',
      'Received positive user feedback on interface usability and responsiveness from operators',
      'System architecture patterns adopted for follow-on projects'
    ],
  },
  {
    id: 'nfl-vr',
    category: 'professional',
    title: 'VR Football Demo Management',
    description: 'Built demo orchestration system for NFL Pro Era, enabling real-time control of 20+ scenarios. Created CloudXR streaming client for wireless Meta Quest demos at conventions.',
    tech: ['Unity', 'Meta Quest', 'CloudXR', 'OSC', 'JNI'],
    highlight: 'Cool Tools',
    image: '/projects/nfl-vr.jpg',
    year: '2022',
    role: 'Tools Engineer',
    detailedDescription: `Developed comprehensive demo management and orchestration tools for NFL Pro Era, a commercial VR football training game. The system needed to support live demonstrations at major conventions and trade shows, where setup time was critical and reliability was paramount.
      Created tools enabling real-time control of 20+ different gameplay scenarios without performance impact, allowing demo operators to quickly respond to audience interest and showcase different features. The control system used OSC (Open Sound Control) messaging for low-latency communication between the demo control interface and the VR application.
      Implemented custom CloudXR streaming solution for wireless Meta Quest demos, solving the cable management challenge at crowded convention floors while maintaining the visual quality and low latency required for VR experiences.`,
    challenges: [
      'Enabling real-time scenario switching without frame drops or loading delays in VR',
      'Creating wireless VR streaming solution with <20ms added latency for acceptable VR experience',
      'Coordinating demo control across multiple simultaneous headsets at conventions',
      'Implementing custom multiplayer mode for standalone demos without full server infrastructure',
      'Reducing demo setup and teardown time from 30 minutes to under 5 minutes',
      'Maintaining demo reliability across 8-hour convention days with minimal technical support'
    ],
    solutions: [
      'Designed pre-loading system with scenario pooling to enable instant switching without visible loading',
      'Created Meta Quest streaming client using NVIDIA CloudXR SDK with Android JNI for native integration',
      'Built centralized demo control dashboard using OSC protocol for multi-headset coordination',
      'Implemented simplified multiplayer mode using direct peer-to-peer networking for demo scenarios',
      'Created streamlined setup workflow with automated health checks and configuration validation',
      'Added comprehensive error recovery and automatic fallbacks for common issues'
    ],
    outcomes: [
      'Reduced demo setup time from 30 minutes to under 5 minutes',
      'Achieved <20ms added latency for wireless CloudXR streaming',
      'Successfully ran demos at 5+ major conventions with 99%+ uptime',
      'Enabled 4-player simultaneous demos that impressed audiences and press',
      'Tools reused for internal playtesting and QA workflows'
    ],
  },
  {
    id: 'xr-cockpit',
    category: 'professional',
    title: 'XR Pilot Vehicle Interface',
    description: 'Developed experimental mixed reality cockpit interface for aviation applications using Unreal Engine 4. Created 3D spatial UI with gesture controls through rapid design iteration.',
    tech: ['Unreal Engine 4', 'XR', 'Vive Pro', 'C++'],
    highlight: 'Rapid Prototyping',
    year: '2020-2021',
    role: 'Technical Lead & Architect',
    detailedDescription: `Developed experimental mixed reality interface concepts for next-generation vehicle cockpits using Unreal Engine 4 and HTC Vive Pro with passthrough cameras. The research project explored how XR technology could enhance pilot situational awareness and reduce cognitive load through innovative 3D spatial interfaces.
      The iterative design process involved close collaboration with pilots and subject matter experts through weekly feedback sessions. Each iteration incorporated lessons learned from operator testing, resulting in increasingly refined interaction patterns and information layouts that balanced information density with usability.
      Created custom Unreal Engine plugin architecture to support rapid prototyping of different UI concepts and interaction models, enabling the team to quickly validate design hypotheses with real users.`,
    challenges: [
      'Designing 3D spatial UI that enhanced rather than distracted from primary flight tasks',
      'Creating intuitive gesture controls that worked reliably in operational conditions',
      'Managing information overload while displaying complex tactical and flight data in 3D space',
      'Integrating with simulation environment and peripheral hardware for realistic testing',
      'Iterating rapidly on concepts while incorporating feedback from subject matter experts',
      'Balancing visual fidelity with performance requirements for real-time operation'
    ],
    solutions: [
      'Developed modular UMG-based 3D widget system supporting rapid UI experimentation',
      'Implemented gesture recognition with contextual activation zones to reduce false positives',
      'Created information hierarchy system with progressive disclosure based on task priorities',
      'Built flexible plugin architecture supporting hot-swappable peripheral integrations',
      'Established weekly iteration cycle with structured feedback collection and prioritization',
      'Optimized rendering pipeline to maintain consistent frame rates critical for VR comfort'
    ],
    outcomes: [
      'Completed 12+ design iterations informed by pilot feedback and testing',
      'Validated key interaction concepts that influenced follow-on production programs',
      'Demonstrated feasibility of XR interfaces for high-workload operational environments',
      'Plugin architecture reused for 3 subsequent XR research projects',
      'Published findings contributed to internal design guidelines for spatial interfaces'
    ],
  },

  // ---------------------------------------------------------------------------
  // Personal and open-source work.
  // Contribution claims are scoped to git-verified authorship. Forks name their
  // upstream and state plainly which parts are not mine.
  //
  // Ordered by maturity: how production-proven each one is, judged on unattended
  // runtime, whether other things depend on it, and whether it has been through a
  // second iteration. Contributions to other people's projects come last.
  // ---------------------------------------------------------------------------

  {
    id: 'turing-cluster',
    category: 'personal',
    title: 'ARM64 Kubernetes Cluster',
    description: 'A small ARM64 Kubernetes cluster managed entirely as code, serving as the private substrate the rest of my self-hosted projects run on.',
    tech: ['Kubernetes', 'K3s', 'GitOps', 'ARM64', 'Linux'],
    highlight: 'Managed as code',
    year: 'Active 2026',
    role: 'Sole author',
    detailedDescription: `A small ARM64 Kubernetes cluster built on single-board compute modules, where every change goes through version control rather than a terminal. Nothing is configured by hand, so the cluster can be rebuilt from the repository.
      It is the substrate most of my other self-hosted work runs on, which makes it the project that taught me the most about operating systems I depend on rather than just building them.`,
  },
  {
    id: 'weather-station',
    category: 'personal',
    title: 'Weather Station Telemetry',
    description: 'An environmental sensor pipeline running on a single-board computer, collecting readings continuously and feeding both dashboards and my other projects.',
    tech: ['Python', 'Raspberry Pi', 'MQTT', 'InfluxDB', 'Grafana'],
    highlight: 'Months of uptime',
    year: 'Active 2026',
    role: 'Sole author',
    repoUrl: 'https://github.com/timFinn/weather-station',
    detailedDescription: `An environmental telemetry pipeline running on a single-board computer: sensors are read continuously, readings are stored as time series, and the results surface both on dashboards and inside my other projects.
      It has run unattended for months, which is the part that actually matters. Anything can work for an afternoon; staying up without intervention is what forces you to take error recovery seriously.`,
  },
  {
    id: 'pliny',
    category: 'personal',
    title: 'Pliny — News & Intelligence Aggregation',
    description: 'A scheduled aggregation pipeline that pulls from multiple news and open-source intelligence feeds, normalizes what it finds, and hands it to downstream readers.',
    tech: ['Python', 'Flask', 'Kubernetes', 'SQLite'],
    highlight: 'Scheduled ingestion',
    year: 'Active 2026',
    role: 'Sole author',
    detailedDescription: `A pipeline that collects from several news and open-source intelligence sources on a schedule, normalizes everything into a single consistent format, and makes it available to standard feed readers.
      The interesting problems here are the ones shared by any ingestion system that has to behave itself against third-party APIs: respecting rate limits, not re-reporting the same item twice, and deciding what to keep and what to let go.`,
  },
  {
    id: 'forgejo-mcp',
    category: 'personal',
    title: 'Forgejo MCP Server',
    description: 'A Model Context Protocol server in Go exposing 45 tools over a git forge API, so LLM agents can work with repositories, issues, pull requests and code search directly.',
    tech: ['Go', 'MCP', 'REST APIs', 'Docker'],
    highlight: '45 tools',
    year: 'Active 2026',
    role: 'Sole author',
    repoUrl: 'https://github.com/timFinn/forgejo-mcp',
    detailedDescription: `A Model Context Protocol server written in Go that gives LLM agents structured access to a git forge: repositories, issues, pull requests, files, branches, releases and code search, across 45 tools.
      It started life in TypeScript and I rewrote it in Go deliberately, trading a heavier runtime for a single static binary that is far easier to ship and run anywhere.`,
  },
  {
    id: 'local-llm-playbook',
    category: 'personal',
    title: 'Local LLM Deployment Playbook',
    description: 'Automation and a written operations guide for running language models on local hardware as an always-available, OpenAI-compatible endpoint.',
    tech: ['Ansible', 'Ollama', 'Python', 'Prometheus', 'Grafana'],
    highlight: 'On-prem inference',
    year: 'Active 2026',
    role: 'Sole author',
    detailedDescription: `Automation and an operations guide for turning local hardware into a continuously available, OpenAI-compatible inference endpoint, provisioned reproducibly rather than by hand.
      Most of the written guidance covers the decisions that are easy to get wrong when you self-host models: choosing how aggressively to quantize against the quality it costs, keeping several models resident without exhausting memory, and pinning versions so an upstream change does not quietly alter behavior.`,
  },
  {
    id: 'sdr-pi',
    category: 'personal',
    title: 'Multi-Radio Orchestration',
    description: 'Configuration-driven orchestration for running several software-defined radios at once on a single machine, including aircraft transponder reception.',
    tech: ['Ansible', 'Python', 'SDR', 'Raspberry Pi'],
    highlight: 'Config-driven',
    year: 'Active 2026',
    role: 'Sole author',
    detailedDescription: `Orchestration for running several software-defined radios simultaneously on one machine, covering aircraft transponder reception among other bands, with each radio described in configuration rather than in code.
      The recurring difficulty is that the hardware does not identify itself consistently, so the system has to handle a set of devices that are nominally interchangeable but rarely behave that way.`,
  },
  {
    id: 'inspectarr',
    category: 'personal',
    title: 'Inspectarr — Media Scanning Gate',
    description: 'A Go service that watches for incoming media files and checks them before anything is imported, built around a pluggable interface for swapping scanning engines.',
    tech: ['Go', 'Docker', 'CI/CD'],
    highlight: 'Threat model first',
    year: 'Active 2026',
    role: 'Sole author',
    detailedDescription: `A Go service that watches directories for new media files and inspects them before they are allowed through, with scanning engines sitting behind a pluggable interface so they can be swapped or combined.
      I wrote the threat model before the implementation, which is backwards from how these projects usually go and turned out to be the right order: it settled several design questions before they became rewrites.`,
  },
  {
    id: 'claude-dev',
    category: 'personal',
    title: 'Sandboxed Agent Container',
    description: 'A container for running coding agents under meaningful constraint, with separate profiles for interactive use, unattended runs, and a restricted sandbox.',
    tech: ['Docker', 'Shell', 'Linux', 'CI/CD'],
    highlight: 'Constrained by default',
    year: 'Active 2026',
    role: 'Sole author',
    detailedDescription: `A container for running coding agents with real limits on what they can reach, offering three profiles: interactive, unattended, and a restricted sandbox for anything I have not vetted.
      The motivation is straightforward. Agents are useful precisely because they act on their own, and that is the same reason they are worth boxing in before pointing them at something that matters.`,
  },
  {
    id: 'unreal-garden',
    category: 'personal',
    title: 'Unreal Engine Sensor Visualization',
    description: 'An Unreal Engine 5 client in C++ that visualizes live environmental sensor data in real time, connecting a working data pipeline to a game engine.',
    tech: ['Unreal Engine 5', 'C++', 'Real-time 3D'],
    highlight: 'Real-time data viz',
    year: 'Active 2026',
    role: 'Sole author',
    detailedDescription: `An Unreal Engine 5 client written in C++ that takes live environmental sensor readings and renders them in real time, drawing on both current values and history.
      It is the project where the two halves of my work meet: the real-time 3D engine experience from my professional background pointed at a data pipeline I built myself.`,
  },
  {
    id: 'openalice-guards',
    category: 'personal',
    title: 'OpenAlice — Risk Guards (fork)',
    description: 'Feature-branch contributor to an open-source AI trading agent platform: 28 authored commits covering risk controls, a correctness fix, and an expanded signal router. The core engine is upstream.',
    tech: ['TypeScript', 'Node.js', 'WebSockets', 'Claude Agent SDK'],
    highlight: 'Scoped contribution',
    year: 'Active 2026',
    role: 'Feature-branch contributor',
    repoUrl: 'https://github.com/timFinn/OpenAlice',
    detailedDescription: `OpenAlice is an open-source AI trading agent platform built as a TypeScript monorepo. The core engine, its registry, router and guard pipeline, is maintained upstream; my work rides on those interfaces across 28 authored commits, verified against the git log rather than estimated.
      Most of it is risk controls, limiting what the agents are permitted to do. The fix I am happiest with corrected a case where those limits were also rejecting orders that would have reduced risk, which is exactly the situation the limits exist to allow.`,
    outcomes: [
      '28 authored commits, verified against the git log',
      'Risk controls constraining agent trading behavior',
      'Correctness fix for limits blocking risk-reducing orders',
      'Signal router expanded to cover more inputs',
    ],
  },
  {
    id: 'spiderfoot-hardening',
    category: 'personal',
    title: 'SpiderFoot — Security Hardening (fork)',
    description: 'A fork of an open-source OSINT framework. My contribution is a scoped seven-commit security-hardening track, including a guard against LLM agents leaking scan data. The upstream AI layer is not my work.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
    highlight: 'Scoped contribution',
    year: 'Active 2026',
    role: 'Security-hardening contributor',
    detailedDescription: `A fork of SpiderFoot, an open-source OSINT automation framework. To be precise about what is mine: the AI layer, meaning the analysis agents, the model gateway, the vector search and the event architecture, is the upstream maintainer's work. My contribution is a seven-commit security-hardening track.
      The piece I care most about is a guard against LLM data exfiltration. Once you feed scan results into a language model, the model's output becomes a route by which sensitive findings can leave the system, and it is a route people rarely think to close. The guard fails closed, so an error stops the flow rather than quietly letting it through.`,
    outcomes: [
      'Seven authored commits, scoped to security hardening',
      'Fail-closed guard against LLM data exfiltration',
      'Single sign-on and role-based access middleware',
    ],
  },
]
