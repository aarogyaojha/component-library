"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/layout/card";
import { Palette, Zap, Box, Terminal } from "lucide-react";

export default function ThemingPage() {
  return (
    <div className="space-y-12 animate-fade-in max-w-4xl">
      {/* Introduction */}
      <section id="introduction" className="space-y-6">
        <Badge variant="soft">Design System</Badge>
        <h1 className="text-5xl font-bold tracking-tight">Theming</h1>
        <p className="text-xl text-muted-foreground leading-relaxed font-medium opacity-80 max-w-2xl">
          Learn how to customize the visual language of your application using our sophisticated design token system.
        </p>
      </section>

      {/* Usage -> Customization */}
      <section id="usage" className="space-y-8 pt-12 border-t border-ui-border/20">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Customization</h2>
          <p className="text-muted-foreground font-medium opacity-80">
            Aarogya is built with high customizability in mind. You can override everything from primary colors to individual component radii.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-ui-border/30 bg-card hover:border-primary/40 transition-all p-6 space-y-4">
            <div className="bg-primary/5 p-3 rounded-2xl w-fit">
              <Palette className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-bold text-lg text-foreground">Color Overrides</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Define your brand's primary and secondary shades in your CSS variables.
            </p>
          </Card>
          <Card className="border-ui-border/30 bg-card hover:border-primary/40 transition-all p-6 space-y-4">
            <div className="bg-primary/5 p-3 rounded-2xl w-fit">
              <Box className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-bold text-lg text-foreground">Rounded Everything</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Global control over the border-radius of cards, inputs, and buttons.
            </p>
          </Card>
        </div>
      </section>

      {/* Props -> Design Tokens */}
      <section id="props" className="space-y-6 pt-12 border-t border-ui-border/20">
        <h2 className="text-3xl font-bold tracking-tight">Design Tokens</h2>
        <p className="text-muted-foreground font-medium opacity-80">
          Our design system uses a curated set of HSL and HWB tokens to maintain a professional, soft aesthetic.
        </p>
        
        <div className="bg-card border border-ui-border/50 rounded-2xl overflow-hidden shadow-soft">
          <table className="w-full text-left text-sm">
            <thead className="bg-secondary/20 text-muted-foreground uppercase text-[10px] font-bold tracking-widest">
              <tr><th className="px-6 py-4">Token Name</th><th className="px-6 py-4">Default Value</th><th className="px-6 py-4 px-6 py-4">Preview</th></tr>
            </thead>
            <tbody className="divide-y divide-ui-border/10">
              <tr><td className="px-6 py-4 font-mono font-bold text-primary">--primary</td><td className="px-6 py-4 text-xs font-mono opacity-60">hwb(264 45% 0%)</td><td className="px-6 py-4"><div className="w-6 h-6 rounded-full bg-primary" /></td></tr>
              <tr><td className="px-6 py-4 font-mono font-bold text-primary">--ui-accent</td><td className="px-6 py-4 text-xs font-mono opacity-60">hwb(330 90% 5%)</td><td className="px-6 py-4"><div className="w-6 h-6 rounded-full bg-[#fdf2f8]" /></td></tr>
              <tr><td className="px-6 py-4 font-mono font-bold text-primary">--ui-border</td><td className="px-6 py-4 text-xs font-mono opacity-60">hwb(264 10% 85%)</td><td className="px-6 py-4"><div className="w-6 h-6 rounded-full border border-ui-border/20" /></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Quick Start -> Themes */}
      <section id="quick-start" className="space-y-6 pt-12 border-t border-ui-border/20 pb-20">
        <h2 className="text-3xl font-bold tracking-tight">Switching Themes</h2>
        <p className="text-muted-foreground font-medium opacity-80">
          Switching from light to dark mode is as simple as adding the <code className="text-primary font-bold">.dark</code> class to your body or container.
        </p>
        
        <div className="bg-slate-950 text-slate-100 p-8 rounded-3xl shadow-2xl space-y-4">
           <div className="flex items-center gap-2 text-primary">
            <Terminal className="w-4 h-4" />
            <span className="text-xs font-bold tracking-widest uppercase">layout.tsx</span>
          </div>
          <pre className="font-mono text-xs md:text-sm leading-relaxed overflow-x-auto selection:bg-primary/20">
            <code>
              <span className="text-emerald-400">export default function</span> RootLayout(&#123; children &#125;) &#123;{"\n"}
              {"  "}<span className="text-emerald-400">return</span> ({"\n"}
              {"    "}&lt;html lang=<span className="text-orange-300">"en"</span> className=<span className="text-orange-300">"dark"</span>&gt;{"\n"}
              {"      "}&lt;body&gt;&#123;children&#125;&lt;/body&gt;{"\n"}
              {"    "}&lt;/html&gt;{"\n"}
              {"  "});{"\n"}
              &#125;
            </code>
          </pre>
        </div>
      </section>
    </div>
  );
}
