import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Building2, Cpu, LineChart, Lock, Settings, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"


export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Smart Building Solutions for a Connected Future
              </h1>
              <p className="text-lg md:text-xl text-slate-300">
                Transforming buildings into intelligent, efficient, and sustainable spaces through IoT-driven management
                systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Request a Quote
                </Button>
                <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/10">
                  Explore Services
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Smart Building Management"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Smart Building Services</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive solutions to optimize building performance, enhance security, and improve occupant comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-10 w-10 text-emerald-600" />,
                title: "Energy Management",
                description: "Optimize energy consumption with IoT-driven monitoring and control systems.",
              },
              {
                icon: <Lock className="h-10 w-10 text-emerald-600" />,
                title: "Security Systems",
                description: "Advanced access control and surveillance solutions for comprehensive building security.",
              },
              {
                icon: <Building2 className="h-10 w-10 text-emerald-600" />,
                title: "Occupancy Comfort",
                description: "Create optimal environments with smart HVAC, lighting, and air quality management.",
              },
              {
                icon: <Settings className="h-10 w-10 text-emerald-600" />,
                title: "Predictive Maintenance",
                description: "Prevent equipment failures with AI-powered monitoring and predictive analytics.",
              },
              {
                icon: <Cpu className="h-10 w-10 text-emerald-600" />,
                title: "Intelligent Automation",
                description: "Streamline operations with automated systems and smart building controls.",
              },
              {
                icon: <LineChart className="h-10 w-10 text-emerald-600" />,
                title: "Performance Analytics",
                description: "Gain actionable insights with comprehensive building performance data analysis.",
              },
            ].map((service, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <Link
                  href="/services"
                  className="text-emerald-600 font-medium inline-flex items-center hover:text-emerald-700"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Smart Building Technology"
                width={600}
                height={500}
                className="rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Why Choose ArcNED?</h2>
              <p className="text-lg text-slate-600">
                We combine industry expertise with cutting-edge technology to deliver tailored smart building solutions
                that drive efficiency, sustainability, and innovation.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Industry Expertise",
                    description: "Over 10 years of experience in building management systems and IoT integration.",
                  },
                  {
                    title: "Customized Solutions",
                    description: "Tailored approaches to meet the unique needs of your building and organization.",
                  },
                  {
                    title: "End-to-End Service",
                    description:
                      "Comprehensive support from consultation and design to implementation and maintenance.",
                  },
                  {
                    title: "Future-Proof Technology",
                    description: "Scalable solutions that evolve with your needs and emerging technologies.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-600 flex items-center justify-center text-white">
                      ✓
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="bg-emerald-600 hover:bg-emerald-700 mt-4">Learn About Our Approach</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Building?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get a customized quote for your smart building project and take the first step toward a more efficient,
            secure, and sustainable space.
          </p>
          <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-emerald-600">
            Request a Quote Today
          </Button>
        </div>
      </section>

      {/* Latest News/Blog Preview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Latest Insights</h2>
            <Link href="/blog" className="text-emerald-600 font-medium inline-flex items-center hover:text-emerald-700">
              View all articles <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "/placeholder.svg?height=200&width=400",
                title: "The Future of Smart Building Technology in 2023",
                excerpt: "Explore emerging trends and innovations shaping the smart building industry this year.",
                date: "June 15, 2023",
              },
              {
                image: "/placeholder.svg?height=200&width=400",
                title: "How IoT is Revolutionizing Energy Management",
                excerpt:
                  "Discover how Internet of Things devices are creating unprecedented energy efficiency in modern buildings.",
                date: "May 28, 2023",
              },
              {
                image: "/placeholder.svg?height=200&width=400",
                title: "Case Study: Smart Building Implementation for Enterprise",
                excerpt:
                  "Learn how we helped a Fortune 500 company reduce energy costs by 32% with our smart building solutions.",
                date: "May 10, 2023",
              },
            ].map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-slate-500 mb-2">{post.date}</p>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-slate-600 mb-4">{post.excerpt}</p>
                  <Link href="/blog/post" className="text-emerald-600 font-medium hover:text-emerald-700">
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
