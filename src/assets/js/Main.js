// 레니즈 스크롤

const lenis = new Lenis({
  duration: 2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: "vertical", // vertical, horizontal
  gestureDirection: "vertical", // vertical, horizontal, both
  smooth: true,
  // mouseMultiplier: 1,
  // smoothTouch: false,
  // touchMultiplier: 2,
  // infinite: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

//   가로 스크롤 모음

// JS 이펙트 설명
let sections = gsap.utils.toArray(".section3_item");
gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal",
    markers: true,
    pin: true,
    scrub: true,
    // snap: 1 / (sections.length - 1),
    end: "+=5000",
    // end: () => "+=" + document.querySelector(".horizontal"),
  },
});

// 게임 이펙트
let sections2 = gsap.utils.toArray(".panel2");
gsap.to(sections2, {
  xPercent: -100 * (sections2.length - 1),
  ease: "none",
  // duration: 122.5,
  scrollTrigger: {
    trigger: ".horizontal2",
    markers: true,
    pin: true,
    scrub: 1,
    // snap: 1 / (sections2.length - 1),
    end: "+=11000",
  },
});

// ScrollTrigger.create({
//   // 어디에 닿으면 반응할건지
//   trigger: ".horizontal2",
//   scrub: 1,
//   // 어디다가 적용할건지
//   animation: gsap.fromTo(
//     ".section3_item_bottom",
//     {
//       transform: "translate(-50%,0) rotate(0deg)",
//     },
//     {
//       transform: "translate(-60%,1020%) scale(3.0) rotate(200deg)",
//       // filter: "blur(3px)",
//     }
//   ),
// });

//   상단바

// 상단
ScrollTrigger.create({
  // 어디에 닿으면 반응할건지
  trigger: ".section",
  scrub: 1,
  // 어디다가 적용할건지
  animation: gsap.fromTo(
    "#header",
    {
      color: "#fff",
      background: "linear-gradient(180deg, #5046ac, #5046ac00)",
    },
    {
      color: "#fff",
      background: "linear-gradient(180deg, #5046ac, #5046ac00)",
    }
  ),
});

ScrollTrigger.create({
  // 어디에 닿으면 반응할건지
  trigger: ".editorial_two",
  scrub: 1,
  // 어디다가 적용할건지
  animation: gsap.fromTo(
    "#header a",
    {
      color: "#fff",
    },
    {
      color: "#fff",
    }
  ),
});

ScrollTrigger.create({
  // 어디에 닿으면 반응할건지
  trigger: ".editorial_two",
  scrub: 1,
  // 어디다가 적용할건지
  animation: gsap.fromTo(
    ".porfolio_desc_fixed p",
    {
      color: "#fff",
    },
    {
      color: "#fff",
    }
  ),
});

// 중간
ScrollTrigger.create({
  // 어디에 닿으면 반응할건지
  trigger: ".editorial_two",
  scrub: 1,
  // 어디다가 적용할건지
  animation: gsap.fromTo(
    "#header",
    {
      color: "#000",
      background: "linear-gradient(180deg, #5046ac, #5046ac00)",
    },
    {
      color: "#000",
      background: "linear-gradient(180deg, #ededf4, #ededf400)",
    }
  ),
});

ScrollTrigger.create({
  // 어디에 닿으면 반응할건지
  trigger: ".editorial_two",
  scrub: 1,
  // 어디다가 적용할건지
  animation: gsap.fromTo(
    "#header a",
    {
      color: "#000",
    },
    {
      color: "#000",
    }
  ),
});

ScrollTrigger.create({
  // 어디에 닿으면 반응할건지
  trigger: ".editorial_two",
  scrub: 1,
  // 어디다가 적용할건지
  animation: gsap.fromTo(
    ".porfolio_desc_fixed p",
    {
      color: "#000",
    },
    {
      color: "#000",
    }
  ),
});
// ScrollTrigger.create({
//   // 어디에 닿으면 반응할건지
//   trigger: ".editorial_two",
//   scrub: 1,
//   // 어디다가 적용할건지
//   animation: gsap.fromTo(
//     "#header",
//     {
//       color: "#fff",
//       background: "linear-gradient(#5046ac, #5046ac00)",
//     },
//     {
//       color: "#353541",
//       background: "linear-gradient(#f6f6fb, #f6f6fb00)",
//     }
//   ),
//   animation: gsap.fromTo(
//     "#header a",
//     {
//       color: "#fff",
//     },
//     {
//       color: "#353541",
//     }
//   ),
//   animation: gsap.fromTo(
//     ".porfolio_desc_fixed p",
//     {
//       color: "#fff",
//     },
//     {
//       color: "#353541",
//     }
//   ),
// });
ScrollTrigger.create({
  // 어디에 닿으면 반응할건지
  trigger: ".horizontal3",
  scrub: 1,
  // 어디다가 적용할건지
  animation: gsap.fromTo(
    "#header",
    {
      color: "#000",
      background: "linear-gradient(180deg, #f6f6fb, #f6f6fb00)",
    },
    {
      color: "#fff",
      background: "linear-gradient(180deg, #100f1c6b, #100f1c00)",
    }
  ),
});

ScrollTrigger.create({
  // 어디에 닿으면 반응할건지
  trigger: ".horizontal3",
  scrub: 1,
  // 어디다가 적용할건지
  animation: gsap.fromTo(
    "#header a",
    {
      color: "#000",
    },
    {
      color: "#fff",
    }
  ),
});

ScrollTrigger.create({
  // 어디에 닿으면 반응할건지
  trigger: ".horizontal3",
  scrub: 1,
  // 어디다가 적용할건지
  animation: gsap.fromTo(
    ".porfolio_desc_fixed p",
    {
      color: "#000",
    },
    {
      color: "#fff",
    }
  ),
});

ScrollTrigger.create({
  // 어디에 닿으면 반응할건지
  trigger: ".section15_flex_cont",
  scrub: 1,
  // 어디다가 적용할건지
  animation: gsap.fromTo(
    "#header",
    {
      background: "linear-gradient(180deg, #100f1c6b, #100f1c00)",
      color: "#fff",
    },
    {
      background: "linear-gradient(180deg, #f6f6fb, #f6f6fb00)",
      color: "#000",
    }
  ),
});

ScrollTrigger.create({
  // 어디에 닿으면 반응할건지
  trigger: ".section15_flex_cont",
  scrub: 1,
  // 어디다가 적용할건지
  animation: gsap.fromTo(
    "#header a",
    {
      color: "#ffffff8c",
    },
    {
      color: "#000",
    }
  ),
});
ScrollTrigger.create({
  // 어디에 닿으면 반응할건지
  trigger: ".section15_flex_cont",
  scrub: 1,
  // 어디다가 적용할건지
  animation: gsap.fromTo(
    ".porfolio_desc_fixed p",
    {
      color: "#fff",
    },
    {
      color: "#000",
    }
  ),
});
