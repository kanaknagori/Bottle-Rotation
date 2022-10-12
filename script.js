var t1= gsap.timeline();
t1
.to("#card1",{
    backgroundColor : "rgb(0, 153, 255)",
    ease:"Expo.ease",
    duration: 2.5,
    width:"80vw",
    opacity:1
})
.to("#card2",{
    backgroundColor : " #E64848",
    ease:"Expo.ease",
    duration: 2.5,
    width:"80vw",
    opacity:1
})
.to("#card3",{
    backgroundColor : "#00FFC6",
    ease:"Expo.ease",
    duration: 2.5,
    width:"80vw",
    opacity:1
})
var t2= gsap.timeline();
t2
.to("#card1 img",{
    transform: "rotateY(180deg)",
    ease:"Expo.ease",
    duration: 2.5})
.to("#card2 img",{
    transform: "rotateY(180deg)",
    ease:"Expo.ease",
    duration: 2.5
})
.to("#card3 img",{
    transform: "rotateY(180deg)",
    ease:"Expo.ease",
    duration: 2.5
})
var t3= gsap.timeline();
t3.from("#card1 h1",{
    duration: 3,
     x:700,
     opacity:0,
    ease: Expo.easeInOut,
})
.from("#card2 h1",{
    duration: 3,
     x:700,
     opacity:0,
    ease: Expo.easeInOut,
})
.from("#card3 h1",{
    duration: 3,
     x:700,
     opacity:0,
    ease: Expo.easeInOut,
})
// document.querySelectorAll("h1").forEach(function(elem){
//     gsap.from(elem,{
//         duration: 4,
//         left:"100%",
//        opacity:0,
//         ease: Expo.easeInOut,
//         stagger:1
//     })
// })