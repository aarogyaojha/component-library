"use client";

import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup, SelectLabel } from "@/components/forms/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/navigation/tabs";
import { Card, CardContent } from "@/components/layout/card";
import { Terminal, Share2 } from "lucide-react";

export default function SelectDocs() {
  return (
    <div className="space-y-10 animate-fade-in">
      <section id="introduction" className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="soft">Form Controls</Badge>
          <Badge variant="outline">Interactive</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Select</h1>
        <p className="text-xl text-muted-foreground font-medium opacity-80 leading-relaxed">
          Premium dropdown selection for choosing from a list of options. Featuring smooth transitions and accessibility.
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
              <h3 className="text-xl font-bold">Standard Dropdown</h3>
              <p className="text-muted-foreground">The typical usage for selecting a single variant from many.</p>
              <Card className="border-ui-border/30 bg-card/50">
                <CardContent className="pt-10 pb-10 flex flex-col items-center">
                  <div className="w-full max-w-xs space-y-2">
                    <label className="text-sm font-bold opacity-70">Project Framework</label>
                    <Select defaultValue="nextjs">
                      <SelectTrigger>
                        <SelectValue placeholder="Select framework..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>React Ecosystem</SelectLabel>
                          <SelectItem value="nextjs">Next.js</SelectItem>
                          <SelectItem value="remix">Remix</SelectItem>
                          <SelectItem value="vite">Vite + React</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </section>
            
            <section className="space-y-4">
              <h3 className="text-xl font-bold">Grouped Selections</h3>
              <p className="text-muted-foreground">Categorize your items for better UX.</p>
              <Card className="border-ui-border/30 bg-card/50">
                <CardContent className="pt-10 pb-10 flex flex-col items-center">
                  <div className="w-full max-w-sm">
                    <Select>
                      <SelectTrigger><SelectValue placeholder="Choose a language..." /></SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Frontend</SelectLabel>
                          <SelectItem value="ts">TypeScript</SelectItem>
                          <SelectItem value="js">JavaScript</SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectLabel>Backend</SelectLabel>
                          <SelectItem value="go">Go (Golang)</SelectItem>
                          <SelectItem value="rust">Rust</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </section>
          </TabsContent>

          <TabsContent value="props" id="props">
             <div className="space-y-4">
              <p className="text-muted-foreground">Composed of several sub-components for layout control.</p>
              <div className="bg-card border border-ui-border/50 rounded-2xl overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead className="bg-secondary/20 text-muted-foreground uppercase text-[10px] font-bold tracking-widest">
                    <tr><th className="px-6 py-4">Component</th><th className="px-6 py-4">Role</th></tr>
                  </thead>
                  <tbody className="divide-y divide-ui-border/20">
                    <tr><td className="px-6 py-4 font-bold text-primary">Select</td><td className="px-6 py-4">The main container.</td></tr>
                    <tr><td className="px-6 py-4 font-bold text-primary">SelectTrigger</td><td className="px-6 py-4">The interactive button.</td></tr>
                    <tr><td className="px-6 py-4 font-bold text-primary">SelectValue</td><td className="px-6 py-4">Placeholder for the selection.</td></tr>
                    <tr><td className="px-6 py-4 font-bold text-primary">SelectContent</td><td className="px-6 py-4">The actual dropdown box.</td></tr>
                    <tr><td className="px-6 py-4 font-bold text-primary">SelectItem</td><td className="px-6 py-4">Individual selectable item.</td></tr>
                  </tbody>
                </table>
              </div>
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
          <p>import &#123; Select, SelectTrigger, SelectValue, SelectContent, SelectItem &#125; from "@/components/forms/select";</p>
        </div>
      </section>
    </div>
  );
}
