import React from 'react';
import { Board } from './Board';
import { render } from '@testing-library/react';

test('<Board />', () => {
  const { container } = render(<Board />);
  expect(container).toMatchSnapshot();
});
