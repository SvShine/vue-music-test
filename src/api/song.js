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

export function createSong(musicData, index) {
  var audioSrc = index % 2 === 0 ? `http://dl.stream.qqmusic.qq.com/C400004XePmv4CsaEq.m4a?guid=5943444701&vkey=9627ABBF1DD98724F7E5634CC8605745BFEF305902AAB70794F4D4433126AC73860DAC3986462571FED0A50E0A7E5836410E432D1D819CCB&uin=0&fromtag=38` : `http://isure.stream.qqmusic.qq.com/C400002MLS0D3zqTdU.m4a?guid=5943444701&vkey=0F671402AE9965E516AEB05DF336CD23ED4A728486BA7558126548FD13B5DD89DF34E302AE0FE1D1FF975B53A8675B33A0A4291F628ED6E5&uin=0&fromtag=38`
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
