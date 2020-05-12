import { Sorter } from "./Sorter";
import { Sortable } from "./Sortable/Sortable";

export class NumbersCollection extends Sortable<number[]> {
  get length(): number {
    return this.data.length;
  }

  constructor(collection: number[]) {
    super(collection);
  }

  compare(indexA: number, indexB: number): boolean {
    return this.data[indexA] > this.data[indexB];
  }

  swap(indexA: number, indexB: number): void {
    const valueAtA = this.data[indexA];
    this.data[indexA] = this.data[indexB];
    this.data[indexB] = valueAtA;
  }

  sort(): void {
    Sorter.sort(this);
  }
}
