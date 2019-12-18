describe('Tick Tack Toe', () => {
  beforeEach(() => {
    cy.enterPlayers('player 1', 'player 2');
  });

  it('should allow enter 2 players', () => {
    cy.get('.status').contains('Next player: player 1 (X)');
  });

  it('should allow to game tick tack toe', () => {
    cy.playTickTackToe([0, 1, 4, 5, 8])
      .get('.status')
      .contains('Winner: player 1');
  });

  it('should show scoreboard when there is a winner', () => {
    cy.playTickTackToe([0, 1, 4, 5, 8])
      .get('.scoreboard > button')
      .contains('Close Scoreboard');
  });
});
