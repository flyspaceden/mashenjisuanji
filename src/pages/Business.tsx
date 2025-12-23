import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Container from '../components/Container'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import ButtonLink from '../components/ButtonLink'
import { usePageMeta } from '../hooks/usePageMeta'
import { cn } from '../utils/cn'

type SegmentItem = {
  title: string
  description: string
  points: string[]
}

type PlanItem = {
  title: string
  description: string
  features: string[]
}

type PhaseItem = {
  title: string
  description: string
}

type ContactItem = {
  label: string
  value: string
}

const modelStyles = [
  'border-sky/50 bg-gradient-to-r from-sky/10 via-white to-white',
  'border-emerald-400/40 bg-gradient-to-r from-emerald-100/60 via-white to-white',
  'border-amber-300/60 bg-gradient-to-r from-amber-100/60 via-white to-white',
  'border-indigo-200/60 bg-gradient-to-r from-indigo-100/40 via-white to-white',
]

const flywheelPositions = [
  'left-1/2 -translate-x-1/2 -translate-y-1/2 top-0',
  'right-0 translate-x-1/2 top-1/4 -translate-y-1/2',
  'right-0 translate-x-1/2 bottom-1/4 translate-y-1/2',
  'left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0',
  'left-0 -translate-x-1/2 bottom-1/4 translate-y-1/2',
  'left-0 -translate-x-1/2 top-1/4 -translate-y-1/2',
]


const Business = () => {
  const { t } = useTranslation()
  const [activePlan, setActivePlan] = useState(1)
  usePageMeta(t('meta.business.title'), t('meta.business.description'))

  const model = t('business.model.items', { returnObjects: true }) as Array<{
    title: string
    description: string
  }>
  const segments = t('business.segments.items', { returnObjects: true }) as SegmentItem[]
  const pricing = t('business.pricing', { returnObjects: true }) as {
    title: string
    subtitle: string
    recommended: string
    plans: PlanItem[]
    metrics: string[]
  }
  const activePlanData = pricing.plans[activePlan] ?? pricing.plans[0]
  const dataLoop = t('business.dataLoop', { returnObjects: true }) as {
    title: string
    subtitle: string
    steps: string[]
    benefits: string[]
    note: string
  }
  const delivery = t('business.delivery', { returnObjects: true }) as {
    title: string
    subtitle: string
    phases: PhaseItem[]
    capabilities: string[]
  }
  const flywheel = t('business.flywheel', { returnObjects: true }) as {
    title: string
    subtitle: string
    steps: string[]
  }
  const revenue = t('business.revenue.items', { returnObjects: true }) as string[]
  const credibility = t('business.credibility', { returnObjects: true }) as {
    title: string
    subtitle: string
    items: string[]
  }
  const financing = t('business.financing.items', { returnObjects: true }) as string[]
  const milestones = t('business.milestones', { returnObjects: true }) as {
    title: string
    subtitle: string
    items: string[]
  }
  const contactInfo = t('business.contactInfo.items', { returnObjects: true }) as ContactItem[]

  return (
    <div>
      <section className="relative overflow-hidden pb-12 pt-16 hero-wash">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <Container className="relative">
          <SectionHeader
            eyebrow={t('business.hero.eyebrow')}
            title={t('business.hero.title')}
            subtitle={t('business.hero.subtitle')}
          />
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-6">
              <SectionHeader title={t('business.model.title')} subtitle={t('business.model.subtitle')} />
              <div className="rounded-3xl border border-ink/10 bg-white/80 p-6 text-sm text-ink/70">
                {t('business.hero.subtitle')}
              </div>
              <div className="flex flex-wrap gap-3">
                {pricing.metrics.slice(0, 3).map((metric) => (
                  <span
                    key={metric}
                    className="rounded-full border border-ink/10 bg-white px-4 py-2 text-xs font-semibold text-ink/70"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {model.map((item, index) => (
                <div
                  key={item.title}
                  className={cn(
                    'rounded-3xl border-l-4 px-6 py-5 shadow-sm transition hover:-translate-y-1',
                    modelStyles[index % modelStyles.length],
                  )}
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/40">
                    0{index + 1}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-ink/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white/70">
        <Container>
          <SectionHeader title={t('business.segments.title')} subtitle={t('business.segments.subtitle')} />
          <div className="mt-8 divide-y divide-ink/10 rounded-3xl border border-ink/10 bg-white/80">
            {segments.map((item, index) => (
              <div
                key={item.title}
                className="grid gap-6 px-6 py-6 lg:grid-cols-[120px_1.2fr_1fr]"
              >
                <div className="text-4xl font-semibold text-ink/15">0{index + 1}</div>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-ink/70">{item.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.points.map((point) => (
                    <span
                      key={point}
                      className="rounded-full border border-ink/10 bg-white px-4 py-2 text-xs font-semibold text-ink/70"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="space-y-6">
              <SectionHeader title={pricing.title} subtitle={pricing.subtitle} />
              <div className="rounded-3xl border border-ink/10 bg-white/80 p-6 text-sm text-ink/70">
                {pricing.subtitle}
              </div>
              <div className="space-y-3">
                {pricing.plans.map((plan, index) => {
                  const isActive = activePlan === index
                  return (
                    <button
                      key={plan.title}
                      type="button"
                      onClick={() => setActivePlan(index)}
                      className={cn(
                        'w-full rounded-3xl border px-5 py-4 text-left transition',
                        isActive
                          ? 'border-ink bg-ink text-white shadow-card'
                          : 'border-ink/10 bg-white hover:border-ink/30',
                      )}
                      aria-pressed={isActive}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <div className={cn('text-xs font-semibold uppercase tracking-[0.2em]', isActive ? 'text-white/70' : 'text-ink/50')}>
                            {plan.description}
                          </div>
                          <div className="mt-1 text-base font-semibold">{plan.title}</div>
                        </div>
                        {index === 1 ? (
                          <span
                            className={cn(
                              'rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em]',
                              isActive ? 'bg-white text-ink' : 'bg-ink/5 text-ink/60',
                            )}
                          >
                            {pricing.recommended}
                          </span>
                        ) : null}
                      </div>
                    </button>
                  )
                })}
              </div>
              <div className="flex flex-wrap gap-3">
                {pricing.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="rounded-full border border-ink/10 bg-white px-4 py-2 text-xs font-semibold text-ink/70"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-ink/10 bg-white/80 p-8">
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-sky/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-emerald-100/60 blur-3xl" />
              <div key={activePlan} className="relative space-y-6 motion-safe:animate-fade-up">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
                      {activePlanData.description}
                    </div>
                    <h3 className="mt-2 text-2xl font-semibold">{activePlanData.title}</h3>
                  </div>
                  {activePlan === 1 ? (
                    <span className="rounded-full bg-ink px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                      {pricing.recommended}
                    </span>
                  ) : null}
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  {activePlanData.features.map((feature) => (
                    <div key={feature} className="rounded-2xl border border-ink/10 bg-white/90 p-4 text-sm text-ink/70">
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border border-ink/10 bg-white/80 p-4 text-xs text-ink/60">
                  {pricing.subtitle}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white/70">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <SectionHeader title={dataLoop.title} subtitle={dataLoop.subtitle} />
              <div className="rounded-3xl border border-ink/10 bg-white/80 p-6">
                <div className="relative grid gap-6 md:grid-cols-5">
                  <div className="absolute left-0 right-0 top-5 h-px bg-ink/10" />
                  {dataLoop.steps.map((step, index) => (
                    <div key={step} className="relative">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky/20 text-xs font-semibold text-ink">
                        0{index + 1}
                      </div>
                      <div className="mt-3 text-sm font-semibold text-ink">{step}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                {dataLoop.benefits.map((item) => (
                  <div key={item} className="rounded-2xl border border-ink/10 bg-white p-4 text-xs text-ink/70">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-3xl border border-dashed border-sky/40 bg-white/80 p-6 text-sm text-ink/70">
                {dataLoop.note}
              </div>
              <div className="rounded-3xl bg-gradient-to-br from-emerald-100/60 via-white to-white p-6 text-sm text-ink/70">
                {t('business.revenue.subtitle')}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-6">
              <SectionHeader title={delivery.title} subtitle={delivery.subtitle} />
              <div className="relative space-y-6 pl-6 before:absolute before:left-2 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-ink/10 before:content-['']">
                {delivery.phases.map((phase, index) => (
                  <div
                    key={phase.title}
                    className={cn(
                      'relative rounded-3xl border border-ink/10 bg-white p-6 shadow-sm',
                      index % 2 === 1 ? 'lg:ml-8' : 'lg:mr-8',
                    )}
                  >
                    <span className="absolute -left-6 top-6 h-3 w-3 rounded-full bg-sky/40" />
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
                      Phase 0{index + 1}
                    </div>
                    <h3 className="mt-2 text-base font-semibold">{phase.title}</h3>
                    <p className="mt-2 text-sm text-ink/70">{phase.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-ink/10 bg-white/80 p-8">
              <div className="absolute inset-0 bg-grid opacity-20" />
              <div className="pointer-events-none absolute -right-20 -top-24 h-48 w-48 rounded-full bg-sky/20 blur-3xl" />
              <div className="pointer-events-none absolute -left-20 bottom-0 h-52 w-52 rounded-full bg-emerald-100/70 blur-3xl" />
              <div className="relative">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
                  {delivery.subtitle}
                </div>
                <h3 className="mt-2 text-xl font-semibold">{delivery.title}</h3>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {delivery.capabilities.map((item, index) => (
                    <div
                      key={item}
                      className={cn(
                        'rounded-2xl border border-ink/10 bg-white/90 px-4 py-3 text-xs font-semibold text-ink/70',
                        index % 3 === 0 && 'sm:col-span-2',
                      )}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white/70">
        <Container>
          <SectionHeader title={flywheel.title} subtitle={flywheel.subtitle} />
          <div className="mt-10">
            <div className="relative mx-auto hidden aspect-square w-full max-w-[520px] lg:block">
              <div className="absolute inset-10 rounded-full border border-dashed border-ink/15 bg-white/70" />
              <div className="absolute inset-24 rounded-full border border-ink/10" />
              {flywheel.steps.map((step, index) => (
                <div
                  key={step}
                  className={cn(
                    'absolute flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 shadow-sm',
                    flywheelPositions[index % flywheelPositions.length],
                  )}
                >
                  <span className="text-xs font-semibold text-ink/40">0{index + 1}</span>
                  <span className="text-xs font-semibold text-ink">{step}</span>
                </div>
              ))}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-full border border-ink/10 bg-white px-6 py-4 text-sm font-semibold text-ink/70 shadow-soft">
                  {flywheel.title}
                </div>
              </div>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:hidden">
              {flywheel.steps.map((step, index) => (
                <div key={step} className="flex items-center gap-3 rounded-2xl border border-ink/10 bg-white px-4 py-3">
                  <span className="text-xs font-semibold text-ink/40">0{index + 1}</span>
                  <span className="text-sm font-semibold text-ink">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader title={t('business.revenue.title')} subtitle={t('business.revenue.subtitle')} />
          <div className="mt-8 space-y-4">
            {revenue.map((item, index) => (
              <div
                key={item}
                className={cn(
                  'flex items-start gap-4 rounded-2xl border border-ink/10 px-6 py-4',
                  index % 2 === 0
                    ? 'bg-gradient-to-r from-sky/10 via-white to-white'
                    : 'bg-gradient-to-r from-emerald-100/50 via-white to-white',
                )}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-ink/5 text-sm font-semibold text-ink/60">
                  0{index + 1}
                </div>
                <div className="text-sm text-ink/70">{item}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader title={credibility.title} subtitle={credibility.subtitle} />
          <div className="relative mt-10 overflow-hidden rounded-[36px] border border-ink/10 bg-gradient-to-br from-sky/10 via-white to-emerald-50/70 p-8 md:p-10">
            <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-sky/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-24 bottom-0 h-48 w-48 rounded-full bg-amber-200/30 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/40">
                  Proof 01
                </div>
                <div className="text-2xl font-semibold leading-snug text-ink md:text-3xl">
                  {credibility.items[0]}
                </div>
                <div className="rounded-2xl border border-ink/10 bg-white/80 p-4 text-sm text-ink/70">
                  {credibility.subtitle}
                </div>
              </div>
              <div className="grid gap-4">
                {credibility.items.slice(1).map((item, index) => (
                  <div
                    key={item}
                    className={cn(
                      'rounded-3xl border border-ink/10 bg-white/90 px-5 py-4 text-sm font-semibold text-ink/70',
                      index === 0 && 'rounded-full bg-white px-6 py-4 text-base text-ink',
                      index === 1 && 'border-l-4 border-emerald-300 bg-emerald-50/50',
                      index === 2 && 'border-l-4 border-sky/30 bg-sky/10',
                      index === 3 && 'rounded-[28px] bg-amber-100/60',
                    )}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white/70">
        <Container>
          <div className="rounded-3xl border border-ink/10 bg-gradient-to-br from-sky/10 via-white to-white p-8">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <SectionHeader title={t('business.financing.title')} subtitle={t('business.financing.subtitle')} />
                <div className="mt-6 space-y-4">
                  {financing.map((item, index) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-ink/70">
                      <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" />
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/40">0{index + 1}</div>
                        <div className="mt-1 text-sm text-ink/70">{item}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <SectionHeader title={milestones.title} subtitle={milestones.subtitle} />
                <div className="relative mt-6 space-y-4 pl-6 before:absolute before:left-2 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-ink/10 before:content-['']">
                  {milestones.items.map((item) => (
                    <div key={item} className="relative">
                      <span className="absolute -left-6 top-1 h-3 w-3 rounded-full bg-emerald-300" />
                      <div className="rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink/70">
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="glass-card rounded-3xl p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold md:text-3xl">{t('business.cta.title')}</h2>
                <p className="text-sm text-ink/70 md:text-base">{t('business.cta.subtitle')}</p>
                <div className="mt-4 space-y-2">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
                    {t('business.contactInfo.title')}
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm text-ink/70">
                    {contactInfo.map((item) => (
                      <span
                        key={item.label}
                        className="rounded-full border border-ink/10 bg-white px-4 py-2 text-xs font-semibold text-ink/70"
                      >
                        <span className="mr-2 text-ink/50">{item.label}</span>
                        <span className="text-ink">{item.value}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <ButtonLink to="/contact">{t('business.cta.primary')}</ButtonLink>
                <ButtonLink to="/insights" variant="secondary">
                  {t('business.cta.secondary')}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}

export default Business
