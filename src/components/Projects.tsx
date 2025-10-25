import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
// import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "Sales Performance Dashboard",
    description: "Interactive Power BI dashboard analyzing sales trends across regions, identifying key growth opportunities and revenue drivers. Reduced reporting time by 60%.",
    image: "https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2MTA2MzAyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Power BI", "SQL", "DAX"],
    impact: "60% reduction in reporting time"
  },
  {
    title: "Customer Segmentation Analysis",
    description: "Machine learning model to segment customers based on behavior patterns, enabling targeted marketing campaigns that increased conversion by 35%.",
    image: "https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMGNoYXJ0c3xlbnwxfHx8fDE3NjExNTQxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Python", "Scikit-learn", "Pandas"],
    impact: "35% increase in conversion"
  },
  {
    title: "Supply Chain Optimization",
    description: "Developed predictive models to optimize inventory levels and reduce costs. Implemented automated reporting system for real-time monitoring.",
    image: "https://images.unsplash.com/photo-1584291527908-033f4d6542c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMHNjcmVlbnxlbnwxfHx8fDE3NjEwNzQ3NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["R", "Tableau", "PostgreSQL"],
    impact: "$2M in cost savings"
  },
  {
    title: "Financial Forecasting Model",
    description: "Time series analysis and forecasting model for revenue prediction. Achieved 94% accuracy in quarterly revenue forecasts.",
    image: "https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2MTA2MzAyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Python", "Prophet", "Azure"],
    impact: "94% forecast accuracy"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world data analysis projects delivering measurable business impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video overflow-hidden bg-muted">
                {/* <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                /> */}
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline">{tag}</Badge>
                  ))}
                </div>
                <div className="bg-primary/5 rounded-lg p-3">
                  <p className="text-sm">
                    <span className="text-primary">Impact:</span> {project.impact}
                  </p>
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <Github className="w-4 h-4" /> View Code
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
