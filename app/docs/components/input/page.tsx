"use client";

import { Input } from "@/components/forms/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/navigation/tabs";
import { Card, CardContent } from "@/components/layout/card";
import { Terminal, Code, Settings } from "lucide-react";

export default function InputDocs() {
  return (
    <div className="space-y-10 animate-fade-in">
      <section id="introduction" className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="soft">Forms</Badge>
          <Badge variant="outline">Interactive</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Input</h1>
        <p className="text-xl text-muted-foreground font-medium opacity-80 leading-relaxed">
          The fundamental component for handling user inputs. Fully accessible with refined focus and error states.
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
            {/* Example 1: Basic */}
            <section className="space-y-4">
              <h3 className="text-xl font-bold">Standard Text Entry</h3>
              <p className="text-muted-foreground">The most common input usage for text-based data.</p>
              <Card className="border-ui-border/30 bg-card/50">
                <CardContent className="pt-10 pb-10 flex flex-col items-center">
                  <Input label="Email Address" placeholder="hello@example.com" className="max-w-md" />
                </CardContent>
              </Card>
            </section>

            {/* Example 2: Validation */}
            <section className="space-y-4">
              <h3 className="text-xl font-bold">Validation States</h3>
              <p className="text-muted-foreground">Provide clear feedback on user errors.</p>
              <Card className="border-ui-border/30 bg-card/50">
                <CardContent className="pt-10 pb-10 flex flex-col items-center">
                  <Input label="Username" placeholder="aarogya" error="This username is already taken." className="max-w-md" />
                </CardContent>
              </Card>
            </section>

            {/* Example 3: Helper Text */}
            <section className="space-y-4">
              <h3 className="text-xl font-bold">Helper Context</h3>
              <p className="text-muted-foreground">Add extra descriptions to guide the user.</p>
              <Card className="border-ui-border/30 bg-card/50">
                <CardContent className="pt-10 pb-10 flex flex-col items-center">
                  <Input label="Password" type="password" placeholder="Enter password..." description="Must be at least 8 characters." className="max-w-md" />
                </CardContent>
              </Card>
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
                    <td className="px-6 py-4 font-mono font-bold text-primary">label</td>
                    <td className="px-6 py-4 text-xs">string</td>
                    <td className="px-6 py-4 text-xs">-</td>
                    <td className="px-6 py-4 text-muted-foreground">Optional label for the input.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-mono font-bold text-primary">description</td>
                    <td className="px-6 py-4 text-xs">string</td>
                    <td className="px-6 py-4 text-xs">-</td>
                    <td className="px-6 py-4 text-muted-foreground">Helpful context text below input.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-mono font-bold text-primary">error</td>
                    <td className="px-6 py-4 text-xs">string</td>
                    <td className="px-6 py-4 text-xs">-</td>
                    <td className="px-6 py-4 text-muted-foreground">Validation error message.</td>
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
          <h3 className="text-lg font-bold">Standard Implementation</h3>
        </div>
        <div className="bg-slate-950 text-slate-100 p-6 rounded-2xl font-mono text-sm leading-relaxed shadow-2xl">
          <p className="text-emerald-400"># Import</p>
          <p>import &#123; Input &#125; from "@/components/forms/input";</p>
          <p className="mt-4 text-emerald-400"># Usage</p>
          <p>&lt;Input label="Email" placeholder="you@example.com" /&gt;</p>
        </div>
      </section>
    </div>
  );
}
