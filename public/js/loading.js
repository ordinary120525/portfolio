window.addEventListener("load", function () {
  const loadingScreen = document.getElementById("loading-screen");
  const h1Element = document.querySelector(".figure h1");
  const figureElement = document.querySelector(".figure");
  const videoElement = document.querySelector(".figure video");

  // 로딩 스크린 3초 후 사라짐
  setTimeout(function () {
    loadingScreen.style.display = "none"; // 로딩 스크린 숨기기
    wrap.style.display = "block"; // 전체 페이지를 표시
  }, 3000); // 로딩 화면 유지 시간

  // 로딩 스크린이 사라진 후 3초 뒤에 애니메이션 시작
  setTimeout(() => {
    // 3초 뒤에 h1 애니메이션 시작
    h1Element.style.opacity = "1"; // h1 태그 보이게 설정
    h1Element.style.transform = "translate(-50%, -50%)"; // h1 제자리로 이동

    // 비디오 크기가 10% 더 커지며 3초 동안 원래 크기로 줄어듬
    figureElement.classList.add("active"); // .active 클래스를 추가하여 비디오 크기 애니메이션 시작
  }, 3000); // 3초 뒤에 h1 애니메이션 시작
});
