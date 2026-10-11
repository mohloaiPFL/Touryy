import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Lesotho tourism homepage', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /discover the beauty of lesotho/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: /explore lesotho/i })
  ).toBeInTheDocument();
});
