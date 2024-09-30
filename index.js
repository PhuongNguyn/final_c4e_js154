const backToTop = document.getElementById("back-to-top");
const scrollToTop = document.getElementById("scroll-to-top");\

window.onscroll = () => {
  if (document.documentElement.scrollTop > 20) {
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }
};

backToTop.onclick = () => {
  scrollToTop.scrollIntoView({
    behavior: "smooth",
  });
};
