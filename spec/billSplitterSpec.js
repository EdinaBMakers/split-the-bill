'use strict';

describe('#splitBill', () => {
  it('throws error if bill amount is not a number', () => {
    expect(() => { splitBill('billAmount', 20, 2) })
      .toThrowError('Bill amount is not a number');
  });

  it('throws error if tip is not a number', () => {
    expect(() => { splitBill(20, 'tip', 2) })
      .toThrowError('Tip is not a number');
  });

  it('throws error if number of peolpe is not a number', () => {
    expect(() => { splitBill(20, 20, 'numOfPeople') })
      .toThrowError('Number of people is not a number');
  });
});