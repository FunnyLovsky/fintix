import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import App from './App'

test('render App', () => {
    render(<App />)
    expect(true).toBe(true)
})
