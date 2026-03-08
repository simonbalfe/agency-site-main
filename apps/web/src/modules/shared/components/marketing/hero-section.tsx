// import { useUser } from '@shared/hooks/use-user'
// import { Link } from '@tanstack/react-router'
import { Button } from '@ui/components/button'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  // const { user } = useUser()

  return (
    <section className="border-b pt-14">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-0 md:grid-cols-2">
          <div className="flex flex-col justify-center py-24 md:py-32 md:pr-16">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Instagram DM Automation
            </p>

            <h1 className="mt-6 text-4xl font-medium leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
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
              {/* Auth-based buttons disabled for now
              {user ? (
                <Button size="lg" asChild>
                  <Link to="/dashboard">
                    Dashboard
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              ) : (
                <Button size="lg" className="text-xs uppercase tracking-widest" asChild>
                  <Link to="/auth">
                    Start a project
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              )}
              */}
              <a
                href="#work"
                className="text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
              >
                View work
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6 opacity-40">
              <img src="/images/meta-partner.svg" alt="Meta Business Partner" className="h-6 invert dark:invert-0" />
              <img src="/images/tiktok-partner.svg" alt="TikTok Marketing Partner" className="h-6 invert dark:invert-0" />
              <img src="/images/g2-rating.svg" alt="G2 Rating" className="h-6 invert dark:invert-0" />
            </div>
          </div>

          <div className="relative border-t md:border-t-0 md:border-l">
            <div className="relative aspect-[4/5] w-full overflow-hidden md:aspect-auto md:h-full">
              <img
                src="/images/hero-bg.jpg"
                alt="Person using phone with DM automation"
                className="h-full w-full object-cover"
              />
              <div className="absolute right-4 bottom-32 left-4 flex flex-col gap-3 md:right-8 md:left-8">
                <img
                  src="/images/bubble-01.png"
                  alt="Chat bubble"
                  className="ml-auto w-48 md:w-64"
                />
                <img
                  src="/images/bubble-02.png"
                  alt="Chat reply"
                  className="w-48 md:w-64"
                />
                <img
                  src="/images/bubble-03.png"
                  alt="Chat response"
                  className="ml-auto w-48 md:w-64"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
