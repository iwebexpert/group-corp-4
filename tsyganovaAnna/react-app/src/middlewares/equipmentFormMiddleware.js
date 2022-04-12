import { getAllPage } from '../actions/pageActions'

export const pageFormMiddleware = (store) => (next) => (action) => {
  const res = next(action)

  if (action.type === 'EQUIPMENT_FORM_APPROVE' || action.type === 'EQUIPMENT_FORM_REJECT') {
    store.dispatch(getAllPage())
  }

  return res
}
