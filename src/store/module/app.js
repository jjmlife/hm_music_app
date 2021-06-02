const state = {
    loginPanelShow: false,
    logined: false
}

import ModalHelper from "@/utils/cover-scroll"


const mutations = {
    TOGGLE_LOGINPANEL: state => {
        state.loginPanelShow = !state.loginPanelShow
    },
    SHOW_LOGINPANEL: state => {
        state.loginPanelShow = true
        ModalHelper.afterOpen()
    },
    HIDE_LOGINPANEL: state => {
        state.loginPanelShow = false
        ModalHelper.beforeClose()
    }
}

const actions = {
    toggleLoginPanel({commit}) {
        commit('TOGGLE_LOGINPANEL')
    },
    hiddenLoginPanel({commit}) {
        commit('HIDE_LOGINPANEL')
    },
    showLoginPanel({commit}) {
        commit('SHOW_LOGINPANEL')
    }
}


export default  {
    namespaced: true,
    state,
    mutations,
    actions
}