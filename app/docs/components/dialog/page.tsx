"use client";

import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/feedback/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/navigation/tabs";
import { Terminal, Share2 } from "lucide-react";
import { ComponentPreview } from "@/components/docs/component-preview";

export default function DialogDocs() {
  return (
    <div className="space-y-10 animate-fade-in">
      <section id="introduction" className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="soft">Feedback</Badge>
          <Badge variant="outline">Overlay</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Dialog</h1>
        <p className="text-xl text-muted-foreground font-medium opacity-80 leading-relaxed">
          Premium modal system for focused interactions. Built on Radix UI for accessibility and styled for the Aarogya-UI brand.
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
              <h3 className="text-xl font-bold">Standard Modal</h3>
              <p className="text-muted-foreground">The typical usage for a centered overlay.</p>
              <ComponentPreview name="Modal Preview">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Open Profile Settings</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md bg-card border border-ui-border/20 shadow-premium">
                    <DialogHeader>
                      <DialogTitle>Profile Settings</DialogTitle>
                      <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex items-center space-x-2 py-4">
                      <div className="grid flex-1 gap-2">
                        <label className="text-xs font-bold uppercase tracking-widest opacity-50">Username</label>
                        <div className="p-3 bg-secondary/20 rounded-xl border border-ui-border/20 text-sm">
                          aarogya_ojha
                        </div>
                      </div>
                    </div>
                    <DialogFooter className="sm:justify-start">
                      <DialogClose asChild>
                        <Button type="button" variant="primary">
                          Save changes
                        </Button>
                      </DialogClose>
                      <DialogClose asChild>
                        <Button type="button" variant="ghost">
                          Cancel
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </ComponentPreview>
            </section>
          </TabsContent>
        </Tabs>
      </div>

      <section id="quick-start" className="mt-20 pt-12 border-t border-ui-border/20">
        <div className="flex items-center gap-2 mb-6">
          <Terminal className="w-4 h-4 text-primary" />
          <h3 className="text-lg font-bold">Standard Implementation</h3>
        </div>
        <div className="bg-slate-950 text-slate-100 p-6 rounded-2xl font-mono text-sm leading-relaxed shadow-2xl">
          <p className="text-emerald-400"># Usage</p>
          <pre><code>import &#123; Dialog, DialogContent &#125; from "@/components/feedback/dialog";</code></pre>
        </div>
      </section>
    </div>
  );
}
