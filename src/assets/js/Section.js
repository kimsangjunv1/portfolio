// 메인 먼지
ScrollTrigger.create({
  // 어디에 닿으면 반응할건지
  trigger: ".section2_cont",
  scrub: 1,
  // 어디다가 적용할건지
  animation: gsap.fromTo(
    ".dust_01",
    {
      transform: "translate(-50%,0) rotate(0deg)",
    },
    {
      transform: "translate(-60%,1020%) scale(3.0) rotate(200deg)",
      // filter: "blur(3px)",
    }
  ),
});
ScrollTrigger.create({
  // 어디에 닿으면 반응할건지
  trigger: ".section2_cont",
  scrub: 1,
  // 어디다가 적용할건지
  animation: gsap.fromTo(
    ".dust_02",
    {
      transform: "translate(-60%,0) rotate(0deg)",
    },
    {
      transform: "translate(-500%,-120%) scale(4.0) rotate(200deg)",
      filter: "blur(6px)",
    }
  ),
});
ScrollTrigger.create({
  // 어디에 닿으면 반응할건지
  trigger: ".section2_cont",
  scrub: 1,
  // 어디다가 적용할건지
  animation: gsap.fromTo(
    ".dust_03",
    {
      transform: "translate(70%,0) rotate(0deg)",
    },
    {
      transform: "translate(300%,-200%) scale(1.5) rotate(200deg)",
      filter: "blur(5px)",
    }
  ),
});
ScrollTrigger.create({
  // 어디에 닿으면 반응할건지
  trigger: ".section2_cont",
  scrub: 1,
  // 어디다가 적용할건지
  animation: gsap.fromTo(
    ".dust_07",
    {
      transform: "translate(70%,0) rotate(0deg)",
    },
    {
      transform: "translate(300%,-50%) scale(1.5) rotate(200deg)",
      filter: "blur(3px)",
    }
  ),
});
ScrollTrigger.create({
  // 어디에 닿으면 반응할건지
  trigger: ".section2_cont",
  scrub: 1,
  // 어디다가 적용할건지
  animation: gsap.fromTo(
    ".dust_08",
    {
      transform: "translate(-60%,0) rotate(0deg)",
    },
    {
      transform: "translate(-500%,-120%) scale(2.0) rotate(200deg)",
      filter: "blur(3px)",
    }
  ),
});
ScrollTrigger.create({
  // 어디에 닿으면 반응할건지
  trigger: ".section2_cont",
  scrub: 1,
  // 어디다가 적용할건지
  animation: gsap.fromTo(
    ".dust_09",
    {
      transform: "translate(70%,0) rotate(0deg)",
    },
    {
      transform: "translate(300%,-50%) scale(1.5) rotate(200deg)",
      filter: "blur(3px)",
    }
  ),
});
ScrollTrigger.create({
  // 어디에 닿으면 반응할건지
  trigger: ".section2_cont",
  scrub: 1,
  // 어디다가 적용할건지
  animation: gsap.fromTo(
    ".dust_10",
    {
      transform: "translate(-60%,0) rotate(0deg)",
    },
    {
      transform: "translate(-500%,-120%) scale(2.0) rotate(200deg)",
      filter: "blur(3px)",
    }
  ),
});
ScrollTrigger.create({
  // 어디에 닿으면 반응할건지
  trigger: ".section2_cont",
  scrub: 1,
  // 어디다가 적용할건지
  animation: gsap.fromTo(
    ".dust_11",
    {
      transform: "translate(-60%,0) rotate(0deg)",
    },
    {
      transform: "translate(-500%,-120%) scale(2.0) rotate(200deg)",
      filter: "blur(3px)",
    }
  ),
});
ScrollTrigger.create({
  // 어디에 닿으면 반응할건지
  trigger: ".section2_cont",
  scrub: 1,
  // 어디다가 적용할건지
  animation: gsap.fromTo(
    ".section1_desc h2",
    {
      height: "27.2vw",
    },
    {
      height: "0vw",
      // filter: "blur(3px)",
    }
  ),
});

//   섹션 2
ScrollTrigger.create({
  // 어디에 닿으면 반응할건지
  trigger: ".section2_cont",
  scrub: 1,
  // 어디다가 적용할건지
  animation: gsap.fromTo(
    ".section .lama",
    {
      right: "-300px",
    },
    {
      right: "0px",
    }
  ),
});

ScrollTrigger.create({
  trigger: ".section2_cont",
  scrub: 1,
  animation: gsap.fromTo(
    ".n1",
    {
      scale: (1.4, 1.4),
      opacity: 0,
      transformOrigin: "1300px 18px",
      transform: "translate(0,50px)",
      filter: "blur(15px)",
    },
    {
      scale: 1,
      opacity: 1,
      transformOrigin: "50% 0%",
      transform: "translate3d(0,-30px,0)",
      filter: "blur(0px)",
    }
  ),
});
ScrollTrigger.create({
  trigger: ".section2_cont",
  scrub: 1,
  animation: gsap.fromTo(
    ".n2",
    {
      scale: (1.3, 1.3),
      opacity: 0,
      transformOrigin: "900px 18px",
      transform: "translate(0,50px)",
      filter: "blur(7px)",
    },
    {
      scale: 1,
      opacity: 1,
      transformOrigin: "50% 0%",
      transform: "translate3d(0,-25px,0)",
      filter: "blur(0px)",
    }
  ),
});
ScrollTrigger.create({
  trigger: ".section2_cont",
  scrub: 1,
  animation: gsap.fromTo(
    ".n3",
    {
      scale: (1.3, 1.3),
      opacity: 0,
      transformOrigin: "500px 18px",
      transform: "translate(0,50px)",
      filter: "blur(2px)",
    },
    {
      scale: 1,
      opacity: 1,
      transformOrigin: "50% 0%",
      transform: "translate3d(0,-25px,0)",
      filter: "blur(0px)",
    }
  ),
});
ScrollTrigger.create({
  trigger: ".section2_cont",
  scrub: 1,
  animation: gsap.fromTo(
    ".n4",
    {
      scale: (1.3, 1.3),
      // opacity: 0,
      transformOrigin: "500px 18px",
      transform: "translate(0,50px)",
      // filter: "blur(4px)",
    },
    {
      scale: 1,
      // opacity: 1,
      transformOrigin: "50% 0%",
      transform: "translate3d(0,-25px,0)",
      // filter: "blur(0px)",
    }
  ),
});
ScrollTrigger.create({
  trigger: ".section2_cont",
  scrub: 1,
  animation: gsap.fromTo(
    ".n5",
    {
      scale: (1.3, 1.3),
      // opacity: 0,
      transformOrigin: "500px 18px",
      transform: "translate(0,50px)",
      // filter: "blur(4px)",
    },
    {
      scale: 1,
      // opacity: 1,
      transformOrigin: "50% 0%",
      transform: "translate3d(0,-25px,0)",
      // filter: "blur(0px)",
    }
  ),
});
ScrollTrigger.create({
  trigger: ".section2_cont",
  scrub: 1,
  animation: gsap.fromTo(
    ".n6",
    {
      scale: (1.3, 1.3),
      // opacity: 0,
      transformOrigin: "500px 18px",
      transform: "translate(0,50px)",
      // filter: "blur(4px)",
    },
    {
      scale: 1,
      // opacity: 1,
      transformOrigin: "50% 0%",
      transform: "translate3d(0,-25px,0)",
      // filter: "blur(0px)",
    }
  ),
});
ScrollTrigger.create({
  trigger: ".section2_cont",
  scrub: 1,
  animation: gsap.fromTo(
    ".n7",
    {
      scale: (1.3, 1.3),
      opacity: 0,
      transformOrigin: "500px 18px",
      transform: "translate(0,50px)",
      filter: "blur(4px)",
    },
    {
      scale: 1,
      opacity: 1,
      transformOrigin: "50% 0%",
      transform: "translate3d(0,-25px,0)",
      filter: "blur(0px)",
    }
  ),
});

// 섹션 3_bottom
ScrollTrigger.create({
  scrub: 1,
  animation: gsap.from(".section3_item_bottom", {
    transform: "translatex(0%)",
  }),
  animation: gsap.to(".section3_item_bottom", {
    transform: "translatex(-50%)",
  }),
});
// 섹션 3_bottom
ScrollTrigger.create({
  scrub: 1,
  animation: gsap.from(".section3_item_bottom2", {
    transform: "translatex(0%) scalex(-1)",
  }),
  animation: gsap.to(".section3_item_bottom2", {
    transform: "translatex(-30%) scalex(-1)",
  }),
});

// 섹션 3_가운데 글씨
ScrollTrigger.create({
  scrub: 1,
  animation: gsap.from(".section3_fixed", {
    //   transform: "translatex(0%) scalex(-1)",
    opacity: 1,
  }),
  animation: gsap.to(".section3_fixed", {
    //   transform: "translatex(-30%) scalex(-1)",
    opacity: 0.3,
  }),
});

ScrollTrigger.create({
  trigger: ".section3_fixed",
  scrub: 1,
  animation: gsap.fromTo(
    ".section3_fixed",
    {
      scale: (1.3, 1.3),
      opacity: 0,
      transformOrigin: "900px 18px",
      transform: "translate(-50%, -50%)",
    },
    {
      scale: 1,
      opacity: 1,
      transformOrigin: "50% 0%",
      transform: "translate(-50%, -50%) translate3d(0,-25px,0)",
    }
  ),
});
// ScrollTrigger.create({
//   trigger: ".section3_fixed",
//   scrub: 1,
//   animation: gsap.fromTo(
//     ".i001",
//     {
//       x: "50%",
//       y: "0%",
//       backgroundSize: 0,
//       // scale: 1,
//     },
//     {
//       x: "-100%",
//       y: "0%",
//       ease: Linear.easeNone,
//       // scale: 1.5,
//       // objectFit: none,
//     }
//   ),
// });
// ScrollTrigger.create({
//   trigger: ".section3_fixed",
//   scrub: 1,
//   animation: gsap.fromTo(
//     ".i002",
//     {
//       x: "200%",
//       y: "0%",
//       duration: 2,
//       backgroundSize: 0,
//       // scale: 1,
//     },
//     {
//       x: "-100%",
//       y: "0%",
//       ease: Linear.easeNone,
//       // scale: 1.5,
//       // objectFit: none,
//     }
//   ),
// });
// ScrollTrigger.create({
//   trigger: ".section3_fixed",
//   scrub: 1,
//   animation: gsap.fromTo(
//     ".i003",
//     {
//       x: "100%",
//       y: "0%",
//       duration: 2,
//       backgroundSize: 0,
//       // scale: 1,
//     },
//     {
//       x: "-350%",
//       y: "0%",
//       ease: Linear.easeNone,
//       // scale: 1.5,
//       // objectFit: none,
//     }
//   ),
// });
// ScrollTrigger.create({
//   trigger: ".section3_fixed",
//   scrub: 1,
//   animation: gsap.fromTo(
//     ".i004",
//     {
//       x: "100%",
//       y: "130%",
//       duration: 2,
//       backgroundSize: 0,
//       // scale: 1,
//     },
//     {
//       x: "-150%",
//       y: "130%",
//       ease: Linear.easeNone,
//       // scale: 1.5,
//       // objectFit: none,
//     }
//   ),
// });
// ScrollTrigger.create({
//   trigger: ".section3_fixed",
//   scrub: 1,
//   animation: gsap.fromTo(
//     ".i005",
//     {
//       x: "100%",
//       y: "0%",
//       duration: 2,
//       backgroundSize: 0,
//       // scale: 1,
//     },
//     {
//       x: "-100%",
//       y: "0%",
//       ease: Linear.easeNone,
//       // scale: 1.5,
//       // objectFit: none,
//     }
//   ),
// });
// ScrollTrigger.create({
//   trigger: ".section3_fixed",
//   scrub: 1,
//   animation: gsap.fromTo(
//     ".i006",
//     {
//       x: "100%",
//       y: "0%",
//       duration: 2,
//       backgroundSize: 0,
//       // scale: 1,
//     },
//     {
//       x: "-100%",
//       y: "0%",
//       ease: Linear.easeNone,
//       // scale: 1.5,
//       // objectFit: none,
//     }
//   ),
// });

//   섹션 4
ScrollTrigger.create({
  trigger: ".section4_fixed",
  scrub: 1,
  animation: gsap.fromTo(
    ".section4_fixed",
    {
      scale: (1.3, 1.3),
      opacity: 0,
      transformOrigin: "900px 18px",
      transform: "translate(0,50px)",
    },
    {
      scale: 1,
      opacity: 1,
      transformOrigin: "50% 0%",
      transform: "translate3d(0,-25px,0)",
    }
  ),
});

let proxy = { skew: 0 },
  skewSetter = gsap.quickSetter(".section4_cont>div", "skewY", "deg"), // fast
  skewSetter2 = gsap.quickSetter(".section4_rev_icon_layout", "skewY", "deg"), // fast
  clamp = gsap.utils.clamp(-10, 10);

ScrollTrigger.create({
  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / -300);

    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {
        skew: 0,
        duration: 0.8,
        ease: "power3",
        overwrite: true,
        onUpdate: () => skewSetter(proxy.skew),
      });
    }
  },
});

// make the right edge "stick" to the scroll bar. force3D: true improves performance
gsap.set(".skewElem", { transformOrigin: "right center", force3D: true });

//   섹션 5
ScrollTrigger.create({
  trigger: ".section5_fixed",
  scrub: 1,
  animation: gsap.fromTo(
    ".section5_fixed",
    {
      scale: (1.3, 1.3),
      opacity: 0,
      transformOrigin: "900px 18px",
      transform: "translate(-50%, -50%)",
    },
    {
      scale: 1,
      opacity: 1,
      transformOrigin: "50% 0%",
      transform: "translate(-50%, -50%) translate3d(0,-25px,0)",
    }
  ),
});

//   섹션 5.5
ScrollTrigger.create({
  trigger: ".section5p5_fixed",
  scrub: 1,
  animation: gsap.fromTo(
    ".section5p5_fixed",
    {
      opacity: 1,
    },
    {
      opacity: 0,
    }
  ),
});

// 섹션 3_i001 ~ i006
ScrollTrigger.create({
  scrub: 1,
  animation: gsap.from(".i001", {
    // transform: "translatex(-50%)",
    x: "150%",
  }),
  animation: gsap.to(".i001", {
    // transform: "translatex(-450%)",
    x: "-650%",
  }),
});
ScrollTrigger.create({
  scrub: 1,
  animation: gsap.from(".i001 .item_desc", {
    // transform: "translatex(-50%)",
    x: "200%",
  }),
  animation: gsap.to(".i001 .item_desc", {
    // transform: "translatex(-450%)",
    x: "-1000%",
  }),
});
ScrollTrigger.create({
  scrub: 1,
  animation: gsap.from(".i002", {
    // transform: "translatex(-50%)",
    x: "0%",
  }),
  animation: gsap.to(".i002", {
    // transform: "translatex(-450%)",
    x: "-200%",
  }),
});
ScrollTrigger.create({
  scrub: 1,
  animation: gsap.from(".i002 .item_desc", {
    // transform: "translatex(-50%)",
    x: "0%",
  }),
  animation: gsap.to(".i002 .item_desc", {
    // transform: "translatex(-450%)",
    x: "-300%",
  }),
});

// ScrollTrigger.create({
//   trigger: "editorial_two",
//   scrub: 0.1,
//   animation: gsap.to(".section3_item", {
//     duration: 10,
//     scale: 1.5,
//     // rotate: "20deg",
//     // transform: "translate(-50%, -50%) translate3d(0,-25px,0)",
//     // transformOrigin: "50% 0%",
//   }),
// });

//   VUE_API MOVIE
ScrollTrigger.create({
  trigger: ".vr1",
  scrub: 1,
  animation: gsap.fromTo(
    ".sec8_logo",
    {
      x: "-40%",
      y: "-40%",
      // scale: 1,
    },
    {
      x: "30%",
      y: "10%",
      ease: Linear.easeNone,
      scale: 1.2,
    }
  ),
});
ScrollTrigger.create({
  trigger: ".vr1",
  scrub: 1,
  animation: gsap.fromTo(
    ".sec8_bg",
    {
      x: "50%",
      y: "0%",
      backgroundSize: 0,
      // scale: 1,
    },
    {
      x: "20%",
      y: "0%",
      ease: Linear.easeNone,
      scale: 1.2,
      // objectFit: none,
    }
  ),
});

//   VUE_API TMDB
ScrollTrigger.create({
  trigger: ".vr2",
  scrub: 1,
  animation: gsap.fromTo(
    ".sec10_logo",
    {
      x: "40%",
      y: "40%",
      // scale: 1,
    },
    {
      x: "-30%",
      y: "-10%",
      ease: Linear.easeNone,
      scale: 1.2,
    }
  ),
});
ScrollTrigger.create({
  trigger: ".vr2",
  scrub: 1,
  animation: gsap.fromTo(
    ".sec10_bg",
    {
      x: "0%",
      y: "0%",
      backgroundSize: 0,
      // scale: 1,
    },
    {
      x: "20%",
      y: "0%",
      ease: Linear.easeNone,
      scale: 1.2,
      // objectFit: none,
    }
  ),
});

//   VUE_API SITE
ScrollTrigger.create({
  trigger: ".vr3",
  scrub: 1,
  animation: gsap.fromTo(
    ".sec11_logo",
    {
      x: "-40%",
      y: "0%",
      // scale: 1,
    },
    {
      x: "30%",
      y: "0%",
      ease: Linear.easeNone,
      scale: 1.2,
    }
  ),
});
ScrollTrigger.create({
  trigger: ".vr3",
  scrub: 1,
  animation: gsap.fromTo(
    ".sec11_bg",
    {
      x: "50%",
      y: "0%",
      backgroundSize: 0,
      // scale: 1,
    },
    {
      x: "20%",
      y: "0%",
      ease: Linear.easeNone,
      scale: 1.2,
      // objectFit: none,
    }
  ),
});
