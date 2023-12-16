import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

gametest('renders my game', () => {
  render(<App />);
  const linkElement = screen.getByText(/this is my game/i);
  expect(linkElement).toBeInTheDocument();
})