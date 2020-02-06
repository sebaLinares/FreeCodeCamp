/* Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}). The resulting array must contain only unique values (no duplicates).
*/

function sym(...args) {

  // At least one parameter
  if (args.length < 1) {
    throw new Error("There must be at least one parameter");
  }

  // parameters are all of type Array
  if (args.some(arr => !Array.isArray(arr))) {
    throw new Error("All parameters must be of type Array");
  }

  // there is only one arg
  if (args.length === 1) {
    return new Set(...args).sort();
  }

  let spreadArgs = [];
  for (let i = 0; i < args.length; i++) {
    spreadArgs.push(...args[i]);
  }

  console.log(spreadArgs);

  const symArr = (arr1, arr2) => {
    let uniqueVals = [];
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.indexOf(arr1[i]) < 0 && uniqueVals.indexOf(arr1[i]) < 0) {
        uniqueVals.push(arr1[i]);
      }
    }

    arr2.forEach(el => {
      if (arr1.indexOf(el) < 0 && uniqueVals.indexOf(el) < 0) {
        uniqueVals.push(el);
      }
    });

    return uniqueVals;
  };

  return [...args].reduce(symArr).sort();
}
