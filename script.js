document.querySelectorAll(".sectionWrapper").forEach((x) =>
  x.addEventListener("click", function () {
    const box = this.children[1];
    box.classList.toggle("hiding");
  })
);
