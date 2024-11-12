import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("#info", () => {
  gsap.to("#about-title", {
    scrollTrigger: {
      trigger: "#about-title", // 스크롤 트리거 요소
      start: "top center", // 애니메이션 시작 시점: 요소의 상단이 뷰포트의 중앙에 닿을 때
      end: "bottom center", // 애니메이션 끝나는 시점: 요소의 하단이 뷰포트의 중앙에 닿을 때
      scrub: true, // 스크롤에 따라 애니메이션을 부드럽게 제어
    },
    color: "#e22626", // 애니메이션 속성 (색상 변경)
    stagger: 0.2, // 각 글자가 순서대로 색상 변경
  });
});

// window.addEventListener("load", () => {
//     const titleWrap = document.querySelector("#info");
//     const titleSpans = document.querySelectorAll(".about-title > span"); // 각 글자(span) 선택
//     let currentLetter = 0; // 현재 색상이 변경될 글자의 인덱스

//     window.addEventListener("scroll", () => {
//       // 색상이 변경될 기준 스크롤 위치 (예: 100px 스크롤했을 때부터 색상 변경 시작)
//       const triggerScroll = 3000;

//       // 스크롤이 triggerScroll 위치를 넘었을 때
//       if (window.scrollY > triggerScroll) {
//         // 글자를 순서대로 #e22626 색상으로 변경
//         if (currentLetter < titleSpans.length) {
//           titleSpans[currentLetter].style.color = "#e22626";
//           currentLetter++;
//         }
//       } else {
//         // 스크롤이 위로 올라가면 색상을 다시 기본값으로 초기화
//         titleSpans.forEach((span) => (span.style.color = "#fff"));
//         currentLetter = 0; // 인덱스 초기화
//       }
//     });
//   });
