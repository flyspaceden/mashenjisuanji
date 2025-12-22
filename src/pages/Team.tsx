import { useTranslation } from 'react-i18next'
import Container from '../components/Container'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import ButtonLink from '../components/ButtonLink'
import { images } from '../data/images'
import { usePageMeta } from '../hooks/usePageMeta'

const Team = () => {
  const { t } = useTranslation()
  usePageMeta(t('meta.team.title'), t('meta.team.description'))

  const founderHighlights = t('team.founder.highlights', { returnObjects: true }) as string[]
  const core = t('team.core.items', { returnObjects: true }) as Array<{
    name: string
    role: string
    description: string
  }>
  const committee = t('team.committee.items', { returnObjects: true }) as Array<{
    name: string
    role: string
    description: string
  }>
  const honors = t('team.honors.items', { returnObjects: true }) as string[]

  return (
    <div>
      <section className="relative overflow-hidden pb-12 pt-16 hero-wash">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <Container className="relative">
          <SectionHeader
            eyebrow={t('team.hero.eyebrow')}
            title={t('team.hero.title')}
            subtitle={t('team.hero.subtitle')}
          />
        </Container>
      </section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="glass-card rounded-3xl p-6">
            <img src={images.team} alt="Team" className="h-72 w-full rounded-2xl object-cover" />
          </div>
          <div className="space-y-6">
            <SectionHeader title={t('team.founder.title')} subtitle={t('team.founder.subtitle')} />
            <ul className="space-y-2 text-sm text-ink/70">
              {founderHighlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-ember" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section className="bg-white/70">
        <Container>
          <SectionHeader title={t('team.core.title')} subtitle={t('team.core.subtitle')} />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {core.map((member) => (
              <div key={member.name} className="glass-card rounded-3xl p-6">
                <div className="text-lg font-semibold">{member.name}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-ink/50">{member.role}</div>
                <p className="mt-3 text-sm text-ink/70">{member.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader title={t('team.committee.title')} subtitle={t('team.committee.subtitle')} />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {committee.map((member) => (
              <div key={member.name} className="rounded-3xl border border-ink/10 bg-white p-6">
                <div className="text-lg font-semibold">{member.name}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-ink/50">{member.role}</div>
                <p className="mt-3 text-sm text-ink/70">{member.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white/70">
        <Container>
          <SectionHeader title={t('team.honors.title')} subtitle={t('team.honors.subtitle')} />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {honors.map((item) => (
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
                <h2 className="text-2xl font-semibold md:text-3xl">{t('team.cta.title')}</h2>
                <p className="text-sm text-ink/70 md:text-base">{t('team.cta.subtitle')}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <ButtonLink to="/careers">{t('team.cta.primary')}</ButtonLink>
                <ButtonLink to="/contact" variant="secondary">
                  {t('team.cta.secondary')}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}

export default Team
