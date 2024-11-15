window.addEventListener("load", () => {
  const figureElement = document.querySelector(".figure");
  const videoElement = document.querySelector(".figure video");

  // 3초 뒤에 비디오 크기 애니메이션 시작
  setTimeout(() => {
    // 비디오 크기를 10% 커진 상태에서 원래 크기로 줄이는 애니메이션 시작
    figureElement.classList.add("active"); // .active 클래스를 추가하여 비디오 크기 애니메이션 시작
  }, 0); // 페이지가 로드된 직후 바로 시작
});
