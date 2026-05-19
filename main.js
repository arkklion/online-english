// ===========================
// ハンバーガー
// ===========================
const hamburger = document.getElementById("js-hamburger");
const nav = document.getElementById("js-nav");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  nav.classList.toggle("is-active");
});
const navLinks = document.querySelectorAll("#js-nav a");
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    hamburger.classList.remove("is-active");
    nav.classList.remove("is-active");
  });
});
nav.addEventListener("click", function (event) {
  if (event.target === nav) {
    hamburger.classList.remove("is-active");
    nav.classList.remove("is-active");
  }
});

// ===========================
// FAQ アコーディオン
// ===========================
function toggleFaq(btn) {
  const item = btn.closest(".faq-item");
  const answer = item.querySelector(".faq-answer");
  const icon = btn.querySelector(".faq-icon");
  const isOpen = answer.classList.contains("open");

  // 全部閉じる
  document
    .querySelectorAll(".faq-answer")
    .forEach((a) => a.classList.remove("open"));
  document.querySelectorAll(".faq-icon").forEach((i) => (i.textContent = "∨"));

  // クリックしたものだけ開く（既に開いていたら閉じる）
  if (!isOpen) {
    answer.classList.add("open");
    icon.textContent = "∧";
  }
}

// ===========================
// スクロール時フェードイン
// ===========================
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 },
);

document
  .querySelectorAll(
    ".pain-card-wrapper, .reason-card, .course-card, .flow-step, .faq-item",
  )
  .forEach((el) => {
    el.classList.add("fade-in");
    observer.observe(el);
  });

// ===========================
// スムーズスクロール
// ===========================
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const target = document.querySelector(a.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ===========================
// ４つの理由
// ===========================
const reasonCards = document.querySelectorAll(".reason-card");

const showCardDetails = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  },
  {
    rootMargin: "-20% 0px -20% 0px",
  },
);

reasonCards.forEach((card) => {
  showCardDetails.observe(card);
});

// ===========================
// カード スライドイン
// ===========================
const slideObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 },
);

document
  .querySelectorAll(".slide-from-right, .slide-from-left")
  .forEach((el) => {
    slideObserver.observe(el);
  });

// ===========================
// ヘッダー スクロールで表示
// ===========================
const header = document.getElementById("site-header");
const hero = document.getElementById("hero");

const heroObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        // ヒーローが見えなくなったらヘッダー表示
        header.classList.add("visible");
      } else {
        // ヒーローが見えているときはヘッダー非表示
        header.classList.remove("visible");
      }
    });
  },
  { threshold: 0.1 },
);

heroObserver.observe(hero);
