import { Page } from "./page";

export class Pages {
  constructor(
    public pages: Page[]
  ) {}

  length() {
    return this.pages.length;
  }
}