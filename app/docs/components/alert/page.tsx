"use client";

import { Alert, AlertTitle, AlertDescription } from "@/components/feedback/alert";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/navigation/tabs";
import { Terminal } from "lucide-react";
import { ComponentPreview } from "@/components/docs/component-preview";

export default function AlertDocs() {
  return (
    <div className="space-y-10 animate-fade-in">
      <section id="introduction" className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="soft">Feedback</Badge>
          <Badge variant="outline">Communication</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Alert</h1>
        <p className="text-xl text-muted-foreground font-medium opacity-80 leading-relaxed">
          Show important messages to your users with distinct visual emphasis.
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
              <h3 className="text-xl font-bold">Base Styles</h3>
              <p className="text-muted-foreground">Standardized variants for various application contexts.</p>
              <ComponentPreview name="Alert Variants">
                <div className="flex flex-col gap-4 w-full max-w-lg">
                  <Alert>
                    <AlertTitle>Default Alert</AlertTitle>
                    <AlertDescription>
                      This is a standard informational message for the user.
                    </AlertDescription>
                  </Alert>
                  <Alert variant="premium">
                    <AlertTitle>Premium Update</AlertTitle>
                    <AlertDescription>
                      An exclusive feature has been unlocked for your account.
                    </AlertDescription>
                  </Alert>
                  <Alert variant="destructive">
                    <AlertTitle>Security Breach</AlertTitle>
                    <AlertDescription>
                      Your session has expired or unauthorized access was detected.
                    </AlertDescription>
                  </Alert>
                </div>
              </ComponentPreview>
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
                    <td className="px-6 py-4 text-xs">"default" | "destructive" | "success" | "warning" | "premium"</td>
                    <td className="px-6 py-4 text-xs">"default"</td>
                    <td className="px-6 py-4 text-muted-foreground">The visual style of the alert.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <section id="quick-start" className="mt-20 pt-12 border-t border-ui-border/20">
        <div className="flex items-center gap-2 mb-6">
          <Terminal className="w-4 h-4 text-primary" />
          <h3 className="text-lg font-bold">Quick Start</h3>
        </div>
        <div className="bg-slate-950 text-slate-100 p-6 rounded-2xl font-mono text-sm leading-relaxed shadow-2xl">
          <p className="text-emerald-400"># Import components</p>
          <pre><code>import &#123; Alert, AlertTitle, AlertDescription &#125; from "@/components/feedback/alert";</code></pre>
        </div>
      </section>
    </div>
  );
}
