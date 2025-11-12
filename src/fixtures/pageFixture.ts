import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

// Extend Playwright test with page objects.
type MyFixtures = {
  homePage: HomePage;
};

export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
});

/*
Usage in a test file:

test('check Home page async ({ homePage }) => {
  await homePage.goto();
  await homePage.acceptCookies();
});
*/
