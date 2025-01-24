import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Extend the base configuration
const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
];

// Add the `ignores` property to specify directories to ignore
eslintConfig.push({
  ignores: [
    '.next/', // Next.js build folder
    'node_modules/', // Third-party dependencies
    'public/', // Static files
  ],
});

export default eslintConfig;
