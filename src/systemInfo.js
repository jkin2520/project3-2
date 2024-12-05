const os = require('os');
/**
 * Returns the number of CPUs on the system.
 * @returns {number} Number of CPU cores.
 */
function getCPUCount() {
    return os.cpus().length;
}
/**
 * Retrieves system architecture and total memory.
 * @returns {{arch: string, totalMemory: number}} An object with system architecture and memory.
 */
function getSystemInfo() {
    const os = require('os');
    return {
        arch: os.arch(),
        totalMemory: os.totalmem(),
    };
}
/**
 * Checks if the system has at least the specified memory in megabytes.
 * @param {number} mb - Memory to check in megabytes.
 * @returns {boolean} True if sufficient memory is available, otherwise false.
 */
function hasEnoughMemory(mb) {
    const os = require('os');
    const availableMemory = os.totalmem() / (1024 * 1024); // Convert to MB
    return availableMemory >= mb;
}

module.exports = { getCPUCount, getSystemInfo, hasEnoughMemory };
