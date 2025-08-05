import { get } from '@/utils/request.js'

export const getImgCode = params => {
  return get('/captchaImage', params)
}
