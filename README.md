# Todos

This project contains a small authenticated app using google login.
Playwright is used to run e2e test

## Requirements

### Configure firebase

- install firebase cli

       npm install -g firebase-tools

- create a firebase project

Create a firebase project [here](https://console.firebase.google.com/)

- reset the firebase config in the project

      npx ng add @angular/fire

Accept all the selections and select the project that was created in the previous step.
A quick look in `app.module.ts` can help see if the schematic worked well.

#### configure firebase authentication

In firebase console, select google identity provider

### install dependencies

    npm ci

## Run project

    npm start

## Playwright

### Configure oauth credentials

Please follow the instructions [here](https://docs.cypress.io/guides/end-to-end-testing/google-authentication) to get google credentials and create a file `.env` at the root of the project with the following:

    CLIENT_ID="xxx"
    CLIENT_SECRET="xxx"
    REFRESH_TOKEN="xxx"
### run playwright tests

    npx playwright test