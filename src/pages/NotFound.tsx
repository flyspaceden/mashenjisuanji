import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Container from '../components/Container'

const NotFound = () => {
  const { t } = useTranslation()

  return (
    <div className="py-24">
      <Container className="text-center">
        <h1 className="text-3xl font-semibold md:text-4xl">{t('notFound.title')}</h1>
        <p className="mt-3 text-sm text-ink/70 md:text-base">{t('notFound.subtitle')}</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-ink px-6 py-2 text-sm font-semibold text-white"
        >
          {t('notFound.cta')}
        </Link>
      </Container>
    </div>
  )
}

export default NotFound
