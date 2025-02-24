const e = (e) => console.log(e),
  t = (e) => document.querySelector(e),
  o = (e) => document.querySelectorAll(e),
  n = document.documentElement,
  c = (e) => n.classList.toggle("debug"),
  d = (e) => {
    n.getAttribute("data-theme") && "light" != n.getAttribute("data-theme")
      ? n.setAttribute("data-theme", "light")
      : n.setAttribute("data-theme", "dark");
  },
  r = { wordList: ["ثلاجات", "غسالات","فريزر","تاكيفات"], Interval: 3e3 },
  s = (e) => (document.body.style.overflow = "hidden"),
  a = (e) => (document.body.style.overflow = ""),
  l = (e) => {
    document.querySelector(".pop-form-bg").classList.remove("visible"), a();
  };
document
  .getElementById("pop-form-open-btn")
  .addEventListener("click", function (e) {
    e.preventDefault(),
      document.querySelector(".pop-form-bg").classList.add("visible"),
      s();
  }),
  document
    .querySelector(".pop-form-bg")
    .addEventListener("click", function (e) {
      e.target.classList.contains("pop-form-bg") &&
        (e.preventDefault(), this.classList.remove("visible"), a());
    });
const i = new IntersectionObserver((e) => {
    e.forEach((e) => {
      e.isIntersecting && e.target.classList.add("show");
    });
  }),
  u = document.querySelectorAll(".hidden");
u.forEach((e) => i.observe(e));
let m = 0;
const h = document.querySelectorAll(".quote"),
  v = document.querySelector(".quote-wrapper"),
  f = document.querySelectorAll(".dot");
f[0].classList.add("active");
let g = 0,
  b = 0,
  y = !1;
function L() {
  (v.style.transform = `translateX(${100 * m}%)`),
    f.forEach((e) => e.classList.remove("active")),
    f[m].classList.add("active");
}
function nextQuote() {
  (m = (m - 1 + h.length) % h.length), L(), w();
}
function prevQuote() {
  (m = (m + 1) % h.length), L(), w();
}
function goToQuote(e) {
  (m = e), L(), w();
}
let p = setInterval(nextQuote, 5e3);
function w() {
  clearInterval(p), (p = setInterval(nextQuote, 5e3));
}
v.addEventListener("touchstart", (e) => {
  (g = e.touches[0].clientX), (y = !0), (v.style.transition = "none");
}),
  v.addEventListener("touchmove", (e) => {
    y && (b = e.touches[0].clientX);
  }),
  v.addEventListener("touchend", () => {
    if (!y) return;
    (y = !1), (v.style.transition = "transform 0.3s ease-in-out");
    const e = g - b;
    e > 50 ? nextQuote() : e < -50 && prevQuote();
  });
let q = 0;
const A = document.querySelector(".dynamic-word"),
  E = (e) => {
    (q = (q + 1) % r.wordList.length), (A.textContent = r.wordList[q]);
  };
setInterval(E, r.Interval),
  E(),
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? n.setAttribute("data-theme", "dark")
    : n.setAttribute("data-theme", "light"),
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      const t = e.matches ? "dark" : "light";
      n.setAttribute("data-theme", t);
    });
//# sourceMappingURL=maps/scripts.js.map
