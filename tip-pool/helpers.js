
/**
 * accepts 'tipAmt', 'billAmt', 'tipPercent' and returns the sum total of specified type in allPayments
 * 
 * @param { string } type This param can be 'tipAmt' or 'billAmt', or 'tipPercent'
 * @returns { number } This Function returns the total from allPayments of type above
 */
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];
    total += Number(payment[type]);
  }

  return total;
}

/**
 * converts the bill and tip amount into a tip percent
 * @param { number } billAmt This param can be any number except 0
 * @param { number } tipAmt This param can be any number including 0 
 * @returns { number } This is the tip percent as a whole number value
 */
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

/** 
 * expects a table row element, appends a newly created td element from the value
 * 
 * @param { HTMLTableRowElement } tr A table row element
 * @param { string|number } value any value that can be rendered 
 *   appropriately by innertext
 */
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}
