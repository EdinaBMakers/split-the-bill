'use strict';

function splitBill(billAmount, tipInPc, numOfPeople) {
  if (isNaN(billAmount)) {
    throw new Error('Bill amount is not a number');
  }

  if (billAmount <= 0) {
    throw new Error('Bill amount must be greater than zero');
  }

  if (isNaN(tipInPc)) {
    throw new Error('Tip is not a number');
  }

  if (tipInPc < 0) {
    throw new Error('Tip cannot be negative');
  }

  if (isNaN(numOfPeople)) {
    throw new Error('Number of people is not a number');
  }

  if (numOfPeople <= 0) {
    throw new Error('Number of people must be greater than zero');
  }

  return billAmount * (1 + tipInPc / 100) / numOfPeople;
}