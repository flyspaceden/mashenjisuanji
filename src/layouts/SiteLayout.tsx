import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const SiteLayout = () => {
  const { i18n } = useTranslation()
  const location = useLocation()

  useEffect(() => {
    document.documentElement.lang = i18n.language.startsWith('en') ? 'en' : 'zh'
  }, [i18n.language])

  const pageKey =
    location.pathname === '/' ? 'home' : location.pathname.replace('/', '').split('/')[0] || 'home'

  return (
    <div className="page-root relative min-h-screen bg-mist text-ink" data-page={pageKey}>
      <div className="pointer-events-none absolute inset-0 -z-10 page-glow motion-safe:animate-float" />
      <NavBar />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default SiteLayout
