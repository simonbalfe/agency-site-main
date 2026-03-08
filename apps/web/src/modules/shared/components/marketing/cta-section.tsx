// import { useUser } from '@shared/hooks/use-user'
// import { Link } from '@tanstack/react-router'
import { Button } from '@ui/components/button'
import { ArrowRight } from 'lucide-react'

export function CtaSection() {
  // const { user } = useUser()

  return (
    <section id="contact" className="border-b">
      <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32">
        <div className="max-w-lg">
          <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Stop leaving leads
            <br />
            in your comments.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Every comment is a potential customer. Start capturing them
            on autopilot today.
          </p>
          <div className="mt-8">
            <Button size="lg" className="text-xs uppercase tracking-widest" asChild>
              <a href="mailto:hello@pulseai.com">
                Get in touch
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
          </div>
        </div>
      </div>
    </section>
  )
}
