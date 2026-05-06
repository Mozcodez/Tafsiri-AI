import { useState, useCallback } from 'react'
import { translate } from '../utils/translateAPI'

export function useTranslation() {
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState(null)
  const [usedFallback, setUsedFallback] = useState(false)

  const run = useCallback(async (text, sourceLang, targetLang) => {
    if (!text.trim()) return null

    setLoading(true)
    setError(null)
    setUsedFallback(false)

    try {
      const result = await translate(text, sourceLang, targetLang)
      setUsedFallback(!!result.usedFallback)
      return result
    } catch (err) {
      setError(err.message)
      return null
    } finally {
      setLoading(false)
    }
  }, [])

  return { run, loading, error, usedFallback }
}
