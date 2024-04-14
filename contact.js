
//side navbar
var sidenav = document.getElementById("side-navbar")
var menuicon = document.getElementById("side-navbar-activate")
var closenav = document.getElementById("side-navbar-close")

menuicon.addEventListener("click",function(){
  sidenav.style.marginLeft =0
})


closenav.addEventListener("click",function(){
  sidenav.style.marginLeft="-60%"
})