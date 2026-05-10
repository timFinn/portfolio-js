// Temporary preview page for choosing an icon library.
// Visit /icons-preview locally, then delete this file once decided.

import {
  Gamepad2,
  Joystick,
  Bot,
  Sparkles,
  BrainCircuit,
  Cpu,
  Users,
  UsersRound,
  Network,
  Radio,
  Activity,
  Zap,
  Glasses,
  ScanEye,
  Eye,
  Landmark,
  Building2,
  Shield,
  ClipboardList,
  FileText,
  Target,
  Crosshair,
  Lightbulb,
  Wrench,
  Rocket,
  TrendingUp,
  Trophy,
  Images,
  LayoutGrid,
  Mail,
} from 'lucide-react'
import {
  CubeIcon,
  SparklesIcon,
  CpuChipIcon,
  BoltIcon,
  UsersIcon,
  UserGroupIcon,
  SignalIcon,
  WifiIcon,
  GlobeAltIcon,
  EyeIcon,
  CubeTransparentIcon,
  BuildingLibraryIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon,
  ClipboardDocumentListIcon,
  DocumentTextIcon,
  FlagIcon,
  ExclamationTriangleIcon,
  LightBulbIcon,
  WrenchScrewdriverIcon,
  RocketLaunchIcon,
  TrophyIcon,
  ChartBarIcon,
  PhotoIcon,
  Squares2X2Icon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline'

type Slot = {
  label: string
  emoji: string
  lucide: { name: string; Icon: React.ComponentType<{ className?: string }> }[]
  hero: { name: string; Icon: React.ComponentType<{ className?: string }> }[]
}

const slots: Slot[] = [
  {
    label: 'Game Engines',
    emoji: '🎮',
    lucide: [
      { name: 'Gamepad2', Icon: Gamepad2 },
      { name: 'Joystick', Icon: Joystick },
    ],
    hero: [{ name: 'CubeIcon (closest)', Icon: CubeIcon }],
  },
  {
    label: 'AI Integration',
    emoji: '🤖',
    lucide: [
      { name: 'Bot', Icon: Bot },
      { name: 'BrainCircuit', Icon: BrainCircuit },
      { name: 'Sparkles', Icon: Sparkles },
      { name: 'Cpu', Icon: Cpu },
    ],
    hero: [
      { name: 'SparklesIcon', Icon: SparklesIcon },
      { name: 'CpuChipIcon', Icon: CpuChipIcon },
      { name: 'BoltIcon', Icon: BoltIcon },
    ],
  },
  {
    label: 'Technical Leadership',
    emoji: '👥',
    lucide: [
      { name: 'Users', Icon: Users },
      { name: 'UsersRound', Icon: UsersRound },
      { name: 'Network', Icon: Network },
    ],
    hero: [
      { name: 'UsersIcon', Icon: UsersIcon },
      { name: 'UserGroupIcon', Icon: UserGroupIcon },
    ],
  },
  {
    label: 'Real-time Systems',
    emoji: '🌐',
    lucide: [
      { name: 'Radio', Icon: Radio },
      { name: 'Activity', Icon: Activity },
      { name: 'Zap', Icon: Zap },
      { name: 'Network', Icon: Network },
    ],
    hero: [
      { name: 'SignalIcon', Icon: SignalIcon },
      { name: 'WifiIcon', Icon: WifiIcon },
      { name: 'GlobeAltIcon', Icon: GlobeAltIcon },
      { name: 'BoltIcon', Icon: BoltIcon },
    ],
  },
  {
    label: 'XR/VR Development',
    emoji: '🥽',
    lucide: [
      { name: 'Glasses', Icon: Glasses },
      { name: 'ScanEye', Icon: ScanEye },
      { name: 'Eye', Icon: Eye },
    ],
    hero: [
      { name: 'CubeTransparentIcon', Icon: CubeTransparentIcon },
      { name: 'EyeIcon', Icon: EyeIcon },
    ],
  },
  {
    label: 'Public Sector Technology',
    emoji: '🏛️',
    lucide: [
      { name: 'Landmark', Icon: Landmark },
      { name: 'Building2', Icon: Building2 },
      { name: 'Shield', Icon: Shield },
    ],
    hero: [
      { name: 'BuildingLibraryIcon', Icon: BuildingLibraryIcon },
      { name: 'BuildingOfficeIcon', Icon: BuildingOfficeIcon },
      { name: 'ShieldCheckIcon', Icon: ShieldCheckIcon },
    ],
  },
  {
    label: 'Overview (project page)',
    emoji: '📋',
    lucide: [
      { name: 'ClipboardList', Icon: ClipboardList },
      { name: 'FileText', Icon: FileText },
    ],
    hero: [
      { name: 'ClipboardDocumentListIcon', Icon: ClipboardDocumentListIcon },
      { name: 'DocumentTextIcon', Icon: DocumentTextIcon },
    ],
  },
  {
    label: 'Challenges',
    emoji: '🎯',
    lucide: [
      { name: 'Target', Icon: Target },
      { name: 'Crosshair', Icon: Crosshair },
    ],
    hero: [
      { name: 'FlagIcon', Icon: FlagIcon },
      { name: 'ExclamationTriangleIcon', Icon: ExclamationTriangleIcon },
    ],
  },
  {
    label: 'Solutions',
    emoji: '💡',
    lucide: [
      { name: 'Lightbulb', Icon: Lightbulb },
      { name: 'Wrench', Icon: Wrench },
    ],
    hero: [
      { name: 'LightBulbIcon', Icon: LightBulbIcon },
      { name: 'WrenchScrewdriverIcon', Icon: WrenchScrewdriverIcon },
    ],
  },
  {
    label: 'Outcomes & Impact',
    emoji: '🚀',
    lucide: [
      { name: 'Rocket', Icon: Rocket },
      { name: 'TrendingUp', Icon: TrendingUp },
      { name: 'Trophy', Icon: Trophy },
    ],
    hero: [
      { name: 'RocketLaunchIcon', Icon: RocketLaunchIcon },
      { name: 'TrophyIcon', Icon: TrophyIcon },
      { name: 'ChartBarIcon', Icon: ChartBarIcon },
    ],
  },
  {
    label: 'Gallery',
    emoji: '🖼️',
    lucide: [
      { name: 'Images', Icon: Images },
      { name: 'LayoutGrid', Icon: LayoutGrid },
    ],
    hero: [
      { name: 'PhotoIcon', Icon: PhotoIcon },
      { name: 'Squares2X2Icon', Icon: Squares2X2Icon },
    ],
  },
  {
    label: 'Email',
    emoji: '📧',
    lucide: [{ name: 'Mail', Icon: Mail }],
    hero: [{ name: 'EnvelopeIcon', Icon: EnvelopeIcon }],
  },
]

function IconCell({
  name,
  Icon,
}: {
  name: string
  Icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <div className="flex flex-col items-center gap-2 p-4 bg-slate-900/50 border border-slate-800 rounded-lg min-w-[120px]">
      <Icon className="w-8 h-8 text-cyan-400" />
      <code className="text-xs text-slate-400 text-center">{name}</code>
    </div>
  )
}

export default function IconsPreview() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-2">Icon library comparison</h1>
        <p className="text-slate-400 mb-8">
          Same slot, three columns: current emoji · Lucide candidates · Heroicons candidates.
          Pick a column or mix &amp; match.
        </p>

        <div className="space-y-6">
          {slots.map((slot) => (
            <div
              key={slot.label}
              className="bg-slate-900/30 border border-slate-800 rounded-xl p-6"
            >
              <h2 className="text-lg font-semibold mb-4">{slot.label}</h2>

              <div className="grid grid-cols-1 lg:grid-cols-[140px_1fr_1fr] gap-6">
                <div className="flex flex-col items-center justify-center p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                  <div className="text-4xl mb-2">{slot.emoji}</div>
                  <code className="text-xs text-slate-500">current</code>
                </div>

                <div>
                  <div className="text-xs text-slate-500 mb-2 font-mono uppercase tracking-wide">
                    Lucide
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {slot.lucide.map((icon) => (
                      <IconCell key={icon.name} {...icon} />
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs text-slate-500 mb-2 font-mono uppercase tracking-wide">
                    Heroicons (outline)
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {slot.hero.map((icon) => (
                      <IconCell key={icon.name} {...icon} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-200">
          <strong>Notes:</strong>
          <ul className="mt-2 space-y-1 list-disc list-inside text-sm">
            <li>Heroicons has no gamepad/controller or VR/glasses icon — those slots fall back to a cube.</li>
            <li>Lucide is hairline-stroke by default; Heroicons outline is slightly heavier.</li>
            <li>You can mix and match — e.g. use Lucide everywhere except contact, where Heroicons EnvelopeIcon may look better. Tell me your picks per slot.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
