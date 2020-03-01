import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    paths: [''],
    key: 'vuex'
  })(store)
}
