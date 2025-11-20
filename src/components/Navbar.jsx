import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleNav = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/5">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <button onClick={() => handleNav('home')} className="group inline-flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 ring-2 ring-blue-500/30 shadow-lg shadow-blue-500/20" />
          <span className="text-white font-semibold tracking-tight">SWE Portfolio</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => handleNav(s.id)}
              className="px-3 py-2 text-sm text-slate-300 hover:text-white rounded-md hover:bg-white/5 transition"
            >
              {s.label}
            </button>
          ))}
        </div>

        <button className="md:hidden p-2 text-slate-200" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-slate-900/95">
          <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => handleNav(s.id)}
                className="px-3 py-3 text-left text-slate-200 hover:bg-white/5 rounded-md"
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
