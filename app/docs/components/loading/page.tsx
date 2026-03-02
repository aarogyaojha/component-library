"use client";

import { Spinner } from "@/components/feedback/spinner";
import { Skeleton } from "@/components/feedback/skeleton";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/navigation/tabs";
import { Terminal } from "lucide-react";
import { ComponentPreview } from "@/components/docs/component-preview";

export default function LoadingDocs() {
  return (
    <div className="space-y-10 animate-fade-in">
      <section id="introduction" className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="soft">Feedback</Badge>
          <Badge variant="outline">Interactive</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Loading & Wait States</h1>
        <p className="text-xl text-muted-foreground font-medium opacity-80 leading-relaxed">
          The essential visual feedback for async operations. Featuring refined animations for spinners and skeleton placeholders.
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
              <h3 className="text-xl font-bold">Spinners</h3>
              <p className="text-muted-foreground">The primary indicator for quick background tasks.</p>
              <ComponentPreview name="Sizes">
                <div className="flex flex-wrap gap-12 justify-center items-center">
                  <div className="text-center space-y-2">
                    <Spinner size="sm" />
                    <p className="text-[10px] font-bold opacity-50 uppercase">Small</p>
                  </div>
                  <div className="text-center space-y-2">
                    <Spinner size="default" />
                    <p className="text-[10px] font-bold opacity-50 uppercase">Medium (Default)</p>
                  </div>
                   <div className="text-center space-y-2">
                    <Spinner size="lg" />
                    <p className="text-[10px] font-bold opacity-50 uppercase">Large</p>
                  </div>
                </div>
              </ComponentPreview>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold">Skeletons</h3>
              <p className="text-muted-foreground">Placeholder content for layouts while fetching data.</p>
              <ComponentPreview name="Skeleton Pattern">
                <div className="w-full max-w-sm flex items-center gap-4 p-8 bg-card rounded-3xl border border-ui-border/10 shadow-soft">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-3 flex-1">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3 opacity-50" />
                  </div>
                </div>
              </ComponentPreview>
            </section>
          </TabsContent>
        </Tabs>
      </div>

      <section id="quick-start" className="mt-20 pt-12 border-t border-ui-border/20 border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2 mb-6">
          <Terminal className="w-4 h-4 text-primary" />
          <h3 className="text-lg font-bold">Standard Usage</h3>
        </div>
        <div className="bg-slate-950 text-slate-100 p-6 rounded-2xl font-mono text-sm leading-relaxed shadow-2xl">
          <p className="text-emerald-400"># Import</p>
          <pre><code>import &#123; Spinner, Skeleton &#125; from "@/components/feedback";</code></pre>
        </div>
      </section>
    </div>
  );
}
