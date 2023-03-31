
function binarySearch(datas,To_Find)
{
	let lo = 0;
	let hi = datas.length - 1;
	let mid;
	
	// This below check covers all cases , so need to check
	// for mid=lo-(hi-lo)/2
	while (hi - lo > 1) {
		let mid = (hi + lo) / 2;
		if (datas[mid] < To_Find) {
			lo = mid + 1;
		}
		else {
			hi = mid;
		}
	}
	if (datas[lo] == To_Find) {
		console.log( To_Find+" Found At Index " + lo);
	}
	else if (datas[hi] == To_Find) {
		console.log(To_Find+ " Found At Index " + hi);
	}
	else {
		console.log(To_Find+" Not Found");
	}
}
datas = [ 1, 3, 4, 5, 6 ];
console.log("This is the array ");
console.log(datas);

let To_Find = 1;
binarySearch(datas, To_Find);
To_Find = 5;
binarySearch(datas, To_Find);
To_Find = 10;
binarySearch(datas, To_Find);



