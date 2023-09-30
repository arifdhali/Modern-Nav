let circle = document.querySelector(".circle");
let frames = document.querySelectorAll(".frame");
const lerp = (x, y, a) => x * (1 - a) + y * a;

window.addEventListener("mousemove", (dets) => {

    // circle.style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
    gsap.to(circle, {
        x: dets.clientX,
        y: dets.clientY,
        ease: Expo,

    })

})
frames.forEach((frame) => {


    frame.addEventListener("mousemove", (dets) => {
        gsap.to(circle, {
            scale: 7,
        })

        gsap.to(frame.children, {
            color: "#fff",
            y: "-70px",
        })

        let dimension = frame.getBoundingClientRect();
        let xstart = dimension.x;
        let xend = dimension.x + dimension.width;

        let zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);

        gsap.to(frame.children, {
            x: lerp(-50, 50, zeroone),
        })



    })
    frame.addEventListener("mouseleave", (dets) => {
        gsap.to(circle, {
            scale: 1,
        })

        gsap.to(frame.children, {            
            y: "0px",
        })
        gsap.to(frame.children, {
            x: 0,
        })


    })

})

