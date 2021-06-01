
const state = {
    loginPanelShow: false,
    logined: false
}

const mutations = {
    TOGGLE_LOGINPANEL: state => {
        state.loginPanelShow = !state.loginPanelShow
    }
}

const actions = {
    toggleLoginPanel({commit}) {
        commit('TOGGLE_LOGINPANEL')
    }
}


export default  {
    namespaced: true,
    state,
    mutations,
    actions
}