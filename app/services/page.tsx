import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Building2, Cpu, LineChart, Lock, Settings, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ServicesPage() {
  const services = [
    {
      id: "energy",
      icon: <Zap className="h-12 w-12 text-emerald-600" />,
      title: "Energy Management",
      shortDesc: "Optimize energy consumption with IoT-driven monitoring and control systems.",
      longDesc:
        "Our energy management solutions leverage IoT sensors, advanced analytics, and automated controls to optimize your building's energy consumption. We identify inefficiencies, implement smart metering, and create intelligent control systems that respond to real-time conditions, resulting in significant cost savings and reduced environmental impact.",
      features: [
        "Real-time energy monitoring and analytics",
        "Automated demand response systems",
        "Smart HVAC and lighting controls",
        "Energy usage optimization algorithms",
        "Renewable energy integration",
        "Compliance reporting and certification support",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "security",
      icon: <Lock className="h-12 w-12 text-emerald-600" />,
      title: "Security Systems",
      shortDesc: "Advanced access control and surveillance solutions for comprehensive building security.",
      longDesc:
        "Our integrated security solutions combine access control, video surveillance, intrusion detection, and emergency response systems into a unified platform. We design and implement security systems that protect your assets, people, and data while providing seamless management and monitoring capabilities.",
      features: [
        "Integrated access control systems",
        "AI-enhanced video surveillance",
        "Intrusion detection and prevention",
        "Emergency response automation",
        "Mobile security management",
        "Visitor management systems",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "comfort",
      icon: <Building2 className="h-12 w-12 text-emerald-600" />,
      title: "Occupancy Comfort",
      shortDesc: "Create optimal environments with smart HVAC, lighting, and air quality management.",
      longDesc:
        "Our occupancy comfort solutions focus on creating optimal indoor environments that enhance productivity, well-being, and satisfaction. We integrate HVAC, lighting, air quality, and acoustic management systems that respond intelligently to occupancy patterns and environmental conditions.",
      features: [
        "Adaptive HVAC control systems",
        "Human-centric lighting solutions",
        "Indoor air quality monitoring and management",
        "Acoustic comfort optimization",
        "Occupancy-based environmental adjustments",
        "Personalized comfort controls",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "maintenance",
      icon: <Settings className="h-12 w-12 text-emerald-600" />,
      title: "Predictive Maintenance",
      shortDesc: "Prevent equipment failures with AI-powered monitoring and predictive analytics.",
      longDesc:
        "Our predictive maintenance solutions use IoT sensors, machine learning, and advanced analytics to monitor equipment health, predict potential failures, and optimize maintenance schedules. This proactive approach reduces downtime, extends equipment life, and lowers maintenance costs.",
      features: [
        "Real-time equipment health monitoring",
        "AI-powered failure prediction",
        "Condition-based maintenance scheduling",
        "Automated maintenance workflows",
        "Equipment performance optimization",
        "Maintenance history and analytics",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "automation",
      icon: <Cpu className="h-12 w-12 text-emerald-600" />,
      title: "Intelligent Automation",
      shortDesc: "Streamline operations with automated systems and smart building controls.",
      longDesc:
        "Our intelligent automation solutions transform building operations through advanced control systems, workflow automation, and integrated management platforms. We design and implement automation strategies that enhance efficiency, reduce manual intervention, and create responsive building environments.",
      features: [
        "Centralized building management systems",
        "Automated operational workflows",
        "Scenario-based building responses",
        "Cross-system integration and orchestration",
        "Remote monitoring and control capabilities",
        "Custom automation rule creation",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "analytics",
      icon: <LineChart className="h-12 w-12 text-emerald-600" />,
      title: "Performance Analytics",
      shortDesc: "Gain actionable insights with comprehensive building performance data analysis.",
      longDesc:
        "Our performance analytics solutions transform building data into actionable insights through advanced visualization, reporting, and analysis tools. We help you understand building performance trends, identify optimization opportunities, and make data-driven decisions about your building operations.",
      features: [
        "Comprehensive performance dashboards",
        "Custom KPI tracking and reporting",
        "Trend analysis and benchmarking",
        "Anomaly detection and alerting",
        "ROI and savings calculations",
        "Data-driven optimization recommendations",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-slate-300">
              Comprehensive smart building solutions to optimize performance, enhance security, and improve occupant
              experience.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Smart Building Solutions</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We offer a comprehensive suite of services designed to transform traditional buildings into intelligent,
              connected spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-slate-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.shortDesc}</p>
                <Link
                  href={`#${service.id}`}
                  className="text-emerald-600 font-medium inline-flex items-center hover:text-emerald-700"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 md:py-24 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Explore Our Services in Detail</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Select a service to learn more about our approach, features, and benefits.
            </p>
          </div>

          <Tabs defaultValue="energy" className="w-full">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
              {services.map((service) => (
                <TabsTrigger key={service.id} value={service.id} className="text-sm">
                  {service.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {services.map((service) => (
              <TabsContent key={service.id} value={service.id} id={service.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      {service.icon}
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                    </div>
                    <p className="text-slate-600">{service.longDesc}</p>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-600 flex items-center justify-center text-white text-xs mt-0.5">
                              ✓
                            </div>
                            <span className="text-slate-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="bg-emerald-600 hover:bg-emerald-700 mt-4">Request a Consultation</Button>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We follow a proven methodology to deliver successful smart building solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Assessment",
                description:
                  "We begin with a comprehensive assessment of your building's current systems, infrastructure, and operational needs.",
              },
              {
                step: "2",
                title: "Strategy",
                description:
                  "We develop a tailored strategy that aligns smart building technologies with your business objectives and budget.",
              },
              {
                step: "3",
                title: "Implementation",
                description:
                  "Our expert team designs and implements integrated solutions using best-in-class technologies and methodologies.",
              },
              {
                step: "4",
                title: "Optimization",
                description:
                  "We continuously monitor, analyze, and optimize your systems to ensure peak performance and ROI.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-16 md:py-24 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              See how our smart building solutions have delivered real results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Corporate Headquarters Energy Optimization",
                client: "Global Financial Services Firm",
                result: "32% reduction in energy consumption and improved occupant comfort scores.",
                image: "/placeholder.svg?height=250&width=400",
              },
              {
                title: "Integrated Security System Upgrade",
                client: "Multi-Building Healthcare Campus",
                result: "Streamlined access control across 12 buildings and 40% reduction in security incidents.",
                image: "/placeholder.svg?height=250&width=400",
              },
              {
                title: "Smart Building Retrofit",
                client: "Historic Office Building",
                result:
                  "Modern functionality while preserving architectural integrity, with 28% operational cost savings.",
                image: "/placeholder.svg?height=250&width=400",
              },
            ].map((study, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <Image
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                  <p className="text-emerald-600 mb-2">{study.client}</p>
                  <p className="text-slate-600 mb-4">{study.result}</p>
                  <Link href="#" className="text-emerald-600 font-medium hover:text-emerald-700">
                    Read case study
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Building?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your smart building needs and discover how our solutions can benefit your
            organization.
          </p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </div>
  )
}
