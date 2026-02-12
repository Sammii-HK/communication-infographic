import { render, screen } from '@testing-library/react';
import App from './App';

// Mock framer-motion to avoid animation issues in test environment
jest.mock('framer-motion', () => {
  const React = require('react');
  return {
    motion: {
      div: React.forwardRef((props, ref) => {
        const { initial, animate, exit, whileInView, viewport, transition, ...rest } = props;
        return <div ref={ref} {...rest} />;
      }),
    },
    AnimatePresence: ({ children }) => children,
  };
});

// Mock IntersectionObserver for whileInView
beforeAll(() => {
  window.IntersectionObserver = jest.fn(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));
});

test('renders Communication Infographic title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Communication Infographic/i);
  expect(titleElement).toBeInTheDocument();
});
