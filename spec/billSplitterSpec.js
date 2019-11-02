'use strict';

describe('#splitBill', () => {
  it('throws error if bill amount is not a number', () => {
    expect(() => { splitBill('billAmount', 20, 2) })
      .toThrowError('Bill amount is not a number');
  });

  it('throws error if bill amount is a negative number', () => {
    expect(() => { splitBill(-1, 20, 2) })
      .toThrowError('Bill amount must be greater than zero');
  });

  it('throws error if bill amount is zero', () => {
    expect(() => { splitBill(0, 20, 2) })
      .toThrowError('Bill amount must be greater than zero');
  });

  it('throws error if tip is not a number', () => {
    expect(() => { splitBill(20, 'tip', 2) })
      .toThrowError('Tip is not a number');
  });

  it('throws error if tip is a negative number', () => {
    expect(() => { splitBill(20, -5, 2) })
      .toThrowError('Tip must be greater than zero');
  });

  it('throws error if tip is zero', () => {
    expect(() => { splitBill(20, 0, 2) })
      .toThrowError('Tip must be greater than zero');
  });

  it('throws error if number of peolpe is not a number', () => {
    expect(() => { splitBill(20, 20, 'numOfPeople') })
      .toThrowError('Number of people is not a number');
  });

  it('throws error if number of people is a negative number', () => {
    expect(() => { splitBill(20, 20, -1) })
      .toThrowError('Number of people must be greater than zero');
  });

  it('throws error if number of people is zero', () => {
    expect(() => { splitBill(20, 20, 0) })
      .toThrowError('Number of people must be greater than zero');
  });
});