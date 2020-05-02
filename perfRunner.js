const puppeteer = require("puppeteer");
const commandLineArgs = require('command-line-args')

const { measurePageLoad } = require("./measure/measurePageLoad");
const { options, validate } = require('./cliOptions');

(async () => {
    const { url, runs } = validate(commandLineArgs(options));
    let browser;
    try {
        browser = await puppeteer.launch();
        await measurePageLoad(browser, "load-homepage", url, runs);
    } catch (error) {
        console.log("An error occurred: " + error);
        console.log(error.stack);
    } finally {
        if (browser.isConnected()) await browser.close(); // may fail if browser is undefined due to the start error
    }
})();
