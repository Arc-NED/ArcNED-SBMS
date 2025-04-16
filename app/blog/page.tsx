import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function BlogPage() {
  const featuredPost = {
    title: "The Future of Smart Buildings: Trends to Watch in 2023",
    excerpt:
      "Explore the emerging technologies and approaches that are shaping the future of smart building management and design.",
    date: "June 15, 2023",
    author: "Alex Chen",
    category: "Industry Trends",
    image: "/placeholder.svg?height=400&width=800",
    slug: "future-of-smart-buildings",
  }

  const posts = [
    {
      title: "How IoT is Revolutionizing Energy Management",
      excerpt:
        "Discover how Internet of Things devices are creating unprecedented energy efficiency in modern buildings.",
      date: "May 28, 2023",
      author: "Sarah Johnson",
      category: "Technology",
      image: "/placeholder.svg?height=300&width=500",
      slug: "iot-energy-management",
    },
    {
      title: "Case Study: Smart Building Implementation for Enterprise",
      excerpt:
        "Learn how we helped a Fortune 500 company reduce energy costs by 32% with our smart building solutions.",
      date: "May 10, 2023",
      author: "Michael Rodriguez",
      category: "Case Studies",
      image: "/placeholder.svg?height=300&width=500",
      slug: "case-study-enterprise",
    },
    {
      title: "The ROI of Smart Building Investments",
      excerpt: "A comprehensive analysis of the financial returns from investing in smart building technologies.",
      date: "April 22, 2023",
      author: "Emma Wilson",
      category: "Business",
      image: "/placeholder.svg?height=300&width=500",
      slug: "roi-smart-buildings",
    },
    {
      title: "Integrating Security Systems in Smart Buildings",
      excerpt: "Best practices for creating comprehensive, integrated security solutions in intelligent buildings.",
      date: "April 15, 2023",
      author: "David Kim",
      category: "Security",
      image: "/placeholder.svg?height=300&width=500",
      slug: "security-integration",
    },
    {
      title: "Smart HVAC: The Key to Occupant Comfort",
      excerpt:
        "How intelligent HVAC systems are transforming occupant experience and satisfaction in commercial buildings.",
      date: "March 30, 2023",
      author: "Priya Patel",
      category: "Comfort Solutions",
      image: "/placeholder.svg?height=300&width=500",
      slug: "smart-hvac-comfort",
    },
    {
      title: "Predictive Maintenance: Preventing Problems Before They Occur",
      excerpt: "How AI and IoT are enabling predictive maintenance strategies that save time and money.",
      date: "March 18, 2023",
      author: "Alex Chen",
      category: "Maintenance",
      image: "/placeholder.svg?height=300&width=500",
      slug: "predictive-maintenance",
    },
  ]

  const categories = [
    "All Categories",
    "Industry Trends",
    "Technology",
    "Case Studies",
    "Business",
    "Security",
    "Comfort Solutions",
    "Maintenance",
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Insights</h1>
            <p className="text-xl text-slate-300">
              Stay updated with the latest trends, technologies, and insights in smart building management.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Featured Article</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src={featuredPost.image || "/placeholder.svg"}
                alt={featuredPost.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <Badge className="bg-emerald-600 hover:bg-emerald-700">{featuredPost.category}</Badge>
              <h3 className="text-2xl md:text-3xl font-bold">{featuredPost.title}</h3>
              <p className="text-slate-600 text-lg">{featuredPost.excerpt}</p>
              <div className="flex items-center text-sm text-slate-500">
                <span>{featuredPost.date}</span>
                <span className="mx-2">•</span>
                <span>By {featuredPost.author}</span>
              </div>
              <Button className="bg-emerald-600 hover:bg-emerald-700">Read Article</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Listing */}
      <section className="py-16 md:py-24 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <h2 className="text-3xl font-bold">Latest Articles</h2>

            <div className="w-full md:w-auto">
              <div className="relative">
                <Input placeholder="Search articles..." className="w-full md:w-[300px] pr-10" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-emerald-600 hover:bg-emerald-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <Badge className="mb-3 bg-emerald-600 hover:bg-emerald-700">{post.category}</Badge>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-slate-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-slate-500 mb-4">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>By {post.author}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="text-emerald-600 font-medium hover:text-emerald-700">
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Subscribe to Our Newsletter</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and news in smart building technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input type="email" placeholder="Your email address" className="bg-white text-slate-900" />
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600 whitespace-nowrap"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
