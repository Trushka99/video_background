function updateMaskRects() {
  const mask = document.querySelector("#reveal-mask");
  mask.innerHTML = ""; // очищаем старые прорези

  const wrapperRect = document
    .querySelector(".wrapper")
    .getBoundingClientRect();

  document.querySelectorAll(".blank").forEach((span) => {
    const { left, top, width, height } = span.getBoundingClientRect();
    const x = ((left - wrapperRect.left) / wrapperRect.width) * 100;
    const y = ((top - wrapperRect.top) / wrapperRect.height) * 100;
    const w = (width / wrapperRect.width) * 100;
    const h = (height / wrapperRect.height) * 100;

    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    Object.entries({ x, y, width: w, height: h }).forEach(([k, v]) =>
      rect.setAttribute(k, `${v}%`)
    );
    rect.setAttribute("fill", "black");
    mask.appendChild(rect);
  });
}

window.addEventListener("load", updateMaskRects);
window.addEventListener("resize", () => requestAnimationFrame(updateMaskRects));
