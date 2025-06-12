import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect';

test('renders Vite + React header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Cat List/i);
  expect(headerElement).toBeInTheDocument();
});