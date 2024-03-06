//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function isLeap(input) {
  let isLeapYear = false;
  let year = input;
  
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        isLeapYear = true;
      }
    } else {
      isLeapYear = true;
      }
  }

return isLeapYear;
};
