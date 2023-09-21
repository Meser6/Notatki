import { Page } from "playwright/test";
export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}
// w base page mozemy tez tezymac wszystkie metody jakie w cy bysmy trzymali w commands
