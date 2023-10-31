var crsr = document.querySelector("#cursor")
var crsrBlur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
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
        merkers : true,
        start : "top -10px",
        end : "top -11px",
        scrub : 2}

})
gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger : {
        trigger : "#main",
        scroller : "body",
        merkers : true,
        start : "top -25%",
        end : "top -70%",
        scrub : 3}
})
