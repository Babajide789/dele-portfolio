
import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { FaXTwitter, FaWhatsapp, FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
import Stats from "./features/Stats";
import ProfileImage from "./features/ProfileImage";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-linear-to-br from-background via-background to-accent/20">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-muted-foreground">Hello, I&apos;m</p>
              <h1 className="text-5xl lg:text-6xl">
                Peter Olafimihan{" "}
                <span className="text-2xl lg:text-3xl">PMP</span>
              </h1>

              <h2 className="text-3xl lg:text-4xl text-primary/80">Project Manager | Data Analyst</h2>
              <p className="text-muted-foreground max-w-lg">
                Hybrid professional skilled in project management methodologies, execution and technical depth of Data analysis. 

                {/* Transforming complex data into actionable insights. Specialized in data visualization, 
                statistical analysis, and business intelligence to drive data-driven decision making. */}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
                <Link href="#projects" scroll={true}>
                  <Button size="lg" className="gap-2">
                    View My Work <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>

                <Link
                  href="/Oladele-Peter-Olafimihan-Construction-PM.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline" className="gap-2">
                    <Download className="w-4 h-4" /> Download CV
                  </Button>
                </Link>
            </div>

            <div className="flex gap-3 pt-4">
              {/* <Link
                href="https://x.com/deleolafimihan?s=21"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full animate-social-pulse transition-transform duration-300 hover:scale-110 hover:text-primary hover:bg-primary/10 will-change-transform"
                  style={{ animationDelay: "0s" }}
                >
                  <FaXTwitter className="w-5 h-5" />
                </Button>
              </Link> */}

              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/in/oladele-peter-olafimihan-pmp-99501844"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full animate-social-pulse transition-transform duration-300 hover:scale-110 hover:text-blue-600 hover:bg-blue-100/20 will-change-transform"
                  style={{ animationDelay: "0.12s" }}
                >
                  <FaLinkedin className="w-5 h-5" />
                </Button>
              </Link>

              {/* Email */}
              <Link href="mailto:deleolafimihan.peter@gmail.com">
                <Button 
                  variant="ghost" 
                  size="icon"  
                  className="rounded-full animate-social-pulse transition-transform duration-300 hover:scale-110 hover:text-red-500 hover:bg-red-100/20 will-change-transform"
                  style={{ animationDelay: "0.24s" }}
                >
                  <Mail className="w-5 h-5" />
                </Button>
              </Link>

              {/* WhatsApp */}
              <Link
                href="https://wa.me/2349072179683"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  variant="ghost" 
                  size="icon" className="rounded-full animate-social-pulse transition-transform duration-300 hover:scale-110 hover:text-green-500 hover:bg-green-100/20 will-change-transform"
                  style={{ animationDelay: "0.36s" }}
                >
                  <FaWhatsapp className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            {/* IMPORT IMAGE COMPONENT */}
            <ProfileImage/>

            {/* <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-6 shadow-lg">
              <p className="text-sm text-muted-foreground">Years of Experience</p>
              <p className="text-3xl">12+</p>
            </div> */}
          </div>

        </div>

        <Stats/>
      </div>
    </section>
  );
}
