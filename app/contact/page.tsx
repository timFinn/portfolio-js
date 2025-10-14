// ===========================================
// app/contact/page.tsx - Contact Page
// ===========================================
export default function Contact() {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Get in Touch</h1>
        <p className="text-lg text-gray-600 mb-12">
          Interested in working together? Have a question? Feel free to reach out.
        </p>
  
        <div className="space-y-6 mb-12">
          <div>
            <h2 className="text-xl font-semibold mb-2">Email</h2>
            <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">
              your.email@example.com
            </a>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">LinkedIn</h2>
            <a 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              linkedin.com/in/yourprofile
            </a>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">GitHub</h2>
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              github.com/yourusername
            </a>
          </div>
        </div>
  
        {/* Optional: Simple contact form */}
        <div className="border-t pt-12">
          <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input 
                type="text" 
                className="w-full border rounded-lg px-4 py-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input 
                type="email" 
                className="w-full border rounded-lg px-4 py-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea 
                rows={5}
                className="w-full border rounded-lg px-4 py-2"
                required
              />
            </div>
            <button 
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">
            Note: You'll need to set up form handling (Formspree, Netlify Forms, or API endpoint)
          </p>
        </div>
      </div>
    )
  }