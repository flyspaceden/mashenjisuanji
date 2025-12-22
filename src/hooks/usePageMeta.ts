import { useEffect } from 'react'

export const usePageMeta = (title: string, description?: string) => {
  useEffect(() => {
    if (title) {
      document.title = title
    }
    if (description) {
      const meta = document.querySelector('meta[name="description"]')
      if (meta) {
        meta.setAttribute('content', description)
      }
    }
  }, [title, description])
}
