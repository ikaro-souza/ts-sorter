import { ISortable } from "./ISortable";

export abstract class Sortable<T> implements ISortable {
  constructor(public data: T) {}

  /**
   * @returns Length of the collection
   */
  abstract get length(): number;

  /**
   * Checks wether the value at indexA is bigger than the value at indexB
   * @param indexA Index of item A
   * @param indexB Index of item B
   * @returns true if a > b, false otherwise
   */
  abstract compare(indexA: number, indexB: number): boolean;

  /**
   * Swaps the values at indexA and indexB
   * @param indexA Index of item A
   * @param indexB Index of item B
   */
  abstract swap(indexA: number, indexB: number): void;

  /**
   * Sorts the collection
   */
  abstract sort(): void;
}
