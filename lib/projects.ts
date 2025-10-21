// lib/projects.ts

export interface Project {
  id: string
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
    id: 'llm-integration',
    title: 'LLM Integration for Game Engines',
    description: 'Architected AI-powered training system for government project, securing $2M in follow-on funding. Built production infrastructure and designed plugin architecture for seamless integration.',
    tech: ['Unity', 'Python', 'Kubernetes', 'Langchain', 'Microservices'],
    highlight: '$2M Funding Secured',
    image: '/projects/llm-integration.png',
    year: '2023-2024',
    role: 'Technical Lead & Architect',
    detailedDescription: `Led the architectural design and implementation of an AI-powered content generation system for Unity-based training applications. The system enables non-technical subject matter experts to generate realistic training scenarios using natural language, significantly reducing content creation time and costs.
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
      'Implemented hybrid approach with local models for low-latency tasks and cloud models for complex generation'
    ],
    outcomes: [
      '$2M in secured follow-on funding',
      '70% reduction in scenario creation time for subject matter experts',
      'Deployed system now used by 5+ training programs',
      'Architecture patterns reused across 3 other projects',
      'Reduced content development costs by approximately 40%'
    ],
    images: [
      '/projects/llm-integration.png',
    ]
  },
  {
    id: 'training-maturation',
    title: 'Training Platform Maturation',
    description: 'Leading technical modernization of Unity training system after gap analysis secured contract award. Architecting improvements to ensure stability, performance, and maintainability.',
    tech: ['Unity', 'Requirements Definition', 'System Architecture', 'DevOps'],
    highlight: 'Contract Award',
    year: '2024-Present',
    role: 'Technical Lead',
    detailedDescription: `Conducting comprehensive technical assessment and leading the maturation of a Unity-based training platform used by multiple organizations. The gap analysis identified critical architectural and technical debt issues that needed to be addressed before the platform could scale to wider production use.
      Leading the requirements definition process with stakeholders across multiple organizations to prioritize improvements that deliver the most value. Architecting solutions for system stability, performance optimization, and long-term maintainability while ensuring minimal disruption to ongoing operations and training schedules.
      The systematic approach to analyzing and documenting the current state, along with a clear roadmap for improvements, was instrumental in securing the contract award for the maturation work.`,
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
      'Gap analysis secured contract award for platform maturation',
      'Defined clear technical roadmap for next 18 months with stakeholder buy-in',
      'Established DevOps practices reducing deployment time by 50%',
      'Reduced critical bug count by 60% in first quarter',
      'Improved system uptime from 95% to 99.5%'
    ],
  },
  {
    id: 'baseball-training',
    title: 'Deterministic Baseball Simulation',
    description: 'Led development of mobile training application using Unity DOTS, integrating computer vision pose estimation with deterministic physics for frame-perfect replay and analysis.',
    tech: ['Unity', 'DOTS', 'iOS', 'Cocoapods', 'Computer Vision'],
    highlight: 'Technical Lead',
    year: '2021-2022',
    role: 'Technical Lead',
    detailedDescription: `Led a 4-person engineering team developing an innovative mobile baseball training application that combines computer vision pose estimation with deterministic physics simulation. The application enables coaches and players to capture batting mechanics using a standard smartphone camera, then replay and analyze the motion with frame-perfect accuracy.
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
      'Implemented noise filtering and data smoothing algorithms to clean CV output while preserving key motion characteristics',
      'Leveraged Unity DOTS architecture to run simulation and rendering on separate threads with minimal coupling',
      'Developed native plugin using CocoaPods to bridge Objective-C library with Unity, handling marshalling and memory management',
      'Designed clear abstraction layers separating physics simulation from visual representation',
      'Created extensive automated test suite validating deterministic replay across device types',
      'Established Jenkins-based CI/CD pipeline with TestFlight integration for nightly builds and automated testing'
    ],
    outcomes: [
      'Achieved <2cm accuracy in motion reconstruction validation tests',
      'Successfully maintained 240fps simulation with 60fps rendering on target devices',
      'Reduced build and deployment cycle from 3 days to 4 hours, enabling rapid iteration',
      'Delivered production-ready application used by professional training organizations',
      'System architecture reused for two subsequent mobile projects'
    ],
  },
  {
    id: 'crewed-uncrewed',
    title: 'Uncrewed Command & Control Interface',
    description: 'Designed networked tactical interface for uncrewed operations using Unreal Engine 5 on dual iPads. Implemented custom RPCs and Protobuf messaging with <50ms latency for mission-critical operations.',
    tech: ['Unreal Engine 5', 'iOS', 'Protobuf', 'Networking', 'Cesium'],
    highlight: 'Advanced Visualization',
    year: '2022-2023',
    role: 'Technical Lead',
    detailedDescription: `Architected and implemented a real-time command-and-control interface for coordinating uncrewed operations using Unreal Engine 5 on networked iPads. The system enables operators to visualize and control multiple assets simultaneously while streaming real-time tactical data from external systems.
      The interface needed to support two networked tablets working in concert, with operators able to seamlessly hand off control and share situational awareness. Designed custom networking layer using Protobuf for efficient message serialization and implemented low-latency RPCs for mission-critical operations where milliseconds matter.
      Integrated Cesium geospatial visualization engine to render accurate terrain data and overlay real-time asset positions, requiring optimization to maintain performance while streaming large terrain datasets over potentially constrained network connections.`,
    challenges: [
      'Achieving <50ms end-to-end latency for mission-critical message delivery over WiFi',
      'Rendering large-scale terrain datasets (100+ km²) on mobile hardware at 60fps',
      'Designing intuitive multi-touch interface for complex tactical operations without overwhelming operators',
      'Synchronizing state across 10+ networked devices in real-time with consistency guarantees',
      'Integrating with legacy tactical messaging systems with fixed message formats',
      'Maintaining system responsiveness during network disruptions or high latency conditions'
    ],
    solutions: [
      'Implemented custom Protobuf-based RPC system optimized for low latency with message priority queuing',
      'Designed efficient tile streaming with predictive loading based on operator viewing patterns and mission context',
      'Developed gesture-based interaction patterns validated through iterative user testing with actual operators',
      'Built robust state synchronization using deterministic update patterns with conflict resolution',
      'Created translation layer abstracting legacy message formats with bidirectional conversion',
      'Implemented graceful degradation with local prediction and reconciliation for network issues'
    ],
    outcomes: [
      'Successfully demonstrated system to end users in realistic field conditions',
      'Achieved consistent <50ms latency even under network stress testing',
      'Maintained solid 60fps rendering with 100+ km² terrain coverage',
      'Received positive user feedback on interface usability and responsiveness from operators',
      'System architecture patterns adopted for two follow-on projects'
    ],
  },
  {
    id: 'nfl-vr',
    title: 'VR Football Demo Management',
    description: 'Built demo orchestration system for NFL Pro Era, enabling real-time control of 20+ scenarios. Created CloudXR streaming client for wireless Meta Quest demos at conventions.',
    tech: ['Unity', 'Meta Quest', 'CloudXR', 'OSC', 'JNI'],
    highlight: 'Cool Tools',
    image: '/projects/nfl-vr.jpg',
    year: '2021-2022',
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
    title: 'XR Pilot Vehicle Interface',
    description: 'Developed experimental mixed reality cockpit interface for aviation applications using Unreal Engine 4. Created 3D spatial UI with gesture controls through 12+ design iterations.',
    tech: ['Unreal Engine 4', 'XR', 'Vive Pro', 'C++'],
    highlight: 'Rapid Prototyping',
    year: '2020-2021',
    role: 'Research Engineer',
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
]