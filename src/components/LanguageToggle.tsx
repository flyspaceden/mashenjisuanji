import { useTranslation } from 'react-i18next'
import { setLanguage } from '../i18n'
import { cn } from '../utils/cn'

const LanguageToggle = () => {
  const { i18n } = useTranslation()
  const current = i18n.language.startsWith('en') ? 'en' : 'zh'

  return (
    <div className="flex items-center rounded-full border border-ink/10 bg-white/80 p-1 text-xs">
      {['zh', 'en'].map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLanguage(lang as 'zh' | 'en')}
          className={cn(
            'rounded-full px-3 py-1 font-semibold transition',
            current === lang ? 'bg-ink text-white' : 'text-ink/70 hover:text-ink',
          )}
        >
          {lang === 'zh' ? '中文' : 'EN'}
        </button>
      ))}
    </div>
  )
}

export default LanguageToggle
