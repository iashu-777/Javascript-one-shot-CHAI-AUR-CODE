let changingColorInterval
document.getElementById('start').addEventListener('click',function(){
    changingColorInterval=setInterval(setrandomcolor,100)
})
const randomcolorGen=function(){
    const color='#'+Math.floor(Math.random()*16777215).toString(16)
    //this formula is very good , it produces #000000 t0 #ffffff values which is hex color codes
    console.log(color)
    return color
}
const setrandomcolor=function(){
    document.body.style.backgroundColor=randomcolorGen()
}
function stoprandomColor(){
    clearInterval(changingColorInterval)
}

document.getElementById('stop').addEventListener('click',function(){
    stoprandomColor()
})
