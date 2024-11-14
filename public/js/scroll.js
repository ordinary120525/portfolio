window.addEventListener("DOMContentLoaded", function () {
  // 스크롤 이벤트를 감지해서 상단으로 가기 버튼을 표시/숨김 처리
  document.onscroll = function () {
    const scrollToTopBtn = document.querySelector("#scrollToTopBtn");

    // 페이지가 1000px 이상 내려가면 버튼 표시
    if (
      document.body.scrollTop > 1000 ||
      document.documentElement.scrollTop > 1000
    ) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  };

  // 버튼 클릭 시 부드럽게 상단으로 스크롤
  document
    .getElementById("scrollToTopBtn")
    .addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth", // 부드럽게 스크롤
      });
    });
});
