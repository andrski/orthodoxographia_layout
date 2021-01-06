"use strict"
hidden_pict.style.display = 'none'

const main = document.getElementById("main")

big_photo.addEventListener("click", showHiddenPict)
close_btn.addEventListener("click", unvisiobleHiddenPict)

function showHiddenPict(){
   main.classList.add("dark")
    hidden_pict.style.display = ''
}

function unvisiobleHiddenPict(){
    main.classList.remove('dark')
    hidden_pict.style.display = 'none'
}