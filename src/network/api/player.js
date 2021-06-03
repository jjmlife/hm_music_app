import ajax from '../index'

const api = {
    player_songUrl :  '/song/url' ,// 获取歌曲url
    player_checkSong :  '/check/music' ,// 查看歌曲是否可用
    player_songLyric :  '/lyric' ,// 获取歌词
    player_heartMode :  '/playmode/intelligence/list' ,// 心动模式播放
    player_likeMusicList :  '/likelist' ,// 喜欢歌曲列表
    player_likeMusic :  '/like' ,// 喜欢歌曲
    player_playlistSubscribe: '/playlist/subscribe',// 收藏/取消收藏歌单
    player_create: '/playlist/create', // 添加歌单
    player_playlistDelete: '/playlist/delete' // 删除歌单
}

export const player_songUrl = function(id) {
    return ajax.doPost(api.player_songUrl,{id: id})
}

export const player_checkSong = function(id) {
    return ajax.doPost(api.player_checkSong,{id: id})
}

export const player_songLyric = function(id) {
    return ajax.doPost(api.player_songLyric,{id: id})
}

export const player_heartMode = function(id) {
    return ajax.doPost(api.player_heartMode,{id: id})
}

export const player_likeMusicList = function(id) {
    return ajax.doPost(api.player_likeMusicList,{id: id})
}

export const player_likeMusic = function(id) {
    return ajax.doPost(api.player_likeMusic,{id: id})
}



