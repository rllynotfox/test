var mousePressed = false
var cnv = document.querySelector('canvas')
var ctx = cnv.getContext('2d')
var arr = []

cnv.width = window.innerWidth
cnv.height = window.innerHeight

window.onresize = () => {
    cnv.width = window.innerWidth
    cnv.height = window.innerHeight
    ctx.lineWidth = 20
}



//mousePressed
document.addEventListener('mouseup', x => {
    mousePressed = false
    arr.push('stop')
})
document.addEventListener('mousedown', x => {
    if (x.button === 0){
        mousePressed = true
        ctx.beginPath()
    }
})

//draw
ctx.lineWidth = 20
document.addEventListener('mousemove', x => {
    if (mousePressed) {
        ctx.lineTo(x.clientX, x.clientY)
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(x.clientX, x.clientY, 10, 0, 6.282)
        ctx.fill()

        ctx.beginPath()
        ctx.moveTo(x.clientX, x.clientY)
        arr.push([x.clientX, x.clientY])
    }
   
    
})

var timer

document.addEventListener('keydown', key => {
    //save
    if(key.keyCode === 83) {
        localStorage.setItem('arr', JSON.stringify(arr))
    }
    //play
    if(key.keyCode === 82){
        ctx.beginPath()
        ctx.clearRect(0, 0, cnv.width, cnv.height);
        h = JSON.parse(localStorage.getItem('arr'))
        arr = JSON.parse(localStorage.getItem('arr'))
        
        timer = setInterval(() => {
            if(!h.length){
                clearInterval(timer)
                ctx.beginPath()
                return
            }
            var e = h.shift()
            if (!(e === 'stop')) {
                var x = {
                    clientX: e[0],
                    clientY: e[1]
                }
                                                                
                ctx.lineTo(x.clientX, x.clientY)
                ctx.stroke()
                                                                
                ctx.beginPath()
                ctx.arc(x.clientX, x.clientY, 10, 0, 6.282)
                ctx.fill()
                                                                
                ctx.beginPath()
                ctx.moveTo(x.clientX, x.clientY)
            } else {
                ctx.beginPath()
            }
            
            
        },10)
    }
    //clear
    if(key.keyCode === 67) {
        ctx.clearRect(0, 0, cnv.width, cnv.height);
        arr = []
    }
})