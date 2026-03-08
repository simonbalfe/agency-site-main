const results = [
  { label: 'Fitness Coach', stat: '2,400 leads/mo' },
  { label: 'DTC Skincare', stat: '340% reply rate' },
  { label: 'Course Creator', stat: '$47K in DM sales' },
  { label: 'SaaS Founder', stat: '18K DMs automated' },
  { label: 'E-commerce Brand', stat: '12x ROI on content' },
  { label: 'Real Estate Agent', stat: '890 bookings/mo' },
]

export function WorkSection() {
  return (
    <section id="work" className="border-b">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="border-b py-16">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Results</p>
          <h2 className="mt-4 text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            What our clients are seeing
          </h2>
        </div>

        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {results.map((result) => (
            <div key={result.label} className="group bg-background">
              <div className="aspect-[4/5] bg-muted transition-colors group-hover:bg-muted/70">
                <div className="flex h-full items-center justify-center">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    {result.label}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between border-t px-4 py-3">
                <p className="text-xs font-medium text-foreground">{result.label}</p>
                <p className="text-xs text-muted-foreground">{result.stat}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
