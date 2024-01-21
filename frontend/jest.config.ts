import type { JestConfigWithTsJest } from 'ts-jest'

const config: JestConfigWithTsJest = {
  extensionsToTreatAsEsm: ['.ts'],
  verbose: true,
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jsdom',

  transform: {
    '^.+\\.(ts|tsx)?$': ['ts-jest', { useESM: true }]
  },
  testPathIgnorePatterns: ['./dist']
}

export default config
