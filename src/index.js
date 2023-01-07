
module.exports = function towelSort (matrix) {
	if (matrix === undefined) {
		return [];
	}
  let newarr = [];
	for (let i = 0; i < matrix.length; i++){
		if (i % 2 == 1){
			matrix[i].reverse();
		}
		newarr = newarr.concat(matrix[i])
	}
  return newarr;
}
