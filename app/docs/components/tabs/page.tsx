"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/navigation/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/layout/card";
import { Terminal } from "lucide-react";
import { ComponentPreview } from "@/components/docs/component-preview";

export default function TabsDocs() {
  return (
    <div className="space-y-10 animate-fade-in">
      <section id="introduction" className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="soft">Navigation</Badge>
          <Badge variant="outline">Interactive</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Tabs</h1>
        <p className="text-xl text-muted-foreground font-medium opacity-80 leading-relaxed">
          A high-performance tabbed interface for organizing content into logical groups. Fully accessible and transition-ready.
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
              <h3 className="text-xl font-bold">Standard Tabs List</h3>
              <p className="text-muted-foreground">Switch between content panels seamlessly.</p>
              <ComponentPreview name="Tab Interaction">
                <Tabs defaultValue="account" className="w-full max-w-sm">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                  </TabsList>
                  <TabsContent value="account">
                    <Card className="shadow-premium border-ui-border/10 bg-card">
                      <CardContent className="pt-8 pb-8 space-y-2">
                        <h4 className="font-bold text-base">Account Profile</h4>
                        <p className="text-sm opacity-70">Manage your verified details and security preferences.</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="password">
                    <Card className="shadow-premium border-ui-border/10 bg-card">
                      <CardContent className="pt-8 pb-8 space-y-2">
                        <h4 className="font-bold text-base">Security Hub</h4>
                        <p className="text-sm opacity-70">Update your credentials or enable two-factor auth.</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
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
          <pre><code>import &#123; Tabs, TabsList, TabsTrigger, TabsContent &#125; from "@/components/navigation/tabs";</code></pre>
        </div>
      </section>
    </div>
  );
}
