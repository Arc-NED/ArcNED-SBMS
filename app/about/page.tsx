import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About ArcNED</h1>
            <p className="text-xl text-slate-300">
              Leading the way in smart building management systems and IoT integration services.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="ArcNED Team"
                width={600}
                height={500}
                className="rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-lg text-slate-600">
                Founded in 2013, ArcNED Smart Building Solutions Inc. began with a vision to transform traditional
                buildings into intelligent, connected spaces. What started as a small team of engineers and IoT
                specialists has grown into a leading consultancy firm serving clients across multiple industries.
              </p>
              <p className="text-lg text-slate-600">
                Our journey has been defined by innovation, technical excellence, and a commitment to sustainability.
                Today, we're proud to be at the forefront of the smart building revolution, helping organizations
                optimize their spaces for efficiency, security, and occupant comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-emerald-600">Our Mission</h2>
              <p className="text-slate-600">
                To empower organizations with intelligent building solutions that drive efficiency, sustainability, and
                innovation. We're committed to creating smarter, safer, and more sustainable built environments through
                cutting-edge technology and expert consultancy.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-emerald-600">Our Vision</h2>
              <p className="text-slate-600">
                To be the global leader in smart building integration, setting the standard for how buildings are
                managed, operated, and experienced. We envision a future where every building is intelligent, efficient,
                and responsive to the needs of its occupants and the environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              The principles that guide our work and define our approach to smart building solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Innovation",
                description:
                  "We constantly explore new technologies and approaches to push the boundaries of what's possible in smart building management.",
              },
              {
                title: "Excellence",
                description:
                  "We hold ourselves to the highest standards in everything we do, from system design to client communication.",
              },
              {
                title: "Sustainability",
                description:
                  "We're committed to creating solutions that reduce environmental impact and promote resource efficiency.",
              },
              {
                title: "Partnership",
                description:
                  "We build lasting relationships with our clients, working collaboratively to achieve their goals.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-3 text-emerald-600">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Meet the experts driving innovation and excellence at ArcNED.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Chen",
                role: "Chief Executive Officer",
                bio: "With over 15 years in building technology, Alex leads our vision for smarter, more sustainable buildings.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Sarah Johnson",
                role: "Chief Technology Officer",
                bio: "Sarah brings extensive expertise in IoT systems and integration, driving our technical innovation.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Michael Rodriguez",
                role: "Head of Consultancy",
                bio: "Michael leads our consultancy team, bringing strategic insight to complex building management challenges.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Priya Patel",
                role: "Director of Operations",
                bio: "Priya ensures seamless project delivery and operational excellence across all our engagements.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "David Kim",
                role: "Lead Systems Architect",
                bio: "David designs integrated systems that form the backbone of our smart building solutions.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Emma Wilson",
                role: "Sustainability Director",
                bio: "Emma ensures our solutions deliver on environmental performance and sustainability goals.",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-emerald-600 mb-2">{member.role}</p>
                  <p className="text-slate-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Partner with ArcNED to transform your building into an intelligent, efficient, and sustainable space.
          </p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
            Contact Our Team
          </Button>
        </div>
      </section>
    </div>
  )
}
