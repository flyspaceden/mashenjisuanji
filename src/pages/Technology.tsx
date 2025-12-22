import { useTranslation } from 'react-i18next'
import Container from '../components/Container'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import ButtonLink from '../components/ButtonLink'
import { images } from '../data/images'
import { usePageMeta } from '../hooks/usePageMeta'

const Technology = () => {
  const { t } = useTranslation()
  usePageMeta(t('meta.technology.title'), t('meta.technology.description'))

  const pillars = t('technology.pillars.items', { returnObjects: true }) as Array<{
    title: string
    description: string
  }>
  const algorithms = t('technology.algorithms.items', { returnObjects: true }) as Array<{
    title: string
    description: string
  }>
  const perception = t('technology.perception.items', { returnObjects: true }) as string[]
  const steps = t('technology.architecture.steps', { returnObjects: true }) as string[]
  const security = t('technology.security.items', { returnObjects: true }) as string[]

  return (
    <div>
      <section className="relative overflow-hidden pb-12 pt-16 hero-wash">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <Container className="relative">
          <SectionHeader
            eyebrow={t('technology.hero.eyebrow')}
            title={t('technology.hero.title')}
            subtitle={t('technology.hero.subtitle')}
          />
        </Container>
      </section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow={t('common.labels.realtimeAI')}
            title={t('technology.pillars.title')}
            subtitle={t('technology.pillars.subtitle')}
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {pillars.map((item) => (
              <div key={item.title} className="glass-card rounded-3xl p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-ink/70">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white/70">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <SectionHeader
                eyebrow={t('common.labels.realtimeAI')}
                title={t('technology.algorithms.title')}
                subtitle={t('technology.algorithms.subtitle')}
              />
              <div className="space-y-4">
                {algorithms.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-ink/10 bg-white p-5">
                    <h3 className="text-base font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-ink/70">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card rounded-3xl p-6">
              <img src={images.lab} alt="AI lab" className="h-64 w-full rounded-2xl object-cover" />
              <div className="mt-4 text-sm text-ink/70">
                {t('common.labels.realtimeAI')} · {t('common.labels.dataAssets')}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="glass-card rounded-3xl p-6">
              <img src={images.robot} alt="Edge robotics" className="h-64 w-full rounded-2xl object-cover" />
              <div className="mt-4 text-sm text-ink/70">{t('technology.perception.title')}</div>
            </div>
            <div className="space-y-6">
              <SectionHeader
                eyebrow={t('common.labels.realtimeAI')}
                title={t('technology.perception.title')}
                subtitle={t('technology.perception.subtitle')}
              />
              <ul className="space-y-2 text-sm text-ink/70">
                {perception.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-sky" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white/70">
        <Container>
          <SectionHeader
            eyebrow={t('common.labels.realtimeAI')}
            title={t('technology.architecture.title')}
            subtitle={t('technology.architecture.subtitle')}
          />
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {steps.map((step, index) => (
              <div key={step} className="glass-card flex flex-col items-start gap-3 rounded-3xl p-5">
                <span className="text-xs font-semibold text-ink/50">0{index + 1}</span>
                <span className="text-sm font-semibold text-ink">{step}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow={t('common.labels.realtimeAI')}
            title={t('technology.security.title')}
            subtitle={t('technology.security.subtitle')}
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {security.map((item) => (
              <div key={item} className="rounded-3xl border border-ink/10 bg-white p-6 text-sm text-ink/70">
                {item}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="glass-card rounded-3xl p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold md:text-3xl">{t('technology.cta.title')}</h2>
                <p className="text-sm text-ink/70 md:text-base">{t('technology.cta.subtitle')}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <ButtonLink to="/insights">{t('technology.cta.primary')}</ButtonLink>
                <ButtonLink to="/contact" variant="secondary">
                  {t('technology.cta.secondary')}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}

export default Technology
