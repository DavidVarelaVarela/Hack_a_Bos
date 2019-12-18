import React from 'react';
import { render } from '@testing-library/react';
import { Status } from './Status';

describe('<Status />', () => {
  it('should show the next player', () => {
    const { getByTestId } = render(
      <Status rounds={3} winner={null} next={'player2'} />
    );
    expect(getByTestId('status')).toHaveTextContent('Next player: player2');
  });

  it('should show a tie when the number of rounds is 9', () => {
    const { getByTestId } = render(
      <Status rounds={9} winner={null} next={'player2'} />
    );
    expect(getByTestId('status')).toHaveTextContent('Tie');
  });

  it('should show the winner', () => {
    const { getByTestId } = render(
      <Status rounds={9} winner={'player1'} next={'player2'} />
    );
    expect(getByTestId('status')).toHaveTextContent('Winner: player1');
  });
});
