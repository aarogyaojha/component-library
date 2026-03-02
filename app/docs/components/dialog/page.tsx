"use client";

import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/feedback/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/navigation/tabs";
import { Card, CardContent } from "@/components/layout/card";
import { Terminal, Layout as LayoutIcon } from "lucide-react";

export default function DialogDocs() {
  return (
    <div className="space-y-10 animate-fade-in">
      <section id="introduction" className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="soft">Overlay</Badge>
          <Badge variant="outline">Interactive</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Dialog (Modal)</h1>
        <p className="text-xl text-muted-foreground font-medium opacity-80 leading-relaxed">
          The essential component for critical user actions and extra information overlays. Designed with a soft background blur.
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
              <h3 className="text-xl font-bold">Standard Overlay</h3>
              <p className="text-muted-foreground">The typical usage for confirming an action or editing details.</p>
              <Card className="border-ui-border/30 bg-card/50">
                <CardContent className="pt-10 pb-10 flex flex-col items-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="primary" size="lg">Edit User Profile</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md bg-white border border-ui-border/20 shadow-premium">
                      <DialogHeader>
                        <DialogTitle>Update Profile</DialogTitle>
                        <DialogDescription>
                          Make changes to your profile details here. Click save when you're done.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <p className="text-sm opacity-60 italic">Profile editor content would go here...</p>
                      </div>
                      <DialogFooter>
                        <Button type="submit" variant="primary">Save Changes</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </section>
          </TabsContent>

          <TabsContent value="props" id="props">
            <div className="bg-card border border-ui-border/50 rounded-2xl overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="bg-secondary/20 text-muted-foreground uppercase text-[10px] font-bold tracking-widest">
                  <tr><th className="px-6 py-4">Component</th><th className="px-6 py-4">Role</th></tr>
                </thead>
                <tbody className="divide-y divide-ui-border/20">
                  <tr><td className="px-6 py-4 font-bold text-primary">Dialog</td><td className="px-6 py-4">The root container.</td></tr>
                  <tr><td className="px-6 py-4 font-bold text-primary">DialogTrigger</td><td className="px-6 py-4">Element that opens the dialog.</td></tr>
                  <tr><td className="px-6 py-4 font-bold text-primary">DialogContent</td><td className="px-6 py-4">The portal content area.</td></tr>
                  <tr><td className="px-6 py-4 font-bold text-primary">DialogHeader</td><td className="px-6 py-4">Title/Description container.</td></tr>
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <section id="quick-start" className="mt-20 pt-12 border-t border-ui-border/20">
        <div className="flex items-center gap-2 mb-6">
          <Terminal className="w-4 h-4 text-primary" />
          <h3 className="text-lg font-bold">Standard Implementation</h3>
        </div>
        <div className="bg-slate-950 text-slate-100 p-6 rounded-2xl font-mono text-sm leading-relaxed shadow-2xl">
          <p className="text-emerald-400"># Import</p>
          <p>import &#123; Dialog, DialogTrigger, DialogContent &#125; from "@/components/feedback/dialog";</p>
        </div>
      </section>
    </div>
  );
}
