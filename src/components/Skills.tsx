"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const skillsData = [
  { skill: "Project Management", proficiency: 92 },
  { skill: "Data Analysis", proficiency: 95 },
  { skill: "Data Management", proficiency: 90 },
  { skill: "Power BI", proficiency: 85 },
  { skill: "Microsoft Excel", proficiency: 92 },
  { skill: "DJI Drone Operations", proficiency: 85 },
];

const tools = [
  "Power BI",
  "Excel",
  "Microsoft Project Planner",
  "Word",
  "PowerPoint",
  "Data Analytics",
  "Data Cleaning",
  "Drone Mapping",
  "Stakeholder Reporting",
  "Team Coordination",
];

export function Skills() {
  const chartRef = useRef(null);
  const isInView = useInView(chartRef, { once: true, margin: "-100px" });
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  return (
    <section
      id="skills"
      className="py-20 px-6 bg-linear-to-b from-background via-muted/30 to-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4"
          >
            Skills & Core Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            A dynamic blend of analytical precision, project leadership, and
            hands-on technical capability — turning complex data into strategic
            results.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Animated Skill Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            ref={chartRef}
          >
            <Card className="border-border/40 bg-background/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Proficiency Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {skillsData.map((item, index) => (
                    <div key={index} className="space-y-2">
                      {/* Skill name and percentage */}
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">{item.skill}</span>
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={
                            isInView ? { opacity: 1 } : { opacity: 0 }
                          }
                          transition={{
                            delay: index * 0.1 + 0.5,
                            duration: 0.3,
                          }}
                          className="text-muted-foreground font-semibold"
                        >
                          {item.proficiency}%
                        </motion.span>
                      </div>

                      {/* Animated bar */}
                      <div className="relative h-8 bg-muted/30 rounded-lg overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={
                            isInView
                              ? { width: `${item.proficiency}%` }
                              : { width: 0 }
                          }
                          transition={{
                            duration: 1,
                            delay: index * 0.1,
                            ease: "easeOut",
                          }}
                          onMouseEnter={() => setHoveredBar(index)}
                          onMouseLeave={() => setHoveredBar(null)}
                          className={`
                            h-full bg-linear-to-r from-primary to-primary/80
                            rounded-lg transition-all duration-300 cursor-pointer
                            ${hoveredBar === index ? "brightness-110 shadow-lg shadow-primary/50" : ""}
                          `}
                          style={{
                            transformOrigin: "left",
                          }}
                        >
                          {/* Shine effect on hover */}
                          {hoveredBar === index && (
                            <motion.div
                              initial={{ x: "-100%" }}
                              animate={{ x: "200%" }}
                              transition={{
                                duration: 0.6,
                                ease: "easeInOut",
                              }}
                              className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
                            />
                          )}
                        </motion.div>

                        {/* Grid lines for reference */}
                        <div className="absolute inset-0 flex items-center pointer-events-none">
                          {[25, 50, 75].map((mark) => (
                            <div
                              key={mark}
                              className="absolute h-full w-px bg-border/20"
                              style={{ left: `${mark}%` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Legend */}
                <div className="mt-6 pt-4 border-t border-border/40">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Beginner</span>
                    <span>Intermediate</span>
                    <span>Advanced</span>
                    <span>Expert</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Tools and description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <Card className="border-border/40 bg-background/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Key Tools & Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial="hidden"
                  whileInView="visible"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                      },
                    },
                  }}
                >
                  {tools.map((tool, index) => (
                    <motion.div
                      key={index}
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 },
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge
                        variant="secondary"
                        className="px-3 py-1 text-sm rounded-md cursor-default transition-colors hover:bg-primary/20"
                      >
                        {tool}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>

                <div className="mt-8 space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <span className="w-1 h-4 bg-primary rounded-full"></span>
                      Project Leadership
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Experienced in leading multidisciplinary teams,
                      supervising construction and analytical projects, and
                      delivering high-impact outcomes on time and within scope.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <span className="w-1 h-4 bg-primary rounded-full"></span>
                      Data Analytics & Management
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Skilled in transforming raw data into actionable insights,
                      maintaining data integrity, and building efficient
                      management systems that improve decision accuracy.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <span className="w-1 h-4 bg-primary rounded-full"></span>
                      Drone Mapping & Field Operations
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Certified DJI Drone Pilot with hands-on experience in
                      aerial mapping, data acquisition, and visual inspection
                      for infrastructure and land projects.
                    </p>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}