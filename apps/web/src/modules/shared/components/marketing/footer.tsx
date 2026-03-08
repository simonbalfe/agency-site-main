export function Footer() {
  return (
    <footer className="py-8">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          PulseAI 2025
        </p>
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  )
}
