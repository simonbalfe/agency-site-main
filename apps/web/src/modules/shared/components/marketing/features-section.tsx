const services = [
  {
    number: '01',
    title: 'Comment Triggers',
    description:
      'Someone comments on your post, your DM fires instantly. Keyword-based triggers that catch every lead the moment they engage.',
  },
  {
    number: '02',
    title: 'AI-Powered Replies',
    description:
      'Personalized DM sequences that sound like you, not a bot. Our AI reads context and responds naturally to qualify leads.',
  },
  {
    number: '03',
    title: 'Lead Capture',
    description:
      'Collect emails, phone numbers, and qualifying info through conversational DM flows. Every interaction feeds your pipeline.',
  },
  {
    number: '04',
    title: 'Analytics Dashboard',
    description:
      'Track open rates, reply rates, and conversions in real time. See exactly which triggers and sequences drive revenue.',
  },
]

export function FeaturesSection() {
  return (
    <section id="services" className="border-b">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="border-b py-16">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Features</p>
          <h2 className="mt-4 max-w-md text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Automate every step from comment to customer
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {services.map((service, i) => {
            const isTopRow = i < 2
            const isLeftCol = i % 2 === 0

            return (
              <div
                key={service.number}
                className={`py-10 md:py-12 ${!isTopRow ? '' : 'border-b'} ${isLeftCol ? 'md:border-r md:pr-12' : 'md:pl-12'}`}
              >
                <p className="text-xs text-muted-foreground">{service.number}</p>
                <h3 className="mt-3 text-lg font-medium text-foreground">{service.title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
