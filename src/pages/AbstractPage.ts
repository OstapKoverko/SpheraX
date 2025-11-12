import { Locator, Page } from '@playwright/test';

export abstract class AbstractPage {
  protected page: Page;
  readonly acceptCookiesButton: Locator;
  readonly earlyBirdButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.acceptCookiesButton = page.getByRole('button', { name: 'Accept cookies' });
    this.earlyBirdButton = page.getByRole('button', { name: 'Early Bird' });
  }

  protected async goto(url: string = '/') {
    await this.page.goto(url);
  }

  async acceptCookies() {
    await this.acceptCookiesButton.click();
  }

  async openEarlyBirdModal() {
    await this.earlyBirdButton.click();
  }
}
