import type {Config} from '@jest/types';

import baseConfig from '../jest.config';

const config: Config.InitialOptions = {
  ...baseConfig,
  rootDir: '../../',
  testTimeout: 10000,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!src/**/entry-point.ts'],
  coverageDirectory: 'coverage/e2e',
  testMatch: ['<rootDir>/tests/e2e/**/*.spec.ts'],
};

export default config;
