

/* Get coordinates of the given piece by getting the id
	of the parent container, and storing it on an array */
// PARAMETERS: The ID of the piece you wanna get position
function coordinates(identifier) {
	let position = identifier.parentNode.id;
	let coordinates = position.split('-');
	let X = translate(coordinates[0]);
	let Y = parseInt(coordinates[1], 10);
	// Returns an array with the X, Y coordinates
	return [X, Y];
}