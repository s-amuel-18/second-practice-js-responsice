var btnMenu = document.querySelector(`.hamburguesa`)
var containerList = document.querySelector(`.list-container`)
var lists = document.querySelector(`.lists`)
var menu = document.querySelector(`.menu`)
var x = document.querySelector(`.x`)
var activador = true

btnMenu.addEventListener(`click`,()=>{
    btnMenu.style.display = `none`
    x.style.display = `block`
    // if(activador){
            containerList.style.right = `0`
            // activador = false
    // }else{
    //     containerList.style.right = `-100%`
    //     activador = true
    // }
})


x.addEventListener(`click`,()=>{
    btnMenu.style.display = `block`
    x.style.display = `none`

    containerList.style.right = `-100%`

})

var enlaces = document.querySelectorAll(`.lists li a`)

enlaces.forEach((element)=>{
    element.addEventListener(`click`,(event)=>{
        enlaces.forEach((link)=>{
            link.classList.remove(`activo`)
            console.log(link)
        })
        event.target.classList.add(`activo`)
    })
})

let prevScrollPos = window.pageYOffset
var up = document.querySelector(`.up`)

window.onscroll = ()=>{
    let currenScrollPos = window.pageYOffset
    // console.log(currenScrollPos)
    if(prevScrollPos > currenScrollPos){
        menu.style.top = `0`
        menu.style.transition = `all .4s`
    }else{
        menu.style.top = `-60px`
        menu.style.transition = `all .5s`
    }
    
    prevScrollPos = currenScrollPos;
    console.log(prevScrollPos + ` y ` + currenScrollPos)

    var arriba = window.pageYOffset
    if(arriba <= 600){
        up.style.bottom = "-100%"
        up.style.transition = "all .5s"
    }else{
        
        up.style.bottom = "0"
        up.style.transition = "all .5 s"

    }
}

var centrado = document.querySelector(`.centrado`)

window.onload = function(){
    centrado.style.display = `none`
    document.body.classList.remove(`hidden`)
}

var botonLeerMas = document.querySelector(`#botonLeerMas`)
var testimMore = document.querySelectorAll(`.writeMore`)

botonLeerMas.addEventListener(`click`,()=>{
        if(botonLeerMas.textContent == `leer menos`){
            botonLeerMas.textContent = `leer mas`
        }else{
            botonLeerMas.textContent = `leer menos`
        }
        testimMore.forEach((link)=>{
            link.classList.toggle(`writeMore`)
        })
    
})






