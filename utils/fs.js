const fs = require('fs');
const { dirname, resolve } = require('path');

const getRootPath = () => dirname(require.main.filename);

/**
 * Writes file to the folder and create new folder if it is not exists
 * @param {string} path
 */
function writeFileSync(path, data) {
    if (fs.existsSync(path)) {
        return fs.writeFileSync(path, data);
    }

    const root = getRootPath();
    const relativePath = dirname(path);
    const pathToFolder = resolve(root, relativePath);

    fs.mkdirSync(pathToFolder, { recursive: true });
    fs.writeFileSync(path, data);
};

module.exports = {
    writeFileSync
}