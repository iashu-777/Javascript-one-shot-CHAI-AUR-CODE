let changingColorInterval
document.getElementById('start').addEventListener('click',function(){
    if(!changingColorInterval){ //good practise , kyunki agar kuch null hai tabhi add karenge , warna thoda problem hogi future me , as it is better code in production
        changingColorInterval=setInterval(setrandomcolor,100)
    }
})

//it generates random color
const randomcolorGen=function(){
    const color='#'+Math.floor(Math.random()*16777215).toString(16)
    //this formula is very good , it produces #000000 t0 #ffffff values which is hex color codes
    console.log(color)
    return color
}
//***************************************************
//sir,s method for random color generation 

// const randomColor=function(){
//     const letters='0123456789ABCDEF';
//     let color='#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

//***************************************************
//***************************************************

const setrandomcolor=function(){
    document.body.style.backgroundColor=randomcolorGen()
}
function stoprandomColor(){
    clearInterval(changingColorInterval)
    changingColorInterval=null //for better optimization and clean code, bcz if koi variable use me nai a raha to usko null kar do , taaki dereference ho jaye
}

document.getElementById('stop').addEventListener('click',function(){
    stoprandomColor()
})
