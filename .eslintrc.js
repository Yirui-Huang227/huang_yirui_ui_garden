module.exports = {
  extends: [
    'react-app', // CRA base rules
    'react-app/jest', // CRA Jest rules for tests
  ],
  rules: {
    // custom rules
    quotes: ['error', 'single'], // single quotes
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // allow unused vars starting with _
    'no-console': ['warn'], // warn on console.log
    'react/prop-types': 'off', // disable prop-types rule (TypeScript handles it)
  },
};
