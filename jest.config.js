const jestConfig = {
  globalSetup: '<rootDir>/test.env.js',
  moduleNameMapper: {
    /* Handle CSS imports (with CSS modules)
        https://jestjs.io/docs/webpack#mocking-css-modules */
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',

    /* Handle image imports
        https://jestjs.io/docs/webpack#handling-static-assets */
    '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '@molecules/(.*)$': '<rootDir>/src/components/molecules/$1',
    '@assets/(.*)$': '<rootDir>/src/assets/$1',
    '@organisms/(.*)$': '<rootDir>/src/components/organisms/$1',
    '@pages/(.*)$': '<rootDir>/src/components/pages/$1',
    '@services(.*)$': '<rootDir>/src/services$1',
    '@services/(.*)$': '<rootDir>/src/services/$1',
    '@constants(.*)$': '<rootDir>/src/constants$1',
    '@constants/(.*)$': '<rootDir>/src/constants/$1',
    '@types/(.*)$': '<rootDir>/src/types/$1',
    '@utils/(.*)$': '<rootDir>/src/utils/$1',
    '@theme(.*)$': '<rootDir>/src/theme$1',
    '@theme/(.*)$': '<rootDir>/src/theme/$1',
    '@uilibrary/(.*)$': '<rootDir>/uilibrary/$1',
    '@images$': '<rootDir>/uilibrary/images',
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
    '<rootDir>/coverage/',
    '<rootDir>/public/',
    '<rootDir>/.husky/',
  ],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    /* Use babel-jest to transpile tests with the next/babel preset
        https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js', 'jest-canvas-mock'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!pages/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.{js,ts}',
    '!**/node_modules/**',
    '!src/**/**/styles.ts',
    '!src/services/type/**',
    '!src/constants/**',
    '!src/assets/**',
  ],
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0,
    },
  },
};

module.exports = jestConfig;
