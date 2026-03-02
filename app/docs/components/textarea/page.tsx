"use client";

import { Textarea } from "@/components/forms/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/navigation/tabs";
import { Terminal } from "lucide-react";
import { ComponentPreview } from "@/components/docs/component-preview";

export default function TextareaDocs() {
  return (
    <div className="space-y-10 animate-fade-in">
      <section id="introduction" className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="soft">Form Controls</Badge>
          <Badge variant="outline">Interactive</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Textarea</h1>
        <p className="text-xl text-muted-foreground font-medium opacity-80 leading-relaxed">
          The essential component for handling multi-line user inputs. Fully accessible with refined focus and resize behaviors.
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
              <h3 className="text-xl font-bold">Standard Text Area</h3>
              <p className="text-muted-foreground">The most common usage for longer text-based data.</p>
              <ComponentPreview name="Base Input">
                <Textarea 
                  label="Project Description" 
                  placeholder="Describe your project here..." 
                  className="w-full max-w-md" 
                />
              </ComponentPreview>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold">Validation States</h3>
              <p className="text-muted-foreground">Provide clear feedback on user errors.</p>
              <ComponentPreview name="Error States">
                <Textarea 
                  label="Bio" 
                  placeholder="Tell us about yourself..." 
                  error="Must be under 150 characters." 
                  className="w-full max-w-md" 
                />
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
          <pre><code>&lt;Textarea label="Message" /&gt;</code></pre>
        </div>
      </section>
    </div>
  );
}
