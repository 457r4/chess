/* The [] in the var comentaries or similars, doesn't mean that the var
    is an array */

// PARAMETERS: identifier[piece id], color[piece color]
// Pawn type piece
function Pawn(identifier, color) {
	// X, Y => Coordinates; straight, norm => Y axis
	// diagonal, kill => X axis; mov = available movements
	// diagonal is pre-Kill; straight are ideal values to the Y axis
	let X, Y, straight = [], norm = [],
		diagonal = [], kill = [], mov = [];
	// norm => empty norm values; marchRevision => useless
	// killMarch => empty kill values, useless
	// killRevision => is there a killable piece?
	let marchRevision = [];
	let killMarch = [], killRevision = [];
	// Get coordinates
	X = coordinates(identifier)[0];
	Y = coordinates(identifier)[1];
	// Simplify code
	let XT = reverseTranslate(X);
	let YP = Y + 1, YP2 = Y + 2, YN = Y - 1, YN2 = Y - 2;
	// Future possible killable-piece cell coordinate
	if ((X - 1) != 0)
		diagonal.push(X - 1);
	if ((X + 1) != 9)
		diagonal.push(X + 1);
	// First movement? Move one or two?
	if (identifier.originalCoordinates == identifier.actualCoordinates) {
		// If the piece color = white, increase Y value
		if (color == 'W') {
			straight.push(XT + '-' + YP);
			straight.push(XT + '-' + YP2);
			kill = assembler(diagonal, YP, 'P');
		// If the piece color = black, decrease Y value
		} else {
			straight.push(XT + '-' + YN2);
			straight.push(XT + '-' + YN);
			kill = assembler(diagonal, YN, 'P');
		}
	// Same thing above without two-cells-first-movement option
	} else {
		if (color == 'W') {
			straight.push(XT + '-' + YP);
			kill = assembler(diagonal, YP, 'P');
		}
		else {
			straight.push(XT + '-' + YN);
			kill = assembler(diagonal, YN, 'P');
		}
	}
	// Are the cells empty?
	empty(straight, norm, marchRevision);
	empty(kill, killMarch, killRevision);
	// Are the Y axis values continuos?
	continuous(norm, Y, X, mov, 'Y');
	// Do the non-empty cells contain a killable piece?
	agree(killRevision, X, color, mov, 'P');
	play(mov, identifier);
}
