"use client"

import * as React from "react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/router"
import { siteConfig, SiteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import {
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

interface MobileNavProps {
  items?: SiteConfig["mainNav"]
  children?: React.ReactNode
}

export function MobileNav({ items, children }: MobileNavProps) {
  const [open, setOpen] = React.useState(false)
  // const router = useRouter() // useRouter can only be used in client components, ensure this component is marked as such if needed.

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Icons.menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <SheetHeader className="mb-4 text-left">
          <SheetTitle>
            <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
              <Icons.logo className="mr-2 h-4 w-4" />
              <span className="font-bold text-lg">{siteConfig.name}</span>
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col space-y-3">
          {items?.map(
            (item) =>
              item.href && (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-muted-foreground hover:text-foreground text-md",
                    // router.pathname === item.href && "text-foreground font-semibold" // Active link styling
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              )
          )}
        </div>
        {children}
      </SheetContent>
    </Sheet>
  )
}

