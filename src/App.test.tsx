import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('App component', () => {
  it('renders header component', () => {
    render(<App />);
    const headerElement = screen.getByText(/Sibyl/i);
    expect(headerElement).toBeInTheDocument();
  });
});
