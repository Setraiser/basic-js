module.exports = class DepthCalculator {
    calculateDepth(arr) {
        return (!Array.isArray(arr)) ? 0 : arr.reduce((prev, next) => Math.max(this.calculateDepth(next), prev), 0) + 1;
    }
};