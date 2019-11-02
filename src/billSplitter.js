'use strict';

function splitBill(billAmount, tipInPc, numOfPeople) {
  _validateBillAmount(billAmount);
  _validateTip(tipInPc);
  _validateNumOfPeople(numOfPeople);

  return billAmount * (1 + tipInPc / 100) / numOfPeople;
}

function _validateBillAmount(billAmount) {
  if (isNaN(billAmount)) {
    throw new Error('Bill amount is not a number');
  }

  if (billAmount <= 0) {
    throw new Error('Bill amount must be greater than zero');
  }
}

function _validateTip(tipInPc) {
  if (isNaN(tipInPc)) {
    throw new Error('Tip is not a number');
  }

  if (tipInPc < 0) {
    throw new Error('Tip cannot be negative');
  }
}

function _validateNumOfPeople(numOfPeople) {
  if (isNaN(numOfPeople)) {
    throw new Error('Number of people is not a number');
  }

  if (numOfPeople <= 0) {
    throw new Error('Number of people must be greater than zero');
  }
}