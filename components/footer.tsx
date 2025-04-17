import Link from "next/link"
import { Building2, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Building2 className="h-6 w-6 text-emerald-500" />
              <span className="text-xl font-bold">ArcNED</span>
            </Link>
            <p className="text-slate-400 mb-6">
              Smart Building Management System consultancy and integration services. Transforming buildings into
              intelligent, efficient, and sustainable spaces.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-slate-400 hover:text-emerald-500 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-emerald-500 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-emerald-500 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-emerald-500 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Request a Quote", href: "/quote" },
                { name: "Blog", href: "/blog" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-emerald-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              {[
                { name: "Energy Management", href: "/services#energy" },
                { name: "Security Systems", href: "/services#security" },
                { name: "Occupancy Comfort", href: "/services#comfort" },
                { name: "Predictive Maintenance", href: "/services#maintenance" },
                { name: "Intelligent Automation", href: "/services#automation" },
                { name: "Performance Analytics", href: "/services#analytics" },
              ].map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-slate-400 hover:text-emerald-500 transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-slate-400 space-y-3">
              <p>
                123 Tech Park Drive, Suite 400
                <br />
                St John's, NL A1N 4V7, Canada
              </p>
              <p>
                <span className="block">Phone: (709) 425-4203</span>
                <span className="block">Email: info@arcned.com</span>
              </p>
              <p>
                <span className="block">Monday - Friday</span>
                <span className="block">8:00 AM - 5:00 PM PST</span>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ArcNED Smart Building Solutions Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-slate-400 text-sm hover:text-emerald-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-slate-400 text-sm hover:text-emerald-500 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
