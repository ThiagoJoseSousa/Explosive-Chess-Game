import matchController from "./matchController.js";

window.onload = () => {
  const tab_switchers = document.querySelectorAll("[data-switcher]");
  for (let i = 0; i < tab_switchers.length; i++) {
    const tab_switcher = tab_switchers[i];
    const page_id = tab_switcher.dataset.tab;

    tab_switcher.addEventListener("click", () => {
      document.querySelector(".tabs .tab.active").classList.remove("active");
      tab_switcher.parentNode.classList.add("active");

      switchPage(page_id);
    });
  }
};
function switchPage(page_id) {
  const current_page = document.querySelector(".pages .page.active");
  current_page.classList.remove("active");

  const next_page = document.querySelector(
    `.pages .page[data-page="${page_id}"]`
  );
  next_page.classList.add("active");
}
let whiteButton = document.getElementById("whitecolor");
whiteButton.addEventListener("click", (e) => {
  initializeBoard(e);
});

let blackButton = document.getElementById("blackcolor");
blackButton.addEventListener("click", (e) => {
  initializeBoard(e);
});

function initializeBoard(e) {
  let initialize = matchController();
  initialize.placePieces();
  initialize.renderBoard();
  console.log("testing gameboard 0 0 ");
  document.getElementById("sidechoice").classList.add("hide");
  let players = initialize.chooseSide(e.target.attributes.value.value); // acess clicked button and pass the selected choice
  // adds listeners to the human pieces.
  if (players.player1.human) {
    initialize.playerCanClick("white");
    //just for testing
  } else {
    //AI random move happens before initializing black and changes the turn 
    initialize.play('bla', initialize.computerAttack('white'));
  }

}

export default initializeBoard;
