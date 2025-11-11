"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const projectGroups = [
  {
    organization: "Del Arete Project Professionals",
    projects: [
      "Residential Construction A – Ibadan",
      "Residential Construction B – Ibadan",
      "Renovation and Water Supply – Beach Resort, Lagos",
      "Residential Remodeling and Renovation – Elewura, Ibadan",
      "Renovation of Classroom and Furniture Supply – IGS Old Students Association, Ibadan",
      "Renovation of Classroom Block – Itire, Lagos",
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
    description:
      "Coordinated education infrastructure upgrades with emphasis on compliance, reporting accuracy, and stakeholder communication.",
    impact:
      "Delivered quality-driven public projects enhancing accessibility and infrastructure sustainability across Lagos State.",
    tags: ["Public Infrastructure", "Stakeholder Reporting", "Data-Driven Oversight"],
  },
  {
    organization: "Dayola Property and Development Company (DPDC)",
    projects: [
      "Heirs Park Residences",
      "Cornaview Apartments",
    ],
    description:
      "Supervised residential development projects, managing quality control, progress tracking, and data-informed reporting for timely delivery.",
    impact:
      "Achieved consistent on-schedule completion and optimized project resource allocation through effective monitoring.",
    tags: ["Project Supervision", "Data Reporting", "Residential Construction"],
  },
];

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
            Projects Led
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
