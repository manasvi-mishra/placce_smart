import { useState } from "react";
import { Bell, ChevronDown, Menu, Search, X } from "lucide-react";
import Logo from "./Logo";

export default function AppShell({ role, title, subtitle, navItems, active, onNavigate, children, onHome }) {
  const [open, setOpen] = useState(false);
  const roleLabel = role === "student" ? "Student" : role === "recruiter" ? "Recruiter" : "Placement Cell";
  return (
    <div className="min-h-screen bg-[#f7f9fc]">
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 border-r border-slate-200 bg-white p-5 transition-transform ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>
        <div className="flex items-center justify-between">
          <button onClick={onHome}><Logo /></button>
          <button className="lg:hidden" onClick={() => setOpen(false)}><X size={20}/></button>
        </div>
        <div className="mt-8 rounded-2xl bg-slate-50 p-3">
          <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Workspace</div>
          <div className="mt-1 font-bold text-slate-800">{roleLabel}</div>
        </div>
        <nav className="mt-5 space-y-1">
          {navItems.map(item => {
            const Icon = item.icon;
            return <button key={item.id} onClick={() => {onNavigate(item.id); setOpen(false)}} className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold transition ${active === item.id ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"}`}>
              <Icon size={18}/><span>{item.label}</span>
            </button>
          })}
        </nav>
      </aside>
      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 flex h-[74px] items-center justify-between border-b border-slate-200 bg-white/90 px-5 backdrop-blur md:px-8">
          <div className="flex items-center gap-3">
            <button className="rounded-xl p-2 hover:bg-slate-100 lg:hidden" onClick={() => setOpen(true)}><Menu size={21}/></button>
            <div>
              <h1 className="display-font text-lg font-extrabold text-slate-900">{title}</h1>
              <p className="hidden text-xs text-slate-400 sm:block">{subtitle}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 md:flex"><Search size={16} className="text-slate-400"/><input className="w-36 bg-transparent text-sm outline-none" placeholder="Search"/></div>
            <button className="relative rounded-xl p-2.5 hover:bg-slate-100"><Bell size={19}/><span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-500"/></button>
            <button className="flex items-center gap-2 rounded-xl border border-slate-200 px-2.5 py-2"><div className="grid h-8 w-8 place-items-center rounded-lg bg-blue-600 text-xs font-bold text-white">M</div><span className="hidden text-sm font-semibold sm:block">Maahi</span><ChevronDown size={15}/></button>
          </div>
        </header>
        <main className="p-5 md:p-8">{children}</main>
      </div>
    </div>
  );
}
