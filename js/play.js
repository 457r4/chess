/* The [] in the var comentaries or similars, doesn't mean that the var
    is an array */

function play(coordinates, identifier) {
    let value, event;
    coordinates.forEach((coordinate) => {
        value = document.getElementById(coordinate);
        value.classList.toggle('play');
        event = event => move(coordinate, identifier, coordinates);
        value.addEventListener('click', event, false);
    })
    // vcgfbgtvxgtctxyycygdgyogytsorogsfrostgtwoeoxdk4
}
