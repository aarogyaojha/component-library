"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/layout/card";
import { Box, Code, Hash, Layers, Layout, MessageSquare, Palette, Share2, Zap } from "lucide-react";

export default function ComponentsOverview() {
  const componentGroups = [
    {
      title: "UI & Data Display",
      description: "Fundamental elements for presenting layout and information.",
      items: [
        { name: "Button", icon: <Box />, href: "/docs/components/button", description: "Interactive click element." },
        { name: "Badge", icon: <Hash />, href: "/docs/components/badge", description: "Status or labels." },
        { name: "Card", icon: <Layout />, href: "/docs/components/card", description: "Structured content container." },
        { name: "Table", icon: <Layers />, href: "/docs/components/table", description: "Tabular data display." },
        { name: "Tabs", icon: <Layout />, href: "/docs/components/tabs", description: "Tabbed navigation." },
        { name: "Accordion", icon: <Layout />, href: "/docs/components/accordion", description: "Stacked collapsible content." },
      ]
    },
    {
      title: "Forms & Controls",
      description: "Interactive components for user data entry.",
      items: [
        { name: "Input", icon: <Code />, href: "/docs/components/input", description: "Single-line text entry." },
        { name: "Textarea", icon: <Code />, href: "/docs/components/textarea", description: "Multi-line text entry." },
        { name: "Checkbox", icon: <Zap />, href: "/docs/components/checkbox", description: "Binary selection." },
        { name: "Radio Group", icon: <Zap />, href: "/docs/components/radio-group", description: "Single choice from set." },
        { name: "Select", icon: <Share2 />, href: "/docs/components/select", description: "Multi-option selection." },
        { name: "Switch", icon: <Zap />, href: "/docs/components/switch", description: "Toggle selection." },
      ]
    },
    {
      title: "Feedback & Overlays",
      description: "Informative elements for status and critical actions.",
      items: [
        { name: "Alert", icon: <MessageSquare />, href: "/docs/components/alert", description: "Inline notices." },
        { name: "Dialog", icon: <Layout />, href: "/docs/components/dialog", description: "Overlay modals." },
        { name: "Loading", icon: <Zap />, href: "/docs/components/loading", description: "Spinners and Skeletons." },
      ]
    }
  ];

  return (
    <div className="space-y-12 animate-fade-in">
      <section className="space-y-4">
        <Badge variant="soft">Library Directory</Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Components</h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl font-medium opacity-80">
          Find all the components available in the Aarogya library. We are constantly expanding our collection to provide you with the ultimate design toolkit.
        </p>
      </section>

      <div className="space-y-16">
        {componentGroups.map((group, i) => (
          <section key={i} className="space-y-8">
            <div className="flex flex-col gap-2 border-l-4 border-primary pl-6">
              <h2 className="text-2xl font-bold tracking-tight">{group.title}</h2>
              <p className="text-muted-foreground font-medium opacity-70">{group.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.items.map((item, j) => (
                <Link key={j} href={item.href} className="group">
                  <Card className="h-full border-ui-border/40 hover:border-primary/40 hover:shadow-premium transition-all">
                    <CardHeader className="flex flex-row items-center gap-3">
                      <div className="bg-primary/5 p-2 rounded-xl text-primary group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        <CardDescription className="text-xs group-hover:text-primary transition-colors">
                          {item.description}
                        </CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
