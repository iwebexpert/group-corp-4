import { Action, MiddlewareAPI, Dispatch } from "redux"

export const customLoger = (store: MiddlewareAPI) => {
  return function nextFunction(next : Dispatch) {
    return function dispatchAction(action: Action) {
      console.log('@@@Start logger@@@')
      console.log('Текущий action', action)
      console.log('Текущий action', store.getState())
      const res = next(action)

      console.log('Текущий action', res)
      console.log('Текущий action', store.getState())
      console.log('@@@End logger@@@')
      return res
    }
  }
}

// export const customLoger2 = (store) => (next) => (action) => {
//   console.log('@@@Start logger@@@')
//   console.log('Текущий action', action)
//   console.log('Текущий action', store.getState())
//   const res = next(action)

//   console.log('Текущий action', res)
//   console.log('Текущий action', store.getState())
//   console.log('@@@End logger@@@')
//   return res
// }
