const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "cypress/cucumber-json",
    reportPath: "./reports/cucumber-report.html",
    metadata: {
        browser: {
            name: "Electron",
            version: "100",
        },
        device: "Local machine",
        platform: {
            name: "Windows",
            version: "10",
        },
    },
});