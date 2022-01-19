import { useCatFact } from './'
import { renderHook } from "@testing-library/react-hooks";

// mock timer using jest
jest.useFakeTimers();

describe('useCatFact', () => {
  test('should return an object with keys: loading, fact', () => {
    const {result} = renderHook(() => useCatFact())
    expect(result.current).toHaveProperty('loading')
    expect(result.current).toHaveProperty('fact')
  })

  test('should set loading to true after initial call', () => {
    const {result} = renderHook(() => useCatFact())
    expect(result.current.loading).toBe(true)
    expect(typeof result.current.fact).toBe('string')
  })
})
