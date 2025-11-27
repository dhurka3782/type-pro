import * as React from "react"
import { cn } from "../../lib/utils"

const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-accent px-8 text-sm font-medium text-white shadow transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] active:scale-95",
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
export { Button }