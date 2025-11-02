"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Del Arete Project Professionals – Residential Construction",
    description:
      "Supervised and executed two large-scale residential building projects from foundation to finishing, ensuring quality control, cost management, and timely delivery.",
    images: [
      "/projects/del-arete-residential1.jpg",
      "/projects/del-arete-residential2.jpg",
      "/projects/del-arete-residential3.jpg",
    ],
    tags: ["Project Management", "Construction Supervision", "Client Reporting"],
    impact: "Delivered both projects 2 weeks ahead of schedule while maintaining 100% client satisfaction.",
  },
  {
    title: "Del Arete Project Professionals – Renovation Works",
    description:
      "Led four renovation and remodelling projects focused on space optimization and modern design transformation across both commercial and residential spaces.",
    images: [
      "/projects/del-arete-renovation1.jpg",
      "/projects/del-arete-renovation2.jpg",
      "/projects/del-arete-renovation3.jpg",
    ],
    tags: ["Interior Design", "Cost Planning", "Quality Assurance"],
    impact: "Improved project delivery efficiency by 40% through process optimization.",
  },
  {
    title: "SCRPS – Tolu Complex Supervision & Executive Reporting",
    description:
      "Coordinated supervision, site evaluation, and executive-level project reporting for a complex mixed-use development. Managed contractors and progress tracking using Power BI dashboards.",
    images: [
      "/projects/scrps-tolu1.jpg",
      "/projects/scrps-tolu2.jpg",
      "/projects/scrps-tolu3.jpg",
    ],
    tags: ["Supervision", "Executive Reporting", "Power BI"],
    impact: "Enhanced reporting accuracy and transparency, driving faster decision-making by 25%.",
  },
];

function AutoCarousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      3000 // duration for each image (3 seconds)
    );
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative aspect-video overflow-hidden rounded-t-lg">
      {images.map((src, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={src}
            alt={`Project image ${i + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={i === 0}
          />
        </motion.div>
      ))}
    </div>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-linear-to-b from-background via-muted/40 to-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            A selection of impactful projects that reflect precision, creativity, and data-driven supervision.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
            >
              <Card className="overflow-hidden border-border/40 hover:shadow-2xl transition-all bg-background/70 backdrop-blur-sm">
                {/* Auto-sliding gallery */}
                <AutoCarousel images={project.images} />

                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="bg-primary/5 rounded-lg p-3">
                    <p className="text-sm leading-relaxed">
                      <span className="text-primary font-medium">Impact:</span> {project.impact}
                    </p>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button asChild size="sm" variant="outline" className="gap-2">
                    <a href="#contact">
                      <ExternalLink className="w-4 h-4" />
                      Learn More
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
