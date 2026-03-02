"use client";

import { Input } from "@/components/forms/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/navigation/tabs";
import { Terminal } from "lucide-react";
import { ComponentPreview } from "@/components/docs/component-preview";

export default function InputDocs() {
  return (
    <div className="space-y-10 animate-fade-in">
      <section id="introduction" className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="soft">Forms</Badge>
          <Badge variant="outline">Input</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Input</h1>
        <p className="text-xl text-muted-foreground font-medium opacity-80 leading-relaxed">
          The basic building block for gathering user input. Enhanced with labels, descriptions, and error states.
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
              <h3 className="text-xl font-bold">Standard Inputs</h3>
              <p className="text-muted-foreground">The foundation for user data entry.</p>
              <ComponentPreview name="Base Input Styles">
                <div className="w-full max-w-sm space-y-4">
                  <Input label="Email address" placeholder="Enter your email..." />
                  <Input label="Password" type="password" placeholder="••••••••" description="Use at least 8 characters." />
                </div>
              </ComponentPreview>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold">Feedback States</h3>
              <p className="text-muted-foreground">Visual cues for validation and errors.</p>
              <ComponentPreview name="Validation Contexts">
                <div className="w-full max-w-sm">
                  <Input 
                    label="Username" 
                    placeholder="aarogya_ojha" 
                    error="This username is already taken. Please try another one." 
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
          <h3 className="text-lg font-bold">Quick Start</h3>
        </div>
        <div className="bg-slate-950 text-slate-100 p-6 rounded-2xl font-mono text-sm leading-relaxed shadow-2xl">
          <p className="text-emerald-400"># Usage</p>
          <pre><code>&lt;Input label="Email" placeholder="you@example.com" /&gt;</code></pre>
        </div>
      </section>
    </div>
  );
}
