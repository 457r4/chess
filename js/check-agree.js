/* The [] in the var comentaries or similars, doesn't mean that the var
    is an array */

/* Check if the piece inside a non-empty cell has the same color than
	the piece that activated the function */
/* If not, send the fisrt one of those to the definitive possible
	cell value for movements */
/* PARAMETERS: revision[array with values to check color],
	axis[what axis corresponds the coordinates values],
	color[color of the piece which activated the function],
	out[final array with the valid values to move the piece],
	type[string with 'X', 'Y', 'D'; type of axis] */
function agree(revision, axis, color, out, type) {
    // 'secRevision' = Second Revision;
    /* 'revision' is a list of element's coordinates; if they have
        the same color than the 'being evaluated piece', it's stored
        in 'secRevision' */
    let secRevision = [];
    // min[minium value of the 'out' array]
    // max[maximum value of the 'out' array]
    /* check[value which depends on one component of a coordinate stored
        in secRevision] */
    let min, max, check;
    /* Check the color of the element stored in 'revision' and contrasts
        it with the given color of the main piece */
    revision.forEach((element) => {
        let content =  $('#' + element).html();
        let inTag = content.split('-');
        inTag = inTag[0].split('="').slice(1);
        if (inTag != color) {
            secRevision.push(element);
        }
    })
    /* If out.length != 0, get lower and higher coordinate from 'out'
        and separate axis values */
    if (out.length != 0) {
        min = out[0].split('-');
        max = out[out.length - 1].split('-');
    }
    // For 'X' type
    if (type == 'X') {
        if (out.length != 0) {
            // Gets 'X' axis from the 'min' or 'max' coordinate
            minium = translate(min[0]) - 1;
            maximum = translate(max[0]) + 1;
            /* For each value on 'secRevision', checks validity, if true,
                the value is stored in 'out' */
            secRevision.forEach((value) => {
                check = translate(value.split('-')[0]);
                /* Contrast relativa 'check' value with minium or maximum,
                   an axis component of min or max, respectly */
                if (check > axis && check == maximum)
                    out.push(value);
                else if (check < axis && check == minium)
                    out.unshift(value);
            })
        // Exceptional cases!
        } else {
            /* For each value on 'secRevision', checks validity, if true,
                the value is stored in 'out' */
            secRevision.forEach((value) => {
                check = translate(value.split('-')[0]);
                /* If out.length = 0 and there is more than a cell with the
                    opposite color, validates only the first one */
                if  (check == (axis + 1))
                    out.push(value);
                else if (check == (axis - 1))
                    out.unshift(value);
            })
        }
    }
    if (type == 'Y') {
        if (out.length != 0) {
            // Gets 'Y' axis from the 'min' or 'max' coordinate
            minium = parseInt(min[1]) - 1;
            maximum = parseInt(max[1]) + 1;
            /* For each value on 'secRevision', checks validity, if true,
                the value is stored in 'out' */
            secRevision.forEach((value) => {
                check = parseInt(value.split('-')[1]);
                /* Contrast relativa 'check' value with minium or maximum,
                   an axis component of min or max, respectly */
                if (check > axis && check == maximum)
                    out.push(value);
                else if (check < axis && check == minium)
                    out.unshift(value);
            })
        // Exceptional cases!
        } else {
            /* For each value on 'secRevision', checks validity, if true,
                the value is stored in 'out' */
            secRevision.forEach((value) => {
                check = parseInt(value.split('-')[1]);
                /* If out.length = 0 and there is more than a cell with the
                    opposite color, validates only the first one */
                if  (check == (axis + 1))
                    out.push(value);
                else if (check == (axis - 1))
                    out.unshift(value);
            })
        }
    }
    if (type == 'D') {
        if (out.length != 0) {
            // Gets 'D' axis from the 'min' or 'max' coordinate
            minium = parseInt(min[1]) - 1;
            maximum = parseInt(max[1]) + 1;
            /* For each value on 'secRevision', checks validity, if true,
                the value is stored in 'out' */
            secRevision.forEach((value) => {
                check = parseInt(value.split('-')[1]);
                /* Contrast relativa 'check' value with minium or maximum,
                   an axis component of min or max, respectly */
                if (check > axis && check == maximum)
                    out.push(value);
                else if (check < axis && check == minium)
                    out.unshift(value);
            })
        // Exceptional cases!
        } else {
            /* For each value on 'secRevision', checks validity, if true,
                the value is stored in 'out' */
            secRevision.forEach((value) => {
                check = parseInt(value.split('-')[1]);
                /* If out.length = 0 and there is more than a cell with the
                    opposite color, validates only the first one */
                if  (check == (axis + 1))
                    out.push(value);
                else if (check == (axis - 1))
                    out.unshift(value);
            })
        }
    }
    if (type == 'P') {
        secRevision.forEach((value) => {
            check = translate(value.split('-')[0]);
            if (check < axis)
                out.unshift(value)
            else
                out.push(value)
        })
    }
}