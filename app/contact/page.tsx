import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-slate-300">
              Have questions about our smart building solutions? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-50 p-6 rounded-lg text-center">
              <div className="mx-auto w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-slate-600 mb-2">Mon-Fri from 8am to 5pm</p>
              <p className="text-emerald-600 font-medium">(709) 425-4203</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg text-center">
              <div className="mx-auto w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-slate-600 mb-2">We'll respond within 24 hours</p>
              <p className="text-emerald-600 font-medium">info@arcned.com</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg text-center">
              <div className="mx-auto w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-slate-600 mb-2">Our headquarters</p>
              <p className="text-emerald-600 font-medium">
                123 Tech Park Drive, Suite 400
                <br />
                San Francisco, CA 94105
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <Input id="name" placeholder="John Smith" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help you?" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Please provide details about your inquiry..."
                    className="min-h-[150px]"
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Send Message
                </Button>
              </form>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>

              <div className="space-y-4">
                {[
                  {
                    question: "What types of buildings do you work with?",
                    answer:
                      "We work with a wide range of building types including commercial offices, retail spaces, healthcare facilities, educational institutions, multi-family residential buildings, and industrial facilities.",
                  },
                  {
                    question: "Can you retrofit existing buildings?",
                    answer:
                      "Yes, we specialize in retrofitting existing buildings with smart technology. Our solutions are designed to integrate with existing systems while minimizing disruption to your operations.",
                  },
                  {
                    question: "How long does implementation typically take?",
                    answer:
                      "Implementation timelines vary based on the scope and complexity of the project. Small to medium projects typically take 2-4 months, while larger, more complex implementations may take 6-12 months.",
                  },
                  {
                    question: "Do you offer ongoing support and maintenance?",
                    answer:
                      "Yes, we offer comprehensive support and maintenance packages to ensure your smart building systems continue to operate at peak performance. Our team provides remote monitoring, regular updates, and rapid response to any issues.",
                  },
                  {
                    question: "What is the typical ROI for your solutions?",
                    answer:
                      "ROI varies by project, but our clients typically see returns within 2-3 years through energy savings, operational efficiencies, and enhanced productivity. We provide detailed ROI projections as part of our proposal process.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="bg-slate-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                    <p className="text-slate-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Location</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Visit our headquarters to meet our team and discuss your smart building project in person.
            </p>
          </div>

          <div className="bg-slate-300 h-[400px] rounded-lg flex items-center justify-center">
            <p className="text-slate-600">Interactive Map Would Be Embedded Here</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Request a quote today and take the first step toward transforming your building into an intelligent,
            efficient space.
          </p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
            Request a Quote
          </Button>
        </div>
      </section>
    </div>
  )
}
