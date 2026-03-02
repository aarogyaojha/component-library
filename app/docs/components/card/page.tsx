"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/layout/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/navigation/tabs";
import { Terminal, Share2 } from "lucide-react";
import { ComponentPreview } from "@/components/docs/component-preview";

export default function CardDocs() {
  return (
    <div className="space-y-10 animate-fade-in">
      <section id="introduction" className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="soft">Layout</Badge>
          <Badge variant="outline">Compound</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Card</h1>
        <p className="text-xl text-muted-foreground font-medium opacity-80 leading-relaxed">
          The primary container for grouping related content and actions in a structured layout. Featuring soft shadows and rounded focus.
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
              <h3 className="text-xl font-bold">Standard Preview</h3>
              <p className="text-muted-foreground">The typical usage of a card with header, content, and footer.</p>
              <ComponentPreview name="Base Card">
                <Card className="w-full max-w-sm shadow-premium bg-card">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="soft">New Project</Badge>
                      <Share2 className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <CardTitle>Project Alpha Explorer</CardTitle>
                    <CardDescription>Created by the research team last Tuesday.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-medium leading-relaxed opacity-70">
                      This project focuses on the implementation of advanced vector-based graphics engine architectures for modern SaaS.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-3 pt-4 border-t border-ui-border/10">
                    <Button variant="outline" size="sm">Cancel</Button>
                    <Button variant="primary" size="sm">Settings</Button>
                  </CardFooter>
                </Card>
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
          <p className="text-emerald-400"># Import</p>
          <pre><code>import &#123; Card &#125; from "@/components/layout/card";</code></pre>
        </div>
      </section>
    </div>
  );
}
