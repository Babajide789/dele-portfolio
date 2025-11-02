"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import {
  Database,
  BarChart3,
  Plane,
  ClipboardList,
  PieChart,
  FileSpreadsheet,
} from "lucide-react";

const expertise = [
  {
    icon: BarChart3,
    title: "Data Analysis",
    description:
      "Transforming raw data into clear insights that support smart business decisions using Power BI, Excel, and advanced visualization tools.",
  },
  {
    icon: Database,
    title: "Data Management",
    description:
      "Skilled in organizing, cleaning, and maintaining datasets for seamless analytics and long-term accessibility.",
  },
  {
    icon: Plane,
    title: "DJI Drone Pilot",
    description:
      "Certified drone pilot experienced in data capture, mapping, and aerial analysis for projects and site evaluations.",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description:
      "Efficiently planning, coordinating, and executing projects using proven methodologies to meet timelines and objectives.",
  },
  {
    icon: PieChart,
    title: "Power BI & Visualization",
    description:
      "Developing interactive dashboards and data reports that simplify complex analytics into actionable insights.",
  },
  {
    icon: FileSpreadsheet,
    title: "Microsoft Office Suite",
    description:
      "Proficient in Word, Excel, PowerPoint, and Project Planner for documentation, analysis, and presentation of professional reports.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-linear-to-b from-muted/40 via-background to-muted/20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold"
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed"
          >
            I’m a detail-oriented{" "}
            <span className="font-semibold text-primary">Data Analyst</span> and{" "}
            <span className="font-semibold text-primary">Project Manager</span>{" "}
            who brings clarity to data and precision to every project. I combine
            analytics, visualization, and real-world insights to drive
            performance and deliver measurable impact.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <Card className="border-border/40 hover:shadow-xl transition-all hover:-translate-y-1 bg-background/60 backdrop-blur-md group">
                <CardContent className="pt-6 space-y-3">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"
                    whileHover={{
                      scale: 1.15,
                      boxShadow: "0 0 12px rgba(59,130,246,0.5)",
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  >
                    <item.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
