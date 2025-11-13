"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectGroup {
  organization: string;
  projects: string[];
  images: string[];
  description: string;
  impact: string;
  tags: string[];
}

const projectGroups: ProjectGroup[] = [
  {
    organization: "Dayola Property and Development Company (DPDC)",
    projects: ["Heirs Park Residences", "Cornaview Apartments"],
    images: ["/projects/dpdc1.jpg", "/projects/dpdc2.jpg", "/projects/dpdc3.jpg"],
    description:
      "Supervised residential development projects, managing quality control, progress tracking, and data-informed reporting for timely delivery.",
    impact:
      "Achieved consistent on-schedule completion and optimized project resource allocation through effective monitoring.",
    tags: ["Project Supervision", "Data Reporting", "Residential Construction"],
  },
  {
    organization: "Del Arete Project Professionals",
    projects: [
      "Residential Construction A – Ibadan",
      "Residential Construction B – Ibadan",
      "Residential Remodeling and Renovation – Elewura, Ibadan",
    ],
    images: ["/projects/residential1.jpg", "/projects/residential2.jpg", "/projects/residential3.jpg"],
    description:
      "Led multiple residential and renovation projects with a focus on cost efficiency, material management, and client satisfaction.",
    impact:
      "Improved workflow coordination and reduced project downtime by integrating progress analytics into supervision routines.",
    tags: ["Construction Management", "Cost Efficiency", "Performance Analytics"],
  },
  {
    organization: "Special Committee on Rehabilitation of Public Schools (SCRPS)",
    projects: [
      "Infrastructure Upgrade – Tolu Complex, Lagos",
      "Construction of an Innovative Vocational School – Lagos State Model College, Meiran",
      "Rehabilitation of the School for the Visually Impaired – Festac Town, Lagos",
    ],
    images: ["/projects/scrpss1.jpg", "/projects/scrps2.jpg", "/projects/scrps3.jpg"],
    description:
      "Coordinated education infrastructure upgrades with emphasis on compliance, reporting accuracy, and stakeholder communication.",
    impact:
      "Delivered quality-driven public projects enhancing accessibility and infrastructure sustainability across Lagos State.",
    tags: ["Public Infrastructure", "Stakeholder Reporting", "Data-Driven Oversight"],
  },
  {
    organization: "Del Arete Project Professionals",
    projects: [
      "Renovation and Water Supply – Beach Resort, Lagos",
      "Renovation of Classroom and Furniture Supply – IGS Old Students Association, Ibadan",
      "Renovation of Classroom Block – Itire, Lagos",
    ],
    images: ["/projects/renovations1.jpg", "/projects/renovation2.jpg", "/projects/renovation3.jpg", "/projects/renovation4.jpg"],
    description:
      "Managed renovation and infrastructure improvement works across educational and hospitality facilities, ensuring operational upgrades and sustainable resource planning during construction phases.",
    impact:
      "Delivered functional enhancements and water infrastructure improvements while maintaining project timelines and quality standards. Strengthened client confidence through transparent progress tracking and adaptive project control.",
    tags: ["Renovation Management", "Infrastructure Upgrade", "Water Systems", "Sustainability"],
  },
];

interface ProjectCarouselProps {
  images: string[];
}

function ProjectCarousel({ images }: ProjectCarouselProps) {
  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) emblaApi.reInit();
  }, [emblaApi]);

  return (
    <div className="relative group">
      {/* Carousel Container */}
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex">
          {images.map((src: string, i: number) => (
            <div key={i} className="relative min-w-full h-56 md:h-64 shrink-0">
              <Image
                src={src}
                alt={`Project image ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute top-1/2 -translate-y-1/2 left-3 bg-background/70 hover:bg-background/90 backdrop-blur-sm p-2 rounded-full shadow-md transition opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft className="w-5 h-5 text-primary" />
      </button>

      <button
        onClick={scrollNext}
        className="absolute top-1/2 -translate-y-1/2 right-3 bg-background/70 hover:bg-background/90 backdrop-blur-sm p-2 rounded-full shadow-md transition opacity-0 group-hover:opacity-100"
      >
        <ChevronRight className="w-5 h-5 text-primary" />
      </button>
    </div>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-linear-to-b from-background via-muted/40 to-background"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4"
          >
            Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            A concise summary of successfully managed and data-informed projects across residential,
            commercial, and public infrastructure sectors.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projectGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
            >
              <Card className="border-border/40 hover:shadow-xl transition-all bg-background/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold mb-2">
                    {group.organization}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  {/* Image Carousel */}
                  <div className="mb-4">
                    <ProjectCarousel images={group.images} />
                  </div>

                  <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
                    {group.projects.map((proj: string, i: number) => (
                      <li key={i}>{proj}</li>
                    ))}
                  </ul>

                  <p className="text-muted-foreground mb-3 text-sm">
                    {group.description}
                  </p>

                  <div className="bg-primary/5 rounded-lg p-3 mb-3">
                    <p className="text-sm">
                      <span className="text-primary font-medium">Impact:</span>{" "}
                      {group.impact}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.tags.map((tag: string, i: number) => (
                      <Badge key={i} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
