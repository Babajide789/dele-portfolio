"use client"

import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"

const stats = [
  { num: 15, text: "+ Years of experience" },
  { num: 25, text: "+ Projects Completed" },
  { num: 10, text: "Technologies mastered" },
  // { num: 120, text: "+ Code Commits" },
]

export default function Stats() {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <StatItem key={index} num={item.num} text={item.text} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatItem({ num, text }: { num: number; text: string }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  return (
    <div
      className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
      ref={ref}
    >
      {inView && (
        <CountUp
          end={num}
          duration={3}
          delay={0.3}
          className="text-4xl xl:text-6xl font-extrabold text-foreground"
        />
      )}
      <p
        className={`${
          text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
        } leading-snug text-muted-foreground`}
      >
        {text}
      </p>
    </div>
  )
}
