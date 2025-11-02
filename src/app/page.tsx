import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";



export default function Home () {
  return (
    <>
      
      <div className="size-full">
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="bg-muted/50 border-t border-border py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 Olafimihan Oladele. All rights reserved.</p>
          <p className="mt-2">Transforming data into actionable insights</p>
        </div>
      </footer>
    </div>
    </>
  )
}