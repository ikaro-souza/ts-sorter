import { Sorter } from "./Sorter";
import { Sortable } from "./Sortable/Sortable";

export class CharactersCollection extends Sortable<string> {
  get length(): number {
    return this.data.length;
  }

  constructor(data: string) {
    super(data);
  }

  compare(indexA: number, indexB: number): boolean {
    const charAtA = this.data[indexA].toLowerCase();
    const chatAtB = this.data[indexB].toLowerCase();

    return charAtA > chatAtB;
  }

  swap(indexA: number, indexB: number): void {
    const chars = this.data.split("");
    chars[indexA] = this.data[indexB];
    chars[indexB] = this.data[indexA];

    this.data = chars.join("");
  }

  sort(): void {
    Sorter.sort(this);
  }
}
