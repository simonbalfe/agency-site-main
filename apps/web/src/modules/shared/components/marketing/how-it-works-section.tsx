const steps = [
  {
    number: '01',
    title: 'Connect',
    description: 'Link your Instagram account in 30 seconds. We use the official API so your account stays safe.',
  },
  {
    number: '02',
    title: 'Set triggers',
    description: 'Pick the keywords, posts, or reels that activate your DM flows. Our AI writes the sequences for you.',
  },
  {
    number: '03',
    title: 'Collect leads',
    description: 'Every comment becomes a conversation. Every conversation captures a lead. Your pipeline fills on autopilot.',
  },
]

export function HowItWorksSection() {
  return (
    <section id="process" className="border-b">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="border-b py-16">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">How it works</p>
          <h2 className="mt-4 text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Live in 3 minutes. Not 3 months.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`py-10 md:py-16 ${i < 2 ? 'md:border-r' : ''} ${i === 0 ? 'md:pr-12' : i === 1 ? 'md:px-12' : 'md:pl-12'}`}
            >
              <p className="text-xs text-muted-foreground">{step.number}</p>
              <h3 className="mt-4 text-lg font-medium text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
