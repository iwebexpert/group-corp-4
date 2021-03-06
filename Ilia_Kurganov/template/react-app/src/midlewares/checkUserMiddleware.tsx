import { authService } from '../services/auth/authService'
import { sendLog } from '../actions/actionsLogs';
import { Middleware } from 'redux';

export const checkUser: Middleware  = (store) => (next) => (action) => {
  const res = next(action)

  if (action.type === 'PAGE_ADD' || action.type === 'PAGE_DELETE' || action.type === 'PAGE_EDIT') {
    const bodyPost = {
      action: action.type,
      user: authService.currentUserValue.role,
    }
    store.dispatch(sendLog(bodyPost))
  }
  return res
}
