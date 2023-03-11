let box1 = document.querySelector('.box1')
let box2 = document.querySelector('.box2')
let box3 = document.querySelector('.box3')
let box4 = document.querySelector('.box4')

let div1 = document.querySelector('.style1')
let div2 = document.querySelector('.style2')
let div3 = document.querySelector('.style3')
let div4 = document.querySelector('.style4')


box1.addEventListener('mouseover', () =>{
    div1.classList.add('div-active')
    div2.classList.remove('div-active')
    div3.classList.remove('div-active')
    div4.classList.remove('div-active')
})

box2.addEventListener('mouseover', () =>{
    div2.classList.add('div-active')
    div1.classList.remove('div-active')
    div3.classList.remove('div-active')
    div4.classList.remove('div-active')
})

box3.addEventListener('mouseover', () =>{
    div3.classList.add('div-active')
    div2.classList.remove('div-active')
    div1.classList.remove('div-active')
    div4.classList.remove('div-active')
})

box4.addEventListener('mouseover', () =>{
    div4.classList.add('div-active')
    div2.classList.remove('div-active')
    div3.classList.remove('div-active')
    div1.classList.remove('div-active')
})