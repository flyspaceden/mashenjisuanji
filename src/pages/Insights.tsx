import { useTranslation } from 'react-i18next'
import Container from '../components/Container'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import ButtonLink from '../components/ButtonLink'
import { usePageMeta } from '../hooks/usePageMeta'

const Insights = () => {
  const { t } = useTranslation()
  usePageMeta(t('meta.insights.title'), t('meta.insights.description'))

  const news = t('insights.news.items', { returnObjects: true }) as Array<{
    title: string
    date: string
    summary: string
  }>
  const reports = t('insights.reports.items', { returnObjects: true }) as Array<{
    title: string
    summary: string
  }>
  const events = t('insights.events.items', { returnObjects: true }) as Array<{
    title: string
    date: string
    location: string
  }>

  return (
    <div>
      <section className="relative overflow-hidden pb-12 pt-16 hero-wash">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <Container className="relative">
          <SectionHeader
            eyebrow={t('insights.hero.eyebrow')}
            title={t('insights.hero.title')}
            subtitle={t('insights.hero.subtitle')}
          />
        </Container>
      </section>

      <Section>
        <Container>
          <SectionHeader title={t('insights.news.title')} subtitle={t('insights.news.subtitle')} />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {news.map((item) => (
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

      <Section className="bg-white/70">
        <Container>
          <SectionHeader title={t('insights.reports.title')} subtitle={t('insights.reports.subtitle')} />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {reports.map((item) => (
              <div key={item.title} className="rounded-3xl border border-ink/10 bg-white p-6">
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{item.summary}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader title={t('insights.events.title')} subtitle={t('insights.events.subtitle')} />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {events.map((item) => (
              <div key={item.title} className="glass-card rounded-3xl p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
                  {item.date}
                </div>
                <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{item.location}</p>
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
                <h2 className="text-2xl font-semibold md:text-3xl">{t('insights.cta.title')}</h2>
                <p className="text-sm text-ink/70 md:text-base">{t('insights.cta.subtitle')}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <ButtonLink to="/contact">{t('insights.cta.primary')}</ButtonLink>
                <ButtonLink to="/contact" variant="secondary">
                  {t('insights.cta.secondary')}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}

export default Insights
