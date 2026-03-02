"use client";

import { Checkbox } from "@/components/forms/checkbox";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/navigation/tabs";
import { Terminal } from "lucide-react";
import { ComponentPreview } from "@/components/docs/component-preview";

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
              <ComponentPreview name="Base Checkboxes">
                <div className="flex flex-col gap-6">
                  <Checkbox label="Accept terms and conditions" id="terms" />
                  <Checkbox label="Subscribe to newsletter" id="newsletter" defaultChecked />
                </div>
              </ComponentPreview>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold">Validation & Helper</h3>
              <p className="text-muted-foreground">Provide extra context or error messages.</p>
              <ComponentPreview name="Contextual States">
                <div className="flex flex-col gap-6 w-full max-w-sm">
                  <Checkbox 
                    label="Enable Notifications" 
                    description="You can change these later in settings." 
                  />
                  <Checkbox 
                    label="I am not a robot" 
                    error="Please verify you're human." 
                  />
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
          <p className="text-emerald-400"># Usage</p>
          <pre><code>&lt;Checkbox label="Accept Terms" /&gt;</code></pre>
        </div>
      </section>
    </div>
  );
}
