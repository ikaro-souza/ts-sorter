import { ISortable } from "./Sortable/ISortable";

export class Sorter {
  static sort(collection: ISortable): void {
    for (let i = 0; i < collection.length; i++) {
      for (let j = 0; j < collection.length - i - 1; j++) {
        if (collection.compare(j, j + 1)) collection.swap(j, j + 1);
      }
    }
  }
}
