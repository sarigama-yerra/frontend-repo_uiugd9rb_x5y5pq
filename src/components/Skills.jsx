const skills = [
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Vite', 'Framer Motion'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'FastAPI', 'MongoDB', 'REST', 'WebSockets'],
  },
  {
    title: 'DevOps',
    items: ['Docker', 'CI/CD', 'Vercel', 'Cloudflare', 'Grafana'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-28">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white">Skills</h2>
          <p className="text-slate-400 mt-2">Tools I use daily</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-white font-semibold">{group.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item, j) => (
                  <span key={j} className="px-2 py-1 text-xs rounded bg-slate-900/60 border border-white/10 text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
