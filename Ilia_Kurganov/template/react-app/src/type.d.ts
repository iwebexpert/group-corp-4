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
enum UserRolesType {
  ROLE_USER = "user",
  ROLE_ROOT = "admin",
}

type UserType = {
  id: string
  role: UserRolesType
  name: string
  token: string
  email: string
  password: string
}

declare module "remote/DrillingEquipmentTable" {}