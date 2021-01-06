/* The [] in the var comentaries or similars, doesn't mean that the var
    is an array */

function eventAssignation(piece) {
	let id = document.getElementById(piece.id);
	let color = piece.color, type = piece.type, event;
	if (type == 'Bishop')
		event = event => Bishop(id, color);
	else if (type == 'Horse')
		event = event => Horse(id, color);
	else if (type == 'King')
		event = event => King(id, color);
	else if (type == 'Pawn')
		event = event => Pawn(id, color);
	else if (type == 'Queen')
		event = event => Queen(id, color);
	else if (type == 'Tower')
		event = event => Tower(id, color);
	id.addEventListener('click', event, false);
}

// White's turn? Black can do nothing
function wON() {
	pieces.forEach((piece) => {
		if (piece.color == 'W')
			eventAssignation(piece);
		else
			document.getElementById(piece.id).removeEventListener;
	})
}

// Black's turn? White can do nothing
function bON() {
	pieces.forEach((piece) => {
		if (piece.color == 'B')
			eventAssignation(piece);
		else
			document.getElementById(piece.id).removeEventListener;
	})
}

// Onload call white to play, as in real game
window.onload = wON();
