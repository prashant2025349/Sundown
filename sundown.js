const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});




// // JavaScript (drag-to-scroll logic)
// const scroller = document.getElementById('work_with');




// let isDown = false;
// let startX;
// let scrollLeft;

// scroller.addEventListener('mousedown', (e) => {
//   isDown = true;
//   scroller.classList.add('active');
//   startX = e.pageX - scroller.offsetLeft;
//   scrollLeft = scroller.scrollLeft;
// });

// scroller.addEventListener('mouseleave', () => {
//   isDown = false;
//   scroller.classList.remove('active');
// });

// scroller.addEventListener('mouseup', () => {
//   isDown = false;
//   scroller.classList.remove('active');
// });

// scroller.addEventListener('mousemove', (e) => {
//   if (!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - scroller.offsetLeft;
//   const walk = (x - startX) * 1.5; // speed control
//   scroller.scrollLeft = scrollLeft - walk;
// });

//  var swiper = new Swiper(".mySwiper", {
//       loop: true,
//       autoplay: {
//         delay: 3000,
//         disableOnInteraction: false,
//       },
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
//     });
let t = gsap.timeline();
let text = document.querySelector(".text");

t.from(".text:nth-child(1)", {
    opacity: 1,
    duration: 1,
    delay: 1,
})
.to(".text:nth-child(1)", {
    opacity: 0,
    display: "none",
    duration: 0.1,
})
.to(".text:nth-child(2)", {
    opacity: 1,
    duration: 0.5,
    delay: 1,
    ease: "power2.inOut"
})
.to(".text:nth-child(2)", {
    opacity: 0,
    duration: 0.5,
    display: "none",
    delay: 1,
})
.to(".text:nth-child(3)", {
    opacity: 1,
    duration: 0.5,
    delay: 1,
    ease: "power2.inOut"
})
.to(".text:nth-child(3)", {
    opacity: 0,
    display: "none",
    delay: 1,
})
.to("#loader", {
    y: "-100%",
    duration: 1,
    delay: 1,
    ease: "power2.inOut",
    onComplete: () => {
        document.body.style.overflow = 'auto';
    }
});

document.body.style.overflow = 'hidden';

