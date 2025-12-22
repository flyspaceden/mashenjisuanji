import { useTranslation } from 'react-i18next'
import Container from '../components/Container'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import ButtonLink from '../components/ButtonLink'
import { images } from '../data/images'
import { usePageMeta } from '../hooks/usePageMeta'

const Home = () => {
  const { t } = useTranslation()
  usePageMeta(t('meta.home.title'), t('meta.home.description'))

  const stats = t('home.stats.items', { returnObjects: true }) as Array<{
    value: string
    label: string
  }>
  const capabilities = t('home.capabilities.items', { returnObjects: true }) as Array<{
    title: string
    description: string
  }>
  const sectors = t('home.sectors.items', { returnObjects: true }) as Array<{
    title: string
    description: string
  }>
  const highlights = t('home.proof.highlights', { returnObjects: true }) as string[]
  const ecosystem = t('home.ecosystem.items', { returnObjects: true }) as string[]
  const insights = t('home.insights.items', { returnObjects: true }) as Array<{
    title: string
    summary: string
    date: string
  }>

  const tableHeaders = t('home.proof.table.headers', { returnObjects: true }) as string[]
  const tableRows = t('home.proof.table.rows', { returnObjects: true }) as string[][]

  const sectorImages = [images.aquaculture, images.poultry, images.rice, images.sensors]

  return (
    <div className="space-y-0">
      <section className="relative overflow-hidden pb-16 pt-14 hero-wash">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-ink/70 shadow-soft">
                {t('home.hero.eyebrow')}
              </span>
              <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
                {t('home.hero.title')}
              </h1>
              <p className="text-base text-ink/70 md:text-lg">{t('home.hero.subtitle')}</p>
              <div className="flex flex-wrap items-center gap-3">
                <ButtonLink to="/contact">{t('home.hero.primaryCta')}</ButtonLink>
                <ButtonLink to="/insights" variant="secondary">
                  {t('home.hero.secondaryCta')}
                </ButtonLink>
              </div>
              <div className="flex flex-wrap gap-3">
                {(t('home.hero.badges', { returnObjects: true }) as string[]).map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-ink/10 bg-white/90 px-4 py-2 text-xs font-semibold text-ink/70"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-ember/20 blur-2xl" />
              <div className="glass-card overflow-hidden rounded-3xl p-4">
                <img
                  src={images.hero}
                  alt="AI agriculture scene"
                  className="h-64 w-full rounded-2xl object-cover md:h-80"
                />
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl bg-white/80 p-4 text-sm shadow-soft">
                      <div className="text-xl font-semibold text-ink">{stat.value}</div>
                      <div className="text-xs text-ink/60">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow={t('common.labels.realtimeAI')}
            title={t('home.capabilities.title')}
            subtitle={t('home.capabilities.subtitle')}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {capabilities.map((item) => (
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
          <SectionHeader
            eyebrow={t('common.labels.agriculture')}
            title={t('home.sectors.title')}
            subtitle={t('home.sectors.subtitle')}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {sectors.map((item, index) => (
              <div key={item.title} className="overflow-hidden rounded-3xl border border-ink/10 bg-white">
                <img src={sectorImages[index]} alt={item.title} className="h-48 w-full object-cover" />
                <div className="space-y-3 p-6">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-ink/70">{item.description}</p>
                  <ButtonLink to="/solutions" variant="ghost">
                    {t('common.cta.learnMore')}
                  </ButtonLink>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <SectionHeader
                eyebrow={t('common.labels.agriculture')}
                title={t('home.proof.title')}
                subtitle={t('home.proof.subtitle')}
              />
              <div className="overflow-hidden rounded-3xl border border-ink/10 bg-white">
                <div className="grid grid-cols-4 gap-4 border-b border-ink/10 bg-mist px-4 py-3 text-xs font-semibold text-ink/70">
                  {tableHeaders.map((header) => (
                    <div key={header}>{header}</div>
                  ))}
                </div>
                <div className="divide-y divide-ink/10">
                  {tableRows.map((row) => (
                    <div key={row[0]} className="grid grid-cols-4 gap-4 px-4 py-3 text-sm text-ink/80">
                      {row.map((cell) => (
                        <div key={cell}>{cell}</div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {highlights.map((item) => (
                <div key={item} className="glass-card rounded-3xl p-6 text-sm text-ink/70">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white/70">
        <Container>
          <SectionHeader
            eyebrow={t('common.labels.realtimeAI')}
            title={t('home.ecosystem.title')}
            subtitle={t('home.ecosystem.subtitle')}
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {ecosystem.map((item) => (
              <span key={item} className="rounded-full border border-ink/10 bg-white px-4 py-2 text-xs font-semibold text-ink/70">
                {item}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow={t('common.labels.realtimeAI')}
            title={t('home.insights.title')}
            subtitle={t('home.insights.subtitle')}
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {insights.map((item) => (
              <div key={item.title} className="glass-card rounded-3xl p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
                  {item.date}
                </div>
                <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-ink/70">{item.summary}</p>
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
                <h2 className="text-2xl font-semibold md:text-3xl">{t('home.cta.title')}</h2>
                <p className="text-sm text-ink/70 md:text-base">{t('home.cta.subtitle')}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <ButtonLink to="/contact">{t('home.cta.primary')}</ButtonLink>
                <ButtonLink to="/business" variant="secondary">
                  {t('home.cta.secondary')}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}

export default Home
