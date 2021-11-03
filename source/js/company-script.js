let leaderSwiper;
const leaderSwiperDOM = document.querySelector('.leader-swiper')

const resize = () => {
  if (document.documentElement.clientWidth < 1025 && leaderSwiperDOM.dataset.mobile === 'false') {
    leaderSwiperDOM.dataset.mobile = 'true';
    leaderSwiper = new Swiper('.leader-swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      allowTouchMove: true,
      scrollbar: {
        el: ".leader-swiper__scrollbar",
        dragSize: 35,
        dragClass: 'leader-swiper__drag'
      },
    });

  } else if (document.documentElement.clientWidth >= 1025) {
    if (leaderSwiperDOM.dataset.mobile === 'true') {
        leaderSwiperDOM.dataset.mobile = 'false';
        leaderSwiper.destroy()
    }
  }
}

resize()

window.addEventListener('resize', resize)
