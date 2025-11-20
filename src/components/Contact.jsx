export default function Contact() {
  return (
    <section id="contact" className="py-28">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white">Contact</h2>
          <p className="text-slate-400 mt-2">Let’s build something great</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <form className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-3">
            <input placeholder="Name" className="w-full px-4 py-3 rounded-md bg-slate-900/60 border border-white/10 text-white placeholder:text-slate-400" />
            <input placeholder="Email" type="email" className="w-full px-4 py-3 rounded-md bg-slate-900/60 border border-white/10 text-white placeholder:text-slate-400" />
            <textarea placeholder="Message" rows={5} className="w-full px-4 py-3 rounded-md bg-slate-900/60 border border-white/10 text-white placeholder:text-slate-400" />
            <button type="button" className="px-5 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium shadow-lg shadow-blue-500/30">Send</button>
          </form>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-300">
            <p>
              Open to full-time roles and selective freelance work. Based in GMT, async-friendly, and comfortable across the stack.
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <p><span className="text-white">Email:</span> your.name@email.com</p>
              <p><span className="text-white">LinkedIn:</span> linkedin.com/in/yourname</p>
              <p><span className="text-white">GitHub:</span> github.com/yourname</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
