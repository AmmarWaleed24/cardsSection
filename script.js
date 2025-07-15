const cards = [
  {
    cardHeader: "header one",
    cardText: "this is the text of the first card",
  },
  {
    cardHeader: "header tow",
    cardText: "this is the text of the second card",
  },
  {
    cardHeader: "header three",
    cardText: "this is the text of the third card",
  },
  {
    cardHeader: "header four",
    cardText: "this is the text of the fourth card",
  },
  {
    cardHeader: "header five",
    cardText: "this is the text of the fifth card",
  },
  {
    cardHeader: "header six",
    cardText: "this is the text of the sixth card",
  },
];
const cardsHolder = document.querySelector(".cards-holder");
cards.map((card, index) => {
  return (cardsHolder.innerHTML += `
          <div class="card-outline" data-index=${index}>
            <div class="card">
              <div class="card-header">
                <h2>${card.cardHeader}</h2>
              </div>
              <div class="card-body">
                <p>
                  ${card.cardText}
                </p>
            </div>
          </div>
        </div>
`);
});
