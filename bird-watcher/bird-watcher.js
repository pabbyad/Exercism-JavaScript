// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

import { listenerCount } from "process";

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */

export function totalBirdCount(birdsPerDay) {
  var totalBirds = 0;
  for (let i = 0; i < birdsPerDay.length; i ++){
    totalBirds += birdsPerDay[i];
  }
return totalBirds;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */

export function birdsInWeek(birdsPerDay, week) {
  var startDay = 7 * (week - 1);
  var endDay = 7 * week;
  var totalBirdsWeek = 0;
  var birdsPerWeek = birdsPerDay.slice(startDay, endDay);

  for (let i = 0; i < birdsPerWeek.length; i ++){
    totalBirdsWeek += birdsPerWeek[i];
  }

  return totalBirdsWeek;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */

export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++ ){
    if(i % 2 == 0) {
    birdsPerDay.splice(i , 1, birdsPerDay[i] + 1);
    }
  }

return birdsPerDay
}