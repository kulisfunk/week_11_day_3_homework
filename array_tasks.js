var ArrayTasks = function(){
}


	ArrayTasks.prototype = {
	  concatenate: function(array1, array2){
		var newArray = [];
		return newArray = array1.concat(array2);
	},

	  insertAt: function(arr, itemToAdd, index) {
    arr.splice(index, 0, itemToAdd);
		return arr;
	},

	  square: function(arr) {
    arr.forEach(function(currentValue, index, arr){
			arr[index] = currentValue * currentValue;
		})

		return arr;
	},

	  sum: function(arr) {
		return arr.reduce(function(total, num){
			return total + num;
		});

	},

	  findDuplicates: function (arr) {
    var sortedArray = arr.slice().sort();
		var result = [];
		for (i = 0; i < sortedArray.length -1; i++ ){
			if((sortedArray[i +1] == sortedArray[i]) && result.includes(sortedArray[i]) == false){
				result.push(sortedArray[i])
			}
		}
		return result;
	},

	removeAndClone: function (arr, valueToRemove) {
    for (var i = arr.length; i >= 0; i--){
			if (arr[i] === valueToRemove){
			arr.splice(i,1);
		}
	}
	return arr;
},

	findIndexesOf: function (arr, itemToFind) {
		var result = [];
		for (var i = 0; i < arr.length; i++){
			if(arr[i] === itemToFind){
			result.push(i)
		}
	}
	return result;
},

	sumOfAllEvenNumbersSquared: function (arr) {
		var result = [];
		arr.forEach(function(currentValue, index, arr){
			var even = currentValue%2;
			if ( even === 0){
			var square = currentValue * currentValue;
			result.push(square);
		}

	})
    return this.sum(result);
}
}

module.exports = ArrayTasks;
