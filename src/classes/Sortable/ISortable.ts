export interface ISortable {
  length: number;
  compare(indexA: number, indexB: number): boolean;
  swap(indexA: number, indexB: number): void;
  sort(): void;
}
