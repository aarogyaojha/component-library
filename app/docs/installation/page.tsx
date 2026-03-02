"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/layout/card";
import { Terminal, Copy, Check, Info } from "lucide-react";
import { useState } from "react";

export default function InstallationPage() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const installCommand = "npx aarogya-ui@latest init";

  return (
    <div className="space-y-12 animate-fade-in max-w-4xl">
      {/* Introduction */}
      <section id="introduction" className="space-y-6">
        <Badge variant="soft">Step-by-Step Guide</Badge>
        <h1 className="text-5xl font-bold tracking-tight">Installation</h1>
        <p className="text-xl text-muted-foreground leading-relaxed font-medium opacity-80 max-w-2xl">
          Complete set of instructions to bootstrap your Next.js project with Aarogya's Tailwind v4 design system.
        </p>
      </section>

      {/* Usage -> Dependencies */}
      <section id="usage" className="space-y-6 pt-12 border-t border-ui-border/20">
        <h2 className="text-3xl font-bold tracking-tight">CLI Installation</h2>
        <p className="text-muted-foreground font-medium opacity-80">
          The easiest way to get started is using our CLI. It will automatically configure your project, install dependencies, and setup Tailwind v4.
        </p>
        
        <div className="bg-slate-950 text-slate-100 p-6 rounded-3xl font-mono text-sm leading-relaxed shadow-2xl relative group">
          <div className="flex justify-between items-center mb-4 opacity-50 text-[10px] uppercase tracking-widest font-bold">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40" />
            </div>
            <button 
              onClick={() => copyToClipboard(installCommand)}
              className="hover:text-white transition-colors flex items-center gap-1.5 active:scale-95"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <div className="flex gap-4">
            <span className="text-emerald-400/60 select-none">$</span>
            <p>{installCommand}</p>
          </div>
        </div>
      </section>

      {/* Props -> Tailwind Configuration */}
      <section id="props" className="space-y-6 pt-12 border-t border-ui-border/20">
        <h2 className="text-3xl font-bold tracking-tight">Tailwind v4 Setup</h2>
        <p className="text-muted-foreground font-medium opacity-80">
          Aarogya is built on the lightning-fast Tailwind v4 engine. Ensure your <code className="text-primary font-bold">globals.css</code> imports the necessary CSS variables and design tokens.
        </p>
        
        <Card className="border-ui-border/30 bg-card/40 overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-slate-900/10 p-4 border-b border-ui-border/20 flex items-center gap-2">
              <Info className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-muted-foreground">globals.css Setup</span>
            </div>
            <pre className="p-6 font-mono text-sm leading-6 overflow-x-auto selection:bg-primary/20">
              <code className="text-muted-foreground">
                <span className="text-primary">@import</span> "tailwindcss";{"\n"}
                <span className="text-primary">@import</span> "./tokens.css";{"\n\n"}
                <span className="text-emerald-500/80">/* Add your base layers here */</span>{"\n"}
                <span className="text-primary">@layer</span> base {"{\n"}
                {"  "}:root {"{\n"}
                {"    "}--background: hwb(30 98% 1%);{"\n"}
                {"    "}--foreground: hwb(0 10% 90%);{"\n"}
                {"  "}{"}\n"}
                {"}"}
              </code>
            </pre>
          </CardContent>
        </Card>
      </section>

      {/* Quick Start -> Verification */}
      <section id="quick-start" className="space-y-6 pt-12 border-t border-ui-border/20 pb-20">
        <h2 className="text-3xl font-bold tracking-tight">Verification</h2>
        <p className="text-muted-foreground font-medium opacity-80">
          Once installed, try importing the component below in your <code className="text-primary font-bold">page.tsx</code> to verify that everything is working.
        </p>
        
        <div className="bg-slate-950 text-slate-100 p-8 rounded-3xl shadow-2xl space-y-4">
           <div className="flex items-center gap-2 text-primary">
            <Terminal className="w-4 h-4" />
            <span className="text-xs font-bold tracking-widest uppercase">page.tsx</span>
          </div>
          <pre className="font-mono text-xs md:text-sm leading-relaxed overflow-x-auto">
            <code>
              <span className="text-emerald-400">import</span> &#123; Button &#125; <span className="text-emerald-400">from</span> <span className="text-orange-300">"@/components/ui/button"</span>;{"\n\n"}
              <span className="text-emerald-400">export default function</span> Page() &#123;{"\n"}
              {"  "}<span className="text-emerald-400">return</span> ({"\n"}
              {"    "}&lt;Button variant=<span className="text-orange-300">"primary"</span>&gt;{"\n"}
              {"      "}Hello Aarogya!{"\n"}
              {"    "}&lt;/Button&gt;{"\n"}
              {"  "});{"\n"}
              &#125;
            </code>
          </pre>
        </div>
      </section>
    </div>
  );
}
