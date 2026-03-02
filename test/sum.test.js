import { describe, it, expect } from 'vitest'
import { sum } from '../src/sum'

describe('sum function', () => {
  it('should return 5 when adding 2 and 3', () => {
    expect(sum(2, 3)).toBe(5)
  })
})