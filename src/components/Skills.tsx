"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const skillsData = [
  { skill: "Python", proficiency: 95 },
  { skill: "SQL", proficiency: 90 },
  { skill: "Power BI", proficiency: 88 },
  { skill: "Tableau", proficiency: 85 },
  { skill: "R", proficiency: 80 },
  { skill: "Excel", proficiency: 92 }
];

const tools = [
  "Python", "R", "SQL", "Power BI", "Tableau", "Excel",
  "Pandas", "NumPy", "Scikit-learn", "TensorFlow",
  "PostgreSQL", "MySQL", "MongoDB", "Azure",
  "Git", "Jupyter", "Apache Spark", "DAX"
];

export function Skills() {
  return (
    <>
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for data analysis, visualization, and business intelligence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Proficiency Levels</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={skillsData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="skill" type="category" width={80} />
                  <Tooltip />
                  <Bar dataKey="proficiency" fill="hsl(var(--primary))" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tools & Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {tool}
                  </Badge>
                ))}
              </div>
              
              <div className="mt-8 space-y-4">
                <div>
                  <h4 className="mb-2">Data Analysis & Processing</h4>
                  <p className="text-sm text-muted-foreground">
                    Expert in cleaning, transforming, and analyzing large datasets to extract meaningful patterns
                  </p>
                </div>
                <div>
                  <h4 className="mb-2">Visualization & Reporting</h4>
                  <p className="text-sm text-muted-foreground">
                    Creating interactive dashboards and reports that tell compelling data stories
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
    </>
  );
}
