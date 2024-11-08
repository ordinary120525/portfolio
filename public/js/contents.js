window.addEventListener("load", () => {
  // video list

  // 상태 관리 객체 초기화
  const initState = {
    videos: [],
  };

  const cardWrap = document.querySelector(".content");
  const videoModal = document.querySelector(".modal");
  const closeBtn = document.querySelector(".close-btn");
  const video = document.querySelector(".video-wrap video");
  const youtubeVideo = document.querySelector(".video-wrap iframe");
  const videoTitle = document.querySelector(".video-wrap p");
  // console.log(videoModal);

  // json 파일 연동하여 카드 목록 생성
  const vidUrl = "data/video.json";
  // console.log(vidUrl);

  fetch(vidUrl)
    .then((response) => {
      // console.log(response.json());
      return response.json();
    })
    .then((data) => {
      initState.videos = data; // 상태 업데이트
      // console.log(initState.videos);
      makeHtmlTag();
    })
    .catch((err) => {
      console.error(err);
    });

  // html 태그 생성 함수
  const makeHtmlTag = () => {
    const thumbnailPath = "";
    const tags = initState.videos
      .map((item) => {
        return `
      <div class="card"
        data-video-src="${item.vidSrc || ""}"
        data-youtube-id="${item.youtubeId || ""}"
        data-id="${item.id}"
        data-title="${item.title}" >
        <img
         class="thumbnail"
         src="${thumbnailPath}${item.thumbnail || ""}"
         alt="${item.title}"
        />
        <p>${item.title}</p>
      </div>`;
      })
      .join("");

    cardWrap.innerHTML = tags;
  };

  // 카드 클릭 이벤트 핸들러 - 이벤트 위임 방식 사용
  cardWrap.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (card) {
      openModal(card);
    }
  });

  // 모달 열기 함수
  const openModal = (card) => {
    const src = card.dataset.videoSrc;
    const youtubeId = card.dataset.youtubeId;
    const title = card.dataset.title;
    // console.log(src, youtubeId, title);

    if (src) {
      video.setAttribute("src", `videos/${src}`);
      video.play();
      video.style.display = "block";
      youtubeVideo.style.display = "none";
    } else if (youtubeId) {
      youtubeVideo.setAttribute(
        "src",
        `https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1`
      );
      youtubeVideo.style.display = "block";
      video.style.display = "none";
    }

    videoTitle.textContent = title;
    videoModal.style.display = "block";
    // console.log("비디오 모달 열었습니다!", card);
  };

  // 모달닫기 함수
  const closeModal = () => {
    videoModal.style.display = "none";
    video.pause();
    video.src = "";
    youtubeVideo.src = "";
  };

  closeBtn.addEventListener("click", closeModal);
  window.addEventListener("click", (e) => {
    if (e.target === videoModal) {
      closeModal();
    }
  });
});
