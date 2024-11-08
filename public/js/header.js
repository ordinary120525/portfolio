window.addEventListener("load", () => {
  // 메뉴 모달 열고 닫기
  const openMenu = document.querySelector(".menu");
  const closeMenu = document.querySelector(".close");
  const modal = document.querySelector(".nav-modal");
  const subMenu = document.querySelector("#submenu-list");

  let isActive = false;

  const openCloseModal = () => {
    if (isActive) {
      modal.classList.remove("active");
      isActive = false;
    } else {
      modal.classList.add("active");
      isActive = true;
    }
  };

  openMenu.addEventListener("click", () => {
    openCloseModal();
  });

  closeMenu.addEventListener("click", () => {
    openCloseModal();
  });

  subMenu.addEventListener("click", () => {
    openCloseModal();
  });
});
