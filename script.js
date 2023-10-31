var crsr = document.querySelector("#cursor")
var crsrBlur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+20+"px"
    crsr.style.top = dets.y+"px"
    crsrBlur.style.left = dets.x-250+"px"
    crsrBlur.style.top = dets.y-250+"px"
    
})

gsap.to("#nav",{
    backgroundColor : "#000",
    duration : 0.5,
    height : "60px",
    scrollTrigger : {
        trigger : "#nav",
        scroller : "body",
        start : "top -10px",
        end : "top -11px",
        scrub : 2}

})
gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger : {
        trigger : "#main",
        scroller : "body",
        start : "top -25%",
        end : "top -70%",
        scrub : 3}
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 2
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #42bcb3"
        crsr.style.backgroundColor = "#42bcb3"
    })

})
