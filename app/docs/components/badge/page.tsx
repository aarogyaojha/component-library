"use client";

import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/navigation/tabs";
import { Card, CardContent } from "@/components/layout/card";
import { Terminal, Hash } from "lucide-react";

export default function BadgeDocs() {
  return (
    <div className="space-y-10 animate-fade-in">
      <section id="introduction" className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="soft">Display</Badge>
          <Badge variant="outline">Atomic</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Badge</h1>
        <p className="text-xl text-muted-foreground font-medium opacity-80 leading-relaxed">
          Small status indicators and labels for categorizing content or showing counts.
        </p>
      </section>

      <div id="usage" className="pt-4">
        <Tabs defaultValue="usage" className="w-full">
          <TabsList className="mb-8 border-b border-ui-border/20 w-fit pb-0 h-auto gap-12 !bg-transparent p-0 rounded-none !shadow-none ring-0">
            <TabsTrigger 
              value="usage" 
              className="h-12 border-b-2 border-transparent data-[state=active]:!border-primary data-[state=active]:!bg-transparent data-[state=active]:!shadow-none data-[state=active]:!scale-100 rounded-none px-2 text-sm font-bold bg-transparent shadow-none transition-none"
            >
              Usage
            </TabsTrigger>
            <TabsTrigger 
              value="props" 
              className="h-12 border-b-2 border-transparent data-[state=active]:!border-primary data-[state=active]:!bg-transparent data-[state=active]:!shadow-none data-[state=active]:!scale-100 rounded-none px-2 text-sm font-bold bg-transparent shadow-none transition-none"
            >
              API Reference
            </TabsTrigger>
          </TabsList>

          <TabsContent value="usage" className="space-y-12">
            {/* Example 1: Basic Variants */}
            <section className="space-y-4">
              <h3 className="text-xl font-bold">Base Variants</h3>
              <p className="text-muted-foreground">The primary styles for categorization and feedback.</p>
              <Card className="border-ui-border/30 bg-card/50">
                <CardContent className="pt-10 pb-10 flex flex-wrap gap-4 justify-center">
                  <Badge variant="default">Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="outline">Outline</Badge>
                </CardContent>
              </Card>
            </section>

            {/* Example 2: Premium Variants */}
            <section className="space-y-4">
              <h3 className="text-xl font-bold">Soft & Premium</h3>
              <p className="text-muted-foreground">Specially designed variants for a modern, high-end feel.</p>
              <Card className="border-ui-border/30 bg-card/50">
                <CardContent className="pt-10 pb-10 flex flex-wrap gap-4 justify-center">
                  <Badge variant="soft">Soft Variant</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="gold">Premium Gold</Badge>
                </CardContent>
              </Card>
            </section>
          </TabsContent>

          <TabsContent value="props" id="props">
            <div className="bg-card border border-ui-border/50 rounded-2xl overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="bg-secondary/20 text-muted-foreground uppercase text-[10px] font-bold tracking-widest">
                  <tr>
                    <th className="px-6 py-4">Prop</th>
                    <th className="px-6 py-4">Type</th>
                    <th className="px-6 py-4">Default</th>
                    <th className="px-6 py-4">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ui-border/20">
                  <tr>
                    <td className="px-6 py-4 font-mono font-bold text-primary">variant</td>
                    <td className="px-6 py-4 text-xs">"default" | "secondary" | "destructive" | "outline" | "soft" | "success" | "gold"</td>
                    <td className="px-6 py-4 text-xs">"default"</td>
                    <td className="px-6 py-4 text-muted-foreground">The visual style of the badge.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Code Block */}
      <section id="quick-start" className="mt-20 pt-12 border-t border-ui-border/20">
        <div className="flex items-center gap-2 mb-6">
          <Terminal className="w-4 h-4 text-primary" />
          <h3 className="text-lg font-bold">Quick Start</h3>
        </div>
        <div className="bg-slate-950 text-slate-100 p-6 rounded-2xl font-mono text-sm leading-relaxed shadow-2xl">
          <div className="flex justify-between items-center mb-4 opacity-50 text-xs uppercase tracking-tighter">
            <span>Terminal</span>
            <span>Copy</span>
          </div>
          <p className="text-emerald-400"># Import</p>
          <p>import &#123; Badge &#125; from "@/components/ui/badge";</p>
          <p className="mt-4 text-emerald-400"># Usage</p>
          <p>&lt;Badge variant="soft"&gt;</p>
          <p className="pl-4">v1.0 Ready</p>
          <p>&lt;/Badge&gt;</p>
        </div>
      </section>
    </div>
  );
}
