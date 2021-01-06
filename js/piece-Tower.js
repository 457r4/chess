/* The [] in the var comentaries or similars, doesn't mean that the var
    is an array */

// PARAMETERS: identifier[piece id], color[piece color]
// Tower type piece
function Tower(identifier, color) {
	// Set needing vars to operate functions until assemble and save chains
	// Save chains
	// Set storage spaces to save values to analize later
	// Set out storages
	let X, Y, Xvalue, Yvalue, chainX, chainY;
	let XPrev = [], YPrev = [], XRevision = [], YRevision = [];
	let XID = [], YID = [], mov = [];
	// Get coordinates and separate on X and Y
	X = coordinates(identifier)[0];
	Y = coordinates(identifier)[1];
	/* List of possible values along the axis whitout revision,
		X should be translated and restored */
	Xvalue = [];
	Yvalue = chain(Y);
	chain(X).forEach(value => Xvalue.push(reverseTranslate(value)));
	/* Whit those chains, assemble coordinates for horizontal
		and vertical axis */
	chainX = assembler(Xvalue, Y, 'X');
	chainY = assembler(reverseTranslate(X), Yvalue, 'Y');
	// Send possible coordinates to revision, first by emptiness
	empty(chainX, XPrev, XRevision);
	empty(chainY, YPrev, YRevision);
	// Check if the values of the empty cells are continuous
	if (XPrev.length != 0)
		continuous(XPrev, X, Y, XID, 'X');
	if (YPrev.length != 0)
		continuous(YPrev, Y, X, YID, 'Y');
	// Check if the values sent to revision contain a killable piece
	if (XRevision.length != 0)
		agree(XRevision, X, color, XID, 'X');
	if (YRevision.length != 0)
		agree(YRevision, Y, color, YID, 'Y');
	// Assemble single array with all the available values
	XID.forEach(value => mov.push(value));
	YID.forEach(value => mov.push(value));
	play(mov, identifier);
}
