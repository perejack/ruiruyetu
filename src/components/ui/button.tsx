import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-primary-glow",
        
        // Premium Hero Button with gradient
        hero: "bg-gradient-primary text-primary-foreground hover:shadow-primary-glow hover:scale-105 shadow-lg font-semibold",
        
        // Premium Accent Button
        accent: "bg-gradient-accent text-accent-foreground hover:shadow-accent-glow hover:scale-105 shadow-lg font-semibold",
        
        // WhatsApp Green Button
        whatsapp: "bg-[#25D366] text-white hover:bg-[#128C7E] hover:shadow-lg hover:scale-105 shadow-md font-semibold",
        
        // Glass Effect Button
        glass: "glass-card text-foreground hover:bg-background/60 border border-border-strong backdrop-blur-sm",
        
        // Premium Outline
        outline: "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground shadow-sm hover:shadow-md",
        
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-dark shadow-sm hover:shadow-md",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 rounded-md px-4 text-sm",
        lg: "h-13 rounded-lg px-8 text-lg font-semibold",
        xl: "h-16 rounded-xl px-12 text-xl font-bold",
        icon: "h-11 w-11",
        "icon-sm": "h-9 w-9",
        "icon-lg": "h-13 w-13",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
