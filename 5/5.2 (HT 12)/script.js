let pollButtons = document.querySelectorAll(
  ".poll_reactions:not(.own-variant)"
);

pollButtons.forEach((btn) => {
  let currentValue = Number(btn.getAttribute("data-reacted"));

  btn.addEventListener("click", () => {
    btn.classList.toggle("reacted");

    if (btn.classList.contains("reacted")) {
      btn.setAttribute("data-reacted", currentValue + 1);
    } else {
      btn.setAttribute("data-reacted", currentValue);
    }
  });
});

function AddOwn(val) {
  val = document.querySelector(".own_variant");

  let newReaction = document.createElement("button");
  newReaction.classList.add("poll_reactions");
  newReaction.classList.add("reacted");
  newReaction.setAttribute("data-reacted", 1);
  newReaction.innerText = val.value;
  document.querySelector(".poll_reactions_box").prepend(newReaction);

  document.querySelector(".poll_reactions.own-variant").style.display = "none";
}
