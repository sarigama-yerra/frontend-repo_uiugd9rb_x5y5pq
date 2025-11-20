export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">About Me</h2>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 leading-relaxed text-blue-100/90">
          <p>
            I’m a multidisciplinary developer focused on crafting high-quality web products with an eye for motion and detail. I love connecting design and engineering to ship experiences that feel alive.
          </p>
          <p className="mt-4">
            My toolkit includes React, TypeScript, Tailwind, and 3D on the web. I care about accessibility, performance, and maintainable systems.
          </p>
        </div>
      </div>
    </section>
  )
}
