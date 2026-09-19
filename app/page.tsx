'use client'

import { useState } from 'react'
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Check,
  ChevronDown,
  CircleHelp,
  Code2,
  Copy,
  CreditCard,
  Gauge,
  KeyRound,
  Layers3,
  Menu,
  Plus,
  Search,
  ShieldCheck,
  Sparkles,
  Terminal,
  TrendingUp,
  X,
  Zap,
} from 'lucide-react'

const models = [
  { name: 'Claude 3.5 Sonnet', provider: 'Anthropic', type: 'Chat', price: '$3.00 / $15.00', tag: 'Popular', tone: 'orange' },
  { name: 'GPT-4o', provider: 'OpenAI', type: 'Chat', price: '$2.50 / $10.00', tag: 'Fast', tone: 'green' },
  { name: 'Gemini 1.5 Pro', provider: 'Google', type: 'Chat', price: '$1.25 / $5.00', tag: '1M context', tone: 'blue' },
  { name: 'Llama 3.1 405B', provider: 'Meta', type: 'Open source', price: '$2.00 / $2.00', tag: 'New', tone: 'orange' },
]

const plans = [
  { name: 'Hobby', price: '$0', detail: 'For exploring and prototyping', features: ['5,000 requests / month', 'Access to all models', 'Community support'], cta: 'Start for free' },
  { name: 'Pro', price: '$20', detail: 'For builders shipping to production', features: ['100,000 requests / month', 'Priority routing', 'Usage analytics', 'Email support'], cta: 'Start building', featured: true },
  { name: 'Scale', price: 'Custom', detail: 'For teams with serious volume', features: ['Unlimited requests', 'Dedicated support', 'Custom rate limits', 'SLA & data controls'], cta: 'Talk to sales' },
]

const navItems = [
  { label: 'Overview', icon: Gauge },
  { label: 'API Keys', icon: KeyRound },
  { label: 'Usage', icon: BarChart3 },
  { label: 'Billing', icon: CreditCard },
  { label: 'Docs', icon: BookOpen },
]

export default function Page() {
  const [active, setActive] = useState('Overview')
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [showDashboard, setShowDashboard] = useState(false)
  const [view, setView] = useState<'home' | 'models' | 'pricing' | 'docs' | 'auth'>('home')
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('signup')

  const openView = (nextView: typeof view) => {
    setShowDashboard(false)
    setView(nextView)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <main className="theme-shell min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-orange-500/30">
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(124,58,237,0.18),transparent_38%),radial-gradient(circle_at_100%_30%,rgba(37,99,235,0.1),transparent_30%)]" />
      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
        <button onClick={() => openView('home')} className="flex items-center gap-2.5" aria-label="Orca home">
          <span className="grid size-8 place-items-center rounded-lg bg-foreground text-background"><Layers3 className="size-4" /></span>
          <span className="text-[15px] font-semibold tracking-tight">tokenportal</span>
        </button>
        <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          <button onClick={() => openView('models')} className="transition hover:text-foreground">Models</button>
          <button onClick={() => openView('pricing')} className="transition hover:text-foreground">Pricing</button>
          <button onClick={() => openView('docs')} className="transition hover:text-foreground">Docs</button>
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <button onClick={() => openView('auth')} className="rounded-lg px-3 py-2 text-sm text-zinc-400 transition hover:text-foreground">Log in</button>
          <button onClick={() => openView('auth')} className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:bg-zinc-200">Get started</button>
        </div>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
      </header>
      {menuOpen && <div className="relative z-20 mx-5 flex flex-col gap-4 rounded-xl border border-white/10 bg-zinc-900 p-5 text-sm text-zinc-300 md:hidden"><button onClick={() => openView('models')}>Models</button><button onClick={() => openView('pricing')}>Pricing</button><button onClick={() => openView('docs')}>Docs</button><button onClick={() => openView('auth')}>Log in / Sign up</button></div>}

      {!showDashboard && view === 'home' ? <>
        <section className="relative z-10 mx-auto max-w-5xl px-5 pb-28 pt-24 text-center lg:pt-36">
          <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-400/10 px-3 py-1.5 text-xs font-medium text-orange-200"><Sparkles className="size-3.5" /> One API. Every model.</div>
          <h1 className="mx-auto max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.055em] text-foreground sm:text-7xl">The unified AI gateway<br /><span className="bg-gradient-to-r from-orange-300 via-white to-orange-300 bg-clip-text text-transparent">for what&apos;s next.</span></h1>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">Access the world&apos;s best AI models through one fast, reliable API. Route, compare, and scale without rewriting your stack.</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"><button onClick={() => setShowDashboard(true)} className="flex items-center gap-2 rounded-lg bg-foreground px-5 py-3 text-sm font-semibold text-background transition hover:bg-zinc-200">Start building <ArrowRight className="size-4" /></button><button onClick={() => scrollTo('models')} className="rounded-lg border border-white/15 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-white/30 hover:bg-foreground/5">Explore models</button></div>
          <div className="mx-auto mt-20 flex max-w-2xl items-center justify-center gap-8 border-t border-white/10 pt-6 text-xs text-zinc-500"><span className="flex items-center gap-2"><Zap className="size-3.5 text-orange-300" /> 99.99% uptime</span><span className="flex items-center gap-2"><ShieldCheck className="size-3.5 text-orange-300" /> SOC 2 ready</span><span className="hidden items-center gap-2 sm:flex"><TrendingUp className="size-3.5 text-orange-300" /> 200+ models</span></div>
        </section>

        <section id="models" className="relative z-10 mx-auto max-w-7xl scroll-mt-16 px-5 py-24 lg:px-8"><div className="mb-10 flex items-end justify-between"><div><p className="mb-3 text-sm font-medium text-orange-300">THE MODEL LAYER</p><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Every model, one interface.</h2><p className="mt-3 text-zinc-400">Pick the right intelligence for every request.</p></div><button className="hidden items-center gap-2 text-sm text-zinc-300 hover:text-foreground sm:flex">View all models <ArrowRight className="size-4" /></button></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{models.map((model) => <div key={model.name} className="group rounded-xl border border-white/10 bg-foreground/[0.035] p-5 transition hover:-translate-y-1 hover:border-white/20 hover:bg-foreground/[0.06]"><div className="mb-8 flex items-start justify-between"><div className={`grid size-10 place-items-center rounded-lg bg-${model.tone}-400/15 text-${model.tone}-200`}><Code2 className="size-5" /></div><span className="rounded-full border border-white/10 px-2 py-1 text-[10px] text-zinc-400">{model.tag}</span></div><h3 className="font-medium">{model.name}</h3><p className="mt-1 text-sm text-zinc-500">{model.provider} · {model.type}</p><div className="mt-5 border-t border-white/10 pt-4 text-xs text-zinc-400"><span className="text-zinc-300">{model.price}</span><span className="ml-1">per 1M tokens</span></div></div>)}</div></section>

        <section className="relative z-10 border-y border-white/10 bg-foreground/[0.02] px-5 py-24"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:px-3"><div><p className="mb-3 text-sm font-medium text-orange-300">BUILT FOR DEVELOPERS</p><h2 className="max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl">One line to start.<br />Infinite room to grow.</h2><p className="mt-5 max-w-md leading-7 text-zinc-400">Drop into your existing OpenAI-compatible stack. Switch models, add fallbacks, and ship with confidence.</p><button onClick={() => setShowDashboard(true)} className="mt-7 flex items-center gap-2 text-sm font-medium text-foreground hover:text-orange-200">Read the docs <ArrowRight className="size-4" /></button></div><div id="docs" className="rounded-2xl border border-white/10 bg-[#0d0d12] p-1 shadow-2xl shadow-orange-950/20"><div className="flex items-center gap-1 border-b border-white/10 px-4 py-3"><span className="size-2 rounded-full bg-red-400/70" /><span className="size-2 rounded-full bg-yellow-400/70" /><span className="size-2 rounded-full bg-green-400/70" /><span className="ml-3 text-xs text-zinc-600">request.ts</span></div><pre className="overflow-x-auto whitespace-pre-wrap p-5 text-xs leading-7 text-zinc-300"><code>{`const response = await fetch("https://api.tokenportal.ai/v1/chat", {\n  method: "POST",\n  headers: {\n    "Authorization": \`Bearer \${API_KEY}\`\n  },\n  body: JSON.stringify({\n    model: "anthropic/claude-3.5-sonnet",\n    messages: [{ role: "user", content: prompt }]\n  })\n})`}</code></pre></div></div></section>

        <section id="pricing" className="relative z-10 mx-auto max-w-7xl scroll-mt-16 px-5 py-24 lg:px-8"><div className="mb-10 text-center"><p className="mb-3 text-sm font-medium text-orange-300">SIMPLE PRICING</p><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Start free. Scale when ready.</h2><p className="mt-3 text-zinc-400">No hidden fees. No lock-in. Just better AI economics.</p></div><div className="grid gap-4 lg:grid-cols-3">{plans.map((plan) => <div key={plan.name} className={`relative rounded-2xl border p-7 ${plan.featured ? 'border-orange-400/50 bg-orange-400/[0.08] shadow-xl shadow-orange-950/20' : 'border-white/10 bg-foreground/[0.035]'}`}>{plan.featured && <div className="absolute -top-3 left-6 rounded-full bg-orange-400 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-foreground">Most popular</div>}<h3 className="text-lg font-medium">{plan.name}</h3><p className="mt-2 text-sm text-zinc-400">{plan.detail}</p><div className="mt-7 flex items-end gap-1"><span className="text-4xl font-semibold tracking-tight">{plan.price}</span>{plan.price !== 'Custom' && <span className="mb-1 text-sm text-zinc-500">/ month</span>}</div><button onClick={() => setShowDashboard(true)} className={`mt-7 w-full rounded-lg px-4 py-3 text-sm font-medium ${plan.featured ? 'bg-foreground text-background hover:bg-zinc-200' : 'border border-white/15 text-foreground hover:bg-foreground/10'}`}>{plan.cta}</button><div className="mt-7 flex flex-col gap-3 border-t border-white/10 pt-6">{plan.features.map((f) => <div key={f} className="flex items-center gap-2 text-sm text-zinc-300"><Check className="size-4 text-orange-300" />{f}</div>)}</div></div>)}</div><div className="mx-auto mt-5 max-w-md rounded-xl border border-white/10 bg-foreground/[0.025] p-5 text-center"><p className="text-sm font-medium">Prefer usage-based pricing?</p><p className="mt-1 text-xs text-zinc-500">Pay only for what you use with our flexible PAYG plan.</p><button onClick={() => setShowDashboard(true)} className="mt-3 text-sm font-medium text-orange-300 hover:text-orange-200">Explore PAYG <ArrowRight className="ml-1 inline size-3.5" /></button></div></section>
        <footer className="relative z-10 border-t border-white/10 px-5 py-8"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-xs text-zinc-500 sm:flex-row lg:px-3"><span>© 2026 tokenportal. Built for the next generation of AI.</span><div className="flex gap-5"><button>Privacy</button><button>Terms</button><button>Status</button></div></div></footer>
      </> : showDashboard ? <Dashboard active={active} setActive={setActive} copied={copied} setCopied={setCopied} onClose={() => openView('home')} /> : <>
        {view === 'models' && <ModelsPage onBack={() => openView('home')} />}
        {view === 'pricing' && <PricingPage onBack={() => openView('home')} onStart={() => openView('auth')} />}
        {view === 'docs' && <DocsPage onBack={() => openView('home')} />}
        {view === 'auth' && <AuthPage mode={authMode} setMode={setAuthMode} onBack={() => openView('home')} />}
      </>}
    </main>
  )
}

function PageFrame({ eyebrow, title, description, onBack, children }: { eyebrow: string; title: string; description: string; onBack: () => void; children: React.ReactNode }) {
  return <div className="relative z-10 mx-auto min-h-[calc(100vh-80px)] max-w-7xl px-5 pb-20 pt-16 lg:px-8"><button onClick={onBack} className="mb-12 flex items-center gap-2 text-sm text-zinc-500 transition hover:text-foreground"><ArrowRight className="size-4 rotate-180" />Back to home</button><div className="mx-auto max-w-5xl"><p className="mb-3 text-sm font-medium text-orange-300">{eyebrow}</p><h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">{title}</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">{description}</p>{children}</div></div>
}

function ModelsPage({ onBack }: { onBack: () => void }) {
  return <PageFrame eyebrow="THE MODEL CATALOG" title="The right model for every request." description="Compare leading models by capability, speed, context window, and price — all through one OpenAI-compatible API." onBack={onBack}><div className="mt-12 flex items-center gap-3 rounded-xl border border-white/10 bg-foreground/[0.03] px-4 py-3 text-sm text-zinc-500"><Search className="size-4" />Search models <span className="ml-auto rounded border border-white/10 px-2 py-1 text-[10px]">⌘ K</span></div><div className="mt-5 overflow-hidden rounded-2xl border border-white/10"><div className="hidden grid-cols-[1.4fr_1fr_1fr_1fr] border-b border-white/10 bg-foreground/[0.03] px-5 py-3 text-xs text-zinc-500 sm:grid"><span>Model</span><span>Provider</span><span>Context</span><span>Pricing / 1M tokens</span></div>{[...models, { name: 'Mistral Large', provider: 'Mistral', type: 'Chat', price: '$2.00 / $6.00', tag: 'Efficient', tone: 'orange' }].map((model) => <div key={model.name} className="grid gap-2 border-b border-white/10 px-5 py-5 last:border-0 sm:grid-cols-[1.4fr_1fr_1fr_1fr] sm:items-center"><div><p className="font-medium">{model.name}</p><p className="mt-1 text-xs text-zinc-500">{model.type} · <span className="text-orange-300">{model.tag}</span></p></div><span className="text-sm text-zinc-400">{model.provider}</span><span className="text-sm text-zinc-400">128K tokens</span><span className="text-sm text-zinc-300">{model.price}</span></div>)}</div></PageFrame>
}

function PricingPage({ onBack, onStart }: { onBack: () => void; onStart: () => void }) {
  return <PageFrame eyebrow="SIMPLE, TRANSPARENT PRICING" title="Plans that scale with you." description="Start experimenting for free, then choose the plan that fits your production traffic. PAYG is always available." onBack={onBack}><div className="mt-12 grid gap-4 lg:grid-cols-3">{plans.map((plan) => <div key={plan.name} className={`relative rounded-2xl border p-7 ${plan.featured ? 'border-orange-400/50 bg-orange-400/[0.08]' : 'border-white/10 bg-foreground/[0.03]'}`}>{plan.featured && <span className="absolute -top-3 left-6 rounded-full bg-orange-400 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider">Most popular</span>}<h2 className="text-lg font-medium">{plan.name}</h2><p className="mt-2 text-sm text-zinc-400">{plan.detail}</p><p className="mt-8 text-4xl font-semibold">{plan.price}<span className="ml-1 text-sm font-normal text-zinc-500">{plan.price !== 'Custom' && '/ month'}</span></p><button onClick={onStart} className={`mt-7 w-full rounded-lg px-4 py-3 text-sm font-medium ${plan.featured ? 'bg-foreground text-background' : 'border border-white/15'}`}>{plan.cta}</button><div className="mt-7 flex flex-col gap-3 border-t border-white/10 pt-6">{plan.features.map((f) => <p key={f} className="flex items-center gap-2 text-sm text-zinc-300"><Check className="size-4 text-orange-300" />{f}</p>)}</div></div>)}</div><div className="mt-4 rounded-2xl border border-orange-300/20 bg-orange-300/[0.06] p-7"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center"><div><p className="text-lg font-medium">PAYG — pay only for what you use.</p><p className="mt-2 text-sm text-zinc-400">No subscription required. Transparent token-based billing with automatic spend limits.</p></div><button onClick={onStart} className="rounded-lg border border-white/15 px-4 py-3 text-sm font-medium">Use PAYG</button></div></div></PageFrame>
}

function DocsPage({ onBack }: { onBack: () => void }) {
  return <PageFrame eyebrow="DEVELOPER DOCS" title="Ship with one API." description="Everything you need to route requests, compare models, and build reliable AI features." onBack={onBack}><div className="mt-12 grid gap-4 sm:grid-cols-2"><div className="rounded-2xl border border-white/10 bg-foreground/[0.03] p-6"><Terminal className="size-5 text-orange-300" /><h2 className="mt-5 font-medium">Quickstart</h2><p className="mt-2 text-sm leading-6 text-zinc-500">Make your first request in under five minutes with our OpenAI-compatible endpoint.</p><pre className="mt-5 overflow-x-auto rounded-lg bg-black/40 p-4 text-xs leading-6 text-zinc-400">curl https://api.tokenportal.ai/v1/chat</pre></div><div className="rounded-2xl border border-white/10 bg-foreground/[0.03] p-6"><BookOpen className="size-5 text-orange-300" /><h2 className="mt-5 font-medium">API reference</h2><p className="mt-2 text-sm leading-6 text-zinc-500">Explore authentication, streaming, model routing, retries, and usage endpoints.</p><button className="mt-5 flex items-center gap-2 text-sm text-orange-300">Read reference <ArrowRight className="size-4" /></button></div></div></PageFrame>
}

function AuthPage({ mode, setMode, onBack }: { mode: 'login' | 'signup'; setMode: (mode: 'login' | 'signup') => void; onBack: () => void }) {
  const isSignup = mode === 'signup'
  return <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center justify-center px-5 pb-20 pt-10"><div className="w-full max-w-md rounded-2xl border border-white/10 bg-foreground/[0.04] p-7 shadow-2xl shadow-orange-950/20 sm:p-9"><button onClick={onBack} className="mb-10 flex items-center gap-2 text-sm text-zinc-500 hover:text-foreground"><ArrowRight className="size-4 rotate-180" />Back to home</button><div className="mb-8"><h1 className="text-2xl font-semibold">{isSignup ? 'Create your account' : 'Welcome back'}</h1><p className="mt-2 text-sm text-zinc-500">{isSignup ? 'Start building with every model in one place.' : 'Log in to access your gateway workspace.'}</p></div><form onSubmit={(event) => event.preventDefault()} className="flex flex-col gap-4"><label className="flex flex-col gap-2 text-sm text-zinc-300">Email<input required type="email" placeholder="you@company.com" className="rounded-lg border border-white/10 bg-black/20 px-3 py-3 text-foreground outline-none placeholder:text-zinc-600 focus:border-orange-400/60" /></label><label className="flex flex-col gap-2 text-sm text-zinc-300">Password<input required type="password" placeholder="••••••••" className="rounded-lg border border-white/10 bg-black/20 px-3 py-3 text-foreground outline-none placeholder:text-zinc-600 focus:border-orange-400/60" /></label><button className="mt-2 rounded-lg bg-foreground px-4 py-3 text-sm font-semibold text-background">{isSignup ? 'Create account' : 'Log in'}</button></form><p className="mt-7 text-center text-sm text-zinc-500">{isSignup ? 'Already have an account?' : 'New to tokenportal?'} <button onClick={() => setMode(isSignup ? 'login' : 'signup')} className="text-orange-300 hover:text-foreground">{isSignup ? 'Log in' : 'Sign up'}</button></p></div></div>
}

function Dashboard({ active, setActive, copied, setCopied, onClose }: { active: string; setActive: (value: string) => void; copied: boolean; setCopied: (value: boolean) => void; onClose: () => void }) {
  return <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl gap-0 px-4 pb-10 lg:px-8"><aside className="hidden w-56 shrink-0 border-r border-white/10 pr-6 md:block"><div className="mb-9 mt-7 text-xs font-semibold uppercase tracking-widest text-zinc-500">Workspace</div><div className="flex flex-col gap-1">{navItems.map(({ label, icon: Icon }) => <button key={label} onClick={() => setActive(label)} className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm ${active === label ? 'bg-foreground/10 text-foreground' : 'text-zinc-500 hover:bg-foreground/5 hover:text-zinc-200'}`}><Icon className="size-4" />{label}</button>)}</div><div className="mt-10 border-t border-white/10 pt-5"><button onClick={onClose} className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-500 hover:text-foreground"><ArrowRight className="size-4 rotate-180" />Back to home</button></div></aside><section className="min-w-0 flex-1 px-1 md:pl-8"><div className="flex items-center justify-between border-b border-white/10 py-5"><div><p className="text-xs text-zinc-500">Workspace / {active}</p><h1 className="mt-1 text-xl font-semibold">{active}</h1></div><div className="flex items-center gap-3"><span className="hidden text-xs text-zinc-500 sm:block">Acme Inc.</span><div className="grid size-8 place-items-center rounded-full bg-gradient-to-br from-orange-400 to-orange-400 text-xs font-bold text-foreground">AC</div></div></div>{active === 'Overview' && <Overview copied={copied} setCopied={setCopied} />}{active === 'API Keys' && <ApiKeys />}{active === 'Usage' && <Usage />}{active === 'Billing' && <Billing />}{active === 'Docs' && <Docs />}</section></div>
}

function Overview({ copied, setCopied }: { copied: boolean; setCopied: (value: boolean) => void }) { return <div className="flex flex-col gap-6 py-8"><div className="grid gap-4 sm:grid-cols-3"><Stat label="Monthly spend" value="$42.18" trend="+12.4%" /><Stat label="Total requests" value="128.4K" trend="+8.2%" /><Stat label="Avg. latency" value="842ms" trend="-14.6%" /></div><div className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"><div className="rounded-xl border border-white/10 bg-foreground/[0.03] p-5"><div className="flex items-center justify-between"><div><h2 className="font-medium">Usage overview</h2><p className="mt-1 text-xs text-zinc-500">Requests over the last 30 days</p></div><button className="flex items-center gap-1 text-xs text-zinc-400">Last 30 days <ChevronDown className="size-3" /></button></div><div className="mt-8 flex h-44 items-end gap-2">{[35,48,42,60,55,72,68,82,76,93,78,88,70,96,86,100,90,78,84,73,91,83,95,87,100,92,88,94,98,100].map((h, i) => <div key={i} className="flex-1 rounded-t-sm bg-orange-400/70 transition hover:bg-orange-300" style={{ height: `${h}%` }} />)}</div><div className="mt-3 flex justify-between text-[10px] text-zinc-600"><span>May 18</span><span>May 25</span><span>Jun 01</span><span>Jun 17</span></div></div><div className="rounded-xl border border-white/10 bg-foreground/[0.03] p-5"><h2 className="font-medium">Quick start</h2><p className="mt-1 text-xs text-zinc-500">Make your first request in minutes.</p><div className="mt-6 rounded-lg bg-black/40 p-4 font-mono text-xs text-zinc-400"><span className="text-orange-300">curl</span> https://api.tokenportal.ai/v1/chat</div><button onClick={() => { navigator.clipboard?.writeText('curl https://api.tokenportal.ai/v1/chat'); setCopied(true); setTimeout(() => setCopied(false), 1500) }} className="mt-3 flex items-center gap-2 text-xs text-zinc-400 hover:text-foreground">{copied ? <Check className="size-3.5 text-green-300" /> : <Copy className="size-3.5" />}{copied ? 'Copied' : 'Copy command'}</button></div></div></div> }

function Stat({ label, value, trend }: { label: string; value: string; trend: string }) { return <div className="rounded-xl border border-white/10 bg-foreground/[0.03] p-5"><p className="text-xs text-zinc-500">{label}</p><div className="mt-3 flex items-end justify-between"><span className="text-2xl font-semibold">{value}</span><span className="text-xs text-emerald-300">{trend}</span></div></div> }
function ApiKeys() { return <div className="flex flex-col gap-5 py-8"><div className="flex items-center justify-between"><div><h2 className="font-medium">Your API keys</h2><p className="mt-1 text-sm text-zinc-500">Keys grant access to your workspace.</p></div><button className="flex items-center gap-2 rounded-lg bg-foreground px-3 py-2 text-xs font-medium text-background"><Plus className="size-3.5" />Create key</button></div><div className="rounded-xl border border-white/10 bg-foreground/[0.03] p-4"><div className="flex items-center justify-between"><div><p className="text-sm">Production key</p><p className="mt-1 font-mono text-xs text-zinc-500">sk-orca-••••••••••••••••9f42</p></div><button className="rounded-lg border border-white/10 p-2 text-zinc-400 hover:text-foreground"><Copy className="size-4" /></button></div><div className="mt-4 flex gap-5 border-t border-white/10 pt-3 text-xs text-zinc-500"><span>Created Jun 12, 2026</span><span>Last used 2 min ago</span></div></div></div> }
function Usage() { return <div className="py-8"><h2 className="font-medium">Usage & analytics</h2><p className="mt-1 text-sm text-zinc-500">Track your model performance and spend.</p><div className="mt-6 grid gap-4 sm:grid-cols-2"><Stat label="Input tokens" value="2.4M" trend="+18%" /><Stat label="Output tokens" value="841K" trend="+9%" /></div></div> }
function Billing() { return <div className="py-8"><h2 className="font-medium">Billing</h2><p className="mt-1 text-sm text-zinc-500">Manage your plan and payment details.</p><div className="mt-6 rounded-xl border border-white/10 bg-foreground/[0.03] p-5"><div className="flex items-center justify-between"><div><p className="text-xs text-zinc-500">Current plan</p><p className="mt-1 text-lg font-medium">Pro <span className="ml-2 rounded-full bg-orange-400/15 px-2 py-1 text-[10px] text-orange-200">Active</span></p></div><button className="rounded-lg border border-white/15 px-3 py-2 text-xs">Manage plan</button></div></div></div> }
function Docs() { return <div className="py-8"><h2 className="font-medium">Developer docs</h2><p className="mt-1 text-sm text-zinc-500">Everything you need to build with tokenportal.</p><div className="mt-6 grid gap-3 sm:grid-cols-2"><div className="rounded-xl border border-white/10 bg-foreground/[0.03] p-5"><Terminal className="size-5 text-orange-300" /><h3 className="mt-4 text-sm font-medium">Quickstart</h3><p className="mt-1 text-xs text-zinc-500">Make your first request with our compatible API.</p></div><div className="rounded-xl border border-white/10 bg-foreground/[0.03] p-5"><CircleHelp className="size-5 text-orange-300" /><h3 className="mt-4 text-sm font-medium">API reference</h3><p className="mt-1 text-xs text-zinc-500">Explore endpoints, parameters, and examples.</p></div></div></div> }
