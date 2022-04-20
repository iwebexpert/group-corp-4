export function getParams(key: string, defaultValue: Object | null | string = {}, param: string | null = null){
  const raw = localStorage.getItem(key)
  const items = (function(raw: string | null){
    try {
      return (raw) !== null ? JSON.parse(raw) : null
    } catch(error){
      return null
    }
  })(raw)

  if(items === null){
    return defaultValue
  }

  if(param === null) {
    return items
  }

  return items[param] ?? defaultValue
}

export function setParam(key: string, param: string = 'default', value = {}){
  const items = getParams(key)
  items[param] = value
  localStorage.setItem(key, JSON.stringify(items))
}

export function removeParam(key: string){
  localStorage.removeItem(key)
}