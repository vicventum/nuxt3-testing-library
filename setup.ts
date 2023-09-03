import matchers from '@testing-library/jest-dom/matchers'
import { expect } from 'vitest'
// @ts-ignore
// global.CSS = { supports: () => false };
expect.extend(matchers)
