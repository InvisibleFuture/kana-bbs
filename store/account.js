export default {
  state: () => ({
    _id: '0',
    gid: 0,
    name: '游客',
    avatar: '',
    online: false,
    email: '',        // signin
    password: '',     // signin
    messages: [],     // 消息盒子
    chats: new Map(), // 关注的频道
  }),
  mutations: {
    init(state, { _id, gid, name, avatar, online }) {
      state._id = _id
      state.gid = gid
      state.name = name
      state.avatar = avatar
      state.online = online
    },
    exit(state) {
      state._id = ''
      state.gid = ''
      state.name = ''
      state.avatar = ''
      state.online = false
    },
  },
  actions: {
    signin({ commit }, account) {
      return this.$axios.post('/api/session', account).then(res => {
        commit('init', res.data)
        return res
      })
    },
    signout({ commit }) {
      return this.$axios.delete('/api/session').then(res => {
        console.log(res.data)
        commit('exit')
      })
    },
    profile({ commit }) {
      return this.$axios.get('/api/account').then(res => {
        console.log(res.data)
        commit('init', res.data)
      })
    }
  }
}
