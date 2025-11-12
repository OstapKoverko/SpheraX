import { AbstractPage } from './AbstractPage';
import { ModalEarlyBird } from './ModalEarlyBird';
import { AssistantMessage } from '../testData/homePagedata';

export class HomePage extends AbstractPage {
  public modalEarlyBird = new ModalEarlyBird(this.page);

  public businessManagementSystemsHeaderLocator = this.page.getByRole('heading', {
    name: 'Business management systems',
  });

  public processRepositoryHeaderLocator = this.page.getByRole('heading', {
    name: 'Right now you can create a',
  });

  public quickAnswerHeaderLocator = this.page.getByRole('heading', {
    name: 'Need a quick answer or advice',
  });

  public customizableSolutionsHeaderLocator = this.page.getByRole('heading', {
    name: 'Customizable solutions for',
  });

  public enterpriseTabLocator = this.page.getByRole('tab', { name: 'Enterprise' });
  public employeesTextLocator = this.page.getByText('-999+ employees');

  private askAssistantTextboxLocator = this.page.getByRole('textbox', { name: 'Ask anything...' });

  private chooseInsteadOfTypingLocator = this.page.getByTestId('ai-help-icon');

  private menuItemLocator = (messageForAssistant: AssistantMessage) =>
    this.page.getByRole('menuitem', { name: messageForAssistant });

  private sendMessageButtonLocator = this.page.locator(`//button[contains(@class,'css-n2xzas')]`);

  async goto() {
    await super.goto('/');
  }

  async sendMessageToAskAssistant(messageForAssistant: AssistantMessage | string) {
    if (
      messageForAssistant == AssistantMessage.message1 ||
      messageForAssistant == AssistantMessage.message2 ||
      messageForAssistant == AssistantMessage.message3
    ) {
      await this.chooseInsteadOfTypingLocator.click();
      await this.menuItemLocator(messageForAssistant).click();
    } else {
      await this.askAssistantTextboxLocator.fill(messageForAssistant);
    }
    await this.sendMessageButtonLocator.click();
  }

  async openEarlyBirdModal() {
    await super.openEarlyBirdModal();
  }
}
