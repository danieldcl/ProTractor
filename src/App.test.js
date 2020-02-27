import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders ProTractor link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/ProTractor/i);
  expect(linkElement).toBeInTheDocument();
});
