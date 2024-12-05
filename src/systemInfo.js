const os = require('os');

function getCPUCount() {
    return os.cpus().length;
}

module.exports = { getCPUCount };
