import { ThemeToggle } from '@shared/components/theme-toggle'
// import { useUser } from '@shared/hooks/use-user'
// import { Link } from '@tanstack/react-router'
// import { Button } from '@ui/components/button'

export function Navbar() {
  // const { user } = useUser()

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background">
      <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-6">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-sm font-medium uppercase tracking-widest text-foreground"
        >
          PulseAI
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#services" className="text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground">
            Services
          </a>
          <a href="#work" className="text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground">
            Work
          </a>
          <a href="#process" className="text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground">
            Process
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          {/* Auth buttons disabled for now
          {user ? (
            <Button asChild size="sm">
              <Link to="/dashboard">Dashboard</Link>
            </Button>
          ) : (
            <Button size="sm" className="text-xs uppercase tracking-widest" asChild>
              <Link to="/auth">Get Started</Link>
            </Button>
          )}
          */}
        </div>
      </div>
    </header>
  )
}
