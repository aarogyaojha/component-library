"use client";

import { Container, Grid, Divider } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/navigation/tabs";
import { Card, CardContent } from "@/components/layout/card";
import { Terminal, Layout as LayoutIcon } from "lucide-react";

export default function LayoutUtilitiesDocs() {
  return (
    <div className="space-y-10 animate-fade-in">
      <section id="introduction" className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="soft">Layout</Badge>
          <Badge variant="outline">Utilities</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Layout Utilities</h1>
        <p className="text-xl text-muted-foreground font-medium opacity-80 leading-relaxed">
          Standardized layout components to ensure 100% design consistency across your application.
        </p>
      </section>

      <div id="usage" className="pt-4">
        <Tabs defaultValue="usage" className="w-full">
          <TabsList className="mb-8 border-b border-ui-border/20 w-fit pb-0 h-auto gap-12 !bg-transparent p-0 rounded-none !shadow-none ring-0">
            <TabsTrigger value="usage" className="h-12 border-b-2 border-transparent data-[state=active]:!border-primary data-[state=active]:!bg-transparent data-[state=active]:!shadow-none data-[state=active]:!scale-100 rounded-none px-2 text-sm font-bold bg-transparent">Usage</TabsTrigger>
            <TabsTrigger value="props" className="h-12 border-b-2 border-transparent data-[state=active]:!border-primary data-[state=active]:!bg-transparent data-[state=active]:!shadow-none data-[state=active]:!scale-100 rounded-none px-2 text-sm font-bold bg-transparent">API Reference</TabsTrigger>
          </TabsList>

          <TabsContent value="usage" className="space-y-12">
            <section className="space-y-4">
               <h3 className="text-xl font-bold">Responsive Grid</h3>
               <p className="text-muted-foreground">Standardized 12-column logic with responsive breakpoints.</p>
               <Card className="border-ui-border/30 bg-card/50">
                  <CardContent className="pt-6">
                    <Grid cols={3} className="gap-4">
                      <div className="h-20 bg-primary/10 rounded-xl border border-primary/20 flex items-center justify-center font-bold text-primary">Item 1</div>
                      <div className="h-20 bg-primary/10 rounded-xl border border-primary/20 flex items-center justify-center font-bold text-primary">Item 2</div>
                      <div className="h-20 bg-primary/10 rounded-xl border border-primary/20 flex items-center justify-center font-bold text-primary">Item 3</div>
                    </Grid>
                  </CardContent>
               </Card>
            </section>

             <section className="space-y-4">
               <h3 className="text-xl font-bold">Divider</h3>
               <p className="text-muted-foreground">Standardized separators for content grouping.</p>
               <Card className="border-ui-border/30 bg-card/50">
                  <CardContent className="pt-6 pb-6">
                    <p className="text-sm opacity-60">Section Above</p>
                    <Divider className="opacity-40" />
                    <p className="text-sm opacity-60">Section Below</p>
                  </CardContent>
               </Card>
            </section>
          </TabsContent>

          <TabsContent value="props" id="props">
            <div className="bg-card border border-ui-border/50 rounded-2xl overflow-hidden">
               <table className="w-full text-left text-sm">
                <thead className="bg-secondary/20 text-muted-foreground uppercase text-[10px] font-bold tracking-widest">
                  <tr><th className="px-6 py-4">Utility</th><th className="px-6 py-4">Prop</th><th className="px-6 py-4">Description/Values</th></tr>
                </thead>
                <tbody className="divide-y divide-ui-border/20">
                  <tr><td className="px-6 py-4 font-bold text-primary">Grid</td><td className="px-6 py-4 font-mono text-xs">cols</td><td className="px-6 py-4 text-muted-foreground">1 to 6. Controls breakpoints.</td></tr>
                  <tr><td className="px-6 py-4 font-bold text-primary">Divider</td><td className="px-6 py-4 font-mono text-xs">orientation</td><td className="px-6 py-4 text-muted-foreground">"horizontal", "vertical"</td></tr>
                   <tr><td className="px-6 py-4 font-bold text-primary">Container</td><td className="px-6 py-4">-</td><td className="px-6 py-4 text-muted-foreground">Max-width 7xl with side padding.</td></tr>
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <section id="quick-start" className="mt-20 pt-12 border-t border-ui-border/20">
        <div className="flex items-center gap-2 mb-6">
          <Terminal className="w-4 h-4 text-primary" />
          <h3 className="text-lg font-bold">Standard Logic</h3>
        </div>
        <div className="bg-slate-950 text-slate-100 p-6 rounded-2xl font-mono text-sm leading-relaxed shadow-2xl">
          <p className="text-emerald-400"># Import</p>
          <p>import &#123; Container, Grid, Divider &#125; from "@/components/layout";</p>
        </div>
      </section>
    </div>
  );
}
