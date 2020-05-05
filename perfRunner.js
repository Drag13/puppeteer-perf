const puppeteer = require("puppeteer");
const commandLineArgs = require('command-line-args')

const { measurePageLoad } = require("./measure/measurePageLoad");
const { options, validate } = require('./cliOptions');

(async () => {
    const { url, runs, throttling, network, testName } = validate(commandLineArgs(options, { camelCase: true }));

    const perfSettings = {
        testName,
        url,
        iterations: runs,
        networkConditions: network,
        throttling
    };

    let browser;

    try {
        browser = await puppeteer.launch();
        await measurePageLoad(browser, perfSettings);
    } catch (error) {
        console.log("An error occurred: " + error);
        console.log(error.stack);
    } finally {
        if (browser.isConnected()) await browser.close(); // may fail if browser is undefined due to the start error
    }

})();
