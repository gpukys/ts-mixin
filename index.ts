import { Book } from "./book";
import { Page } from "./page";
import { Pages } from "./pages";

const book = new Book(new Pages([new Page(1, 'some type', 'page mat'), new Page(2, 'some other type', 'page glass')]), 'Harry Flopper', 'J.K.Rowling')

for (let page of book) {
  console.log(page);
}