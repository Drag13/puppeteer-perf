const options = [
    { name: 'url', alias: 'U', type: String, defaultOption: true },
    { name: 'runs', alias: 'R', type: Number, defaultValue: 3 },
    { name: 'throttling', alias: 'T', type: (v) => v === 'default' ? 'default' : null }
]

function validate(opt) {
    if (!opt.url) {
        throw new Error('Targer url is not set. Use \"--url "https://your-site.com"\" to set correct target')
    }

    return opt;
}

const defaultNetworkConditions = { // TODO: Make it a) optional or loadable from testsuite
    CPUThrottlingRate: 4,
    offline: false,
    latency: 200, // ms
    downloadThroughput: 780 * 1024 / 8, // 780 kb/s
    uploadThroughput: 330 * 1024 / 8, // 330 kb/s
}

module.exports = {
    options,
    defaultNetworkConditions,
    validate
};
