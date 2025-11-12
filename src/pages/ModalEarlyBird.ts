import { Page, expect } from 'playwright/test';
export class ModalEarlyBird {
  private page: Page;

  private earlyContactTextLocator;
  private nameTextboxLocator;
  private companyNameTextboxLocator;
  private emailTextboxLocator;
  private ideasTextboxLocator;
  private notRobotCheckboxLocator;
  public sendButtonLocator;
  public successHeadingLocator;

  constructor(page: Page) {
    this.page = page;
    this.earlyContactTextLocator = page.getByText('Early Contact');
    this.nameTextboxLocator = page.getByRole('textbox', { name: 'Enter your name' });
    this.companyNameTextboxLocator = page.getByRole('textbox', { name: 'Enter your company name' });
    this.emailTextboxLocator = page.getByRole('textbox', { name: 'Enter your email' });
    this.ideasTextboxLocator = page.getByRole('textbox', { name: 'Share your ideas' });
    this.notRobotCheckboxLocator = page.locator(`//iframe[@title='reCAPTCHA']`);
    this.sendButtonLocator = page.getByRole('button', { name: 'Send' });
    this.successHeadingLocator = page.getByRole('heading', { name: 'Success' });
  }

  async waitForEarlyContactText() {
    await expect(this.earlyContactTextLocator).toBeVisible();
  }

  async fillContactInfo(name: string, companyName: string, email: string, ideas: string) {
    await this.nameTextboxLocator.fill(name);
    await this.companyNameTextboxLocator.fill(companyName);
    await this.emailTextboxLocator.fill(email);
    await this.ideasTextboxLocator.fill(ideas);
    await this.notRobotCheckboxLocator.click();
  }
}
