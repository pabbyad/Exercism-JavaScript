//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function isLeap(input) {
  let isLeapYear = false;
  let year = input;
  
  if ((year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0)) {
        isLeapYear = true;
  }

return isLeapYear;
};
