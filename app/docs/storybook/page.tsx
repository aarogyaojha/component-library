"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/layout/card";
import { Play, Code, Zap, Layers, Terminal, ChevronRight, Share2 } from "lucide-react";

export default function StorybookPage() {
  return (
    <div className="space-y-12 animate-fade-in max-w-4xl pb-20">
      {/* Introduction */}
      <section id="introduction" className="space-y-6">
        <Badge variant="soft">Development Tooling</Badge>
        <h1 className="text-5xl font-bold tracking-tight">Storybook</h1>
        <p className="text-xl text-muted-foreground leading-relaxed font-medium opacity-80 max-w-2xl">
          Isolated component development and documentation. Storybook helps you build UI components in isolation, making them more robust and reusable.
        </p>
      </section>

      {/* Philosophy / Benefits */}
      <section id="usage" className="space-y-8 pt-12 border-t border-ui-border/20">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Why Storybook?</h2>
          <p className="text-muted-foreground font-medium opacity-80">
            It streamlines our development workflow by providing a clean environment to test variants, edge cases, and accessibility without full-app overhead.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-ui-border/30 bg-card hover:border-primary/40 transition-all p-6 space-y-4">
            <div className="bg-primary/5 p-3 rounded-2xl w-fit">
              <Layers className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-bold text-lg text-foreground">Isolated Development</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Build components without worrying about application logic, data flow, or state. Perfect for building atomic UI.
            </p>
          </Card>
          <Card className="border-ui-border/30 bg-card hover:border-primary/40 transition-all p-6 space-y-4">
            <div className="bg-primary/5 p-3 rounded-2xl w-fit">
              <Share2 className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-bold text-lg text-foreground">Visual Testing</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Easily view and verify different component states, from loading and errors to various sizes and themes.
            </p>
          </Card>
        </div>
      </section>

      {/* Manual Setup / Scripts */}
      <section id="props" className="space-y-6 pt-12 border-t border-ui-border/20">
        <h2 className="text-3xl font-bold tracking-tight">Available Commands</h2>
        <p className="text-muted-foreground font-medium opacity-80">
          Storybook comes with a set of scripts to help you develop, document, and test your components.
        </p>
        
        <div className="space-y-4 mt-6">
          <div className="bg-slate-950 text-slate-100 p-6 rounded-3xl font-mono text-sm leading-relaxed shadow-2xl space-y-4 relative overflow-hidden">
             <div className="flex items-center gap-2 text-primary">
              <Terminal className="w-4 h-4" />
              <span className="text-xs font-bold tracking-widest uppercase opacity-50">Scripts</span>
            </div>
            <div className="space-y-2">
              <p className="text-emerald-400"># Run storybook in development mode</p>
              <p>npm run storybook</p>
              <p className="mt-4 text-emerald-400"># Build static storybook for deployment</p>
              <p>npm run build-storybook</p>
            </div>
          </div>
        </div>
      </section>

      {/* Creation Guide */}
      <section id="quick-start" className="space-y-8 pt-12 border-t border-ui-border/20 pb-10">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Creating a new Story</h2>
          <p className="text-muted-foreground font-medium opacity-80">
            Stories are defined in files ending in <code className="text-primary font-bold">.stories.tsx</code>. Each story exports a set of variants for a specific component.
          </p>
        </div>
        
        <div className="bg-slate-950 text-slate-100 p-8 rounded-3xl shadow-2xl space-y-6">
           <div className="flex items-center gap-2 text-primary">
            <Code className="w-4 h-4" />
            <span className="text-xs font-bold tracking-widest uppercase">button.stories.tsx</span>
          </div>
          <pre className="font-mono text-xs md:text-sm leading-relaxed overflow-x-auto selection:bg-primary/20">
            <code>
              <span className="text-emerald-400">import type</span> &#123; Meta, StoryObj &#125; <span className="text-emerald-400">from</span> <span className="text-orange-300">'@storybook/react'</span>;{"\n"}
              <span className="text-emerald-400">import</span> &#123; Button &#125; <span className="text-emerald-400">from</span> <span className="text-orange-300">'./button'</span>;{"\n\n"}
              <span className="text-emerald-400">const</span> meta: Meta&lt;<span className="text-emerald-400">typeof</span> Button&gt; = &#123;{"\n"}
              {"  "}title: <span className="text-orange-300">'UI/Button'</span>,{"\n"}
              {"  "}component: Button,{"\n"}
              {"  "}tags: [<span className="text-orange-300">'autodocs'</span>],{"\n"}
              &#125;;{"\n\n"}
              <span className="text-emerald-400">export default</span> meta;{"\n"}
              <span className="text-emerald-400">type</span> Story = StoryObj&lt;<span className="text-emerald-400">typeof</span> meta&gt;;{"\n\n"}
              <span className="text-emerald-400">export const</span> Primary: Story = &#123;{"\n"}
              {"  "}args: &#123;{"\n"}
              {"    "}variant: <span className="text-orange-300">'primary'</span>,{"\n"}
              {"    "}children: <span className="text-orange-300">'Click Me'</span>,{"\n"}
              {"  "}&#125;,{"\n"}
              &#125;;
            </code>
          </pre>
        </div>
      </section>
    </div>
  );
}
