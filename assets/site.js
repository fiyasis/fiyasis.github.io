(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelector(".nav-toggle");
    var links = document.querySelector(".nav-links");
    if (!btn || !links) return;

    btn.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("nav-lock", open);
    });

    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A" && links.classList.contains("open")) {
        links.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
        document.body.classList.remove("nav-lock");
      }
    });
  });
})();
