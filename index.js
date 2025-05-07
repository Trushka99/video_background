function updateMaskRects() {
  const svg = document.querySelector("#svg-mask");
  const mask = svg.querySelector("#reveal-mask");
  mask
    .querySelectorAll('rect[data-blank="true"]')
    .forEach((r) => r.remove());

  document.querySelectorAll(".blank").forEach((span) => {
    const rect = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "rect"
    );
    const box = span.getBoundingClientRect();
    const wrapperBox = document
      .querySelector(".wrapper")
      .getBoundingClientRect();

    const x = ((box.left - wrapperBox.left) / wrapperBox.width) * 100;
    const y = ((box.top - wrapperBox.top) / wrapperBox.height) * 100;
    const width = (box.width / wrapperBox.width) * 100;
    const height = (box.height / wrapperBox.height) * 100;

    rect.setAttribute("x", `${x}%`);
    rect.setAttribute("y", `${y}%`);
    rect.setAttribute("width", `${width}%`);
    rect.setAttribute("height", `${height}%`);
    rect.setAttribute("fill", "black");
    rect.setAttribute("data-blank", "true");

    mask.appendChild(rect);
  });
}

window.addEventListener("load", updateMaskRects);
window.addEventListener("resize", () => {
  requestAnimationFrame(updateMaskRects);
});
