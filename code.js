document.addEventListener('pointerup', () => {
    document.querySelector('body').style.background = '#' + Math.random().toString(16).substr(-6)
})