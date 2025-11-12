import { test } from '../src/fixtures/pageFixture';
import { expect } from '@playwright/test';
import { homePageData, AssistantMessage } from '../src/testData/homePagedata';
import { earlyContactData } from '../src/testData/modalEarlyBirdData';

test.describe('Home Page Tests', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.goto();
    await homePage.acceptCookies();
  });

  test('Check home page elements', async ({ homePage }) => {
    await expect(homePage.businessManagementSystemsHeaderLocator).toBeVisible();
    await expect(homePage.processRepositoryHeaderLocator).toBeVisible();
    await expect(homePage.quickAnswerHeaderLocator).toBeVisible();
    await expect(homePage.customizableSolutionsHeaderLocator).toBeVisible();

    await homePage.enterpriseTabLocator.click();

    await expect(homePage.employeesTextLocator).toBeVisible();
  });

  test('Check sending different messages to the assistant', async ({ homePage }) => {
    await homePage.sendMessageToAskAssistant(homePageData.customMessageForAssistant);
    await homePage.sendMessageToAskAssistant(AssistantMessage.message3);

    // some additional check after sending messages to the assistant
  });

  test('Check Early Bird modal', async ({ homePage }) => {
    await homePage.openEarlyBirdModal();
    await homePage.modalEarlyBird.waitForEarlyContactText();

    await homePage.modalEarlyBird.fillContactInfo(
      earlyContactData.name,
      earlyContactData.companyName,
      earlyContactData.email,
      earlyContactData.ideas,
    );

    // We should disable captcha in the test environment to automate this step

    // await homePage.modalEarlyBird.sendButtonLocator.click();

    // await expect(homePage.modalEarlyBird.successHeadingLocator).toBeVisible();
  });

  test('Check Early Bird modal with invalid email', async ({ homePage }) => {
    await homePage.openEarlyBirdModal();
    await homePage.modalEarlyBird.waitForEarlyContactText();

    await homePage.modalEarlyBird.fillContactInfo(
      earlyContactData.name,
      earlyContactData.companyName,
      'invalidEmailFormat@.com',
      earlyContactData.ideas,
    );

    await expect(homePage.modalEarlyBird.sendButtonLocator).toBeDisabled();
  });
});
