# Cushon Isa App

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npm run start
   ```

3. Download the expo go app on ios or android and scan the QR code

## Completed

- Bare-bones app with fake server for QA purposes from which to get a list of ISA funds
- Login page, no login functionality
- Navigation to and from home page
- Back functionality disabled to ensure user cannot navigate to login page without logging out
- List of funds screen (navigation back to home not disabled) complete with loading and error handling
- Can tap button to select fund and navigate back to the home page
- Home page now displays selected fund
- Minimal QA on ios (iPhone 11) & android (Galaxy Fold 3). No QA on web
- Some unit tests
- Some theming

## To Do
(order of below to be confirmed after conversations with Product Owners)

- Tests
  - Unit tests for every screen, navigation, etc.
  - GitHub action to run tests on push (or other CI)

- A11y
  - Ensure theming WCAG AA compliant at minimum
  - QA with voiceover & talkback

- Security
  - Real log in/log out functionality
  - Persisted storage for offline functionality
  - Permission check implementation to get ISA fund list

- Connect to real server based on permissions
  - Get real ISA options
  - Post fund details
  - Get details

- Offline mode
  - Save above locally
  - Render information when not connected to the internet or server has problems

- Error handling
  - Replace console.error with better error handling
  - Error tracking, e.g. sentry?
  - Analytics?

- App distribution