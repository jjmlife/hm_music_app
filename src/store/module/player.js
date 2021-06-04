import ModalHelper from "@/utils/cover-scroll"

const state = {
    isPlayerShow: false,
    fullScreen: false,
    audioList: [],
    playList: [], 
    playMode: 1, //  1 - 列表循环 2-单曲循环 3-随机播放
    audioIndex: -1, // 
    playingIconShow: true,
    offetLyric: 0
}

const mutations = {
    TOGGLE_PLAYER_SHOW: (state,isShow) => {
        if(isShow) {
            ModalHelper.afterOpen()
        }else{
            ModalHelper.beforeClose()
        }
        state.isPlayerShow = isShow;
    }
}

const actions = {
    togglePlayerShow({commit},isShow) {
        commit('TOGGLE_PLAYER_SHOW',isShow)
    }
}


export default  {
    namespaced: true,
    state,
    mutations,
    actions
}