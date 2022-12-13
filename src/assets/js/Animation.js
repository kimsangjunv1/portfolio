// 섹션 1 : 오프닝 애니메이션
// 글씨

// 먼지&캐릭터
gsap.to(".dust_01", {
  scrollTrigger: ".dust_01",
  transform: "translate(-50%,0%)",
  duration: 1.1,
});
gsap.to(".dust_02", {
  scrollTrigger: ".dust_02",
  transform: "translate(-50%,0%) rotate(0deg)",
  duration: 1.3,
});
gsap.to(".dust_03", {
  scrollTrigger: ".dust_03",
  transform: "translate(70%,0%) rotate(0deg)",
  duration: 1.5,
});
gsap.to(".dust_04", {
  scrollTrigger: ".dust_01",
  transform: "translate(-50%, 0)",
  // scale: 1,
  duration: 0.6,
});
gsap.to(".dust_05", {
  scrollTrigger: ".dust_01",
  transform: "translate(-50%, 0)",
  // scale: 1,
  duration: 0.6,
});
gsap.to(".dust_07", {
  scrollTrigger: ".dust_01",
  transform: "translate(70%, 0) rotate(0deg)",
  // scale: 1,
  duration: 1.6,
});
gsap.to(".dust_08", {
  scrollTrigger: ".dust_01",
  transform: "translate(-60%, 0) rotate(0deg)",
  // scale: 1,
  duration: 1.6,
});
gsap.to(".dust_09", {
  scrollTrigger: ".dust_01",
  transform: "translate(70%, 0) rotate(0deg)",
  // scale: 1,
  duration: 1.6,
});
gsap.to(".dust_10", {
  scrollTrigger: ".dust_01",
  transform: "translate(-60%, 0) rotate(0deg)",
  // scale: 1,
  duration: 1.6,
});
gsap.to(".dust_11", {
  scrollTrigger: ".dust_01",
  transform: "translate(-60%, 0) rotate(0deg)",
  // scale: 1,
  duration: 1.6,
});
// if (window.matchMedia("(max-width: 860px)").matches) {
//   gsap.to(".section1_desc h2", {
//     height: "71vw",
//   });
// }
