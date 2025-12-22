import { useTranslation } from 'react-i18next'
import Container from '../components/Container'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import ButtonLink from '../components/ButtonLink'
import { usePageMeta } from '../hooks/usePageMeta'

const Business = () => {
  const { t } = useTranslation()
  usePageMeta(t('meta.business.title'), t('meta.business.description'))

  const model = t('business.model.items', { returnObjects: true }) as Array<{
    title: string
    description: string
  }>
  const revenue = t('business.revenue.items', { returnObjects: true }) as string[]
  const financing = t('business.financing.items', { returnObjects: true }) as string[]

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
          <SectionHeader title={t('business.model.title')} subtitle={t('business.model.subtitle')} />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {model.map((item) => (
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
          <SectionHeader title={t('business.revenue.title')} subtitle={t('business.revenue.subtitle')} />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {revenue.map((item) => (
              <div key={item} className="rounded-3xl border border-ink/10 bg-white p-6 text-sm text-ink/70">
                {item}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader title={t('business.financing.title')} subtitle={t('business.financing.subtitle')} />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {financing.map((item) => (
              <div key={item} className="glass-card rounded-3xl p-6 text-sm text-ink/70">
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
                <h2 className="text-2xl font-semibold md:text-3xl">{t('business.cta.title')}</h2>
                <p className="text-sm text-ink/70 md:text-base">{t('business.cta.subtitle')}</p>
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
