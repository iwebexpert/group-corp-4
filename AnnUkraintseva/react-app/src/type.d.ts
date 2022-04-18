type ObjectStringsValue ={
    [key: string]: string
}

type ObjectNumberValue ={
    [key: string]: string
}

type IndexKey= string | number
interface IDictionary<TValue>{
    [id: string]: string
}

//User

type UserType={
    id: string
    name: string
    email: string
    password: string
    role: string
    token: string
}

 type PageType={
    id: string
    url: string
    title: string
    content?: string
    userId: string
    userName: string
  }

  //Active

  type ActiveType = {
     id: string
     name: string
      email:string
      role: string
      action: string
      access: boolean
  }

  //Comment

  type CommentType={
      id: string
      pageId: string
      userId: string
      content: string
  }