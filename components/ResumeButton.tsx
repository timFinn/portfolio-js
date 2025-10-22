'use client'

interface ResumeButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
}

export default function ResumeButton({ variant = 'primary', className = '' }: ResumeButtonProps) {
  const handleDownload = () => {
    // Optional: Track download with analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'resume_download', {
        event_category: 'engagement',
        event_label: 'Resume PDF Download'
      })
    }
  }

  const variants = {
    primary: 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-500/20',
    secondary: 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700',
    outline: 'bg-transparent hover:bg-slate-800/50 text-cyan-400 border border-cyan-500/30 hover:border-cyan-500/50'
  }

  return (
    <a
      href="/resume.pdf"
      download="Timothy_Finnegan_Resume.pdf"
      onClick={handleDownload}
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 ${variants[variant]} ${className}`}
    >
      <svg 
        className="w-5 h-5" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
        />
      </svg>
      Download Resume
    </a>
  )
}