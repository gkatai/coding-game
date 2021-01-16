/* eslint-disable no-undef */

const path = require("path");

module.exports = {
  testEnvironment: "node",
  moduleDirectories: [
    "node_modules",
    path.join(__dirname, "src"),
    path.join(__dirname, "test"),
  ],
  moduleNameMapper: {
    "\\.module\\.css": "identity-obj-proxy",
    "\\.css$": require.resolve("./test/style-mock.js"),
  },
  collectCoverageFrom: [
    "**/src/**/*.{js,jsx}",
    "!src/index.js",
    "!src/store.js",
  ],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};
