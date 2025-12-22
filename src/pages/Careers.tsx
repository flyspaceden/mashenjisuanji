import { useTranslation } from 'react-i18next'
import Container from '../components/Container'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import ButtonLink from '../components/ButtonLink'
import { images } from '../data/images'
import { usePageMeta } from '../hooks/usePageMeta'

const Careers = () => {
  const { t } = useTranslation()
  usePageMeta(t('meta.careers.title'), t('meta.careers.description'))

  const values = t('careers.values.items', { returnObjects: true }) as Array<{
    title: string
    description: string
  }>
  const roles = t('careers.roles.items', { returnObjects: true }) as Array<{
    title: string
    location: string
  }>
  const benefits = t('careers.benefits.items', { returnObjects: true }) as string[]

  return (
    <div>
      <section className="relative overflow-hidden pb-12 pt-16 hero-wash">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <Container className="relative">
          <SectionHeader
            eyebrow={t('careers.hero.eyebrow')}
            title={t('careers.hero.title')}
            subtitle={t('careers.hero.subtitle')}
          />
        </Container>
      </section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <SectionHeader title={t('careers.culture.title')} subtitle={t('careers.culture.subtitle')} />
            <div className="grid gap-4 md:grid-cols-3">
              {values.map((item) => (
                <div key={item.title} className="glass-card rounded-3xl p-6">
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-ink/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card rounded-3xl p-6">
            <img src={images.team} alt="Team culture" className="h-64 w-full rounded-2xl object-cover" />
          </div>
        </Container>
      </Section>

      <Section className="bg-white/70">
        <Container>
          <SectionHeader title={t('careers.roles.title')} subtitle={t('careers.roles.subtitle')} />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {roles.map((role) => (
              <div key={role.title} className="rounded-3xl border border-ink/10 bg-white p-6">
                <div className="text-base font-semibold">{role.title}</div>
                <div className="mt-2 text-sm text-ink/60">{role.location}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader title={t('careers.benefits.title')} />
          <div className="mt-6 flex flex-wrap gap-3">
            {benefits.map((item) => (
              <span key={item} className="rounded-full border border-ink/10 bg-white px-4 py-2 text-xs font-semibold text-ink/70">
                {item}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="glass-card rounded-3xl p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold md:text-3xl">{t('careers.cta.title')}</h2>
                <p className="text-sm text-ink/70 md:text-base">{t('careers.cta.subtitle')}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <ButtonLink to="/contact">{t('careers.cta.primary')}</ButtonLink>
                <ButtonLink to="/contact" variant="secondary">
                  {t('careers.cta.secondary')}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}

export default Careers
