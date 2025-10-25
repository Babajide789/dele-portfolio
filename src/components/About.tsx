import { Card, CardContent } from "./ui/card";
import { BarChart3, Database, LineChart, PieChart } from "lucide-react";

const expertise = [
  {
    icon: BarChart3,
    title: "Data Visualization",
    description: "Creating compelling visual stories with Power BI, Tableau, and Python libraries"
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Expert in SQL, data warehousing, and ETL processes for large-scale datasets"
  },
  {
    icon: LineChart,
    title: "Statistical Analysis",
    description: "Advanced statistical modeling and predictive analytics using R and Python"
  },
  {
    icon: PieChart,
    title: "Business Intelligence",
    description: "Translating complex data into strategic business insights and recommendations"
  }
];

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate data analyst with expertise in turning raw data into meaningful insights 
            that drive business growth and inform strategic decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item, index) => (
            <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3>{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
