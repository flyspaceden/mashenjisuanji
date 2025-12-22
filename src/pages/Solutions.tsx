import { useTranslation } from 'react-i18next'
import Container from '../components/Container'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import ButtonLink from '../components/ButtonLink'
import { images } from '../data/images'
import { usePageMeta } from '../hooks/usePageMeta'
import { cn } from '../utils/cn'

type Metric = { value: string; label: string }

type SolutionBlockProps = {
  title: string
  subtitle: string
  points: string[]
  metrics?: Metric[]
  image: string
  reverse?: boolean
}

const SolutionBlock = ({ title, subtitle, points, metrics, image, reverse }: SolutionBlockProps) => (
  <div className={cn('grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center', reverse && 'lg:grid-cols-[1.1fr_0.9fr]')}>
    <div className={cn(reverse && 'lg:order-2')}>
      <img src={image} alt={title} className="h-72 w-full rounded-3xl object-cover shadow-soft" />
    </div>
    <div className={cn('space-y-6', reverse && 'lg:order-1')}>
      <div>
        <h3 className="text-2xl font-semibold md:text-3xl">{title}</h3>
        <p className="mt-3 text-sm text-ink/70 md:text-base">{subtitle}</p>
      </div>
      <ul className="space-y-2 text-sm text-ink/70">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-leaf" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      {metrics ? (
        <div className="grid gap-3 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-ink/10 bg-white p-4">
              <div className="text-lg font-semibold text-ink">{metric.value}</div>
              <div className="text-xs text-ink/60">{metric.label}</div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  </div>
)

const Solutions = () => {
  const { t } = useTranslation()
  usePageMeta(t('meta.solutions.title'), t('meta.solutions.description'))

  const aquaculture = t('solutions.aquaculture', { returnObjects: true }) as {
    title: string
    subtitle: string
    points: string[]
    metrics: Metric[]
  }
  const poultry = t('solutions.poultry', { returnObjects: true }) as {
    title: string
    subtitle: string
    points: string[]
    metrics: Metric[]
  }
  const rice = t('solutions.rice', { returnObjects: true }) as {
    title: string
    subtitle: string
    points: string[]
    metrics: Metric[]
  }
  const dataAssets = t('solutions.dataAssets', { returnObjects: true }) as {
    title: string
    subtitle: string
    points: string[]
    steps: string[]
  }
  const culture = t('solutions.culture', { returnObjects: true }) as {
    title: string
    subtitle: string
    points: string[]
    metrics: Metric[]
  }
  const delivery = t('solutions.delivery', { returnObjects: true }) as {
    title: string
    subtitle: string
    items: string[]
  }

  return (
    <div>
      <section className="relative overflow-hidden pb-12 pt-16 hero-wash">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <Container className="relative">
          <SectionHeader
            eyebrow={t('solutions.hero.eyebrow')}
            title={t('solutions.hero.title')}
            subtitle={t('solutions.hero.subtitle')}
          />
        </Container>
      </section>

      <Section>
        <Container className="space-y-16">
          <SolutionBlock
            title={aquaculture.title}
            subtitle={aquaculture.subtitle}
            points={aquaculture.points}
            metrics={aquaculture.metrics}
            image={images.aquaculture}
          />
          <SolutionBlock
            title={poultry.title}
            subtitle={poultry.subtitle}
            points={poultry.points}
            metrics={poultry.metrics}
            image={images.poultry}
            reverse
          />
          <SolutionBlock
            title={rice.title}
            subtitle={rice.subtitle}
            points={rice.points}
            metrics={rice.metrics}
            image={images.rice}
          />
        </Container>
      </Section>

      <Section className="bg-white/70">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold md:text-3xl">{dataAssets.title}</h3>
              <p className="text-sm text-ink/70 md:text-base">{dataAssets.subtitle}</p>
              <ul className="space-y-2 text-sm text-ink/70">
                {dataAssets.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-sky" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                {dataAssets.steps.map((step) => (
                  <span key={step} className="rounded-full border border-ink/10 bg-white px-4 py-2 text-xs font-semibold text-ink/70">
                    {step}
                  </span>
                ))}
              </div>
            </div>
            <div className="glass-card rounded-3xl p-6">
              <img src={images.lab} alt="Data assetization" className="h-60 w-full rounded-2xl object-cover" />
              <div className="mt-4 text-sm text-ink/70">
                {t('common.labels.dataAssets')} · {t('common.labels.realtimeAI')}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SolutionBlock
            title={culture.title}
            subtitle={culture.subtitle}
            points={culture.points}
            metrics={culture.metrics}
            image={images.tourism}
            reverse
          />
        </Container>
      </Section>

      <Section className="bg-white/70">
        <Container>
          <SectionHeader title={delivery.title} subtitle={delivery.subtitle} />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {delivery.items.map((item) => (
              <div key={item} className="glass-card rounded-3xl p-6 text-sm text-ink/70">
                {item}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="glass-card rounded-3xl p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold md:text-3xl">{t('solutions.cta.title')}</h2>
                <p className="text-sm text-ink/70 md:text-base">{t('solutions.cta.subtitle')}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <ButtonLink to="/contact">{t('solutions.cta.primary')}</ButtonLink>
                <ButtonLink to="/insights" variant="secondary">
                  {t('solutions.cta.secondary')}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}

export default Solutions
