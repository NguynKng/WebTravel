const menuBarbtn = document.querySelector(".header-top i")
menuBarbtn.addEventListener("click",function(){
    document.querySelector(".header-top ul").classList.toggle("active")
})