import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Container from './Container'
import LanguageToggle from './LanguageToggle'
import ButtonLink from './ButtonLink'
import { navItems } from '../data/navigation'
import { cn } from '../utils/cn'
import logoUrl from '/logo.png'

const NavBar = () => {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-white/80 backdrop-blur-lg">
      <Container className="flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoUrl} alt="MCS logo" className="h-10 w-10" />
          <div className="leading-tight">
            <div className="text-sm font-semibold text-ink">{t('brand.name')}</div>
            <div className="text-xs text-ink/60">{t('brand.english')}</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  'text-sm font-medium text-ink/70 transition hover:text-ink',
                  isActive && 'text-ink',
                )
              }
            >
              {t(item.key)}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
          <ButtonLink to="/contact">{t('common.cta.contact')}</ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-ink/10 bg-white/80 p-2 text-ink lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span className="relative block h-4 w-5">
            <span
              className={cn(
                'absolute left-0 top-0 h-0.5 w-5 bg-ink transition',
                open && 'translate-y-2 rotate-45',
              )}
            />
            <span
              className={cn(
                'absolute left-0 top-1.5 h-0.5 w-5 bg-ink transition',
                open && 'opacity-0',
              )}
            />
            <span
              className={cn(
                'absolute left-0 top-3 h-0.5 w-5 bg-ink transition',
                open && '-translate-y-2 -rotate-45',
              )}
            />
          </span>
        </button>
      </Container>

      <div
        className={cn(
          'lg:hidden',
          open ? 'block border-t border-ink/10 bg-white/95' : 'hidden',
        )}
      >
        <Container className="flex flex-col gap-6 py-6">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    'text-base font-medium text-ink/70 transition hover:text-ink',
                    isActive && 'text-ink',
                  )
                }
              >
                {t(item.key)}
              </NavLink>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <LanguageToggle />
            <ButtonLink to="/contact">{t('common.cta.contact')}</ButtonLink>
          </div>
        </Container>
      </div>
    </header>
  )
}

export default NavBar
