// ===========================================
// components/Footer.tsx
// ===========================================
export default function Footer() {
    return (
      <footer className="border-t mt-20">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Timothy Finnegan. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    )
  }