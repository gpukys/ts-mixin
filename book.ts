import { Item } from "./item";
import { Pages } from "./pages";
import { IterableMixin } from "./pagesIterable";

class BookInstance extends Item {
  constructor(
    public pages: Pages,
    public title: string,
    public author: string
  ) {
    super()
  }

  toString() {
    return `Book: ${this.title} by ${this.author} with number of pages: ${this.pages.length()}`
  }

  pageToString(pageNumber: number) {
    if (pageNumber >= this.pages.length()) {
      return null
    }
    return `The book: ${this.title}, author: ${this.author}, it has ${this.pages.length()} pages, here is ${this.pages.pages[pageNumber].pageType}, and it's material is ${this.pages.pages[pageNumber].pageMaterial}`
  }
}

export class Book extends IterableMixin(BookInstance) {}