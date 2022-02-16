/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  // preset: "ts-jest",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  "testMatch": [
    "**/src/**/*.test.+(ts|tsx|js)"
  ],
  // coverageProvider: "v8",
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts'],
  testEnvironment: "node",
  "coverageReporters": [
    "json",
    "lcov",
    "text",
    "cobertura"
  ],
  "coverageDirectory": "coverage",
  "moduleNameMapper": {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  }
  // "coverageThreshold": {
  //   "global": {
  //     "branches": 100,
  //     "functions": 100,
  //     "lines": 100,
  //     "statements": 100
  //   }
  // }
};
