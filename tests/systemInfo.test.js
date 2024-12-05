const { getCPUCount } = require('../src/systemInfo');

describe('System Info Functions', () => {
    test('getCPUCount should return the number of CPUs', () => {
        const cpuCount = getCPUCount();
        expect(cpuCount).toBeGreaterThan(0);
    });
    test('getSystemInfo should return architecture and total memory', () => {
        const { arch, totalMemory } = getSystemInfo();
        expect(typeof arch).toBe('string');
        expect(totalMemory).toBeGreaterThan(0);
});
})
