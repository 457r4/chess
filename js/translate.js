/* The [] in the var comentaries or similars, doesn't mean that the var
    is an array */

/* Translates piece X letter-part coordinates to numbers */
function translate(x) {
	if (x == 'A') x = 1;
	else if (x == 'B') x = 2;
	else if (x == 'C') x = 3;
	else if (x == 'D') x = 4;
	else if (x == 'E') x = 5;
	else if (x == 'F') x = 6;
	else if (x == 'G') x = 7;
	else if (x == 'H') x = 8;
	return x;
}

/* Translates X operated coordinates back to letters */
function reverseTranslate(x) {
	if (x == 1) x = 'A';
	else if (x == 2) x = 'B';
	else if (x == 3) x = 'C';
	else if (x == 4) x = 'D';
	else if (x == 5) x = 'E';
	else if (x == 6) x = 'F';
	else if (x == 7) x = 'G';
	else if (x == 8) x = 'H';
	return x;
}