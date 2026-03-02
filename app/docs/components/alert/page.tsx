"use client";

import { Alert, AlertTitle, AlertDescription } from "@/components/feedback/alert";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/navigation/tabs";
import { Card, CardContent } from "@/components/layout/card";
import { Code, Info, Terminal } from "lucide-react";

export default function AlertDocs() {
  return (
    <div className="space-y-10 animate-fade-in">
      <section id="introduction" className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="soft">Feedback</Badge>
          <Badge variant="outline">Accessible</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Alert</h1>
        <p className="text-xl text-muted-foreground font-medium opacity-80 leading-relaxed">
          Displays a callout for user attention. High-visibility feedback for success, error, or informational states.
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
            <h3 className="text-xl font-bold">Standard Alert</h3>
            <p className="text-muted-foreground">The default configuration for general notifications.</p>
            <Card className="border-ui-border/30 bg-card/50">
              <CardContent className="pt-10 pb-10 flex flex-col items-center">
                <Alert className="max-w-md">
                  <AlertTitle>Heads up!</AlertTitle>
                  <AlertDescription>
                    You can add components to your app using the cli.
                  </AlertDescription>
                </Alert>
              </CardContent>
              <div className="border-t border-ui-border/20 bg-secondary/5 p-4 flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground">alert-basic.tsx</span>
                <button className="text-xs font-bold text-primary hover:underline">View Code</button>
              </div>
            </Card>
          </section>

          {/* Example 2: Success */}
          <section className="space-y-4">
            <h3 className="text-xl font-bold">Success State</h3>
            <p className="text-muted-foreground">Used to confirm a positive action or completion.</p>
            <Card className="border-ui-border/30 bg-card/50">
              <CardContent className="pt-10 pb-10 flex flex-col items-center">
                 <Alert variant="success" className="max-w-md">
                  <AlertTitle>Project Created</AlertTitle>
                  <AlertDescription>
                    Your new workspace has been successfully initialized.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </section>

          {/* Example 3: Premium */}
          <section className="space-y-4">
            <h3 className="text-xl font-bold">Premium Alert</h3>
            <p className="text-muted-foreground">A specialized variant for feature announcements or insights.</p>
            <Card className="border-ui-border/30 bg-card/50">
              <CardContent className="pt-10 pb-10 flex flex-col items-center">
                 <Alert variant="premium" className="max-w-md">
                  <AlertTitle>Pro Tip</AlertTitle>
                  <AlertDescription>
                    Enable advanced analytics to see real-time user flow data.
                  </AlertDescription>
                </Alert>
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
                  <td className="px-6 py-4 font-mono font-bold text-primary">variant</td>
                  <td className="px-6 py-4 text-xs">"default" | "destructive" | "success" | "warning" | "premium"</td>
                  <td className="px-6 py-4 text-xs">"default"</td>
                  <td className="px-6 py-4 text-muted-foreground">The visual style of the alert.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-mono font-bold text-primary">icon</td>
                  <td className="px-6 py-4 text-xs">ReactNode</td>
                  <td className="px-6 py-4 text-xs">Variant-specific</td>
                  <td className="px-6 py-4 text-muted-foreground">Override the default icon.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
      
      {/* Code Block Example at the bottom */}
      <section id="quick-start" className="mt-20 pt-12 border-t border-ui-border/20">
        <div className="flex items-center gap-2 mb-6">
          <Terminal className="w-4 h-4 text-primary" />
          <h3 className="text-lg font-bold">Quick Start</h3>
        </div>
        <div className="bg-slate-950 text-slate-100 p-6 rounded-2xl font-mono text-sm leading-relaxed shadow-2xl">
          <div className="flex justify-between items-center mb-4 opacity-50 text-xs uppercase tracking-tighter">
            <span>Terminal</span>
            <span>Copy</span>
          </div>
          <p className="text-emerald-400"># Import components</p>
          <p>import &#123; Alert, AlertTitle, AlertDescription &#125; from "@/components/feedback/alert";</p>
          <p className="mt-4 text-emerald-400"># Usage</p>
          <p>&lt;Alert&gt;</p>
          <p className="pl-4">&lt;AlertTitle&gt;Heads up!&lt;/AlertTitle&gt;</p>
          <p className="pl-4">&lt;AlertDescription&gt;Your project is ready.&lt;/AlertDescription&gt;</p>
          <p>&lt;/Alert&gt;</p>
        </div>
      </section>
    </div>
  );
}
