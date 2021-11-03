var cnv = document.querySelector('canvas')
var ctx = cnv.getContext('2d')

cnv.width = window.innerWidth;
cnv.height = window.innerHeight;

cnv.addEventListener('pointerdown', () => {
    ctx.fillStyle = '#'+Math.floor(Math.random() * 16777215).toString(16)
    ctx.fillRect(0,0,cnv.width, cnv.height)
})