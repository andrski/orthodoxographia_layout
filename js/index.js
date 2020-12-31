"use strict"

hiden_countries.style.display = 'none'

let btn = document.querySelector('.choose_country_btn')

btn.addEventListener("click", visiobleHidenCountries)

albania.addEventListener("click", ()=>{btn.innerHTML= "Албания"; hiden_countries.style.display = 'none'})
germany.addEventListener("click", ()=>{btn.innerHTML= "Германия"; hiden_countries.style.display = 'none'})
grecia.addEventListener("click", ()=>{btn.innerHTML= "Греция"; hiden_countries.style.display = 'none'})
gruzia.addEventListener("click", ()=>{btn.innerHTML= "Грузия"; hiden_countries.style.display = 'none'})
egipt.addEventListener("click", ()=>{btn.innerHTML= "Египет"; hiden_countries.style.display = 'none'})
izrael.addEventListener("click", ()=>{btn.innerHTML= "Израель"; hiden_countries.style.display = 'none'})
italy.addEventListener("click", ()=>{btn.innerHTML= "Италия"; hiden_countries.style.display = 'none'})
rumunia.addEventListener("click", ()=>{btn.innerHTML= "Румыния"; hiden_countries.style.display = 'none'})
serb.addEventListener("click", ()=>{btn.innerHTML= "Сербия"; hiden_countries.style.display = 'none'})
turc.addEventListener("click", ()=>{btn.innerHTML= "Турция"; hiden_countries.style.display = 'none'})
franc.addEventListener("click", ()=>{btn.innerHTML= "Франция"; hiden_countries.style.display = 'none'})

all_countries.addEventListener("click", visiobleHidenCountries)
all_countries.addEventListener("dblclick", ()=>{btn.innerHTML= "Все страны"; hiden_countries.style.display = 'none'})

function visiobleHidenCountries(){
    hiden_countries.style.display = ''
}

changBGright.addEventListener("click", ()=>{header.style.background = "red"})
changBGleft.addEventListener("click", ()=>{
    header.style.background = "url('/images/orthodoxographiaBG.png')"
    header.style.backgroundRepeat = "no-repeat"
    header.style.backgroundSize = "cover"
    })