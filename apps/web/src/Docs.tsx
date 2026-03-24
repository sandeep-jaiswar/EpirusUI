import * as React from "react";
import { 
  Button, 
  Input, 
  Card, 
  Label, 
  useTheme, 
  SkipLink, 
  VisuallyHidden 
} from "@repo/ui";
import { 
  Sun, 
  Moon, 
  Type, 
  Box, 
  Layout, 
  Terminal, 
  CheckCircle2, 
  Info, 
  AlertCircle 
} from "lucide-react";

const ComponentSection = ({ 
  title, 
  description, 
  children, 
  props 
}: { 
  title: string; 
  description: string; 
  children: React.ReactNode; 
  props: Array<{ name: string; type: string; default?: string; description: string }> 
}) => (
  <section id={title.toLowerCase()} className="mb-24 scroll-mt-24">
    <div className="mb-8 flex items-baseline justify-between border-b border-outline-variant/10 pb-4">
      <div>
        <h2 className="text-4xl font-bold tracking-tight mb-2">{title}</h2>
        <p className="text-ink-secondary text-lg max-w-2xl">{description}</p>
      </div>
      <span className="font-mono text-xs text-ink-muted uppercase tracking-widest">ui-{title.toLowerCase()}</span>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <div className="lg:col-span-2 space-y-8">
        <div className="rounded-2xl border border-outline-variant/10 bg-surface-low p-12 flex items-center justify-center min-h-[300px]">
          {children}
        </div>
        
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-ink-secondary flex items-center gap-2">
            <Terminal className="h-4 w-4" />
            Properties
          </h3>
          <div className="overflow-x-auto rounded-xl border border-outline-variant/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-surface-high/50 text-ink-secondary">
                <tr>
                  <th className="px-4 py-3 font-semibold">Prop</th>
                  <th className="px-4 py-3 font-semibold">Type</th>
                  <th className="px-4 py-3 font-semibold">Default</th>
                  <th className="px-4 py-3 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {props.map((p) => (
                  <tr key={p.name} className="hover:bg-surface-high/20 transition-colors">
                    <td className="px-4 py-4 font-mono text-primary font-bold">{p.name}</td>
                    <td className="px-4 py-4 text-ink-secondary font-mono text-xs">{p.type}</td>
                    <td className="px-4 py-4 text-ink-muted font-mono text-xs">{p.default || "-"}</td>
                    <td className="px-4 py-4 text-ink-secondary">{p.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="rounded-xl bg-primary/5 p-6 border border-primary/10">
          <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
            <Info className="h-4 w-4" />
            Design Note
          </h4>
          <p className="text-sm text-ink-secondary leading-relaxed italic">
            This component follows the "Digital Curator" aesthetic, prioritizing high contrast and tactile feedback. Ensure sufficient padding and clear labels for optimal accessibility.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default function Docs() {
  const { mode, toggleMode, theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-surface transition-colors duration-500">
      <SkipLink targetId="docs-content" />
      
      {/* Sidebar Navigation */}
      <aside className="fixed left-0 top-0 h-screen w-72 border-r border-outline-variant/10 bg-surface-low/50 backdrop-blur-xl p-8 hidden xl:block">
        <div className="mb-12">
          <h1 className="text-2xl font-bold tracking-tighter flex items-center gap-2">
            <Box className="h-6 w-6" />
            Curator UI
          </h1>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink-muted mt-1">v1.0.4 • Documentation</p>
        </div>

        <nav className="space-y-8">
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-ink-muted mb-4">Foundation</h3>
            <ul className="space-y-2">
              <li><a href="#theming" className="text-sm font-medium text-ink-secondary hover:text-primary transition-colors flex items-center gap-2"><Layout className="h-4 w-4" /> Theming</a></li>
              <li><a href="#typography" className="text-sm font-medium text-ink-secondary hover:text-primary transition-colors flex items-center gap-2"><Type className="h-4 w-4" /> Typography</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-ink-muted mb-4">Components</h3>
            <ul className="space-y-2">
              <li><a href="#button" className="text-sm font-medium text-ink-secondary hover:text-primary transition-colors">Button</a></li>
              <li><a href="#input" className="text-sm font-medium text-ink-secondary hover:text-primary transition-colors">Input</a></li>
              <li><a href="#card" className="text-sm font-medium text-ink-secondary hover:text-primary transition-colors">Card</a></li>
              <li><a href="#label" className="text-sm font-medium text-ink-secondary hover:text-primary transition-colors">Label</a></li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main id="docs-content" className="xl:ml-72 p-8 lg:p-20 max-w-7xl mx-auto">
        {/* Header / Theme Switcher */}
        <header className="mb-24 flex items-center justify-between">
          <div>
            <h1 className="text-6xl font-bold tracking-tighter leading-none mb-4">System <br /> Documentation.</h1>
            <p className="text-xl text-ink-secondary max-w-xl">A comprehensive guide to the Digital Curator design system components and theming engine.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleMode}
              className="rounded-full w-12 h-12 p-0"
              aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
            >
              {mode === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
          </div>
        </header>

        {/* Theming Section */}
        <section id="theming" className="mb-32 scroll-mt-24">
          <div className="mb-12">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Theming Engine</h2>
            <p className="text-ink-secondary text-lg max-w-2xl">
              The system uses CSS variables abstracted into a React context. You can switch between presets or provide custom overrides at runtime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4">Current Mode: <span className="capitalize text-primary">{mode}</span></h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-ink-secondary">Primary Color</span>
                  <div className="h-6 w-24 rounded border border-outline-variant/20" style={{ backgroundColor: "var(--color-primary)" }} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-ink-secondary">Surface Color</span>
                  <div className="h-6 w-24 rounded border border-outline-variant/20" style={{ backgroundColor: "var(--color-surface)" }} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-ink-secondary">Accent Color</span>
                  <div className="h-6 w-24 rounded border border-outline-variant/20" style={{ backgroundColor: "var(--color-accent)" }} />
                </div>
              </div>
              <Button className="mt-8 w-full" onClick={toggleMode}>
                Toggle {mode === 'light' ? 'Dark' : 'Light'} Mode
              </Button>
            </Card>

            <Card className="p-8 bg-primary text-white">
              <h3 className="text-xl font-bold mb-4">Custom Overrides</h3>
              <p className="text-sm opacity-80 mb-6">You can inject custom values into the theme provider to brand the application dynamically.</p>
              <div className="space-y-4">
                <Button 
                  variant="ghost" 
                  className="w-full bg-white/10 hover:bg-white/20 text-white border-white/20"
                  onClick={() => setTheme({ ...theme, primary: "#0066cc", accent: "#ffcc00" })}
                >
                  Apply "Ocean" Brand
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full bg-white/10 hover:bg-white/20 text-white border-white/20"
                  onClick={() => setTheme({ ...theme, primary: "#800000", accent: "#ffd700" })}
                >
                  Apply "Royal" Brand
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Component Documentation */}
        <ComponentSection
          title="Button"
          description="Interactive trigger for actions, supporting multiple variants, sizes, and loading states."
          props={[
            { name: "variant", type: "'primary' | 'ghost' | 'danger'", default: "'primary'", description: "The visual style of the button." },
            { name: "size", type: "'sm' | 'md' | 'lg'", default: "'md'", description: "The size of the button." },
            { name: "isLoading", type: "boolean", default: "false", description: "Shows a spinner and disables interaction." },
            { name: "disabled", type: "boolean", default: "false", description: "Disables the button." },
          ]}
        >
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="primary">Primary Action</Button>
            <Button variant="ghost">Secondary</Button>
            <Button variant="danger">Destructive</Button>
            <Button isLoading>Loading</Button>
          </div>
        </ComponentSection>

        <ComponentSection
          title="Input"
          description="Text entry field with support for labels, error states, and full accessibility."
          props={[
            { name: "label", type: "string", description: "Label text displayed above the input." },
            { name: "error", type: "string", description: "Error message displayed below the input." },
            { name: "id", type: "string", description: "Unique identifier for the input." },
            { name: "placeholder", type: "string", description: "Placeholder text." },
          ]}
        >
          <div className="w-full max-w-sm space-y-8">
            <Input label="Email Address" placeholder="curator@example.com" />
            <Input label="Password" type="password" error="Password must be at least 8 characters" />
          </div>
        </ComponentSection>

        <ComponentSection
          title="Card"
          description="Container for grouping related content and actions with various visual styles."
          props={[
            { name: "variant", type: "'default' | 'outline' | 'ghost'", default: "'default'", description: "The visual style of the card." },
          ]}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <Card>
              <h4 className="font-bold mb-2">Default Card</h4>
              <p className="text-sm text-ink-secondary">Standard container with backdrop blur.</p>
            </Card>
            <Card variant="outline">
              <h4 className="font-bold mb-2">Outline Card</h4>
              <p className="text-sm text-ink-secondary">Border-focused container for subtle grouping.</p>
            </Card>
          </div>
        </ComponentSection>

        <ComponentSection
          title="Label"
          description="Semantic label component for form elements, ensuring accessibility."
          props={[
            { name: "htmlFor", type: "string", description: "The ID of the element this label is associated with." },
          ]}
        >
          <div className="space-y-4">
            <Label>Standard Label</Label>
            <Label className="text-primary">Custom Styled Label</Label>
          </div>
        </ComponentSection>

        {/* Footer */}
        <footer className="mt-32 pt-12 border-t border-outline-variant/10 text-center">
          <p className="text-ink-muted text-sm">
            Digital Curator Design System • Built with React & Tailwind CSS
          </p>
        </footer>
      </main>
    </div>
  );
}
