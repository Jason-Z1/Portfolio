import { useState, useEffect } from 'react'

export function useTypewriter(words: string[], speed = 90, pause = 2200) {
  const [displayed, setDisplayed] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]

    if (!deleting && charIndex === current.length) {
      const timer = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(timer)
    }

    if (deleting && charIndex === 0) {
      setDeleting(false)
      setWordIndex((i) => (i + 1) % words.length)
      return
    }

    const timer = setTimeout(
      () => {
        setDisplayed(current.slice(0, charIndex + (deleting ? -1 : 1)))
        setCharIndex((i) => i + (deleting ? -1 : 1))
      },
      deleting ? speed / 2 : speed,
    )

    return () => clearTimeout(timer)
  }, [charIndex, deleting, wordIndex, words, speed, pause])

  return displayed
}
