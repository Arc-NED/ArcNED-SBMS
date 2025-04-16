"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle2 } from "lucide-react"

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle form submission here
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col min-h-[70vh] items-center justify-center py-16 md:py-24 px-4">
        <Card className="w-full max-w-2xl">
          <CardHeader className="text-center">
            <CheckCircle2 className="mx-auto h-16 w-16 text-emerald-600 mb-4" />
            <CardTitle className="text-2xl md:text-3xl">Quote Request Received</CardTitle>
            <CardDescription className="text-lg">
              Thank you for your interest in ArcNED Smart Building Solutions.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-slate-600">
              We've received your quote request and will review your requirements. A member of our team will contact you
              within 1-2 business days to discuss your project in detail.
            </p>
            <Button onClick={() => setSubmitted(false)} className="bg-emerald-600 hover:bg-emerald-700 mt-4">
              Submit Another Request
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Request a Quote</h1>
            <p className="text-xl text-slate-300">
              Get a customized quote for your smart building project. Tell us about your needs and we'll help you find
              the right solution.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <Card className="w-full max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle>Customized Quote Request</CardTitle>
              <CardDescription>
                Please provide details about your project so we can prepare an accurate quote.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Smith" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" placeholder="Acme Corporation" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="(123) 456-7890" required />
                    </div>
                  </div>
                </div>

                {/* Project Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Project Information</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="project-type">Project Type</Label>
                      <Select>
                        <SelectTrigger id="project-type">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new">New Building Construction</SelectItem>
                          <SelectItem value="retrofit">Building Retrofit</SelectItem>
                          <SelectItem value="upgrade">System Upgrade</SelectItem>
                          <SelectItem value="consultation">Consultation Only</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="building-type">Building Type</Label>
                      <Select>
                        <SelectTrigger id="building-type">
                          <SelectValue placeholder="Select building type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="commercial">Commercial Office</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="residential">Multi-family Residential</SelectItem>
                          <SelectItem value="industrial">Industrial</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="building-size">Building Size (sq ft)</Label>
                      <Select>
                        <SelectTrigger id="building-size">
                          <SelectValue placeholder="Select building size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Under 10,000 sq ft</SelectItem>
                          <SelectItem value="medium">10,000 - 50,000 sq ft</SelectItem>
                          <SelectItem value="large">50,000 - 100,000 sq ft</SelectItem>
                          <SelectItem value="xlarge">Over 100,000 sq ft</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Project Timeline</Label>
                      <RadioGroup defaultValue="medium">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="urgent" id="urgent" />
                          <Label htmlFor="urgent">Urgent (1-3 months)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="medium" id="medium" />
                          <Label htmlFor="medium">Medium-term (3-6 months)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="long" id="long" />
                          <Label htmlFor="long">Long-term (6+ months)</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>

                {/* Services Needed */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Services Needed</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { id: "energy", label: "Energy Management" },
                      { id: "security", label: "Security Systems" },
                      { id: "comfort", label: "Occupancy Comfort" },
                      { id: "maintenance", label: "Predictive Maintenance" },
                      { id: "automation", label: "Intelligent Automation" },
                      { id: "analytics", label: "Performance Analytics" },
                      { id: "consultation", label: "Consultancy Services" },
                      { id: "integration", label: "System Integration" },
                    ].map((service) => (
                      <div key={service.id} className="flex items-center space-x-2">
                        <Checkbox id={service.id} />
                        <Label htmlFor={service.id}>{service.label}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-2">
                  <Label htmlFor="details">Project Details</Label>
                  <Textarea
                    id="details"
                    placeholder="Please provide any additional details about your project requirements, goals, or specific challenges."
                    className="min-h-[120px]"
                  />
                </div>

                {/* Budget Range */}
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range</Label>
                  <Select>
                    <SelectTrigger id="budget">
                      <SelectValue placeholder="Select your budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Under $50,000</SelectItem>
                      <SelectItem value="medium">$50,000 - $100,000</SelectItem>
                      <SelectItem value="large">$100,000 - $250,000</SelectItem>
                      <SelectItem value="xlarge">$250,000 - $500,000</SelectItem>
                      <SelectItem value="xxlarge">Over $500,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* How did you hear about us */}
                <div className="space-y-2">
                  <Label htmlFor="source">How did you hear about us?</Label>
                  <Select>
                    <SelectTrigger id="source">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="search">Search Engine</SelectItem>
                      <SelectItem value="social">Social Media</SelectItem>
                      <SelectItem value="referral">Referral</SelectItem>
                      <SelectItem value="event">Industry Event</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" required />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the terms and conditions and privacy policy
                  </Label>
                </div>

                <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Submit Quote Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
