const { getCPUCount } = require('../src/systemInfo');

describe('System Info Functions', () => {
    test('getCPUCount should return the number of CPUs', () => {
        const cpuCount = getCPUCount();
        expect(cpuCount).toBeGreaterThan(0);
    });
});
