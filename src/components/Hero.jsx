import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -inset-[40%] bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.2),transparent_35%)]" />
        <div className="absolute inset-0 bg-grid-white/[0.03] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto px-4 w-full">
        <div className="py-24">
          <p className="text-cyan-300 font-semibold tracking-wider uppercase text-xs mb-3">Senior Software Engineer</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            Building delightful, scalable products with modern web tech
          </h1>
          <p className="mt-5 text-slate-300 text-lg">
            3 years of hands-on experience shipping features end-to-end across frontend, backend, and cloud. Focused on performance, DX, and user joy.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition">View Projects</a>
            <a href="#contact" className="px-5 py-3 rounded-lg bg-white/10 text-white font-medium border border-white/10 hover:bg-white/15 transition">Get in touch</a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-slate-400 text-sm">
            <span>React</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Node.js</span>
            <span>•</span>
            <span>FastAPI</span>
            <span>•</span>
            <span>MongoDB</span>
          </div>
        </div>

        <div className="relative h-[50vh] md:h-[70vh]">
          <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm" />
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" className="absolute inset-0" />
        </div>
      </div>
    </section>
  )
}
