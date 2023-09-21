import { BasePage } from "./basePage";
import { Locator, Page } from "playwright/test";
export class pageAtPOM extends BasePage {
  get element() {
    return this.page.locator("css");
  }

  async doSomething() {
    await this.element.click();
  }
}

//alternatywny sposob na trzymanie elementow
export class pageAtPOMV2 extends BasePage {
  readonly element: Locator;

  constructor(page: Page) {
    super(page);
    this.element = page.locator("css");
  }

  async doSomething() {
    await this.element.click();
  }
}
//jeszcze inny pomysl na trzymanie elementow
export class pageAtPOMV3 extends BasePage {
  private selector: string = "css";

  async doSomething() {
    await this.page.locator(this.selector).click();
  }
}
