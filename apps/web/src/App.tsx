import * as React from "react";
import { Button, Input, ThemeProvider, SkipLink, useTheme } from "@repo/ui";
import { 
  Search, 
  Settings, 
  Layers, 
  Calendar, 
  CheckSquare, 
  Edit3, 
  MousePointer2, 
  Check, 
  X, 
  BookOpen, 
  Layout 
} from "lucide-react";
import Docs from "./Docs";

function Demo() {
  return (
    <div className="min-h-screen bg-surface font-sans text-primary antialiased">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 border-r border-outline-variant/10 bg-white/50 backdrop-blur-xl p-6 hidden lg:block">
          <div className="mb-10 px-3">
            <h2 className="text-xl font-bold tracking-tighter">Digital Curator</h2>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink-muted">Design System</p>
          </div>
          
          <nav className="space-y-1">
            {[
              { icon: MousePointer2, label: "Interactions", active: true },
              { icon: Edit3, label: "Typography" },
              { icon: CheckSquare, label: "Forms" },
              { icon: Calendar, label: "Schedule" },
              { icon: Settings, label: "Settings" },
              { icon: Layers, label: "Layout" },
            ].map((item) => (
              <a key={item.label} href="#" className={`flex items-center gap-3 px-3 py-2 text-sm font-medium transition-all ${item.active ? 'text-primary bg-surface-high/50 rounded-lg' : 'text-ink-secondary hover:translate-x-1 hover:text-primary'}`}>
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main id="main-content" className="flex-1 bg-[radial-gradient(circle_at_top_right,#e2e2e3_0%,#f9f9fa_60%)] overflow-y-auto">
          <div className="mx-auto max-w-5xl px-12 py-20">
            {/* Hero */}
            <header className="mb-20">
              <div className="mb-4 flex items-center gap-2">
                <span className="rounded-sm bg-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">V1.0.4</span>
                <div className="h-px w-12 bg-outline-variant/30" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-ink-secondary">Interactive Core</span>
              </div>
              <h1 className="mb-6 text-7xl font-bold leading-[0.9] tracking-tighter">
                Buttons & <br /> Text Inputs.
              </h1>
              <p className="max-w-2xl text-xl leading-relaxed text-ink-secondary">
                The foundational interactive elements of the Digital Curator system. Designed for tactile feedback, high contrast, and editorial alignment.
              </p>
            </header>

            {/* Buttons Section */}
            <section className="mb-24">
              <div className="mb-8 flex items-baseline justify-between">
                <h2 className="text-3xl font-semibold tracking-tight">01. Buttons</h2>
                <span className="font-mono text-sm text-ink-secondary/40">ui-btn-module</span>
              </div>

              <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="flex min-h-[220px] flex-col justify-between rounded-xl border border-outline-variant/10 bg-white/40 p-8 backdrop-blur-md">
                  <div>
                    <span className="mb-6 block text-[10px] font-bold uppercase tracking-widest text-ink-secondary">Primary State</span>
                    <Button variant="primary">Action Label</Button>
                  </div>
                  <p className="text-xs text-ink-secondary/60">High contrast for primary calls to action.</p>
                </div>

                <div className="flex min-h-[220px] flex-col justify-between rounded-xl border border-outline-variant/10 bg-white/40 p-8 backdrop-blur-md">
                  <div>
                    <span className="mb-6 block text-[10px] font-bold uppercase tracking-widest text-ink-secondary">Secondary Hover</span>
                    <Button variant="ghost">Ghost Action</Button>
                  </div>
                  <p className="text-xs text-ink-secondary/60">Low-profile for tertiary navigational elements.</p>
                </div>

                <div className="flex min-h-[220px] flex-col justify-between rounded-xl border border-outline-variant/10 bg-white/40 p-8 backdrop-blur-md">
                  <div>
                    <span className="mb-6 block text-[10px] font-bold uppercase tracking-widest text-ink-secondary">Destructive</span>
                    <Button variant="danger">Delete Entry</Button>
                  </div>
                  <p className="text-xs text-ink-secondary/60">Critical actions requiring user caution.</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-8 border-t border-outline-variant/10 pt-12">
                <div className="flex items-center gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large Scale</Button>
                </div>
                <div className="h-8 w-px bg-outline-variant/20" />
                <Button isLoading>Processing</Button>
              </div>
            </section>

            {/* Inputs Section */}
            <section className="mb-24">
              <div className="mb-8 flex items-baseline justify-between">
                <h2 className="text-3xl font-semibold tracking-tight">02. Text Inputs</h2>
                <span className="font-mono text-sm text-ink-secondary/40">ui-input-module</span>
              </div>

              <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div className="space-y-8">
                  <Input 
                    label="Curator Identity" 
                    placeholder="Enter unique identifier..." 
                  />
                  <Input 
                    label="Access Token" 
                    type="password" 
                    placeholder="••••••••••••" 
                  />
                </div>
                <div className="space-y-8">
                  <Input 
                    label="System Email" 
                    error="Please provide a valid administrative email."
                    defaultValue="invalid-email"
                  />
                  <div className="rounded-lg bg-surface-high/30 p-6 border border-outline-variant/5">
                    <p className="text-xs leading-relaxed text-ink-secondary italic">
                      "Inputs use a minimal border-bottom transition to maintain the editorial grid while providing clear focus states."
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

function Main() {
  const [view, setView] = React.useState<"demo" | "docs">("demo");

  return (
    <div className="relative">
      <div className="fixed top-6 right-6 z-[100] flex gap-2 bg-white/80 backdrop-blur-md p-1.5 rounded-full border border-outline-variant/10 shadow-lg">
        <Button 
          variant={view === "demo" ? "primary" : "ghost"} 
          size="sm" 
          className="rounded-full px-4"
          onClick={() => setView("demo")}
        >
          <Layout className="h-4 w-4 mr-2" />
          Demo
        </Button>
        <Button 
          variant={view === "docs" ? "primary" : "ghost"} 
          size="sm" 
          className="rounded-full px-4"
          onClick={() => setView("docs")}
        >
          <BookOpen className="h-4 w-4 mr-2" />
          Docs
        </Button>
      </div>

      {view === "demo" ? <Demo /> : <Docs />}
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}
