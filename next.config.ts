import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next 16 writes AGENTS.md / CLAUDE.md into the repo root on `next dev`.
  // This site does not need them checked in.
  agentRules: false,
};

export default nextConfig;
