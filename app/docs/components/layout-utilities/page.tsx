"use client";

import { Grid, Divider } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/navigation/tabs";
import { Terminal } from "lucide-react";
import { ComponentPreview } from "@/components/docs/component-preview";

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
               <ComponentPreview name="Grid Columns">
                  <Grid cols={3} className="gap-4 w-full">
                    <div className="h-20 bg-primary/10 rounded-xl border border-primary/20 flex items-center justify-center font-bold text-primary">Item 1</div>
                    <div className="h-20 bg-primary/10 rounded-xl border border-primary/20 flex items-center justify-center font-bold text-primary">Item 2</div>
                    <div className="h-20 bg-primary/10 rounded-xl border border-primary/20 flex items-center justify-center font-bold text-primary">Item 3</div>
                  </Grid>
               </ComponentPreview>
            </section>

             <section className="space-y-4">
               <h3 className="text-xl font-bold">Divider</h3>
               <p className="text-muted-foreground">Standardized separators for content grouping.</p>
               <ComponentPreview name="Separators">
                  <div className="w-full max-w-sm space-y-4 py-8">
                    <p className="text-sm font-bold opacity-60 px-4">Workspace A</p>
                    <Divider className="opacity-40" />
                    <p className="text-sm font-bold opacity-60 px-4">Workspace B</p>
                  </div>
               </ComponentPreview>
            </section>
          </TabsContent>
        </Tabs>
      </div>

      <section id="quick-start" className="mt-20 pt-12 border-t border-ui-border/20">
        <div className="flex items-center gap-2 mb-6">
          <Terminal className="w-4 h-4 text-primary" />
          <h3 className="text-lg font-bold">Standard Usage</h3>
        </div>
        <div className="bg-slate-950 text-slate-100 p-6 rounded-2xl font-mono text-sm leading-relaxed shadow-2xl">
          <p className="text-emerald-400"># Import</p>
          <pre><code>import &#123; Grid, Divider &#125; from "@/components/layout";</code></pre>
        </div>
      </section>
    </div>
  );
}
