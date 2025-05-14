import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
// import { MainNav } from "@/components/main-nav" // Will be replaced by side nav
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "@/components/mobile-nav" // New component for side nav trigger

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center justify-between space-x-4">
        {/* MobileNav will contain the trigger for the side navigation */}
        <MobileNav items={siteConfig.mainNav} />
        <Link href="/" className="flex items-center space-x-2">
          <Icons.logo className="h-6 w-6" />
          <span className="inline-block font-bold">{siteConfig.name}</span>
        </Link>
        <div className="flex items-center justify-end space-x-2">
          {/* <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={buttonVariants({
                size: "icon",
                variant: "ghost",
              })}
            >
              <Icons.gitHub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </div>
          </Link> */}
          {/* Twitter link removed as per previous cleanup, can be re-added if needed */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

