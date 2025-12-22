import type { FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import Container from '../components/Container'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import { usePageMeta } from '../hooks/usePageMeta'

const Contact = () => {
  const { t } = useTranslation()
  usePageMeta(t('meta.contact.title'), t('meta.contact.description'))

  const info = t('contact.info.items', { returnObjects: true }) as Array<{
    label: string
    value: string
  }>
  const offices = t('contact.offices.items', { returnObjects: true }) as string[]

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <div>
      <section className="relative overflow-hidden pb-12 pt-16 hero-wash">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <Container className="relative">
          <SectionHeader
            eyebrow={t('contact.hero.eyebrow')}
            title={t('contact.hero.title')}
            subtitle={t('contact.hero.subtitle')}
          />
        </Container>
      </section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="glass-card rounded-3xl p-8">
            <h3 className="text-lg font-semibold">{t('contact.form.title')}</h3>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="text-sm text-ink/70">
                  {t('contact.form.fields.name')}
                  <input
                    className="mt-2 w-full rounded-2xl border border-ink/10 bg-white px-4 py-2 text-sm"
                    placeholder={t('contact.form.fields.name')}
                    type="text"
                  />
                </label>
                <label className="text-sm text-ink/70">
                  {t('contact.form.fields.email')}
                  <input
                    className="mt-2 w-full rounded-2xl border border-ink/10 bg-white px-4 py-2 text-sm"
                    placeholder={t('contact.form.fields.email')}
                    type="email"
                  />
                </label>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="text-sm text-ink/70">
                  {t('contact.form.fields.company')}
                  <input
                    className="mt-2 w-full rounded-2xl border border-ink/10 bg-white px-4 py-2 text-sm"
                    placeholder={t('contact.form.fields.company')}
                    type="text"
                  />
                </label>
                <label className="text-sm text-ink/70">
                  {t('contact.form.fields.role')}
                  <input
                    className="mt-2 w-full rounded-2xl border border-ink/10 bg-white px-4 py-2 text-sm"
                    placeholder={t('contact.form.fields.role')}
                    type="text"
                  />
                </label>
              </div>
              <label className="text-sm text-ink/70">
                {t('contact.form.fields.needs')}
                <textarea
                  className="mt-2 min-h-[120px] w-full rounded-2xl border border-ink/10 bg-white px-4 py-2 text-sm"
                  placeholder={t('contact.form.fields.needs')}
                />
              </label>
              <p className="text-xs text-ink/50">{t('contact.form.disclaimer')}</p>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-2 text-sm font-semibold text-white"
              >
                {t('contact.form.submit')}
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-ink/10 bg-white p-6">
              <h3 className="text-lg font-semibold">{t('contact.info.title')}</h3>
              <div className="mt-4 space-y-3 text-sm text-ink/70">
                {info.map((item) => (
                  <div key={item.label} className="flex items-start justify-between gap-4">
                    <span className="text-ink/50">{item.label}</span>
                    <span className="text-right text-ink">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-ink/10 bg-white p-6">
              <h3 className="text-lg font-semibold">{t('contact.offices.title')}</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {offices.map((item) => (
                  <span key={item} className="rounded-full border border-ink/10 bg-white px-4 py-2 text-xs font-semibold text-ink/70">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}

export default Contact
