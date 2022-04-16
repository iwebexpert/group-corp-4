type Multiple = string | number | undefined

type ObjectStringsValue = {
  [key: string]: string
}

type ObjectNumbersValue = {
  [key: string]: number
}

type IndexKey = string | number
interface IDictionary<TValue> {
  [id: IndexKey]: TValue
}

// User

type UserType = {
  id: Multiple
  name: string
  email: string
  password: Multiple
  role: string
  token: Multiple
}

declare module '*.jpg' {
  const value: string
  export default value
}

declare module '*.png' {
  const value: string
  export default value
}
