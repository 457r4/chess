/* The [] in the var comentaries or similars, doesn't mean that the var
    is an array */

// Assemble the possible coordinates for the piece movement
/* PARAMETERS: a[letter or array], bi[number or array],
	type[string with 'X', 'Y', 'L' or 'R'; type of axis to analize] */
    function assembler(a, bi, type) {
        let assembled = [];
        // If axis is horizontal, type = 'X'
        // 'for' roves the 'a' array and completes with 'bi' value, it's constant
        if (type == 'X')
            a.forEach(a => assembled.push(a + '-' + bi))
        // If axis is vertical, type = 'Y'
        // 'for' roves the 'bi' array and completes with 'a' value, it's a letter
        else if (type == 'Y')
            bi.forEach(bi => assembled.push(a + '-' + bi))
        // If axis is diagonal with left top, type = 'L'
        // Array 'a' grows while array 'bi' decreases
        else if (type == 'L') {
            for(i = 0; i < 7; i++)
                assembled.push(a[i] + '-' + (bi.length - i));
        // If axis is diagonal with right top, type = 'D'
        // Both arrays grow from (0, 0) to (100, 100)
        } else if (type == 'R') {
            for(i = 0; i < 7; i++)
                assembled.push(a[i] + '-' + bi[i]);
        } else if (type == 'P')
            a.forEach(a => assembled.push(reverseTranslate(a) + '-' + bi))
        // Returns an array with assembled coordinates
        return assembled;
    }