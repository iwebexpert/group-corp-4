export function getParams(key: string, defaultValue: Object | null | string = {}, param: string | null | number = null) {
  const raw = localStorage.getItem(key)
  const items = (function (raw) {
    try {
      return raw !== null ? JSON.parse(raw) : null
    } catch (err) {
      return null
    }
  })(raw)
  if (items === null) {
    return defaultValue
  }
  if (param === null) {
    return items
  }
  return items[param] ?? defaultValue
}

export function setParams(key: string, param: string | number = 'default', value = {}) {
  const items = getParams(key)
  items[param] = value
  localStorage.setItem(key, JSON.stringify(items))
}

export function removeParams(key: string) {

  localStorage.removeItem(key)
}
