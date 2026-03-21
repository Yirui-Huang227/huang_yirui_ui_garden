import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders UI Component Library title', () => {
  render(<App />);
  const titleElement = screen.getByText(/UI Component Library - UI Garden/i);
  expect(titleElement).toBeInTheDocument();
});
