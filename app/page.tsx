"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/forms/input";
import { Textarea } from "@/components/forms/textarea";
import { Checkbox } from "@/components/forms/checkbox";
import { Switch } from "@/components/forms/switch";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/layout/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertTitle, AlertDescription } from "@/components/feedback/alert";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/navigation/tabs";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup, SelectLabel } from "@/components/forms/select";
import { Spinner } from "@/components/feedback/spinner";
import { Skeleton } from "@/components/feedback/skeleton";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/feedback/dialog";
import { Box, Code, Layers, Layout, MessageSquare, Palette, Play, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSimulateLoading = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-12 md:px-12 lg:px-24">
      {/* Hero Section */}
      <section className="max-w-4xl mb-24 animate-fade-in">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-primary/10 p-2 rounded-2xl">
            <Palette className="w-8 h-8 text-primary" />
          </div>
          <Badge variant="soft">v1.0 Production Ready</Badge>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Elegant <span className="text-primary">Design System</span> for Modern SaaS
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl opacity-80">
          A modular, production-grade UI library built with Next.js, Framer Motion, and Radix UI. 
          Tailored with a soft, minimalist aesthetic and high-performance accessibility.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/docs/components">
            <Button size="lg" className="rounded-2xl" onClick={handleSimulateLoading} isLoading={isLoading}>
              Explore Components
            </Button>
          </Link>
          <Link href="https://github.com/aarogyaojha/component-library" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="rounded-2xl border-primary/20 hover:border-primary">
              View on GitHub
            </Button>
          </Link>
        </div>
      </section>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Navigation / Sidebar (Optional for large screen) */}
        <aside className="lg:col-span-3 hidden lg:block sticky top-12 h-fit space-y-8 animate-fade-in delay-100">
          <div>
            <h3 className="font-bold text-xs uppercase tracking-widest text-muted-foreground mb-4 opacity-70">Architecture</h3>
            <ul className="space-y-3 font-semibold text-sm">
              <li className="flex items-center gap-2 text-primary"><Box className="w-4 h-4" /> Atomic Design</li>
              <li className="flex items-center gap-2 opacity-60"><Code className="w-4 h-4" /> Fully Typed</li>
              <li className="flex items-center gap-2 opacity-60"><Layers className="w-4 h-4" /> Compound Components</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xs uppercase tracking-widest text-muted-foreground mb-4 opacity-70">Guidelines</h3>
            <ul className="space-y-3 font-semibold text-sm">
              <li className="flex items-center gap-2 opacity-60"><Zap className="w-4 h-4" /> 16px Grid System</li>
              <li className="flex items-center gap-2 opacity-60"><Layout className="w-4 h-4" /> Containerized Layouts</li>
            </ul>
          </div>
        </aside>

        {/* Content Area */}
        <div className="lg:col-span-9 space-y-24">
          
          {/* Section: Forms & Inputs */}
          <section id="forms" className="animate-slide-up">
            <SectionHeader 
              title="Inputs & Forms" 
              description="A refined set of interactive elements for handling user data with elegant validation and focus states." 
              icon={<Box />} 
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <Card>
                <CardHeader>
                  <CardTitle>Interactive Fields</CardTitle>
                  <CardDescription>Experience soft focus transitions and clear typography.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Input label="Email Address" placeholder="hello@company.com" />
                  <Input label="Password" type="password" placeholder="Enter password..." error="This field is required" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Departments</SelectLabel>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="product">Product</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <div className="flex items-center gap-8 py-2">
                    <Checkbox label="Remember me" defaultChecked />
                    <Switch label="Marketing Emails" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Text Area & Feedback</CardTitle>
                  <CardDescription>Designed for multi-line user input and notes.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Textarea label="Tell us about yourself" placeholder="Your bio..." description="Minimum 100 characters recommended" />
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Button variant="primary">Submit</Button>
                    <Button variant="secondary">Cancel</Button>
                    <Button variant="outline">Preview</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section: Layout & Cards */}
          <section id="layout">
            <SectionHeader 
              title="Layout & Containers" 
              description="The structural foundation of the design system, focusing on hierarchy and white space." 
              icon={<Layout />} 
            />
            <div className="mt-12 space-y-8">
              <Tabs defaultValue="projects">
                <TabsList className="w-fit mb-8">
                  <TabsTrigger value="projects">Active Projects</TabsTrigger>
                  <TabsTrigger value="archived">Archived</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="projects">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <StatCard title="Total Revenue" value="$42,392" change="+12.5%" />
                    <StatCard title="Active Subscriptions" value="1,204" change="+4.2%" />
                    <StatCard title="Churn Rate" value="2.1%" change="-0.8%" />
                  </div>
                </TabsContent>
                <TabsContent value="archived">
                  <Card className="h-64 flex flex-col items-center justify-center border-dashed border-2 opacity-60">
                    <Box className="w-12 h-12 mb-4 text-muted-foreground" />
                    <p className="font-semibold text-muted-foreground">No archived items found</p>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          {/* Section: Feedback & Modals */}
          <section id="feedback">
            <SectionHeader 
              title="Feedback & Dialogs" 
              description="Keep users informed with premium modals, alerts, and subtle loading indicators." 
              icon={<MessageSquare />} 
            />
            <div className="mt-12 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <Alert variant="premium">
                    <AlertTitle>New Feature Available!</AlertTitle>
                    <AlertDescription>
                      Check out the latest AI-driven insights in your dashboard.
                    </AlertDescription>
                  </Alert>
                  <Alert variant="destructive">
                    <AlertTitle>Security Warning</AlertTitle>
                    <AlertDescription>Your login detected from a new location.</AlertDescription>
                  </Alert>
                  <Alert variant="success">
                    <AlertTitle>Payment Successful</AlertTitle>
                    <AlertDescription>Your invoice has been generated.</AlertDescription>
                  </Alert>
                </div>
                
                <Card className="flex flex-col items-center justify-center p-12 text-center bg-card border-primary/10">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="primary" size="lg" className="rounded-2xl group shadow-premium hover:shadow-2xl">
                        <Play className="mr-2 h-4 w-4 fill-current group-hover:scale-110 transition-transform" />
                        Open Premium Modal
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Confirm Action</DialogTitle>
                        <DialogDescription>
                          Are you sure you want to perform this administrative operation? This action cannot be undone.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="p-4 bg-secondary/20 rounded-xl my-4 flex items-center gap-3">
                        <Spinner size="sm" />
                        <span className="text-sm font-semibold opacity-70 italic">Processing encryption handshake...</span>
                      </div>
                      <DialogFooter>
                        <Button variant="outline" className="rounded-xl">Cancel</Button>
                        <Button className="rounded-xl px-10">Confirm</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  <p className="text-sm text-muted-foreground mt-6 font-medium italic">
                    Click to explore the premium dialog transition
                  </p>
                </Card>
              </div>
            </div>
          </section>

          {/* Section: Data Display */}
          <section id="data">
            <SectionHeader 
              title="Data Visualization" 
              description="Efficiently presenting rows of complex information without compromising readability." 
              icon={<Layers />} 
            />
            <div className="mt-12 space-y-8">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Activity</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-bold flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary-soft/20 flex items-center justify-center text-primary text-xs">AS</div>
                      Arlo Smith
                    </TableCell>
                    <TableCell><Badge variant="success">Active</Badge></TableCell>
                    <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                    <TableCell className="text-right font-mono font-bold">$1,299.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-xs">JM</div>
                      Jane Miller
                    </TableCell>
                    <TableCell><Badge variant="gold">Pending</Badge></TableCell>
                    <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                    <TableCell className="text-right font-mono font-bold">$3,450.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center text-destructive text-xs">RK</div>
                      Ryan King
                    </TableCell>
                    <TableCell><Badge variant="destructive">Suspended</Badge></TableCell>
                    <TableCell><div className="flex items-center gap-2"><Spinner size="sm" /> <span className="text-xs opacity-50">Syncing...</span></div></TableCell>
                    <TableCell className="text-right font-mono font-bold font-bold">$0.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </section>
        </div>
      </div>

      <footer className="mt-32 pt-12 border-t border-ui-border/30 text-center text-muted-foreground text-sm opacity-60">
        <p>© 2026 Aarogya Labs. Built for performance, designed for excellence.</p>
      </footer>
    </main>
  );
}

// Internal Helper Components for the Showcase
function SectionHeader({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 border-l-4 border-primary pl-6 py-2">
      <div className="flex items-center gap-3">
        {icon && <div className="text-primary opacity-60 scale-125">{icon}</div>}
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      </div>
      <p className="text-muted-foreground opacity-70 max-w-2xl text-lg font-medium leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function StatCard({ title, value, change }: { title: string; value: string; change: string }) {
  const isPositive = change.startsWith("+");
  return (
    <Card className="hover:animate-pulse-subtle cursor-default">
      <CardContent className="pt-6">
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground opacity-70 mb-2">{title}</p>
        <div className="flex items-end justify-between">
          <h4 className="text-3xl font-bold text-foreground">{value}</h4>
          <span className={cn(
            "text-xs font-bold px-2 py-0.5 rounded-full",
            isPositive ? "bg-emerald-500/10 text-emerald-600" : "bg-destructive/10 text-destructive"
          )}>
            {change}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
