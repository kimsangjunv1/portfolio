// 섹션 1 : 오프닝 애니메이션
// 글씨

// 먼지&캐릭터
gsap.to(".dust_01", {
  scrollTrigger: ".dust_01",
  transform: "translate(-50%,0%)",
  duration: 1.5,
});
gsap.to(".dust_02", {
  scrollTrigger: ".dust_02",
  transform: "translate(-50%,0%) rotate(0deg)",
  duration: 1.6,
});
gsap.to(".dust_03", {
  scrollTrigger: ".dust_03",
  transform: "translate(70%,0%) rotate(0deg)",
  duration: 1.7,
});
gsap.to(".dust_04", {
  scrollTrigger: ".dust_04",
  transform: "translate(-50%, 0)",
  duration: 1.2,
});
gsap.to(".dust_05", {
  scrollTrigger: ".dust_05",
  transform: "translate(-50%, 0)",
  duration: 1.2,
});
gsap.to(".section1_desc h2", {
  scrollTrigger: ".section1_desc h2",
  //   transform: "translate(-50%, -50%) skewY(0deg)",
  //   skewY: 0,
  height: "27.2vw",
  duration: 1.0,
});
