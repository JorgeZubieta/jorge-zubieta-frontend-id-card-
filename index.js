function ready(fn) {
  if (document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

ready(() => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("pointerover", (e) =>
      e.currentTarget.classList.add("hover")
    );
    card.addEventListener("pointerout", (e) =>
      e.currentTarget.classList.remove("hover")
    );
  });

  document.body.addEventListener("contextmenu", (e) => e.preventDefault());
});
