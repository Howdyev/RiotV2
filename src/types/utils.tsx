export const runClosing = () => {
  document.querySelectorAll(".closing_layer").forEach((it) => {
    it.style.display = "flex";
  });
  setTimeout(() => {
    document.querySelectorAll(".closing_layer").forEach((it) => {
      it.style.opacity = 1;
    });
  }, 10);
};
