// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name){
    case 'Pure Strawberry Joy':
      return 0.5
    case 'Energizer':
    case 'Green Garden':
      return 1.5
    case 'Tropical Island':
      return 3
    case 'All or Nothing':
      return 5
    default:
      return 2.5
  }
}


/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns number of limes cut or error message if invalid lime type used
 */

 export function limesToCut(wedgesNeeded, limes) {
  let limeCount = 0;
  while (wedgesNeeded > 0) {
    if (limes[limeCount] === undefined){
      break;
    }
    switch (limes[limeCount]) {
      case 'small':
        wedgesNeeded -= 6;
        break;
      case 'medium':
        wedgesNeeded -= 8;
        break;
      case 'large':
        wedgesNeeded -= 10;
        break;
      default:
        return 'Lime type not recognized, please use only "small", "medium", or "large" limes.';
        break;
    }
    
    limeCount += 1;
  }
return limeCount;
}


/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */


export function remainingOrders(timeLeft, orders) {
  let orderNumber = 0;
  while (timeLeft > 0){
    if (orders[orderNumber] === undefined){
      break;
    }
    switch (orders[orderNumber]) {
      case 'Pure Strawberry Joy':
        timeLeft -= 0.5;
        break;
      case 'Energizer':
      case 'Green Garden':
        timeLeft -= 1.5;
        break;
      case 'Tropical Island':
        timeLeft -= 3;
        break;
      case 'All or Nothing':
        timeLeft -= 5;
        break;
      default:
        timeLeft -= 2.5;
        break;
    }
    orderNumber += 1;
  }
orders.splice(0, orderNumber);
return orders;
}
