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
    images: [
      "/projects/dpdc/dpdc1.jpg",
      "/projects/dpdc/dpdc3.jpg",
      "/projects/dpdc/dpdc2.jpg",
      "/projects/dpdc/dpdc4.jpg",
    ],
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
    images: [
      "/projects/residential/renovation3D.jpg",
      "/projects/residential/residential1.jpg",
      "/projects/residential/del-arete-renovation3.jpg",
      "/projects/residential/residential4.jpg",
      "/projects/residential/residential5.jpg",
    ],
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
    images: ["/projects/scrps/scrps2.jpg", "/projects/scrps/scrps4.jpg"],
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
    images: [
      "/projects/renovation/renovations1.jpg",
      "/projects/renovation/residential3.jpg",
      "/projects/renovation/residential2.jpg",
      "/projects/renovation/renov-school2.jpg",
      "/projects/renovation/renovation5.jpg",
      "/projects/renovation/renov-school4.jpg",
      "/projects/renovation/renov-school3.jpg",
    ],
    description:
      "Oversaw renovation and infrastructure upgrades across educational and hospitality facilities, ensuring operational improvements and efficient resource use during construction.",
    impact:
      "Delivered key functional and water system enhancements on schedule, upholding quality standards and strengthening client trust through transparent progress tracking.",
    tags: ["Renovation Management", "Infrastructure Upgrade", "Water Systems", "Sustainability"],
  },
];

interface ProjectCarouselProps {
  images: string[];
}

function ProjectCarousel({ images }: ProjectCarouselProps) {
  const autoplay = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: true,
      stopOnMouseEnter: false,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      duration: 25,
      containScroll: "trimSnaps",
    },
    [autoplay.current]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    emblaApi?.reInit();
  }, [emblaApi]);

  return (
    <div className="relative group">
      {/* Carousel Container */}
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex">
          {images.map((src, i) => (
            <motion.div
              key={i}
              className="relative min-w-full h-56 md:h-64 shrink-0 overflow-hidden rounded-xl"
              initial={{ opacity: 0.6, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src={src}
                alt={`Project image ${i + 1}`}
                fill
                className="object-cover rounded-xl"
                priority={i === 0}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Autoplay progress indicator */}
      {/* <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-[3px] bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary"
          animate={{ width: ["0%", "100%"] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div> */}

      {/* Navigation Arrows */}
      <motion.button
        onClick={scrollPrev}
        initial={{ opacity: 0, x: -20 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute top-1/2 -translate-y-1/2 left-3 bg-background/60 hover:bg-background/90 
        backdrop-blur-md p-2 rounded-full shadow-lg shadow-black/10 border border-border/40 
        hidden group-hover:flex transition-all duration-300"
      >
        <ChevronLeft className="w-5 h-5 text-primary" />
      </motion.button>

      <motion.button
        onClick={scrollNext}
        initial={{ opacity: 0, x: 20 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute top-1/2 -translate-y-1/2 right-3 bg-background/60 hover:bg-background/90 
        backdrop-blur-md p-2 rounded-full shadow-lg shadow-black/10 border border-border/40 
        hidden group-hover:flex transition-all duration-300"
      >
        <ChevronRight className="w-5 h-5 text-primary" />
      </motion.button>
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
            A concise summary of successfully managed projects across residential,
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
                  <div className="mb-4">
                    <ProjectCarousel images={group.images} />
                  </div>

                  <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
                    {group.projects.map((proj, i) => (
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
                    {group.tags.map((tag, i) => (
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
