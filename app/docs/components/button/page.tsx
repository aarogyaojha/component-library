"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/navigation/tabs";
import { Card, CardContent } from "@/components/layout/card";
import { Terminal, Box, Zap, Share2 } from "lucide-react";
import { ComponentPreview } from "@/components/docs/component-preview";

export default function ButtonDocs() {
  return (
    <div className="space-y-10 animate-fade-in">
      <section id="introduction" className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="soft">Action</Badge>
          <Badge variant="outline">Interactive</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Button</h1>
        <p className="text-xl text-muted-foreground font-medium opacity-80 leading-relaxed">
          The essential interactive trigger for actions and navigation. Designed with a soft aesthetic and premium focus states.
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
            {/* Variants showcase */}
            <section className="space-y-4">
              <h3 className="text-xl font-bold">Standard Buttons</h3>
              <p className="text-muted-foreground">Our core button variants for everyday actions.</p>
              <ComponentPreview name="Base Variants">
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="soft">Soft</Button>
                </div>
              </ComponentPreview>
            </section>

            {/* Sizes showcase */}
            <section className="space-y-4">
              <h3 className="text-xl font-bold">Sizes & States</h3>
              <p className="text-muted-foreground">Adjust dimensions and feedback for specific contexts.</p>
              <ComponentPreview name="Sizing & Loading">
                <div className="flex flex-wrap items-center justify-center gap-6">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button isLoading variant="secondary">Processing</Button>
                </div>
              </ComponentPreview>
            </section>
            
            {/* Features showcase */}
            <section className="space-y-4">
              <h3 className="text-xl font-bold">Icon Buttons</h3>
              <p className="text-muted-foreground">Standardized icon behaviors and square variants.</p>
              <ComponentPreview name="Buttons with Icons">
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button variant="primary" className="gap-2"><Zap className="w-4 h-4" /> Power Up</Button>
                  <Button variant="outline" size="icon"><Share2 className="w-4 h-4" /></Button>
                  <Button variant="soft" size="sm" className="gap-2">Download <Box className="w-3.5 h-3.5" /></Button>
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
                    <td className="px-6 py-4 text-xs">"primary" | "secondary" | "outline" | "soft" | "ghost" | "link"</td>
                    <td className="px-6 py-4 text-xs">"primary"</td>
                    <td className="px-6 py-4 text-muted-foreground">The visual style of the button.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-mono font-bold text-primary">size</td>
                    <td className="px-6 py-4 text-xs">"default" | "xs" | "sm" | "lg" | "icon"</td>
                    <td className="px-6 py-4 text-xs">"default"</td>
                    <td className="px-6 py-4 text-muted-foreground">The scale of the button.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-mono font-bold text-primary">isLoading</td>
                    <td className="px-6 py-4 text-xs">boolean</td>
                    <td className="px-6 py-4 text-xs">false</td>
                    <td className="px-6 py-4 text-muted-foreground">If true, shows a spinner and disables the button.</td>
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
          <h3 className="text-lg font-bold">Usage Implementation</h3>
        </div>
        <div className="bg-slate-950 text-slate-100 p-6 rounded-2xl font-mono text-sm leading-relaxed shadow-2xl">
          <p className="text-emerald-400"># Import</p>
          <p>import &#123; Button &#125; from "@/components/ui/button";</p>
          <p className="mt-4 text-emerald-400"># Usage</p>
          <p>&lt;Button variant="primary" size="lg" isLoading=&#123;false&#125;&gt;</p>
          <p className="pl-4">Get Started</p>
          <p>&lt;/Button&gt;</p>
        </div>
      </section>
    </div>
  );
}
