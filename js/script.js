// LOADING
document.addEventListener("DOMContentLoaded", function () {
  const loadingScreen = document.getElementById("loading-screen");
  const content = document.getElementById("content");

  window.addEventListener("load", function () {
    loadingScreen.style.opacity = "0";

    setTimeout(() => {
      loadingScreen.style.display = "none";
      content.style.display = "block";
    }, 500);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-link");
  const underline = document.getElementById("underline");
  let activeLink = document.querySelector(".nav-link.active");
  const header = document.querySelector(".navigation");
  const logoImage = document.querySelector(".logo-nav");
  const navlinks = document.querySelectorAll(".nav-middle a");

  if (
    window.location.pathname === "/woney.html" ||
    window.location.pathname === "/WiLink.html"
  ) {
    header.classList.add("scrolled");
    logoImage.src = "./Assets/Idearise_logo/2.png";

    navlinks.forEach((link) => {
      link.style.color = "#503d42";
    });
  }

  function moveUnderline(link) {
    const { offsetLeft: left, offsetWidth: width } = link;
    underline.style.left = `${left}px`;
    underline.style.width = `${width}px`;
  }

  links.forEach((link) => {
    link.addEventListener("mouseenter", () => moveUnderline(link));
    link.addEventListener("mouseleave", () => moveUnderline(activeLink));
  });

  if (activeLink) moveUnderline(activeLink);

  window.addEventListener("resize", () => {
    if (activeLink) moveUnderline(activeLink);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const dropbtn = document.querySelector(".dropbtn");
  const dropdownContent = document.querySelector(".dropdown-content");

  function toggleDropdown(event) {
    event.stopPropagation();
    dropdownContent.classList.toggle("show");
  }

  dropbtn.addEventListener("click", toggleDropdown);
  dropbtn.addEventListener("touchend", toggleDropdown);

  window.addEventListener("click", function (event) {
    if (
      !event.target.matches(".dropbtn") &&
      dropdownContent.classList.contains("show")
    ) {
      dropdownContent.classList.remove("show");
    }
  });

  window.addEventListener("touchend", function (event) {
    if (
      !event.target.matches(".dropbtn") &&
      dropdownContent.classList.contains("show")
    ) {
      dropdownContent.classList.remove("show");
    }
  });
});

document.addEventListener("scroll", () => {
  const header = document.querySelector(".navigation");
  const logoImage = document.querySelector(".logo-nav");
  const navlinks = document.querySelectorAll(".nav-middle a");

  if (
    window.scrollY > 0 ||
    window.location.pathname === "/woney.html" ||
    window.location.pathname === "/WiLink.html"
  ) {
    header.classList.add("scrolled");
    logoImage.src = "./Assets/icons/logo2.png";

    navlinks.forEach((link) => {
      link.style.color = "#503d42";
    });
  } else {
    header.classList.remove("scrolled");
    logoImage.src = "./Assets/icons/logo1.png";

    navlinks.forEach((link) => {
      link.style.color = "";
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const daftarButton = document.getElementById("daftarButton");
  const resetButton = document.getElementById("resetButton");
  const pesertaCount = document.getElementById("pesertaCount");

  // Retrieve count from localStorage or initialize to 0 if not set
  let count = localStorage.getItem("pesertaCount");
  if (count === null) {
    count = 0;
  } else {
    count = parseInt(count, 10);
  }
  pesertaCount.textContent = count;

  daftarButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior
    count += 1;
    pesertaCount.textContent = count;

    // Save the updated count to localStorage
    localStorage.setItem("pesertaCount", count);
  });

  resetButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior
    count = 0;
    pesertaCount.textContent = count;

    // Reset the count in localStorage
    localStorage.setItem("pesertaCount", count);
  });
});
