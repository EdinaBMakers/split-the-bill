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
      .toThrowError('Tip cannot be negative');
  });

  it('throws error if number of peolpe is not a number', () => {
    expect(() => { splitBill(20, 20, 'numOfPeople') })
      .toThrowError('Number of people is not a number');
  });

  it('throws error if number of people is a negative number', () => {
    expect(() => { splitBill(20, 20, -1) })
      .toThrowError('Number of people must be 1 or more');
  });

  it('throws error if number of people is zero', () => {
    expect(() => { splitBill(20, 20, 0) })
      .toThrowError('Number of people must be 1 or more');
  });

  it('can calculate bill without tip for one person', () => {
    expect(splitBill(20, 0, 1)).toEqual(20);
  });

  it('can calculate bill with tip for one person', () => {
    expect(splitBill(20, 10, 1)).toEqual(22);
  });

  it('can calculate bill without tip for multiple people', () => {
    expect(splitBill(20, 0, 2)).toEqual(10);
  });

  it('can calculate bill with tip for multiple people', () => {
    expect(splitBill(20, 10, 2)).toEqual(11);
  });
});