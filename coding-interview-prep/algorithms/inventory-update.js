// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

function updateInventory(arr1, arr2) {
  const elementsFromCurInv = arr1.map(([, element]) => element);
  // Add elements that aren't in oldInv but are in curInv
  for (let i = 0; i < arr2.length; i++) {
    if (elementsFromCurInv.indexOf(arr2[i][1]) < 0) {
      arr1.push(arr2[i]);
    } else {
      const indexOfElement = elementsFromCurInv.indexOf(arr2[i][1]);
      arr1[indexOfElement][0] += arr2[i][0];
    }
  }

  const sortByElement = (cur, next) => {
    if (cur[1] > next[1]) {
      return 1;
    } else {
      return -1;
    }
  };

  const newArr = arr1.sort(sortByElement);

  return newArr;
}
