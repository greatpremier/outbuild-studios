"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Brand Systems",
    description: "Visual identity, messaging, and direction that feel unmistakably modern.",
  },
  {
    title: "Digital Products",
    description: "Immersive launches, elegant product experiences, and content-driven websites.",
  },
  {
    title: "Motion & Story",
    description: "Animated content systems that make your brand feel alive from first glance.",
  },
];

const highlights = ["Fast launches", "Premium craft", "Creative strategy"];

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[linear-gradient(135deg,_#fff7ed_0%,_#ffffff_45%,_#fff3e8_100%)] text-zinc-900">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-8 lg:px-12">
        <a href="#top" className="text-lg font-semibold tracking-[0.3em] text-zinc-950 uppercase">
          Northstar Studio
        </a>
        <nav className="hidden gap-6 text-sm font-medium text-zinc-600 md:flex">
          <a href="#services" className="transition hover:text-orange-600">Services</a>
          <a href="#work" className="transition hover:text-orange-600">Work</a>
          <a href="#contact" className="transition hover:text-orange-600">Contact</a>
        </nav>
        <a href="#contact" className="rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm transition hover:border-orange-400 hover:bg-orange-50">
          Book a call
        </a>
      </header>

      <main id="top" className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-12">
        <section className="grid gap-8 rounded-[2.5rem] border border-orange-100 bg-white/80 p-8 shadow-[0_30px_90px_-30px_rgba(234,88,12,0.35)] backdrop-blur xl:grid-cols-[1.1fr_0.9fr] xl:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm font-semibold text-orange-700">
              Design studio • Brand systems • Motion-led launches
            </p>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
              We craft bold digital identities with a sharp edge.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
              Northstar Studio helps founders and ambitious teams build striking brands, premium websites, and launch moments that feel cinematic from the very first interaction.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-full bg-orange-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-700">
                Start your project
              </a>
              <a href="#work" className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:border-zinc-900">
                Explore work
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {highlights.map((item) => (
                <span key={item} className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative overflow-hidden rounded-[2rem] bg-zinc-950 p-4"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.45),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(251,191,36,0.35),_transparent_35%)]" />
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 1, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-full min-h-[360px] rounded-[1.5rem] border border-white/10 bg-[linear-gradient(145deg,_rgba(255,255,255,0.16),_rgba(255,255,255,0.04))] p-6"
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-zinc-300">
                <span>Launch motion</span>
                <span>01 / 03</span>
              </div>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                  <div className="h-2 w-3/4 rounded-full bg-orange-500" />
                  <div className="mt-3 h-2 w-1/2 rounded-full bg-white/50" />
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-4 text-sm text-zinc-200">
                    Visual systems that scale effortlessly.
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-4 text-sm text-zinc-200">
                    Motion cues that make every scroll feel intentional.
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section id="services" className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="rounded-[1.5rem] border border-orange-100 bg-white p-6 shadow-sm"
            >
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-400" />
              <h2 className="mt-4 text-xl font-semibold text-zinc-950">{service.title}</h2>
              <p className="mt-2 text-sm leading-7 text-zinc-600">{service.description}</p>
            </motion.article>
          ))}
        </section>

        <section id="work" className="mt-12 rounded-[2rem] border border-orange-100 bg-white/90 p-8 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">Selected work</p>
              <h2 className="mt-2 text-3xl font-semibold text-zinc-950">Built to look elevated and perform effortlessly.</h2>
            </div>
            <a href="#contact" className="text-sm font-semibold text-zinc-700 transition hover:text-orange-600">Let’s shape your next launch →</a>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <motion.article initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-[1.5rem] border border-zinc-200 bg-zinc-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">Brand + Web</p>
              <h3 className="mt-3 text-2xl font-semibold text-zinc-950">Apex Foundry</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">A high-concept identity and launch site that transformed a complex business into a crisp, premium experience.</p>
            </motion.article>
            <motion.article initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-[1.5rem] border border-zinc-200 bg-zinc-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">Product Design</p>
              <h3 className="mt-3 text-2xl font-semibold text-zinc-950">Lumen Labs</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">A motion-rich product narrative and conversion-focused interface crafted for a fast-moving team.</p>
            </motion.article>
          </div>
        </section>

        <section id="contact" className="mt-12 rounded-[2rem] bg-zinc-950 px-8 py-10 text-white sm:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">Ready to build something memorable</p>
              <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Let’s create a brand experience that feels as sharp as your ambition.</h2>
            </div>
            <a href="mailto:hello@northstarstudio.com" className="inline-flex rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600">hello@northstarstudio.com</a>
          </div>
        </section>
      </main>
    </div>
  );
}
