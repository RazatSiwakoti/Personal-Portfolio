// page.tsx: the home page. Each section id must match a navbar href (without #)
export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6">
      {/* Intro */}
      <section className="py-20">
        <h1 className="text-4xl font-bold">Hi, I&apos;m Razat.</h1>
        <p className="mt-2 text-lg">Software Engineer | AI Engineer | IT</p>
      </section>

      {/* scroll-mt-20 stops the sticky navbar from covering each heading */}
      <section id="experience" className="min-h-screen scroll-mt-20 py-10">
        <h2 className="text-3xl font-bold">Experience</h2>
      </section>
      <section id="projects" className="min-h-screen scroll-mt-20 py-10">
        <h2 className="text-3xl font-bold">Projects</h2>
      </section>
      <section id="certificates" className="min-h-screen scroll-mt-20 py-10">
        <h2 className="text-3xl font-bold">Certificates</h2>
      </section>
      <section id="contact" className="min-h-screen scroll-mt-20 py-10">
        <h2 className="text-3xl font-bold">Contact</h2>
      </section>
    </main>
  );
}
