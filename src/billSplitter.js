'use strict';

function splitBill(billAmount, tipInPc, numOfPeople) {
  if (isNaN(billAmount)) {
    throw new Error('Bill amount is not a number');
  }

  if (isNaN(tipInPc)) {
    throw new Error('Tip is not a number');
  }

  if (isNaN(numOfPeople)) {
    throw new Error('Number of people is not a number');
  }
}