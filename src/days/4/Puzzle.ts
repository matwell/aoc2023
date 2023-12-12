import {
  linesToCards,
  Card,
  addWinsToCards,
  generateConsecutiveCards,
  CardWithWins,
  calculateCopies,
} from './utils';

const first = (input: string) => {
  const lines = input.split('\n');
  const cards: Card[] = linesToCards(lines);

  const sum = cards.reduce((acc, curr) => {
    return acc + curr.points;
  }, 0);
  return sum;
};

const expectedFirstSolution = 22488;

const second = (input: string) => {
  const lines = input.split('\n');
  const cards: Card[] = linesToCards(lines);
  const cardsWithNumberOfWins = addWinsToCards(cards);
  let result: number = 0;
  // let copies: CardWithWins[] = cardsWithNumberOfWins.slice();

  // for (let i = 0; i < copies.length; i++) {
  //   if (copies[i].wins > 0) {
  //     const newCards = generateConsecutiveCards(
  //       cardsWithNumberOfWins,
  //       copies[i].cardNumber + 1,
  //       copies[i].wins
  //     );

  //     copies = copies.concat(newCards);
  //   }
  // }
  cardsWithNumberOfWins.forEach((element, i) => {
    console.log(`*****${i}*****`);

    result =
      i === 0
        ? result + calculateCopies(cardsWithNumberOfWins.slice())
        : result + calculateCopies(cardsWithNumberOfWins.slice(i));
  });

  return result;
};

const expectedSecondSolution = 'solution 2';

export { first, expectedFirstSolution, second, expectedSecondSolution };
