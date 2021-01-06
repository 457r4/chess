/* The [] in the var comentaries or similars, doesn't mean that the var
    is an array */

// Validate empty cell possible values
// Sent to revision those with an element
/* PARAMETERS: values[an array to check emptiness],
	prev[an external array to store valid values],
	revision[an external array to store revision values
	(later for contrast by color)] */
function empty(values, available, revision) {
    // If the cell is empty, save 'value' on 'prev' array
    values.forEach((value) => {
        if ($('#' + value).html() == '')
            available.push(value);
        // If not, save 'value' on 'revision' array
        else
            revision.push(value);
    })
}