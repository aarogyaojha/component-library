"use client";

import { Checkbox } from "@/components/forms/checkbox";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/navigation/tabs";
import { Card, CardContent } from "@/components/layout/card";
import { Terminal, Zap } from "lucide-react";

export default function CheckboxDocs() {
  return (
    <div className="space-y-10 animate-fade-in">
      <section id="introduction" className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="soft">Form Controls</Badge>
          <Badge variant="outline">Interactive</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Checkbox</h1>
        <p className="text-xl text-muted-foreground font-medium opacity-80 leading-relaxed">
          Standardized checkbox system with custom check icons and refined focus states.
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
              <h3 className="text-xl font-bold">Standard Selection</h3>
              <p className="text-muted-foreground">The typical usage for multi-choice selection.</p>
              <Card className="border-ui-border/30 bg-card/50">
                <CardContent className="pt-10 pb-10 flex flex-col items-center gap-6">
                  <Checkbox label="Accept terms and conditions" id="terms" />
                  <Checkbox label="Subscribe to newsletter" id="newsletter" defaultChecked />
                </CardContent>
              </Card>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold">Disabled States</h3>
              <p className="text-muted-foreground">Visual feedback for inactive options.</p>
              <Card className="border-ui-border/30 bg-card/50">
                <CardContent className="pt-10 pb-10 flex flex-col items-center gap-4">
                  <Checkbox label="Enterprise Access (Admin only)" id="enterprise" disabled />
                  <Checkbox label="Pre-selected Option" id="pre" disabled checked />
                </CardContent>
              </Card>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold">Validation & Helper</h3>
              <p className="text-muted-foreground">Provide extra context or error messages.</p>
              <Card className="border-ui-border/30 bg-card/50">
                <CardContent className="pt-10 pb-10 flex flex-col items-center gap-4">
                  <Checkbox label="Enable Notifications" description="You can change these later in settings." />
                  <Checkbox label="I am not a robot" error="Please verify you're human." />
                </CardContent>
              </Card>
            </section>
          </TabsContent>

          <TabsContent value="props" id="props">
            <div className="bg-card border border-ui-border/50 rounded-2xl overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="bg-secondary/20 text-muted-foreground uppercase text-[10px] font-bold tracking-widest">
                  <tr><th className="px-6 py-4">Prop</th><th className="px-6 py-4">Type</th><th className="px-6 py-4">Description</th></tr>
                </thead>
                <tbody className="divide-y divide-ui-border/20">
                  <tr><td className="px-6 py-4 font-mono font-bold text-primary">label</td><td className="px-6 py-4 text-xs">string</td><td className="px-6 py-4 text-muted-foreground">Text label to display next to the check.</td></tr>
                  <tr><td className="px-6 py-4 font-mono font-bold text-primary">description</td><td className="px-6 py-4 text-xs">string</td><td className="px-6 py-4 text-muted-foreground">Optional subtext to guide users.</td></tr>
                  <tr><td className="px-6 py-4 font-mono font-bold text-primary">error</td><td className="px-6 py-4 text-xs">string</td><td className="px-6 py-4 text-muted-foreground">Error message for validation states.</td></tr>
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
          <p>import &#123; Checkbox &#125; from "@/components/forms/checkbox";</p>
        </div>
      </section>
    </div>
  );
}
