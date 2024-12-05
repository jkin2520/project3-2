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
function hasEnoughMemory(mb) {
    const os = require('os');
    const availableMemory = os.totalmem() / (1024 * 1024); // Convert to MB
    return availableMemory >= mb;
}

module.exports = { getCPUCount, getSystemInfo, hasEnoughMemory };
