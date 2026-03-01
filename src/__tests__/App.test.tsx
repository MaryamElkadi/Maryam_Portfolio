import { render, screen } from '@testing-library/react'
import App from '../App'

// Mock matchMedia for Framer Motion or JS fallback
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(), // Deprecated
        removeListener: vi.fn(), // Deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
    })),
})

// Mock IntersectionObserver for Framer Motion whileInView warnings
class IntersectionObserverMock {
    observe = vi.fn()
    unobserve = vi.fn()
    disconnect = vi.fn()
}
window.IntersectionObserver = IntersectionObserverMock as any

describe('App Component Portfolio Verification', () => {
    it('renders the Navbar with main links text', () => {
        render(<App />)
        expect(screen.getAllByText(/Experience/i).length).toBeGreaterThan(0)
        expect(screen.getAllByText(/Projects/i).length).toBeGreaterThan(0)
    })

    it('renders the Hero section with correct name and title', () => {
        render(<App />)
        expect(screen.getAllByText(/Maryam Khamis/i).length).toBeGreaterThan(0)
        expect(screen.getAllByText(/Software Engineer/i).length).toBeGreaterThan(0)
    })

    it('renders the Tech Stack section with badges', () => {
        render(<App />)
        expect(screen.getByText(/Tech Stack/i)).toBeInTheDocument()
        // Verify some skills
        expect(screen.getByText('React')).toBeInTheDocument()
        expect(screen.getByText('MongoDB')).toBeInTheDocument()
    })

    it('renders Experience Timeline with Teaching role', () => {
        render(<App />)
        expect(screen.getByText(/Computer and Math Teacher/i)).toBeInTheDocument()
        expect(screen.getByText(/40% improvement in student analytical skills/i)).toBeInTheDocument()
    })

    it('renders Stats with correct data', () => {
        render(<App />)
        expect(screen.getByText('10+')).toBeInTheDocument()
        expect(screen.getByText('40%+')).toBeInTheDocument()
    })
})
