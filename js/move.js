/* The [] in the var comentaries or similars, doesn't mean that the var
    is an array */

function move(cell, identifier, coordinates) {
    let id = identifier.parentNode.id;
    document.getElementById(id).innerHTML = '';

    let thing = identifier.outerHTML;
    thing = thing.split('id="')[1].split('" ')[0].split('-');
    thing = window[thing[0] + thing[1]];
    document.getElementById(cell).innerHTML = thing.content;
    // thing['oldCoordinates'] = ;
    coordinates.forEach((coordinate) => {
        value = document.getElementById(coordinate);
        value.classList.toggle('play');
        value.removeEventListener;
    })
    if (thing.color == 'W')
        bON();
    else
        wON;
}