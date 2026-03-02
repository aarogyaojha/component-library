"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, Code, Layout, Palette, Zap } from "lucide-react";

export default function DocsIntroduction() {
  return (
    <div className="space-y-12 animate-fade-in max-w-3xl">
      <section className="space-y-6">
        <Badge variant="soft">Documentation v1.0</Badge>
        <h1 className="text-5xl font-bold tracking-tight">Introduction</h1>
        <p className="text-xl text-muted-foreground leading-relaxed font-medium opacity-80">
          The Aarogya Design System is a comprehensive UI library designed to empower developers to build stunning, accessible, and performant SaaS applications with minimal effort.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12">
        <div className="group border border-ui-border/50 rounded-2xl p-6 bg-card hover:border-primary/40 transition-all cursor-pointer">
          <div className="bg-primary/5 p-3 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-transform">
            <Palette className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-bold text-lg mb-2">Beautiful Design Tokens</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A curated color palette of Cream, Soft Sand, Soft Pink, and Primary Accent for a modern, soft feel.
          </p>
        </div>
        <div className="group border border-ui-border/50 rounded-2xl p-6 bg-card hover:border-primary/40 transition-all cursor-pointer">
          <div className="bg-primary/5 p-3 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-transform">
            <Zap className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-bold text-lg mb-2">High-Performance Code</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Optimized for Next.js 16 and Tailwind CSS v4 to ensure maximum speed and efficiency.
          </p>
        </div>
      </div>

      <section className="mt-20 pt-12 border-t border-ui-border/20 space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Getting Started</h2>
        <p className="text-muted-foreground font-medium opacity-80">
          Follow our installation guide to integrate Aarogya into your existing project or scaffold a new one using our CLI.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <Link href="/docs/components">
            <Button className="rounded-2xl shadow-premium h-12 px-8">
              Explore Components <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <Button variant="outline" className="rounded-2xl border-primary/20 h-12 px-8">
            Read Best Practices
          </Button>
        </div>
      </section>
    </div>
  );
}
