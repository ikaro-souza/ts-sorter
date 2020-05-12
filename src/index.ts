import { Sorter } from "./classes/Sorter";
import { NumbersCollection } from "./classes/NumbersCollection";
import { CharactersCollection } from "./classes/CharactersCollection";

const word1 = new CharactersCollection("coding");
word1.sort();
console.log(word1);

const numbers = new NumbersCollection([5, -5, 1, 3.5, 9, 4, 2.2, -1, 0]);
Sorter.sort(numbers);
console.log(numbers);
