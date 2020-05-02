const options = [
    { name: 'url', alias: 'U', type: String, defaultOption: true },
    { name: 'runs', alias: 'R', type: Number, defaultValue: 3 },
]

function validate(opt) {
    if (!opt.url) {
        throw new Error('Targer url is not set. Use \"--url "https://your-site.com"\" to set correct target')
    }

    return opt;
}

module.exports = {
    options,
    validate
};
