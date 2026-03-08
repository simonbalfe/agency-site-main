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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((result, i) => {
            const isLastRow = i >= results.length - 3
            const col = i % 3

            return (
              <div
                key={result.label}
                className={`py-10 md:py-12 ${!isLastRow ? 'border-b' : ''} ${col < 2 ? 'lg:border-r' : ''} ${col === 0 ? 'lg:pr-12' : col === 1 ? 'lg:px-12' : 'lg:pl-12'}`}
              >
                <p className="text-2xl font-medium text-foreground">{result.stat}</p>
                <p className="mt-2 text-sm text-muted-foreground">{result.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
