const puppeteer = require("puppeteer");
const commandLineArgs = require('command-line-args')

const { measurePageLoad } = require("./measure/measurePageLoad");
const { options, defaultNetworkConditions, validate } = require('./cliOptions');

(async () => {
    const { url, runs, throttling } = validate(commandLineArgs(options));
    const perfSettings = {
        testName: 'load-homepage', //TODO: move to params
        url,
        iterations: runs,
        networkConditions: throttling === 'default' ? defaultNetworkConditions : null
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
