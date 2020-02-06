// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunked = [];

  for (const element of array) {
    // Get last element in chunked array
    const last = chunked[chunked.length - 1];

    // If the last element does not exist
    // Or if chunked size equals size
    if (!last || last.length === size) {
      // push new chunk w/ current elem into chunked array
      chunked.push([element]);
    } else {
      // add current element into current chunk
      last.push(element);
    }
  }
  return chunked;
}

chunk([1, 2, 3, 4], 2); // --> [[ 1, 2], [3, 4]]
chunk([1, 2, 3, 4, 5], 2); // --> [[ 1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3); // --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
chunk([1, 2, 3, 4, 5], 4); // --> [[ 1, 2, 3, 4], [5]]
chunk([1, 2, 3, 4, 5], 10); // --> [[ 1, 2, 3, 4, 5]]
