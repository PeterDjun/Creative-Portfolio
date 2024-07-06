const coords = { x: 0, y : 0};
const circles = document.querySelectorAll(".circle");

const colors = [
    "#ffb56b",
    "#fdaf69",
    "#f89d63",
    "#f59761",
    "#ef865e",
    "#ec805d",
    "#e36e5c",
    "#df685c",
    "#d5585c",
    "#d1525c",
    "#c5415d",
    "#c03b5d",
    "#b22c5e",
    "#ac265e",
    "#9c155f",
    "#950f5f",
    "#830060",
    "#7c0060",
    "#680060",
    "#60005f",
    "#48005f",
    "#3d005e"
];

circles.forEach(function (circle, index) {
   circle.x = 0;
   circle.y = 0; 
   circle.style.backgroundColor = colors[index % colors.length]
});

let circle = document.documentElement;

circle.addEventListener("mousemove", e => {
  circle.style.setProperty('--mouse-x', e.clientX + "px");
  circle.style.setProperty('--mouse-y', window.scrollY + e.clientY + "px");
});

window.addEventListener("mousemove", function(e){
    coords.x = e.clientX;
    coords.y = e.clientY;
});

function animateCircles() {

    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(animateCircles);
}

animateCircles();

const awal = document.querySelector(".awal");
const slider = document.querySelector(".slider");
const headline = document.querySelector(".headline");

const tl = new TimelineMax();

tl.fromTo(awal, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut})
.fromTo(awal, 1.2, {width: "100%"}, {width: "80%", ease: Power2.easeInOut})
.fromTo(slider, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.2")

// new fullpage("#fullpage", {
//     autoScrolling: true,
//     navigation: true,
//     onLeave: (origin, destination, direction) => {
//         const section = destination.item;
//         const judul = section.querySelector(".judul");
//         const tl = new TimelineMax({delay:0.5});
//         tl.fromTo(judul, 0.5, {y: "50", opacity: 0}, {y: 0, opacity: 1});

//         if (destination.index === 1) {
//             const gambar1 = document.querySelector(".gambar1");
//             const aboutkata = document.querySelector (".about-kata");

//             tl.fromTo(gambar1, 0.7, {x: "100%"}, {x: "-35%"})
//             .fromTo(aboutkata, 0.5, {y: "50", opacity: 0}, {y: 0, opacity: 1})
//             .fromTo(gambar1[0], 1, {opacity: 1}, {opacity: 1})
//             .fromTo(gambar1[1], 1, {opacity: 0}, {opacity: 1})
//             .fromTo(gambar1[2], 1, {opacity: 0}, {opacity: 1});
//         }
//     }
// })