import { useTranslation } from 'react-i18next'
import Container from './Container'

const Footer = () => {
  const { t } = useTranslation()
  const companyLinks = t('footer.company', { returnObjects: true }) as string[]
  const solutionLinks = t('footer.solutionLinks', { returnObjects: true }) as string[]
  const resources = t('footer.resources', { returnObjects: true }) as string[]
  const contact = t('footer.contact', { returnObjects: true }) as string[]

  return (
    <footer className="border-t border-ink/10 bg-white">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="MCS logo" className="h-10 w-10" />
            <div>
              <div className="text-sm font-semibold text-ink">{t('brand.name')}</div>
              <div className="text-xs text-ink/60">{t('brand.english')}</div>
            </div>
          </div>
          <p className="text-sm text-ink/70">{t('footer.description')}</p>
        </div>

        <div className="space-y-3 text-sm">
          <div className="font-semibold text-ink">{t('footer.links.company')}</div>
          <div className="space-y-2 text-ink/70">
            {companyLinks.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <div className="font-semibold text-ink">{t('footer.links.solutions')}</div>
          <div className="space-y-2 text-ink/70">
            {solutionLinks.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <div className="font-semibold text-ink">{t('footer.links.resources')}</div>
          <div className="space-y-2 text-ink/70">
            {resources.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </div>
      </Container>

      <div className="border-t border-ink/10">
        <Container className="flex flex-col items-start justify-between gap-4 py-6 text-xs text-ink/60 md:flex-row md:items-center">
          <div>{t('footer.copyright')}</div>
          <div className="flex flex-col gap-2 md:flex-row md:gap-4">
            {contact.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
