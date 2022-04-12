export function getItem(key, defaultValue = {}, param = null) {
  const raw = localStorage.getItem(key)
  const items = ((raw) => {
    try {
      return raw !== null ? JSON.parse(raw) : null
    } catch (error) {
      return null
    }
  })(raw)

  if (items === null) return null
  if (param === null) return items

  return items[param] ?? defaultValue
}

export function setItem(key, value = {}) {
  localStorage.setItem(key, JSON.stringify(value))
}

export function removeItem(key) {
  localStorage.removeItem(key)
}
