export const customLoger = (store) => {
  return function nextFunction(next) {
    return function dispatchAction(action) {
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
