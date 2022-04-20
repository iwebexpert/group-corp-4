type ObjectStringsValue = {
  [key: string]: string;
};

type ObjectNumbersValue = {
  [key: string]: number;
};

type IndexKey = string | number;
interface IDictionary<TValue> {
  [id: IndexKey]: TValue;
}

// User
enum UserRolesType {
  ROLE_USER = "ROLE_USER",
  ROLE_ROOT = "ROLE_ROOT",
}

type UserType = {
  sub: string;
  roles: Array<UserRolesType>;
  exp: number;
  username: string;
  token: string;
};
