export function arrayMove(arr, fromIndex, toIndex) {
    const element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
  }


export function orderByIndex(a,b) {
  if (a.index > b.index) {
    return 1;
  } else {
    return -1;
  }
}