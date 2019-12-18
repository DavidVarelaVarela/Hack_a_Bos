import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Square } from './Square';

describe('<Square />', () => {
  it('should show the value marked - X, O or no value', () => {
    const { getByRole, rerender } = render(<Square value="X" />);
    expect(getByRole('button')).toHaveTextContent('X');
    rerender(<Square value="O" />);
    expect(getByRole('button')).toHaveTextContent('O');
    rerender(<Square />);
    expect(getByRole('button')).toHaveTextContent('');
  });
  it('should tell the parent it was clicked', () => {
    const mockFunction = jest.fn();
    const { getByRole } = render(<Square onChangeSquare={mockFunction} />);
    fireEvent.click(getByRole('button'));
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});
