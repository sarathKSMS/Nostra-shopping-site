
// offer bar

var offerbar = document.getElementById("offer-bar")
var closeofferbar = document.getElementById("offer-close")

closeofferbar.addEventListener("click",function(){
  offerbar.style.display ="none"
})



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