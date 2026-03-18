"use client"

import { motion } from "framer-motion"
import { FloralDivider } from "@/components/floral-divider"
import { Heart, Coffee, Sparkles, Gem } from "lucide-react"

const storyTimeline = [
  {
    year: "2018",
    title: "First Meeting",
    description: "We met at a friend's birthday party. Oussama spilled his drink on Wafae's dress, and that clumsy moment sparked something magical.",
    icon: Coffee,
  },
  {
    year: "2019",
    title: "First Date",
    description: "After months of friendship, Oussama finally gathered the courage to ask Wafae out. We spent the evening walking through the city, talking until sunrise.",
    icon: Heart,
  },
  {
    year: "2022",
    title: "Moving In Together",
    description: "We decided to take the next step and build our home together. Every day felt like an adventure as we created our little world.",
    icon: Sparkles,
  },
  {
    year: "2024",
    title: "The Proposal",
    description: "On a sunset beach walk, Oussama got down on one knee with a ring that took three months to design. Through happy tears, Wafae said yes.",
    icon: Gem,
  },
]

export function StorySection() {
  return (
    <section id="story" className="py-20 md:py-32 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">Our Journey</p>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">
            Our Love Story
          </h2>
          <FloralDivider className="w-40 md:w-56 mx-auto" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold/30 md:-translate-x-px" />

          {storyTimeline.map((item, index) => {
            const Icon = item.icon
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={item.year}
                className={`relative flex items-start gap-8 mb-12 md:mb-16 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 bg-gold rounded-full flex items-center justify-center shadow-lg z-10">
                  <Icon className="w-4 h-4 text-ivory" />
                </div>

                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${isEven ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"}`}>
                  <div className="bg-ivory border border-gold/20 rounded-sm p-6 shadow-sm">
                    <span className="text-gold text-sm tracking-wider">{item.year}</span>
                    <h3 className="text-xl md:text-2xl font-serif text-foreground mt-2 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for the other side on desktop */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
