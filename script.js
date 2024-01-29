function loader() {
    const tl = gsap.timeline();

    tl
        .from(".navbar", {
            y: "-200vh",
            duration: 1,
            opcity: 0,
        })
        .from(".container h1", {
            y: "-200%",
            rotate: 360,
            opacity: 0,
            duration: 1,
        })
        .from(".container img", {
            y: "200%",
            scale: 0.4,
            opacity: 0,
            duration: 1,
            rotate: 720,
        })
}
loader();

function mover() {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector(".container h1").style.transform = `translate(-50%,-50%) translate(${dets.clientX * 0.02}px,${dets.clientY * 0.02}px)`
        document.querySelector(".container img").style.transform = `translate(-50%,-50%) translate(${1 - dets.clientX * 0.02}px,${1 - dets.clientY * 0.02}px)`
    })
}
mover();

function popup() {
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page2",
            start: "top center",
            toggleActions: 'play pause resume reverse',
        }
    });

    tl2
        .from(".content h1", {
            x: "-80vh",
            opacity: 0,
            scale: 0.5,
            duration: 0.8,
        })
        .from(".content .boxes .a1", {
            y: "50vh",
            opacity: 0,
            scale: 0.7,
            duration: 1.5,
            ease: 'Expo.easeInOut',
        })
        .from(".content .boxes .a2", {
            y: "50vh",
            opacity: 0,
            scale: 0.7,
            duration: 1.5,
            ease: 'Expo.easeInOut',
        }, "-=1")
        .from(".content .boxes .a3", {
            y: "50vh",
            opacity: 0,
            scale: 0.7,
            duration: 1.5,
            ease: 'Expo.easeInOut',
        }, "-=1")
        .from(".content .boxes .a4", {
            y: "50vh",
            opacity: 0,
            scale: 0.7,
            duration: 1.5,
            ease: 'Expo.easeInOut',
        }, "-=1")
        .from(".content .boxes .a5", {
            y: "50vh",
            opacity: 0,
            scale: 0.7,
            duration: 1.5,
            ease: 'Expo.easeInOut',
        }, "-=1")
        .from(".content .boxes .a6", {
            y: "50vh",
            opacity: 0,
            scale: 0.7,
            duration: 1.5,
            ease: 'Expo.easeInOut',
        }, "-=1")
        .from(".content .boxes .a7", {
            y: "50vh",
            opacity: 0,
            scale: 0.7,
            duration: 1.5,
            ease: 'Expo.easeInOut',
        }, "-=1")
        .from(".content .boxes .a8", {
            y: "50vh",
            opacity: 0,
            scale: 0.7,
            duration: 1.5,
            ease: 'Expo.easeInOut',
        }, "-=1")
        .from(".content .boxes .a9", {
            y: "50vh",
            opacity: 0,
            scale: 0.7,
            duration: 1.5,
            ease: 'Expo.easeInOut',
        }, "-=1")
}
popup();