function quicksort(array) {
	if (array.length <= 1) {
		return array;
	} else {
		var pivot = array[0];
		var left = [];
		var right = [];
		for (var i = 1; i < array.length; i++) {
			if (array[i] < pivot) {
				left.push(array[i]);
			} else {
				right.push(array[i]);
			}
		}
		return quicksort(left).concat(pivot, quicksort(right));
	}
}
var array = [10, 5, 2, 3, 7, 6, 8, 9, 1, 4];
var sortedArray = quicksort(array);
console.log("This is the sample array:")
console.log(array);
console.log("This is the sorted version of that array:")
console.log(sortedArray);
