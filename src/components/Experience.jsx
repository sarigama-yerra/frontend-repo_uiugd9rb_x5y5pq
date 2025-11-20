const items = [
  {
    role: 'Senior Software Engineer',
    company: 'Acme Tech',
    period: '2023 — Present',
    points: [
      'Led migration to a modular design system in React/TypeScript, reducing UI defects by 38%.',
      'Designed and implemented Node/FastAPI services handling 100k+ daily requests with robust observability.',
      'Partnered with PM/Design to ship 12+ features, improving activation by 22% and NPS by 15%.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Acme Tech',
    period: '2022 — 2023',
    points: [
      'Built data-intensive dashboards with virtualized tables and realtime websockets.',
      'Introduced automated testing and CI pipelines, cutting regressions by 30%.',
      'Mentored interns and facilitated knowledge-sharing sessions.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-28">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white">Experience</h2>
          <p className="text-slate-400 mt-2">3 years of impactful work</p>
        </div>

        <ol className="relative border-l border-white/10 pl-6 space-y-10">
          {items.map((job, i) => (
            <li key={i} className="relative">
              <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 ring-2 ring-blue-500/40" />
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="text-white font-semibold">{job.role}</h3>
                  <span className="text-slate-300">· {job.company}</span>
                  <span className="ml-auto text-sm text-slate-400">{job.period}</span>
                </div>
                <ul className="mt-3 list-disc list-inside text-slate-300 space-y-1">
                  {job.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
