import {getLyric} from 'api/song'
import {ERR_OK} from 'api/config'
import {Base64} from 'js-base64'

export default class Song {
  constructor({
    id,
    mid,
    singer,
    name,
    album,
    duration,
    image,
    url
  }) {
    this.id = id
    this.mid = mid
    this.singer = singer
    this.name = name
    this.album = album
    this.duration = duration
    this.image = image
    this.url = url
  }

  getLyric() {
    if (this.lyric) {
      return Promise.resolve(this.lyric)
    }

    return new Promise((resolve, reject) => {
      getLyric(this.mid).then((res) => {
        if (res.retcode === ERR_OK) {
          this.lyric = Base64.decode(res.lyric)
          resolve(this.lyric)
        } else {
          reject(new Error('no lyric'))
        }
      })
    })
  }
}

export function createSong(musicData, index) {
  var audioSrc = index % 2 === 0 ? `http://dl.stream.qqmusic.qq.com/C400003iDFNR04D7QS.m4a?guid=5943444701&vkey=4497225EF9A1A46CAC7BE1C78E4C4F5084F60586E1C862A8F2E10F76764F995663200FB32701112ABA0C815856A77BEA4BE4F32733FE8CC7&uin=0&fromtag=38` : `http://dl.stream.qqmusic.qq.com/C4000007n7xV0iV1vq.m4a?guid=5943444701&vkey=4540F1D4AB0A8713D2DE0B04C27A6D24F7837C3A7A533550F95A8EC54DCD150BCE802C8A5135BFB1D6E20A30FACE5D4068E0087951562CCE&uin=0&fromtag=38`
  // var audioSrc = Math.random() > 0.5 ? `http://isure.stream.qqmusic.qq.com/C400003w19oj0wrWLR.m4a?guid=5943444701&vkey=6505B31EC445A696ABB830FA01CA35EE8539FC8E0948386536A68DD642E12F809A4BF599A99217A984AD91944570A158C07640EEE0CFD2B2&uin=0&fromtag=38` : `http://isure.stream.qqmusic.qq.com/C400002MLS0D3zqTdU.m4a?guid=5943444701&vkey=64D0CE1D4328113981FF8CD9E9DD60200E05D9E353DFF9887AAE0D494C26F0EB0BADBAC69B99BDCDE5B16B78AF2C7DED741731148147AF81&uin=0&fromtag=38`
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    test: '1234213',
    // http://dl.stream.qqmusic.qq.com/C400003mAan70zUy5O.m4a?guid=5943444701&vkey=D9F75A7043A0F8B4E45C24D9B3D84A9BA3FECA2A14AE336A3750CBEB266909F8191906B61C15F4EAD917C1C8CF2E987EA96583E2FDA09215&uin=0&fromtag=3&r=5877696593039918
    // http://dl.stream.qqmusic.qq.com/C400003mAan70zUy5O.m4a?guid=5943444701&vkey=D7B345D3815BA21F2E71091EA84157FD1E4EB69A292501C190A124CE74583EA7B3B6BF998FFED8602AA5C864F924552BD51C33F3183EF7E4&uin=0&fromtag=3&r=2599052165107665
    urltest: `http://dl.stream.qqmusic.qq.com/C400${musicData.songmid}.m4a?guid=5943444701&vkey=EB361C0A3BE43BDFC3FBDCE80184369F2A2BCE4A28B10AAB337E6A77E8C1D8520477629C2AAF0484E808D3F0C7CF907CB29D8103564D6900&uin=0&fromtag=3&r=1193501512994184`,
    url: audioSrc
    // url: `http://ws.stream.qqmusic.qq.com/${musicData.songid}.m4a?fromtag=46`
    // url: `https://thirdparty.gtimg.com/${musicData.songid}.m4a?fromtag=38`
  })
}

function filterSinger(singer) {
  let ret = []
  if (!singer) {
    return ''
  }
  singer.forEach((s) => {
    ret.push(s.name)
  })
  return ret.join('/')
}
