import { useEffect, useState } from "react"

export function useDebounce(value: any, delay: number) {
  const [debouncedValue, set] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      set(value)
    }, delay)
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}
