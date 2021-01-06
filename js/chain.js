/* The [] in the var comentaries or similars, doesn't mean that the var
    is an array */

// Get the given axis possible values relates to the piece coordinates
// PARAMETERS: The value of the component of the originar coordiantes
function chain(axis) {
	// Minor values to the original coordinates
	let chain = [];
	for(i = axis + 1; i <= 8; i++) {
		chain.push(i);
	}
	// Mayor values to the original coordinates
	for(j = axis - 1; j > 0; j--) {
		chain.unshift(j);
	}
	// Retur an array with the possible values along the axis
	return chain;
}