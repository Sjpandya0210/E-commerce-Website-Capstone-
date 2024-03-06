module.exports = {
    moduleNameMapper: {
      "\\.css$": "identity-obj-proxy",
    },
    transformIgnorePatterns: [
      '/node_modules/',
    ],
    testEnvironment: 'jsdom',
  };
  