const os = require('os');

function getCPUCount() {
    return os.cpus().length;
}
function getSystemInfo() {
    const os = require('os');
    return {
        arch: os.arch(),
        totalMemory: os.totalmem(),
    };
}

module.exports = { getCPUCount, getSystemInfo };
