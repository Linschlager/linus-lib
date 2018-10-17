import * as config from '../package.json';

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
  if (typeof toSort === "object" && toSort.length !== undefined) {
    return toSort.sort(sorting(priority, asc));
  }
  return toSort;
}