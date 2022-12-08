// 메인 먼지
ScrollTrigger.create({
  // 어디에 닿으면 반응할건지
  trigger: ".section2_cont",
  scrub: 1,
  // 어디다가 적용할건지
  animation: gsap.fromTo(
    ".dust_01",
    {
      transform: "translate(-50%,0%) rotate(0deg)",
    },
    {
      //   transform: "translate(200%,-20%) scale(3.0) rotate(23deg)",
      transform: "translate(-50%,1020%) scale(3.0) rotate(200deg)",
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
      transform: "translate(-50%,0) rotate(0deg)",
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
ScrollTrigger.create({
  trigger: ".section2_cont",
  scrub: 1,
  animation: gsap.fromTo(
    ".section2_profile_cont",
    {
      scale: (1.3, 1.3),
      transformOrigin: "500px 18px",
      transform: "translate(0,50px)",
      //   filter: "blur(2px)",
    },
    {
      scale: 1,
      transformOrigin: "50% 0%",
      transform: "translate3d(0,-25px,0)",
      //   filter: "blur(0px)",
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

//   섹션 4
ScrollTrigger.create({
  trigger: ".section4_fixed",
  scrub: 1,
  animation: gsap.from(".section4_fixed", {
    scale: (1.3, 1.3),
    opacity: 0,
    transformOrigin: "900px 18px",
    transform: "translate(0,50px)",
  }),
  animation: gsap.to(".section4_fixed", {
    scale: 1,
    opacity: 1,
    transformOrigin: "50% 0%",
    transform: "translate3d(0,-25px,0)",
  }),
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
// gsap.set(".skewElem", { transformOrigin: "right center", force3D: true });

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

ScrollTrigger.create({
  scrub: 1,
  animation: gsap.from(".section3_item_bottom", {
    transform: "translatex(0%)",
  }),
  animation: gsap.to(".section3_item_bottom", {
    transform: "translatex(-50%)",
  }),
});
// 섹션 5.5
// 사이트 타입 1
ScrollTrigger.create({
  // trigger: ".section5_fixed",
  scrub: 1,
  animation: gsap.from(".s5p5_1", {
    transform: "translatey(2350%) skew(346deg, 354deg) rotate(340deg)",
    // transform: "translatey(2350%) rotate(-200deg)",
  }),
  animation: gsap.to(".s5p5_1", {
    transform: "translatey(-300%) skew(336deg, 334deg) rotate(20deg)",
    // transform: "translatey(-300%) rotate(180deg)",
  }),
});

// 사이트 타입 2
ScrollTrigger.create({
  // trigger: ".section5_fixed",
  scrub: 1,
  animation: gsap.from(".s5p5_4", {
    transform: "translatey(2550%) skew(10deg, 2deg)",
  }),
  animation: gsap.to(".s5p5_4", {
    transform: "translatey(-200%) skew(4deg, 11deg)",
  }),
});

// 파티클
ScrollTrigger.create({
  // trigger: ".section5_fixed",
  scrub: 1,
  animation: gsap.from(".ball_cont", {
    // transform: "translatey(-200%)",
    y: -7500,
    // y: -3500,
  }),
  animation: gsap.to(".ball_cont", {
    // transform: "translatey(1000%)",
    y: 800,
    // y: 3000,
  }),
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
    x: "150%",
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
    x: "100%",
  }),
  animation: gsap.to(".i002", {
    // transform: "translatex(-450%)",
    x: "-400%",
  }),
});
ScrollTrigger.create({
  scrub: 1,
  animation: gsap.from(".i002 .item_desc", {
    // transform: "translatex(-50%)",
    x: "150%",
  }),
  animation: gsap.to(".i002 .item_desc", {
    // transform: "translatex(-450%)",
    x: "-1000%",
  }),
});

ScrollTrigger.create({
  scrub: 1,
  animation: gsap.from(".i003", {
    // transform: "translatex(-50%)",
    x: "120%",
  }),
  animation: gsap.to(".i003", {
    // transform: "translatex(-450%)",
    x: "-450%",
  }),
});
ScrollTrigger.create({
  scrub: 1,
  animation: gsap.from(".i003 .item_desc", {
    // transform: "translatex(-50%)",
    x: "150%",
  }),
  animation: gsap.to(".i003 .item_desc", {
    // transform: "translatex(-450%)",
    x: "-500%",
  }),
});

ScrollTrigger.create({
  scrub: 1,
  animation: gsap.from(".i004", {
    // transform: "translatex(-50%)",
    x: "200%",
  }),
  animation: gsap.to(".i004", {
    // transform: "translatex(-450%)",
    x: "-450%",
  }),
});
ScrollTrigger.create({
  scrub: 1,
  animation: gsap.from(".i004 .item_desc", {
    // transform: "translatex(-50%)",
    x: "100%",
  }),
  animation: gsap.to(".i004 .item_desc", {
    // transform: "translatex(-450%)",
    x: "-700%",
  }),
});

ScrollTrigger.create({
  scrub: 1,
  animation: gsap.from(".i005", {
    // transform: "translatex(-50%)",
    x: "200%",
  }),
  animation: gsap.to(".i005", {
    // transform: "translatex(-450%)",
    x: "-400%",
  }),
});
ScrollTrigger.create({
  scrub: 1,
  animation: gsap.from(".i005 .item_desc", {
    // transform: "translatex(-50%)",
    x: "250%",
  }),
  animation: gsap.to(".i005 .item_desc", {
    // transform: "translatex(-450%)",
    x: "-1000%",
  }),
});

ScrollTrigger.create({
  scrub: 1,
  animation: gsap.from(".i006", {
    // transform: "translatex(-50%)",
    x: "250%",
  }),
  animation: gsap.to(".i006", {
    // transform: "translatex(-450%)",
    x: "-250%",
  }),
});
ScrollTrigger.create({
  scrub: 1,
  animation: gsap.from(".i006 .item_desc", {
    // transform: "translatex(-50%)",
    x: "150%",
  }),
  animation: gsap.to(".i006 .item_desc", {
    // transform: "translatex(-450%)",
    x: "-300%",
  }),
});

// 1 / 1
// VUE_API MOVIE
ScrollTrigger.create({
  trigger: ".vr1",
  scrub: 1,
  animation: gsap.fromTo(
    ".sec8_logo",
    {
      x: "-40%",
      y: "-40%",
      scale: 0.8,
    },
    {
      x: "30%",
      y: "10%",
      ease: Linear.easeNone,
      scale: 1.6,
    }
  ),
});
ScrollTrigger.create({
  trigger: ".t_vr",
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

// VUE_API TMDB
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

// VUE_API SITE
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

// 2 / 1
// VUE_API MOVIE
ScrollTrigger.create({
  trigger: ".vr4",
  scrub: 1,
  animation: gsap.fromTo(
    ".sec12_logo",
    {
      x: "40%",
      y: "0%",
      scale: 0.8,
    },
    {
      x: "-30%",
      y: "0%",
      ease: Linear.easeNone,
      scale: 1.6,
    }
  ),
});
ScrollTrigger.create({
  trigger: ".vr4",
  scrub: 1,
  animation: gsap.fromTo(
    ".sec12_bg",
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

// VUE_API TMDB
ScrollTrigger.create({
  trigger: ".vr5",
  scrub: 1,
  animation: gsap.fromTo(
    ".sec13_logo",
    {
      x: "-40%",
      y: "-50%",
      // scale: 1,
    },
    {
      x: "30%",
      y: "-50%",
      ease: Linear.easeNone,
      scale: 1.2,
    }
  ),
});
ScrollTrigger.create({
  trigger: ".vr5",
  scrub: 1,
  animation: gsap.fromTo(
    ".sec13_bg",
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

// VUE_API SITE
ScrollTrigger.create({
  trigger: ".vr6",
  scrub: 1,
  animation: gsap.fromTo(
    ".sec14_logo",
    {
      x: "40%",
      y: "0%",
      scale: 0.8,
    },
    {
      x: "-30%",
      y: "0%",
      ease: Linear.easeNone,
      scale: 1.6,
    }
  ),
});
ScrollTrigger.create({
  trigger: ".vr6",
  scrub: 1,
  animation: gsap.fromTo(
    ".sec14_bg",
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

const slides = document.querySelectorAll(".t_vr");

function initParallax() {
  slides.forEach((slide, i) => {
    let imageWrappers = slide.querySelectorAll(".t_vr > div");

    gsap.fromTo(
      imageWrappers,
      {
        y: "-30vh",
      },
      {
        y: "30vh",
        scrollTrigger: {
          trigger: slide,
          scrub: true,
          start: "top bottom", // position of trigger meets the scroller position
        },
        ease: "none",
      }
    );
  });
}

function init() {
  initParallax();
}

window.onload = () => {
  init();
};
