export default {
  displayName: 'ui-library',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['jsx'],
  coverageDirectory: '../../coverage/libs/ui-library',
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/__mocks__/svg.js',
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
};