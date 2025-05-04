const jestExpoPreset = require('jest-expo/jest-preset');

module.exports = {
  ...jestExpoPreset,
  modulePathIgnorePatterns: [
    '/node_modules/',
    ...jestExpoPreset.transformIgnorePatterns
  ],
};