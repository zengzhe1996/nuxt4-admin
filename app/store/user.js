export const useUserStore = defineStore('user', {
  state: () => ({
    token: '123'
  }),
  getters: {},
  actions: {
    async login(params) {
      const res = await post('/api/login', params)
      if (res.code === 200) {
        this.userInfo = res.data
        this.token = res.token
        return res
      }
      return res
    }
  }
})
