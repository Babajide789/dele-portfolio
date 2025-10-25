import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
// import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-linear-to-br from-background via-background to-accent/20">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-muted-foreground">Hello, I&apos;m</p>
              <h1 className="text-5xl lg:text-6xl">Bamidele</h1>
              <h2 className="text-3xl lg:text-4xl text-primary/80">Data Analyst</h2>
              <p className="text-muted-foreground max-w-lg">
                Transforming complex data into actionable insights. Specialized in data visualization, 
                statistical analysis, and business intelligence to drive data-driven decision making.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="gap-2">
                View My Work <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Download className="w-4 h-4" /> Download CV
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-linear-to-br from-primary/10 to-accent/30">
              {/* <ImageWithFallback
                src="https://images.unsplash.com/photo-1657727534685-36b09f84e193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkYXRhJTIwYW5hbHlzdHxlbnwxfHx8fDE3NjExNTQxNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Data Analyst Professional"
                className="w-full h-full object-cover"
              /> */}
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-6 shadow-lg">
              <p className="text-sm text-muted-foreground">Years of Experience</p>
              <p className="text-3xl">5+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
