import { authService } from '../services/auth/authService'

export const checkUser = (store) => (next) => (action) => {
  const res = next(action)

  if (action.type === 'PAGE_ADD' || action.type === 'PAGE_DELETE' || action.type === 'PAGE_EDIT') {
    const bodyPost = {
      action: action.type,
      user: store.getState().page.role,
    }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authentication: `Bearer ${authService.token}`,
      },
      body: JSON.stringify(bodyPost),
    }
    fetch('/api/log', options)
      .then((res) => res.json())
  }
  return res
}
