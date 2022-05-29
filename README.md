Cypress commands:

Launch cypress GUI:
-npx cypress open
-npm run cypress:open

Execute tests:
-npm run cy:run --spec "cypress/integration/tests/loginTestsNoGherkin.spec.js"
-npm run cy:run -- --record --key dfe585c1-5202-45f2-b554-1862ffa6e119 --spec "cypress/integration/tests/loginTestsNoGherkin.spec.js"

Additional libraries:
-cypress-cucumber-preprocessor