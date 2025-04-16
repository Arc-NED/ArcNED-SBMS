"use client"

import { useState } from "react"
import Link from "next/link"
import { Building2, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Building2 className="h-6 w-6 text-emerald-600" />
          <span className="text-xl font-bold">ArcNED</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/quote">
            <Button className="bg-emerald-600 hover:bg-emerald-700">Request a Quote</Button>
          </Link>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between border-b py-4">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <Building2 className="h-6 w-6 text-emerald-600" />
                  <span className="text-xl font-bold">ArcNED</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>

              <nav className="flex flex-col gap-4 py-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-slate-700 hover:text-emerald-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto border-t py-6">
                <Link href="/quote" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Request a Quote</Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
