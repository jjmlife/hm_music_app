import ajax from '../index'

const api = {
    reco_bannerSwiper: '/banner?type:1',// 请求发现页面轮播图
    reco_recSongList: '/top/playlist', // 推荐歌单，歌单广场
    reco_highquality :  '/top/playlist/highquality' ,// 精品歌单
    reco_catlist :  '/playlist/catlist' ,// 获取歌单分类 !!!
    reco_hot :  '/playlist/hot' ,// 获取热门歌单分类 !!!
    reco_topList :  '/toplist/detail' ,// 获取所有榜单内容摘要
    reco_idxList :  '/top/list' ,// 获取排行榜
    reco_albumDetail :  '/playlist/detail' ,// 获取歌单详情
    reco_recSongs :  '/recommend/songs' ,// 每日推荐歌曲
    reco_dateRecSongList :  '/recommend/resource' ,// 每日推荐歌单，发现页展示的那六个
    reco_newDish :  '/top/album' ,// 发现页新碟
    reco_getDishInfo :  '/album' ,// 获取专辑内容
    reco_newSongs :  '/top/song' ,// 发现页新歌
    reco_personalFm :  '/personal_fm' ,// 发现页私人FM
}


export const reco_bannerSwiper = function() {
    return ajax.doGet(api.reco_bannerSwiper)
}

export const reco_recSongList = function() {
    return ajax.doGet(api.reco_recSongList)
}

export const reco_highquality = function() {
    return ajax.doGet(api.reco_highquality)
}

export const reco_catlist = function() {
    return ajax.doGet(api.reco_catlist)
}

export const reco_hot = function() {
    return ajax.doGet(api.reco_hot)
}

export const reco_topList = function() {
    return ajax.doGet(api.reco_topList)
}

export const reco_idxList = function() {
    return ajax.doGet(api.reco_idxList)
}

export const reco_albumDetail = function(params) {
    return  new Promise((resolve,reject) => {
        ajax.doGet(api.reco_albumDetail,params).then(res => {
              let playlist = res.playlist;
             let list = playlist.tracks.map((val) => {
                let ar = val.ar[0].name;
                let obj = {
                  name: val.name,
                  author:ar +' - ' + val.al.name,
                  id: val.id,
                };
                return obj;
              });
              let ef_obj = {
                list: list,
                coverImgUrl: playlist.coverImgUrl,
                name: playlist.name,
                description: playlist.description
              }
              resolve(ef_obj)
        }, err => {
            reject(err)
        })
    }) 
}

