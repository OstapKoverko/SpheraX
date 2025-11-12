# SpheraX - End-to-End Test Automation

This repository contains end-to-end (E2E) test automation for the SpheraX application using Playwright and TypeScript.

## Project Overview

SpheraX is an automated testing suite focused on validating the core functionality and user interactions of the SpheraX platform. The tests are built using Playwright Test Framework with TypeScript for type safety and maintainability.

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running Tests](#running-tests)
- [Test Coverage](#test-coverage)
- [Project Structure](#project-structure)
- [Code Quality](#code-quality)

## Installation

### Prerequisites

- Node.js 16+ (LTS recommended)
- npm or yarn

### Install Dependencies

```bash
npm install
```

This will install all required dependencies, including:

- `@playwright/test` - Playwright test framework
- `@types/node` - TypeScript types for Node.js

## Environment Variables

The project uses environment variables to configure the base URL and other settings for different environments.

### Setting Environment Variables

#### On Windows PowerShell

```powershell
$env:SPHERAX_BASE_URL="https://dev01.sphrx.xyz"
```

#### On macOS/Linux (Bash)

```bash
export SPHERAX_BASE_URL="https://dev01.sphrx.xyz"
```

### Available Configuration

- **SPHERAX_BASE_URL** - The base URL for the application (default: `https://dev01.sphrx.xyz/`)
  - Used in `playwright.config.ts` for setting the base URL in test actions
  - Can be overridden via environment variable or command line

## Running Tests

### Run All Tests

```bash
npx playwright test
```

### Run Tests with Specific Base URL (Windows PowerShell)

```powershell
$env:SPHERAX_BASE_URL="https://dev01.sphrx.xyz" ; npx playwright test
```

### Run Tests with Specific Base URL (macOS/Linux)

```bash
SPHERAX_BASE_URL="https://dev01.sphrx.xyz" npx playwright test
```

### Run Tests for Specific Browser

```bash
npx playwright test --project=chromium
```

### Run Tests in Debug Mode

```bash
npx playwright test --debug
```

### View Test Report

After running tests, view the HTML report:

```bash
npx playwright show-report
```

## Test Coverage

### Area Tested

**Home Page Functionality** - Core landing page interactions and user workflows

### Main Scenarios Automated

1. **Check Home Page Elements** - Validates visibility of key page sections:

   - Business Management Systems section
   - Process Repository section
   - Quick Answer section
   - Customizable Solutions section
   - Enterprise tab and employees count display

2. **Check Sending Messages to Assistant** - Tests the AI assistant interaction:

   - Sending custom messages through the text input
   - Sending predefined messages via the quick action menu
   - Verifying assistant message handling

3. **Check Early Bird Modal** - Validates the contact form modal:

   - Opening the Early Bird modal
   - Filling contact information (name, company, email, ideas)
   - Verifying form submission workflow

4. **Check Early Bird Modal with Invalid Email** - Tests form validation:
   - Verifying email format validation
   - Ensuring send button is disabled with invalid email

### Future Enhancements

If more time were available, the following enhancements would be implemented:

- **CAPTCHA Automation** - Integrate CAPTCHA solving for full Early Bird modal submission testing
- **API Integration Tests** - Add API-level tests for backend functionality verification
- **Cross-Browser Testing** - Enable Firefox and Safari testing in the Playwright configuration
- **Data-Driven Tests** - Expand test data sets and implement parameterized testing
- **Multi-Language Support** - Add tests for different language versions of the application
- **CI/CD Integration** - Set up automated test execution in GitHub Actions or similar CI platforms

## Project Structure

```
SpheraX/
├── src/
│   ├── fixtures/
│   │   └── pageFixture.ts          # Custom Playwright fixtures for page objects
│   ├── pages/
│   │   ├── AbstractPage.ts         # Base page object class
│   │   ├── HomePage.ts             # Home page object and actions
│   │   └── ModalEarlyBird.ts       # Early Bird modal object
│   └── testData/
│       ├── homePagedata.ts         # Test data for home page tests
│       └── modalEarlyBirdData.ts   # Test data for modal tests
├── tests/
│   └── homePage.test.ts            # Home page test suite
├── playwright.config.ts             # Playwright configuration
├── tsconfig.json                    # TypeScript configuration
├── package.json                     # Project dependencies and metadata
├── .prettierrc.json                 # Code formatting configuration
└── README.md                        # This file
```

## Code Quality

### Prettier Configuration

The project uses Prettier for consistent code formatting. The configuration is defined in `.prettierrc.json`:

```json
{
  "semi": true,
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2,
  "trailingComma": "all",
  "arrowParens": "always"
}
```

**Configuration Details:**

- **semi: true** - Always add semicolons at the end of statements
- **singleQuote: true** - Use single quotes instead of double quotes
- **printWidth: 100** - Wrap lines at 100 characters
- **tabWidth: 2** - Use 2 spaces for indentation
- **trailingComma: all** - Add trailing commas in multi-line constructs
- **arrowParens: always** - Always include parentheses around arrow function parameters

### Design Patterns

- **Page Object Model** - Encapsulates page interactions and selectors in dedicated page classes
- **Fixture Pattern** - Uses Playwright fixtures for test setup
- **Test Data Separation** - Keeps test data separate from test logic for maintainability

## Contributing

When contributing to this project, ensure that:

1. Tests are written following the Page Object Model pattern
2. Code is formatted according to Prettier configuration
3. New tests include appropriate assertions and error handling
4. Test data is stored in the `testData` directory

## Repository

https://github.com/OstapKoverko/SpheraX
