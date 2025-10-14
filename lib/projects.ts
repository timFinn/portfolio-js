
// ===========================================
// lib/projects.ts - Project Data
// ===========================================
export const projects = [
    {
      id: 'llm-integration',
      title: 'LLM Integration for Game Engines',
      description: 'Architected AI-powered content generation system for Unreal Engine 5, securing $2.6M in follow-on funding. Built production infrastructure with Docker and designed plugin architecture for seamless editor integration.',
      tech: ['Unreal Engine 5', 'Python', 'Docker', 'LLM APIs', 'C++'],
      // image: '/projects/llm-integration.jpg', // Add your screenshots
    },
    {
      id: 'baseball-training',
      title: 'Deterministic Baseball Simulation',
      description: 'Led development of mobile training application using Unity DOTS, integrating computer vision pose estimation with deterministic physics for frame-perfect replay and analysis.',
      tech: ['Unity', 'DOTS', 'C#', 'iOS', 'Computer Vision'],
      // image: '/projects/baseball.jpg',
    },
    {
      id: 'crewed-uncrewed',
      title: 'Command & Control Interface',
      description: 'Designed networked tactical interface for drone operations using Unreal Engine 5 on dual iPads. Implemented custom RPCs and Protobuf messaging with <50ms latency for mission-critical operations.',
      tech: ['Unreal Engine 5', 'iOS', 'Protobuf', 'Networking', 'Cesium'],
      // image: '/projects/military-interface.jpg',
    },
    {
      id: 'nfl-vr',
      title: 'VR Football Demo Management',
      description: 'Built demo orchestration system for NFL Pro Era VR game, enabling real-time control of 20+ scenarios. Created CloudXR streaming client for wireless Meta Quest demos at conventions.',
      tech: ['Unity', 'Meta Quest', 'CloudXR', 'OSC', 'JNI'],
      // image: '/projects/nfl-vr.jpg',
    },
    {
      id: 'xr-cockpit',
      title: 'XR Pilot Vehicle Interface',
      description: 'Developed experimental mixed reality cockpit interface for defense applications using Unreal Engine 4. Created 3D spatial UI with gesture controls through 12+ design iterations.',
      tech: ['Unreal Engine 4', 'XR', 'UMG', 'C++'],
      // image: '/projects/xr-cockpit.jpg',
    },
    {
      id: 'unity-maturation',
      title: 'Unity Training Platform Maturation',
      description: 'Leading technical modernization of Unity training system after gap analysis secured contract award. Architecting improvements to stability, performance, and maintainability.',
      tech: ['Unity', 'C#', 'System Architecture', 'DevOps'],
      // image: '/projects/unity-training.jpg',
    },
  ]