gsap.registerPlugin(ScrollTrigger);


document.addEventListener("DOMContentLoaded", function () {
  //gsap.set("nav", { y: -150 });

  const nav = document.querySelector('nav');
  const schedLink = document.getElementById('schedLink');


  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  schedLink.addEventListener('click', function (e) {
    e.preventDefault();
    const schedElement = document.getElementById('sched');
    const yOffset = -window.innerHeight * 0.15; // 10% of viewport height
    const y = schedElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  });

  gsap.to(".fertilia-logo", {
    duration: 3,
    x: 900,
    ease: "power4.inOut",
    /* delay: 7, */
    delay: 1,
  });

  gsap.to(".fertilia-logo", {
    //x: 100,
    opacity: 0,
    duration: 2,
    delay: 1.5,
    /* delay: 8.5, */
    ease: "power3.out",
    onComplete: () => {
      gsap.set(".pre-loader", {
        display: "none",
      });
    },
  });

  gsap.to(".hero-imgs > img", {
    clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
    duration: 1,
    ease: "power4.inOut",
    stagger: 0.25,
    delay: 2.7,
  });

  gsap.to(".hero", {
    scale: 1.3,
    duration: 3,
    ease: "power3.inOut",
    delay: 2,
    onComplete: () => {
      gsap.to(".hero", {
        duration: 3.5,
        opacity: 0,
        onComplete: () => {
          gsap.set(".hero", {
            display: "none"
          })
        }
      });
    }
  });

  gsap.to(".website-content", {
    delay: 5,
    opacity: 1,
  })

  gsap.to("nav", {
    //y: 0,
    opacity: 1,
    duration: 2,
    ease: "power3.out",
    delay: 9,
    /*     visibility: 'visible', */
  });

  gsap.to(".header", {
    scale: 0.6,
    visibility: 'visible',
    opacity: 1,
    duration: 3,
    ease: "power1.out",
    delay: 6.5,
  });

  gsap.to(".presentation p", {
    scrollTrigger: {
      trigger: ".presentation",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
      //markers: true 
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power1.in",
  })
});
