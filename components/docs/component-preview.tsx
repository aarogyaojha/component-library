"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ComponentPreviewProps {
  children: React.ReactNode
  className?: string
  name?: string
}

/**
 * A wrapper for component examples that respects the global theme.
 * Provides a clean, patterned canvas for showcasing components.
 */
export function ComponentPreview({ children, className, name }: ComponentPreviewProps) {
  return (
    <div className="group relative my-4">
      {name && (
        <div className="flex items-center mb-3 px-1">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 bg-secondary/20 px-2 py-0.5 rounded-md">
            {name}
          </h4>
        </div>
      )}
      
      <div 
        className={cn(
          "relative rounded-[2rem] border-2 border-ui-border/10 overflow-hidden bg-surface transition-all duration-300 shadow-premium",
          className
        )}
      >
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
          style={{ backgroundImage: `radial-gradient(var(--color-primary) 0.5px, transparent 0.5px)`, backgroundSize: '16px 16px' }} 
        />
        
        <div className="relative p-12 flex flex-col items-center justify-center min-h-[300px] text-foreground">
          {children}
        </div>
      </div>
    </div>
  )
}
