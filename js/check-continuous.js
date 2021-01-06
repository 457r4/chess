/* The [] in the var comentaries or similars, doesn't mean that the var
    is an array */

// Check if the possible values from the empty cells are continuous
// If not, delete those who are far away from the original coordinate
/* PARAMETERS: check[array to check], axis[axis who owns array 'check'],
	opposite[opposite axis to 'axis'], store[where to store the out values],
	type [string with 'X', 'Y', 'D'; type of axis to analyze] */
function continuous(check, axis, opposite, store, type) {
    // Set a space to store < and > than original coordinates value
    let minor = [], mayor = [];
    // 'preLaunch' will store the valid axis values, assembling required
    // 'relative' will get the value to analize related on minor or mayor
    /* 'fixed' will serve to contrast 'relative' to the continue values
        from axis */
    let preLaunch = [], relative, fixed;
    /* 'checkType' is a function that gets the individual axis value from
        a list of coordinates to later be compared and stored related
        to if it's mayor or minor in respective 'mayor' or 'minor' */
    /* 'save' is a function that assembles values stored in 'preLaunch'
        with it's respective opposite axis value and stores it in 'store' */
    let checkType, save;
    // Define 'checkType' and 'save' function based on 'X' axis type
    if (type == 'X') {
        /* The argument 'value' will come trought when it's executed
            inside a forEach */
        checkType = function(value) {
            /* Creates a 'partition' var that separates the coordinate
                and takes the required value to analize */
            // Extended explanation above
            let partition = value.split('-');
            partition = translate(partition[0]);
            return partition;
        };
        save = function() {
            // Assembles and stores a coordinate in 'store'
            // Extended explanation above
            preLaunch.forEach((value => {
                store.push(reverseTranslate(value) + '-' + opposite);
            }))
            return store;
        };
    }
    // Define 'checkType' and 'save' function based on 'Y' axis type
    if (type == 'Y') {
        checkType = function(value) {
            let partition = value.split('-');
            partition = parseInt(partition[1], 10);
            return partition;
        };
        save = function() {
            preLaunch.forEach((value => {
                store.push(reverseTranslate(opposite) + '-' + value);
            }))
            return store;
        };
    }
    // Define 'checkType' and 'save' function based on diagonal axis type
    if (type == 'D') {
        checkType = function(value) {
            let partition = value.split('-');
            partition = parseInt(partition[1], 10);
            return partition;
        };
        save = function() {
            preLaunch.forEach((value => {
                store.push(reverseTranslate(opposite) + '-' + value);
            }))
            return store;
        };
    }
    // Order values based on if it's < or > than original axis coordinate value
    check.forEach((value) => {
        partition = checkType(value);
        if (partition < axis)
            minor.push(partition);
        else
            mayor.push(partition);
    })
    // Save valid values in 'preLaunch'
    // Extended explanation above
    for(i = 1; i <= minor.length; i++) {
        relative = (minor[minor.length - i]);
        fixed = (axis - i);
        if (relative == fixed) {
            preLaunch.unshift(relative);
        } else
            break;
    }
    for(j = 0; j < mayor.length; j++) {
        relative = (mayor[j]);
        fixed = (axis + (j + 1));
        if (relative == fixed) {
            preLaunch.push(relative);
        }
        else
            break;
    }
    // Assembled and save coordinates
    save();
}