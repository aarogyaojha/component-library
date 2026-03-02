"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Box, ChevronRight, Hash, Layers, Layout as LayoutIcon, MessageSquare, Palette, Search, Share2, Zap, Code } from "lucide-react";
import { Input } from "@/components/forms/input";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const sidebarNav = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Theming", href: "/docs/theming" },
      { title: "Storybook", href: "/docs/storybook" },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Overview", href: "/docs/components", icon: <Layers className="w-4 h-4" /> },
      { title: "Alert", href: "/docs/components/alert", icon: <MessageSquare className="w-4 h-4" /> },
      { title: "Badge", href: "/docs/components/badge", icon: <Hash className="w-4 h-4" /> },
      { title: "Button", href: "/docs/components/button", icon: <Box className="w-4 h-4" /> },
      { title: "Card", href: "/docs/components/card", icon: <LayoutIcon className="w-4 h-4" /> },
      { title: "Checkbox", href: "/docs/components/checkbox", icon: <Zap className="w-4 h-4" /> },
      { title: "Dialog", href: "/docs/components/dialog", icon: <LayoutIcon className="w-4 h-4" /> },
      { title: "Input", href: "/docs/components/input", icon: <Code className="w-4 h-4" /> },
      { title: "Radio Group", href: "/docs/components/radio-group", icon: <Zap className="w-4 h-4" /> },
      { title: "Select", href: "/docs/components/select", icon: <Share2 className="w-4 h-4" /> },
      { title: "Switch", href: "/docs/components/switch", icon: <Zap className="w-4 h-4" /> },
      { title: "Table", href: "/docs/components/table", icon: <Layers className="w-4 h-4" /> },
      { title: "Tabs", href: "/docs/components/tabs", icon: <LayoutIcon className="w-4 h-4" /> },
      { title: "Textarea", href: "/docs/components/textarea", icon: <Code className="w-4 h-4" /> },
      { title: "Layout Utilities", href: "/docs/components/layout-utilities", icon: <LayoutIcon className="w-4 h-4" /> },
      { title: "Loading", href: "/docs/components/loading", icon: <Zap className="w-4 h-4" /> },
    ],
  },
];

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = React.useState<string>("introduction");

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -80% 0px", threshold: 0 }
    );

    const sections = ["introduction", "usage", "props", "quick-start"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  // Pagination Logic
  const allItems = sidebarNav.flatMap(s => s.items);
  const currentIndex = allItems.findIndex(item => item.href === pathname);
  const prevItem = currentIndex > 0 ? allItems[currentIndex - 1] : null;
  const nextItem = currentIndex < allItems.length - 1 ? allItems[currentIndex + 1] : null;

  const isComponentPage = pathname.startsWith("/docs/components/");
  const isInstallationPage = pathname === "/docs/installation";
  const isThemingPage = pathname === "/docs/theming";
  const isStorybookPage = pathname === "/docs/storybook";
  const isIntroPage = pathname === "/docs";

  let onThisPageLinks = [
    { id: 'introduction', label: 'Introduction' },
    { 
      id: 'usage', 
      label: isComponentPage ? 'Usage' : isInstallationPage ? 'Installation' : isIntroPage ? 'Philosophy' : isStorybookPage ? 'Why Storybook?' : 'Customization' 
    },
    { 
      id: 'props', 
      label: isComponentPage ? 'API Reference' : isInstallationPage ? 'Tailwind Setup' : isIntroPage ? 'Ecosystem' : isStorybookPage ? 'Available Commands' : 'Design Tokens' 
    },
    { 
      id: 'quick-start', 
      label: isComponentPage ? 'Quick Start' : isInstallationPage ? 'Verification' : isIntroPage ? 'Getting Started' : isStorybookPage ? 'Creating Stories' : 'Themes' 
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary/20">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-ui-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary p-1.5 rounded-lg group-hover:scale-110 transition-transform">
                <Palette className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg tracking-tight">Aarogya</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-muted-foreground">
              <Link href="/docs" className="text-foreground hover:text-primary transition-colors">Docs</Link>
              <Link href="/docs/components" className="hover:text-primary transition-colors">Components</Link>
              <Link 
                href="https://github.com/aarogyaojha/component-library" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors flex items-center gap-1.5"
              >
                GitHub
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden lg:block w-64 text-foreground">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input 
                placeholder="Search documentation..." 
                className="w-full h-9 pl-10 pr-4 rounded-xl border border-ui-border bg-card/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground/50 dark:bg-card/30 dark:border-ui-border/50"
              />
            </div>
            <ThemeToggle />
            <button className="bg-primary text-white px-4 py-1.5 rounded-xl text-sm font-bold shadow-premium hover:shadow-lg hover:scale-105 active:scale-95 transition-all outline-none border-none">
              New Project
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] lg:grid-cols-[280px_minmax(0,1fr)] px-6">
        {/* Sidebar */}
        <aside className="fixed top-16 z-30 -ml-2 hidden h-[calc(100vh-4rem)] w-full shrink-0 md:sticky md:block overflow-y-auto border-r border-ui-border/20 py-8 pr-4 scrollbar-none">
          <div className="space-y-8">
            {sidebarNav.map((section, i) => (
              <div key={i} className="space-y-3">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground opacity-50 px-3">
                  {section.title}
                </h4>
                <nav className="flex flex-col gap-1">
                  {section.items.map((item, j) => (
                    <Link
                      key={j}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold transition-all group",
                        pathname === item.href 
                          ? "bg-primary/10 text-primary shadow-sm shadow-primary/5" 
                          : "text-muted-foreground/80 hover:bg-secondary/40 hover:text-foreground"
                      )}
                    >
                      {(item as any).icon && (
                        <span className={cn(
                          "transition-colors duration-200",
                          pathname === item.href ? "text-primary" : "text-muted-foreground/60 group-hover:text-foreground"
                        )}>
                          {(item as any).icon}
                        </span>
                      )}
                      {item.title}
                      {item.title === "Overview" && <ChevronRight className="w-3 h-3 ml-auto opacity-50" />}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="relative py-12 lg:gap-10 lg:py-16 xl:grid xl:grid-cols-[1fr_220px]">
          <div className="mx-auto w-full min-w-0 max-w-4xl px-2 md:px-8 flex flex-col min-h-[50vh]">
            <div className="flex-1">
              {children}
            </div>

            {/* Pagination Implementation */}
            {(prevItem || nextItem) && (
              <div className="mt-24 pt-12 border-t border-ui-border/20 flex flex-col sm:flex-row items-center justify-between gap-6">
                {prevItem ? (
                  <Link href={prevItem.href} className="group flex-1 w-full sm:w-auto h-24 border border-ui-border/30 hover:border-primary/40 rounded-2xl p-6 transition-all bg-card/50 hover:bg-card hover:shadow-premium flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-secondary/30 flex items-center justify-center group-hover:bg-primary/10 group-hover:scale-110 transition-all">
                      <ChevronRight className="w-5 h-5 rotate-180 text-muted-foreground group-hover:text-primary" />
                    </div>
                    <div className="text-left space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Previous</p>
                      <h4 className="font-bold text-base text-foreground group-hover:text-primary transition-colors underline-offset-4 group-hover:underline">{prevItem.title}</h4>
                    </div>
                  </Link>
                ) : <div className="hidden sm:block flex-1" />}

                {nextItem ? (
                  <Link href={nextItem.href} className="group flex-1 w-full sm:w-auto h-24 border border-ui-border/30 hover:border-primary/40 rounded-2xl p-6 transition-all bg-card/50 hover:bg-card hover:shadow-premium flex flex-row-reverse items-center justify-between gap-4">
                    <div className="h-10 w-10 rounded-xl bg-secondary/30 flex items-center justify-center group-hover:bg-primary/10 group-hover:scale-110 transition-all">
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                    </div>
                    <div className="text-right space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Next Up</p>
                      <h4 className="font-bold text-base text-foreground group-hover:text-primary transition-colors underline-offset-4 group-hover:underline">{nextItem.title}</h4>
                    </div>
                  </Link>
                ) : <div className="hidden sm:block flex-1" />}
              </div>
            )}
          </div>
          
          {/* Right Nav (On This Page) */}
          <div className="hidden text-sm xl:block">
            <div className="sticky top-24 space-y-5">
              <h5 className="font-bold text-[10px] uppercase tracking-[0.2em] text-muted-foreground opacity-60 px-3">On This Page</h5>
              
              <div className="relative">
                {/* Vertical track line */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-ui-border/20 rounded-full" />
                
                <ul className="relative space-y-1 font-semibold text-muted-foreground/70">
                  {onThisPageLinks.map((link) => (
                    <li 
                      key={link.id}
                      onClick={() => {
                        if (link.id === 'introduction') {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        } else {
                          const el = document.getElementById(link.id);
                          if (el) {
                            const offset = 100;
                            const bodyRect = document.body.getBoundingClientRect().top;
                            const elementRect = el.getBoundingClientRect().top;
                            const elementPosition = elementRect - bodyRect;
                            const offsetPosition = elementPosition - offset;

                            window.scrollTo({
                              top: offsetPosition,
                              behavior: 'smooth'
                            });
                          }
                        }
                      }}
                      className={cn(
                        "relative pl-6 py-2 transition-all cursor-pointer hover:text-primary select-none text-[13px] group/nav",
                        activeSection === link.id ? "text-primary" : "hover:pl-7"
                      )}
                    >
                      {/* Active indicator line component */}
                      {activeSection === link.id && (
                        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary rounded-full animate-in fade-in duration-500" />
                      )}
                      
                      <span className={cn(
                        "transition-all duration-300",
                        activeSection === link.id ? "translate-x-0" : "opacity-80 group-hover/nav:opacity-100"
                      )}>
                        {link.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-12 bg-card/50 border border-ui-border/20 rounded-3xl p-6 shadow-soft backdrop-blur-sm">
                <div className="bg-primary/10 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <h6 className="font-bold text-sm mb-2 text-foreground">Premium Support</h6>
                <p className="text-xs text-muted-foreground leading-relaxed mb-5">
                  Get direct access to core maintainers for your enterprise projects.
                </p>
                <button className="w-full bg-slate-900 dark:bg-slate-100 dark:text-slate-900 text-white text-[11px] font-bold py-2.5 rounded-xl shadow-premium hover:shadow-lg hover:bg-slate-800 transition-all">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
