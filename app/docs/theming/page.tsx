"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/layout/card";
import { Palette, Zap, Box, Terminal, Moon, Sun } from "lucide-react";

export default function ThemingPage() {
  return (
    <div className="space-y-12 animate-fade-in max-w-4xl">
      {/* Introduction */}
      <section id="introduction" className="space-y-6">
        <div className="flex items-center gap-2">
          <Badge variant="soft">Design System</Badge>
          <Badge variant="outline">Tailwind v4</Badge>
        </div>
        <h1 className="text-5xl font-bold tracking-tight text-foreground">Theming</h1>
        <p className="text-xl text-muted-foreground leading-relaxed font-medium opacity-80 max-w-2xl">
          Learn how to customize the visual language of your application using our sophisticated design token system.
        </p>
      </section>

      {/* Usage -> Customization */}
      <section id="usage" className="space-y-8 pt-12 border-t border-ui-border/20 text-foreground">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">System Architecture</h2>
          <p className="text-muted-foreground font-medium opacity-80">
            Aarogya is built with high customizability in mind. You can override everything from primary colors to individual component radii.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-ui-border/10 bg-card hover:border-primary/40 transition-all p-8 space-y-4 shadow-soft">
            <div className="bg-primary/5 p-3 rounded-2xl w-fit">
              <Palette className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-bold text-lg">Color Overrides</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Define your brand's primary and secondary shades in your CSS variables.
            </p>
          </Card>
          <Card className="border-ui-border/10 bg-card hover:border-primary/40 transition-all p-8 space-y-4 shadow-soft">
            <div className="bg-primary/5 p-3 rounded-2xl w-fit">
              <Box className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-bold text-lg">Rounded Everything</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Global control over the border-radius of cards, inputs, and buttons.
            </p>
          </Card>
        </div>
      </section>

      {/* Props -> Design Tokens */}
      <section id="props" className="space-y-6 pt-12 border-t border-ui-border/20 text-foreground">
        <h2 className="text-3xl font-bold tracking-tight">Core Design Tokens</h2>
        <p className="text-muted-foreground font-medium opacity-80 font-bold">
          Our design system uses a curated set of functional tokens to maintain a professional, soft aesthetic.
        </p>
        
        <div className="bg-card border border-ui-border/10 rounded-[2.5rem] overflow-hidden shadow-premium">
          <table className="w-full text-left text-sm">
            <thead className="bg-secondary/10 text-muted-foreground uppercase text-[10px] font-bold tracking-widest">
              <tr><th className="px-8 py-6">Token Name</th><th className="px-8 py-6">Description</th><th className="px-8 py-6 text-right">Preview</th></tr>
            </thead>
            <tbody className="divide-y divide-ui-border/10 font-medium">
              <tr>
                <td className="px-8 py-5 font-mono font-bold text-primary">--color-primary</td>
                <td className="px-8 py-5 text-muted-foreground">The main brand identity color.</td>
                <td className="px-8 py-5 flex justify-end"><div className="w-6 h-6 rounded-full bg-primary" /></td>
              </tr>
              <tr>
                <td className="px-8 py-5 font-mono font-bold text-primary">--color-background</td>
                <td className="px-8 py-5 text-muted-foreground">Main canvas background.</td>
                <td className="px-8 py-5 flex justify-end"><div className="w-6 h-6 rounded-full border border-ui-border/20 bg-background" /></td>
              </tr>
              <tr>
                <td className="px-8 py-5 font-mono font-bold text-primary">--color-card</td>
                <td className="px-8 py-5 text-muted-foreground">Surface color for containers.</td>
                <td className="px-8 py-5 flex justify-end"><div className="w-6 h-6 rounded-full border border-ui-border/20 bg-card shadow-sm" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Quick Start -> Themes */}
      <section id="quick-start" className="space-y-8 pt-12 border-t border-ui-border/20 pb-20 text-foreground">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow-xl">
             <Moon className="w-6 h-6 hidden dark:block" />
             <Sun className="w-6 h-6 dark:hidden" />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Dark Mode Implementation</h2>
            <p className="text-muted-foreground font-medium opacity-80">
              Aarogya supports dark mode out of the box using Tailwind's <code className="text-primary font-bold">.dark</code> selector.
            </p>
          </div>
        </div>
        
        <p className="text-muted-foreground font-medium leading-relaxed">
          When the <code className="text-primary font-bold">.dark</code> class is applied to your <code className="bg-card px-1.5 py-0.5 rounded border">html</code> tag, the system automatically swaps all functional tokens to their dark counterparts.
        </p>

        <div className="bg-slate-950 text-slate-100 p-8 rounded-[2rem] shadow-2xl space-y-6 relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Palette className="w-32 h-32" />
           </div>
           <div className="flex items-center gap-2 text-primary relative">
            <Terminal className="w-4 h-4" />
            <span className="text-xs font-bold tracking-widest uppercase">globals.css</span>
          </div>
          <pre className="font-mono text-xs md:text-sm leading-relaxed overflow-x-auto selection:bg-primary/20 relative">
            <code>
              <span className="text-slate-500">/* Light Mode (Base) */</span>{"\n"}
              :root &#123;{"\n"}
              {"  "}--color-background: #FFFBF1;{"\n"}
              {"  "}--color-foreground: #2D3748;{"\n"}
              &#125;{"\n\n"}
              <span className="text-emerald-400">.dark</span> &#123;{"\n"}
              {"  "}--color-background: #0C0C0E;{"\n"}
              {"  "}--color-foreground: #F8F8F8;{"\n"}
              &#125;
            </code>
          </pre>
        </div>
      </section>
    </div>
  );
}
