// --- GSAP
gsap.registerPlugin(ScrollTrigger);

gsap.config({
  nullTargetWarn: false,
  trialWarn: false,
});

let mm = gsap.matchMedia();

// --- SERIES SLIDER
function seriesSlider() {
  const slider = new Swiper(".swiper.series", {
    // slidesPerView: "auto",
    spaceBetween: 24,
    speed: 700,
    centeredSlides: true,
    // loop: true,
    navigation: {
      nextEl: '.swiper-next.series',
      prevEl: '.swiper-prev.series',
    },
    pagination: {
      el: ".swiper-pagination.series",
      clickable: true
    },
    autoplay: {
      delay: 6000,
      disableOnInteraction: true
    },
  });
}

// --- RELATED SLIDER
function relatedSlider() {

  const sliderEl = document.querySelector(".swiper.related");
  const slides = sliderEl.querySelectorAll(".c-card");

  if (slides.length === 0) return;

  const slider = new Swiper(sliderEl, {
    slidesPerView: "auto",
    grid: {
      rows: 2,
    },
    pagination: {
      el: ".swiper-pagination.related",
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-next.related',
      prevEl: '.swiper-prev.related',
    },
  });
}

// --- COMMUNITY RESOURCES SLIDER
function commResourcesSlider() {
  const slider = new Swiper(".swiper.comm-resources", {
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination.comm-resources",
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-next.comm-resources',
      prevEl: '.swiper-prev.comm-resources',
    },
  });
}

// --- HEADER MOBILE
function headerMobile() {
  const header = document.querySelector(".c-header");
  const navBtn = document.querySelector(".c-nav-btn");
  const navWrap = document.querySelector(".c-nav-mobile");
  const menuLine1 = document.querySelectorAll(".c-nav-bar.is-1");
  const menuLine2 = document.querySelectorAll(".c-nav-bar.is-2");
  const menuLine3 = document.querySelectorAll(".c-nav-bar.is-3");
  let isOpen = false;

  const tl = gsap.timeline({
    paused: true,
    defaults: {
      duration: 1,
      ease: "expo.inOut"
    }
  });

  gsap.set(menuLine1, { transformOrigin: "center center" });
  gsap.set(menuLine2, { transformOrigin: "center center" });
  gsap.set(menuLine3, { transformOrigin: "center center" });

  tl.fromTo(navWrap, { clipPath: "inset(0% 0% 100% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)" });
  tl.to(menuLine1, { rotation: 45, y: 8 }, 0);
  tl.to(menuLine2, { width: 0 }, 0);
  tl.to(menuLine3, { rotation: -45, y: -8 }, 0);

  navBtn.addEventListener("click", function () {
    isOpen ? tl.reverse() : tl.restart();
    header.classList.toggle("is-open");
    isOpen = !isOpen;
  });
}

// --- IMPACT SLIDER
function impactSlider() {
  let eventsSlider = new Swiper(".swiper.impact", {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 600,
    loop: true,
    pagination: {
      el: ".swiper-pagination.reviews",
      clickable: true
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: true
    },
  });
}

// --- FEATURED FILMMAKER RESOURCES
function featuredFilmmakerResourcesSlider() {
  const slider = new Swiper(".swiper.ft-resources", {
    slidesPerView: "auto",
    spaceBetween: 24,
    pagination: {
      el: ".swiper-pagination.ft-resources",
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-next.ft-resources',
      prevEl: '.swiper-prev.ft-resources',
    },
  });
}

// --- FILMMAKER RESOURCES PROGRAM
function filmmakerResourcesProgram() {
  const items = document.querySelectorAll(".filters4_item.program");
  const seenLabels = new Set();

  if (!items) return;

  items.forEach(item => {
    const labelElement = item.querySelector(".filters4_form-checkbox1-label");

    if (labelElement) {
      const label = labelElement.textContent.trim();

      if (seenLabels.has(label)) {
        // Remove the item from the DOM
        item.remove();
      } else {
        // Add the label to the set
        seenLabels.add(label);
      }
    }
  });
}

// --- COMMUNITY SPOTLIFHT TAB
function communitySpotlightTab() {
  const navLinks = document.querySelectorAll(".c-tab-link");
  const tabs = document.querySelectorAll(".c-tab-content");

  if (navLinks.length === 0 || tabs.length === 0) return;

  // Page load
  navLinks[0].classList.add("is-active");
  tabs[0].classList.add("is-active");

  // Event
  navLinks.forEach((link, index) => {
    link.addEventListener("click", function () {

      navLinks.forEach(otherLink => {
        otherLink.classList.remove("is-active");
      });
      tabs.forEach(otherTab => {
        otherTab.classList.remove("is-active");
      });

      link.classList.add("is-active");
      tabs[index].classList.add("is-active");

    });
  });
}

// --- SEARCH
function search() {
  const triggerBtn = document.querySelectorAll(".c-search-btn");
  const searchModal = document.querySelector(".c-search");
  const searchInput = document.querySelector(".c-search-input");
  const closeBtn = document.querySelector(".c-search-close-btn");
  const body = document.querySelector("body");

  if (!triggerBtn || !searchModal) return;

  function openModal() {
    searchModal.classList.add("is-active");
    body.classList.add("no-scroll");
    searchInput.focus();
  }

  function closeModal() {
    searchModal.classList.remove("is-active");
    body.classList.remove("no-scroll");
  }

  triggerBtn.forEach(btn => {
    btn.addEventListener("click", openModal);
  });

  closeBtn.addEventListener("click", closeModal);

  searchModal.addEventListener("click", function (event) {
    if (event.target === searchModal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && searchModal.classList.contains("is-open")) {
      closeModal();
    }
  });
}

// --- BACK TO TOP
function backToTop() {
  const backToTopBtn = document.querySelector(".c-back-top");

  if (!backToTopBtn) return;

  backToTopBtn.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// --- HEADER SCROLLED
function headerScrolled() {
  const header = document.querySelector(".c-header");

  ScrollTrigger.create({
    trigger: "body",
    start: "150 top",
    onToggle: (self) => {
      if (self.isActive) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
  });
}

// --- FILM TRUNCATION
function filmTruncation() {
  const wrapper = document.querySelector(".film-exerpt-wrapper");
  if (!wrapper) return;

  const text = wrapper.querySelector(".heading-style-h5");
  if (!text) return;

  function checkTruncation() {
    if (text.scrollHeight > text.clientHeight) {
      text.classList.add("is-truncated");
    } else {
      text.classList.remove("is-truncated");
    }
  }

  checkTruncation();

  wrapper.addEventListener("click", function () {
    text.classList.toggle("film-truncate");
    checkTruncation();
  });
}

// --- FILMS FILTER SYSTEM
function filmsFilterSystem() {
  const groups = document.querySelectorAll(".filters4_filter-group");

  if (groups.length === 0) return;

  const clearAll = document.querySelector(".button.is-link.clear-all");

  function updateClearAllButton() {
    const anyChecked = Array.from(document.querySelectorAll(
        ".filters4_filter-group input[type='checkbox']"))
      .some(checkbox => checkbox.checked);

    if (clearAll) {
      clearAll.style.display = anyChecked ? "block" : "none";
    }
  }

  groups.forEach(group => {
    const checkboxes = group.querySelectorAll("input[type='checkbox']");
    const clear = group.querySelector(".filters4_filter-group-heading .button.is-link");

    if (!clear) return;

    function updateClearButton() {
      const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
      clear.classList.toggle("is-visible", isChecked);
      updateClearAllButton();
    }

    checkboxes.forEach(checkbox => {
      checkbox.addEventListener("change", updateClearButton);
    });

    // Initial check on page load
    updateClearButton();
  });

  // Ensure the clear all button is properly updated on load
  updateClearAllButton();
}

// --- FUNCTION - CHECK FOR DUPLICATE ITEMS IN A LIST
function duplicateItemsChecker() {
  const lists = document.querySelectorAll("[data-list]");

  lists.forEach(list => {
    const items = Array.from(list.querySelectorAll(".filters4_item"));
    const seenText = new Set();

    items.forEach(item => {
      const text = item.innerText.trim();
      if (seenText.has(text)) {
        item.remove();
      } else {
        seenText.add(text);
      }
    });
  });
}

// --- MODAL STATUS
function modalStatus() {
  const filterBtn = document.querySelector(".filters4_filters-button");
  const closeModalBtn = document.querySelector(".filters4_modal-close-button");
  const body = document.querySelector("body");
  const modal = document.querySelector(".filters4_modal");
  const modalWrapper = document.querySelector(".filters4_modal-content-wrapper");

  if (!filterBtn || !closeModalBtn || !modal || !modalWrapper) return;

  const modalApplyBtn = modal.querySelector(".button.is-small");

  if (!modalApplyBtn) return;

  function openModal() {
    body.classList.add("no-scroll");
  }

  function closeModal() {
    body.classList.remove("no-scroll");
  }

  function closeModalOnClickOutside(event) {
    if (!modalWrapper.contains(event.target) && modal.contains(event.target)) {
      closeModal();
    }
  }

  filterBtn.addEventListener("click", openModal);
  closeModalBtn.addEventListener("click", closeModal);
  document.addEventListener("click", closeModalOnClickOutside);
  modalApplyBtn.addEventListener("click", closeModal);
}

// --- BEHIND THE LENS PAGE
function behindTheLensVideos() {
  const page = document.querySelector("[data-page='behind-the-lens']");
  if (!page) return;

  const cards = document.querySelectorAll(".video_card.btl");
  const modals = document.querySelectorAll(
    ".c-btl-modal"); // Assuming modals are ordered to match cards

  cards.forEach((card, index) => {
    const modal = modals[index];
    if (!modal) return;

    const modalCloseBtn = modal.querySelector(".modal3_close-button");
    const modalOverlay = modal.querySelector(".modal3_background-overlay");

    // Open modal on card click
    card.addEventListener("click", function () {
      modal.classList.add("is-open");
    });

    // Close modal on close button click
    modalCloseBtn?.addEventListener("click", function (event) {
      event.stopPropagation();
      modal.classList.remove("is-open");
    });

    // Close modal on overlay click
    modalOverlay?.addEventListener("click", function (event) {
      event.stopPropagation();
      modal.classList.remove("is-open");
    });
  });
}

// --- INIT
function init() {
  seriesSlider();
  relatedSlider();
  impactSlider();
  filmmakerResourcesProgram();
  featuredFilmmakerResourcesSlider();
  communitySpotlightTab();
  search();
  backToTop();
  headerScrolled();
  filmTruncation();
  filmsFilterSystem();
  duplicateItemsChecker();
  modalStatus();
  headerMobile();
  commResourcesSlider();
  behindTheLensVideos();
}

init();

// --- MATCHMEDIA - DESKTOP
mm.add("(min-width: 992px)", () => {
  return () => {
    //
  };
});

// --- MATCHMEDIA - TABLET AND MOBILE
mm.add("(max-width: 991px)", () => {
  return () => {
    //
  };
});
