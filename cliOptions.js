const Network = (type) => {
    switch (type) {
        case 'f3g':
            return Fast3g;
        case 's3g':
            return Slow3g
        default:
            noLimits
    }
}

const options = [
    { name: 'url', alias: 'U', type: String, defaultOption: true },
    { name: 'runs', alias: 'R', type: Number, defaultValue: 3 },
    { name: 'throttling', alias: 'T', type: Number, defaultValue: 1 },
    { name: 'network', alias: 'N', type: Network },
    { name: 'test-name', type: String, defaultValue: 'unnamed_perf_run' }
]

function validate(opt) {
    if (!opt.url) {
        throw new Error('Targer url is not set. Use \"--url "https://your-site.com"\" to set correct target')
    }

    return opt;
}

const Fast3g = {
    downloadThroughput: 1.6 * 1024 * 1024 / 8 * .9,
    uploadThroughput: 750 * 1024 / 8 * .9,
    latency: 150 * 3.75,
    offline: false
}

const Slow3g = {
    downloadThroughput: 500 * 1024 / 8 * .8,
    uploadThroughput: 500 * 1024 / 8 * .8,
    latency: 400 * 5,
    offline: false
}

const noLimits = {
    downloadThroughput: -1,
    uploadThroughput: -1,
    latency: 0,
    offline: false
}

module.exports = {
    options,
    validate
};
