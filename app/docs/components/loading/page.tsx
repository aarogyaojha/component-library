"use client";

import { Spinner } from "@/components/feedback/spinner";
import { Skeleton } from "@/components/feedback/skeleton";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/navigation/tabs";
import { Card, CardContent } from "@/components/layout/card";
import { Terminal, Zap } from "lucide-react";

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
              <Card className="border-ui-border/30 bg-card/50">
                <CardContent className="pt-10 pb-10 flex flex-wrap gap-12 justify-center items-center">
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
                </CardContent>
              </Card>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold">Skeletons</h3>
              <p className="text-muted-foreground">Placeholder content for layouts while fetching data.</p>
              <Card className="border-ui-border/30 bg-card/50">
                <CardContent className="pt-10 pb-10 flex flex-col items-center">
                  <div className="w-full max-w-sm flex items-center gap-4 p-6 bg-background rounded-2xl border border-ui-border/20">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2 flex-1">
                      <Skeleton className="h-4 w-[250px]" />
                      <Skeleton className="h-4 w-[200px]" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </TabsContent>

          <TabsContent value="props" id="props">
            <div className="bg-card border border-ui-border/50 rounded-2xl overflow-hidden">
               <table className="w-full text-left text-sm">
                <thead className="bg-secondary/20 text-muted-foreground uppercase text-[10px] font-bold tracking-widest">
                  <tr><th className="px-6 py-4">Component</th><th className="px-6 py-4">Prop</th><th className="px-6 py-4">Values</th></tr>
                </thead>
                <tbody className="divide-y divide-ui-border/20">
                  <tr><td className="px-6 py-4 font-bold text-primary">Spinner</td><td className="px-6 py-4 font-mono text-xs">size</td><td className="px-6 py-4 text-muted-foreground">"sm", "md", "lg"</td></tr>
                  <tr><td className="px-6 py-4 font-bold text-primary">Skeleton</td><td className="px-6 py-4">-</td><td className="px-6 py-4 text-muted-foreground">Uses CSS classes for dimensions.</td></tr>
                </tbody>
              </table>
            </div>
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
          <p>import &#123; Spinner &#125; from "@/components/feedback/spinner";</p>
          <p>import &#123; Skeleton &#125; from "@/components/feedback/skeleton";</p>
        </div>
      </section>
    </div>
  );
}
