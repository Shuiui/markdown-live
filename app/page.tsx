import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="flex items-center justify-between px-8 py-6 border-b border-slate-800">
        <h1 className="text-2xl font-bold">Markdown</h1>

        <Link href="/dashboard"
        className="rounded-lg bg-blue-600 px-5 py-2 hover:bg-blue-700">
          Get Started
        </Link>
      </nav>

      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <p className="text-blue-400 font-medium mb-4">
          Write. Preview. Publish.
        </p>
        <h2 className="text-4xl md:text-6xl font-bold max-w-3xl">
          Your Markdown Writing
          <span className="text-blue-400"> Workspace</span>
        </h2>

        <p className="mt-6 max-w-xl text-slate-400 text-lg">
          Create beautiful blog posts using Markdown and experience instant live HTML previews.
        </p>

        <Link href="/dashboard"
        className="mt-8 rounded-lg bg-blue-600 px-8 py3 font-semibold hover:bg-blue-700">
          Start Writing
        </Link>
      </section>

      <footer className="border-t border-slate-800 py-6 text-center text-slate-500">
        © 2026 MarkdownLive. Built with Next.js.
      </footer>
    </main>
  );
}