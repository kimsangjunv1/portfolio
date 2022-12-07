// 오프닝 애니메이션
gsap.to(".dust_01", {
  scrollTrigger: ".dust_01",
  transform: "translate(-50%,0%)",
  duration: 0.2,
});
gsap.to(".dust_02", {
  scrollTrigger: ".dust_02",
  transform: "translate(-50%,0%) rotate(0deg)",
  duration: 0.9,
});
gsap.to(".dust_03", {
  scrollTrigger: ".dust_03",
  transform: "translate(70%,0%) rotate(0deg)",
  duration: 0.5,
});
