import { Button } from '@ui/components/button'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="border-b pt-14">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="py-24 md:py-32">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Instagram DM Automation
          </p>

          <h1 className="mt-6 max-w-2xl text-4xl font-medium leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Turn comments
            <br />
            into leads.
          </h1>

          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Automate your Instagram DMs to capture leads, nurture prospects,
            and close sales while you sleep.
          </p>

          <div className="mt-10 flex items-center gap-6">
            <Button size="lg" className="text-xs uppercase tracking-widest" asChild>
              <a href="#contact">
                Start a project
                <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
            <a
              href="#work"
              className="text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              View work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
