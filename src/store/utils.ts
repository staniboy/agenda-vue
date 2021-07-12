// Returns next available Id of an Array
export function getNextAvailableId(arr: Array<any>): number {
  let nextAvailableId = 0;
  if (arr.length > 0) {
    nextAvailableId = arr.reduce((p, c) => (p.id > c.id ? p : c)).id + 1;
  }
  return nextAvailableId;
}

// Returns current date as a string
export function currentDate(): string {
  const currentDate = new Date();
  const cDay = currentDate.getDate();
  const cMonth = currentDate.getMonth() + 1;
  const cYear = currentDate.getFullYear();
  return cDay + "/" + cMonth + "/" + cYear;
}
