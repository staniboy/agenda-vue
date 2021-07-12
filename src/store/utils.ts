// Returns next available Id of an Array
export default function getNextAvailableId(arr: Array<any>): number {
  let nextAvailableId = 0;
  if (arr.length > 0) {
    nextAvailableId = arr.reduce((p, c) => (p.id > c.id ? p : c)).id + 1;
  }
  return nextAvailableId;
}
