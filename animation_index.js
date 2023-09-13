




const tl = gsap.timeline({ delay: 0.2, ease: "power3" })


console.log(tl)


tl
  .set(".img img", { objectFit: "cover" })
  .fromTo(".img", { height: "0%" }, { duration: 0.6, height: "80%" })
  .fromTo(".img", { width: "60vw" }, { duration: 0.6, width: "90vw" })
  .fromTo(".slider", { xPercent: -100 }, { duration: 0.6, xPercent: 0 }, "<")
  .fromTo(".animation", { opacity: 1 }, { duration: 1, opacity: 0 })
  .set(".animation", { display: "none" })




