"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Clock,
  Shield,
  Wrench,
  HomeIcon,
  Calendar,
  CheckCircle2,
  Star,
  Mail,
  ChevronRight,
  Car,
  Zap,
  Award,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { createConversionHandler, trackPhoneConversion, trackEmailConversion } from "@/lib/conversion-tracking";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const services = [
    "Car Not Starting Inspection",
    "Oil & Filter Change",
    "Brake Pad Replacement",
    "Timing Belt Replacement",
    "Pre-Purchase Inspection",
    "Battery Replacement",
    "Starter Replacement",
    "Alternator Replacement",
    "Serpentine Belt Replacement",
    "Spark Plug Replacement",
    "Water Pump Replacement",
    "Fuel Pump Replacement",
    "Radiator Replacement",
    "Valve Cover Gasket Replacement",
    "Oxygen Sensor Replacement",
    "Thermostat Replacement",
    "Wheel Bearing Replacement",
    "CV Shaft Assembly Replacement",
  ];

  const valueProps = [
    {
      icon: HomeIcon,
      title: "We Make It Easy",
      description:
        "Get a quote and book online 24/7. Our mechanics come to your home or office, even on evenings and weekends.",
      color: "energy",
    },
    {
      icon: Zap,
      title: "Fair & Transparent Pricing",
      description:
        "Upfront estimates for hundreds of services on thousands of cars. No hidden fees, no surprises. Book with confidence.",
      color: "premium",
    },
    {
      icon: Shield,
      title: "Backed by Warranty",
      description:
        "All services backed by our comprehensive 6-months / 12,000-mile warranty. Quality work guaranteed.",
      color: "trust",
    },
    {
      icon: Car,
      title: "All Makes & Models",
      description:
        "We service most makes and models with expert care and attention to detail.",
      color: "success",
    },
  ];

  const steps = [
    {
      icon: Phone,
      title: "Get a Quote",
      description:
        "Tell us what your car needs or request a diagnostic. Receive a free, fast, and transparent price quote instantly.",
      color: "trust",
    },
    {
      icon: Calendar,
      title: "Book Appointment",
      description:
        "Choose your preferred location—home or office. Select a convenient time that works for your schedule.",
      color: "energy",
    },
    {
      icon: CheckCircle2,
      title: "Get Your Car Fixed",
      description:
        "That's it! No more waiting rooms. Our certified mechanics come to you and fix your car on-site.",
      color: "success",
    },
  ];

  const testimonials = [
    {
      author: "Cody Fisher",
      text: "Outstanding service! I brought in my car with a persistent engine issue that others couldn't diagnose. The team not only identified the problem quickly but also fixed it efficiently. My car runs better than ever!",
      rating: 5,
    },
    {
      author: "Kristin Watson",
      text: "I've been bringing my vehicles to AZR Mobile Car Repair for years, and they never disappoint. From routine maintenance to major repairs, their knowledgeable staff and fair pricing make them my go-to mechanics.",
      rating: 5,
    },
    {
      author: "Albert Flores",
      text: "After a bad experience elsewhere, I was hesitant to trust another mechanic. However, AZR restored my faith in automotive care. They were transparent about repairs needed and delivered quality workmanship.",
      rating: 5,
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      trust: {
        bg: "bg-trust",
        bgLight: "bg-trust-light",
        text: "text-trust",
        border: "border-trust",
      },
      energy: {
        bg: "bg-energy",
        bgLight: "bg-energy-light",
        text: "text-energy",
        border: "border-energy",
      },
      success: {
        bg: "bg-success",
        bgLight: "bg-success-light",
        text: "text-success",
        border: "border-success",
      },
      premium: {
        bg: "bg-premium",
        bgLight: "bg-premium-light",
        text: "text-premium",
        border: "border-premium",
      },
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.trust;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-gray-300 shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Wrench className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                AZR Auto Repair
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
                onClick={() => trackPhoneConversion("4049429222")}
              >
                <Phone className="w-4 h-4 mr-2" />
                (404) 942-9222
              </Button>
            </motion.div>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">
              Mechanics That Make{" "}
              <span className="text-primary">House Calls</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance max-w-3xl mx-auto">
              Service at your home or office · 7 days a week · Fair and
              transparent pricing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow"
                onClick={() => trackPhoneConversion("4049429222")}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-premium hover:bg-premium/90 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <a href="#services">
                  View Services
                  <ChevronRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Users,
                label: "2000+ Cities",
                value: "Nationwide",
                color: "trust",
              },
              {
                icon: Award,
                label: "Expert Mechanics",
                value: "Reliable",
                color: "premium",
              },
              {
                icon: Shield,
                label: "Warranty",
                value: "6mo/12k mi",
                color: "success",
              },
              {
                icon: Star,
                label: "Rating",
                value: "5.0 Stars",
                color: "energy",
              },
            ].map((stat, index) => {
              const colors = getColorClasses(stat.color);
              return (
                <div key={index} className="text-center">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 ${colors.bgLight} rounded-full mb-3`}
                  >
                    <stat.icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <div className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>


      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {valueProps.map((prop, index) => {
              const colors = getColorClasses(prop.color);
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <Card
                    className={`h-full border-2 ${colors.border} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                  >
                    <CardContent className="p-6">
                      <div
                        className={`w-12 h-12 ${colors.bgLight} rounded-lg flex items-center justify-center mb-4`}
                      >
                        <prop.icon className={`w-6 h-6 ${colors.text}`} />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {prop.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {prop.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section
        id="services"
        className="py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Over 500 Car Repair Services
            </h2>
            <p className="text-xl text-muted-foreground text-balance">
              At your home or office—no shop visit required
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-start gap-3 p-4 rounded-lg bg-white border-2 border-transparent hover:border-success transition-all duration-300 hover:shadow-md"
              >
                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{service}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
              onClick={() => trackPhoneConversion("4049429222")}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call to Book Service
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Life's Too Short to Spend It at the Repair Shop
            </h2>
            <p className="text-xl text-muted-foreground text-balance">
              Get your car fixed in three simple steps
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {steps.map((step, index) => {
              const colors = getColorClasses(step.color);
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative"
                >
                  <Card
                    className={`h-full border-2 ${colors.border} hover:shadow-xl transition-all duration-300`}
                  >
                    <CardContent className="p-8 text-center">
                      <div
                        className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
                      >
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div
                        className={`text-6xl font-bold ${colors.text} opacity-20 mb-4`}
                      >
                        {index + 1}
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ChevronRight className={`w-8 h-8 ${colors.text}`} />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full border-2 border-success hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-energy text-energy"
                        />
                      ))}
                    </div>
                    <p className="text-foreground leading-relaxed mb-4">
                      "{testimonial.text}"
                    </p>
                    <p className="font-semibold text-foreground">
                      — {testimonial.author}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Ready to Get Started?
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="border-2 border-trust hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-trust-light rounded-full flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-trust" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                  <button
                    onClick={() => trackPhoneConversion("4049429222")}
                    className="text-trust hover:underline font-medium bg-transparent border-none cursor-pointer"
                  >
                    (404) 942-9222
                  </button>
                </CardContent>
              </Card>

              <Card className="border-2 border-premium hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-premium-light rounded-full flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-premium" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <button
                    onClick={() => trackEmailConversion("azrautorepair@gmail.com")}
                    className="text-premium hover:underline font-medium bg-transparent border-none cursor-pointer"
                  >
                    azrautorepair@gmail.com
                  </button>
                </CardContent>
              </Card>

              <Card className="border-2 border-energy hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-energy-light rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6 text-energy" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Hours</h3>
                  <p className="text-muted-foreground text-sm">
                    Mon-Sat: 9AM-6PM
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Sunday: Closed
                  </p>
                </CardContent>
              </Card>
            </div>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              onClick={() => trackPhoneConversion("4049429222")}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now for a Free Quote
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-foreground">
                  AZR Auto Repair
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Expert automotive repair services at your location. Quality,
                convenience, and trust.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#services"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground">Oil Changes</li>
                <li className="text-muted-foreground">Brake Repair</li>
                <li className="text-muted-foreground">Diagnostics</li>
                <li className="text-muted-foreground">Inspections</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground">(404) 942-9222</li>
                <li className="text-muted-foreground">
                  info@azrautorepair.com
                </li>
                <li className="text-muted-foreground">Mon-Sat: 9AM-6PM</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} AZR Auto Repair. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
