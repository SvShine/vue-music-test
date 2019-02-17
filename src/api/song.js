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
}

export function createSong(musicData) {
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
    url: `http://dl.stream.qqmusic.qq.com/C400003mAan70zUy5O.m4a?guid=5943444701&vkey=F9F83E977E85463CFD8026A442060619DC2EF4B5A9C14DC450BCD97D06730584697C1087F7163E70CF06C31642DE6CCFA1C143573145F0C3&uin=0&fromtag=3&r=3614026974743503`
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