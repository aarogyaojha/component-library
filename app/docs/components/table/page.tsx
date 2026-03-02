"use client";

import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell, TableCaption } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/navigation/tabs";
import { Card, CardContent } from "@/components/layout/card";
import { Terminal, Layers } from "lucide-react";

export default function TableDocs() {
  const data = [
    { id: "1", name: "Premium Plan", status: "Active", price: "$49.00" },
    { id: "2", name: "Basic Plan", status: "Inactive", price: "$29.00" },
    { id: "3", name: "Custom Enterprise", status: "Active", price: "Contact Sales" },
  ];

  return (
    <div className="space-y-10 animate-fade-in">
      <section id="introduction" className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="soft">Data Display</Badge>
          <Badge variant="outline">Atomic</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Table</h1>
        <p className="text-xl text-muted-foreground font-medium opacity-80 leading-relaxed">
          A responsive, accessible table system for displaying complex data sets.
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
              <h3 className="text-xl font-bold">Standard Data Table</h3>
              <p className="text-muted-foreground">The default layout with hover states and clean separators.</p>
              <Card className="border-ui-border/30 bg-card/50">
                <CardContent className="pt-6">
                  <Table>
                    <TableCaption>A list of your current subscriptions.</TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">ID</TableHead>
                        <TableHead>Subscription</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Price</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {data.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell className="font-medium">{item.id}</TableCell>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>
                            <Badge variant={item.status === 'Active' ? 'success' : 'soft'}>{item.status}</Badge>
                          </TableCell>
                          <TableCell className="text-right font-bold text-primary">{item.price}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </section>
          </TabsContent>

          <TabsContent value="props" id="props">
            <div className="space-y-4">
              <p className="text-muted-foreground">Composed of several sub-components for maximum flexibility.</p>
              <div className="bg-card border border-ui-border/50 rounded-2xl overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead className="bg-secondary/20 text-muted-foreground uppercase text-[10px] font-bold tracking-widest">
                    <tr><th className="px-6 py-4">Component</th><th className="px-6 py-4">Description</th></tr>
                  </thead>
                  <tbody className="divide-y divide-ui-border/20">
                    <tr><td className="px-6 py-4 font-bold text-primary">Table</td><td className="px-6 py-4">Root component.</td></tr>
                    <tr><td className="px-6 py-4 font-bold text-primary">TableHeader</td><td className="px-6 py-4">Column group header.</td></tr>
                    <tr><td className="px-6 py-4 font-bold text-primary">TableRow</td><td className="px-6 py-4">Standard row container.</td></tr>
                    <tr><td className="px-6 py-4 font-bold text-primary">TableHead</td><td className="px-6 py-4">Header cell.</td></tr>
                    <tr><td className="px-6 py-4 font-bold text-primary">TableCell</td><td className="px-6 py-4">Data cell.</td></tr>
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
          <h3 className="text-lg font-bold">Standard Integration</h3>
        </div>
        <div className="bg-slate-950 text-slate-100 p-6 rounded-2xl font-mono text-sm leading-relaxed shadow-2xl">
          <p className="text-emerald-400"># Import</p>
          <p>import &#123; Table, TableHeader, TableRow, TableHead, TableBody, TableCell &#125; from "@/components/ui/table";</p>
        </div>
      </section>
    </div>
  );
}
