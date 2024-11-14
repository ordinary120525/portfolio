// 로딩 화면이 3초 후에 사라지도록 설정
// setTimeout(() => {
//   document.querySelector("#loading-screen").style.display = "none";
// }, 3000);

// 페이지가 로드된 후 3초 후 로딩 화면을 서서히 사라지게 하고 콘텐츠를 표시
window.onload = function () {
  setTimeout(function () {
    // 로딩 화면 서서히 사라지게
    document.querySelector("#loading-screen").style.opacity = "0";

    // 로딩 화면이 사라지면 콘텐츠 표시
    setTimeout(function () {
      document.querySelector("#loading-screen").style.display = "none";
      document.querySelector(".wrap").style.display = "block";
    }, 3000); // opacity가 0으로 바뀌고 2초 후에 로딩 화면을 숨깁니다
  }, 3000); // 3초 후 로딩 화면이 서서히 사라지도록
};
