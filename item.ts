export abstract class Item {
  toString?(): void;
  pageToString?(pageNumber: number): void;
}