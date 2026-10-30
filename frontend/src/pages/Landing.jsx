import { ArrowRight, BrainCircuit, Building2, GraduationCap, ShieldCheck, Sparkles, Users } from "lucide-react";
import Logo from "../components/Logo";

const roles = [
  { id: "student", title: "Student", icon: GraduationCap, text: "Build your profile, create a resume, discover jobs and track applications." },
  { id: "coordinator", title: "Placement Cell Coordinator", icon: Building2, text: "Monitor students, drives, analytics, mentorship, notices and reports." },
  { id: "recruiter", title: "Recruiter", icon: Users, text: "Post roles, screen candidates, match skills and manage interviews." }
];

export default function Landing({ onRole }) {
  const scrollToRoles = () => document.getElementById("roles")?.scrollIntoView({ behavior: "smooth" });
  return (
    <div className="min-h-screen overflow-hidden bg-white">
      <header className="relative z-10 flex items-center justify-between px-6 py-5 md:px-12">
        <Logo />
        <div className="hidden items-center gap-5 text-sm font-semibold text-slate-500 md:flex">
          <span>AI-assisted matching</span><span>•</span><span>Campus-ready</span>
        </div>
        <button onClick={scrollToRoles} className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50">Explore</button>
      </header>

      <main className="grid-bg">
        <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-14 md:px-12 md:pt-20">
          <div className="absolute left-1/2 top-10 -z-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-200/30 blur-3xl"/>
          <div className="relative mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold text-blue-700"><Sparkles size={14}/> AI-powered placement ecosystem</div>
            <h1 className="display-font text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-950 md:text-7xl">Welcome to <span className="gradient-text">PlaceSmart</span></h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-500">Smart Placements. Better Careers. One connected platform for students, recruiters and placement cells.</p>
            <button onClick={scrollToRoles} className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-7 py-4 font-bold text-white shadow-xl shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-blue-600">Get Started <ArrowRight size={18}/></button>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
            {[
              [BrainCircuit, "AI Match", "Skills-to-job matching and candidate screening assistance."],
              [ShieldCheck, "Verified Flow", "Clear company verification status and role-based access."],
              [Users, "One Ecosystem", "Students, recruiters and coordinators work from one place."]
            ].map(([Icon, title, text]) => <div key={title} className="glass rounded-2xl border border-white/80 p-5 shadow-soft"><Icon className="text-blue-600"/><h3 className="mt-4 font-extrabold">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-500">{text}</p></div>)}
          </div>
        </section>

        <section id="roles" className="mx-auto max-w-7xl px-6 pb-24 md:px-12">
          <div className="mb-8 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-blue-600">Choose your workspace</p>
            <h2 className="display-font mt-2 text-3xl font-extrabold text-slate-900">How do you want to enter PlaceSmart?</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {roles.map(({ id, title, icon: Icon, text }) => (
              <button key={id} onClick={() => onRole(id)} className="group rounded-3xl border border-slate-200 bg-white p-7 text-left shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-soft">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white"><Icon size={27}/></div>
                <h3 className="display-font mt-6 text-xl font-extrabold text-slate-900">{title}</h3>
                <p className="mt-2 min-h-14 text-sm leading-6 text-slate-500">{text}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-blue-600">Open workspace <ArrowRight size={16}/></span>
              </button>
            ))}
          </div>
        </section>
      </main>
      <footer className="border-t border-slate-100 bg-white px-6 py-6 text-center text-xs font-semibold text-slate-400">PlaceSmart • AI Powered Placement Platform • Hackathon Prototype</footer>
    </div>
  );
}
