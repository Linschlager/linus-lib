import {
  ArrayDoesNotHaveRequiredPropertyError,
  IllegalArgumentError,
  RequiredArgumentNotGivenError,
} from '../shared/consts';

const sorting = (priority, asc) => (a, b) => {
  let index = 0;
  while (a[priority[index]] === b[priority[index]]) {
    index++;
  }
  if (a[priority[index]] > b[priority[index]]) return asc ? 1 : -1;
  if (a[priority[index]] < b[priority[index]]) return asc ? -1 : 1;
  return 0;
};

export default function sortByProperty(toSort, priority, asc = true) {
  // Check if required arguments are given
  if (!toSort) throw new RequiredArgumentNotGivenError('toSort');
  if (!priority) throw new RequiredArgumentNotGivenError('priority');

  // Check if toSort is a valid array
  if (typeof toSort !== "object" || toSort.length === undefined) {
    throw new IllegalArgumentError('toSort', 'array');
  }
  // Check if every element in the array has the required property `priority`
  if (!toSort.every(item => item.hasOwnProperty(priority))) {
    throw new ArrayDoesNotHaveRequiredPropertyError('toSort', [priority]);
  }
  return toSort.sort(sorting(priority, asc));
}