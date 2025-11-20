const projects = [
  {
    title: 'Realtime Collaboration Suite',
    description: 'Docs + whiteboard with presence, CRDT syncing, and role-based access. 60ms median latency globally.',
    tags: ['React', 'CRDT', 'WebSockets', 'Node'],
    link: '#',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Composable charting and query engine over MongoDB, shipping insights to stakeholders weekly.',
    tags: ['FastAPI', 'MongoDB', 'React', 'E2E Tests'],
    link: '#',
  },
  {
    title: 'Design System + CLI',
    description: 'Token-driven components with a codegen CLI. Cut build times and improved consistency.',
    tags: ['TypeScript', 'Storybook', 'CI/CD'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-28">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white">Projects</h2>
          <p className="text-slate-400 mt-2">Selected work</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <a key={i} href={p.link} className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition block">
              <div className="h-40 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-white/10 mb-4" />
              <h3 className="text-white font-semibold group-hover:underline">{p.title}</h3>
              <p className="text-slate-300 mt-2 text-sm">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t, j) => (
                  <span key={j} className="px-2 py-1 text-xs rounded bg-slate-900/60 border border-white/10 text-slate-200">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
