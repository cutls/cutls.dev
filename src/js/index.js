import '../css/index.scss'

document.getElementById('copyBitcoin').onclick = function () {
    navigator.clipboard.writeText(`3FS8x9MwQtm6AVzEvGwzVBzCG6x5w7urve`)
}
window.onload = function () {
    document.getElementById('trs').setAttribute('src', 'https://today-song.0px.io/.netlify/functions/song?songs')
    document.getElementById('trs2').setAttribute('src', 'https://today-song.0px.io/.netlify/functions/song?spotify')
}