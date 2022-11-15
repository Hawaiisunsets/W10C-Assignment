function makeRed(event){
    event.target.style.color = `red`;
}

function showDropdown(event){
    let dropdown = document.getElementById(`dropdown`);
    if (dropdown.style.display == `initial`){
        dropdown.style.display = `none`;
    } else {
        dropdown.style.display = `initial`;
    }
}

let heading = document.getElementById(`headcontainer`);
heading.addEventListener(`mouseover`, makeRed);
heading.style.listStyleType = `none`;
heading.style.fontSize = `2rem`;

let dropdownActivator = document.getElementById(`dropdownActivator`);
dropdownActivator.addEventListener(`click`, showDropdown);
dropdownActivator.style.color = `black`;
dropdownActivator.style.fontSize = `3em`;
dropdownActivator.style.marginBottom = `10px`;
dropdown.style.color = `purple`;  



document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        // keyCode for space bar is 32
        heading.style.backgroundColor = `aqua`;
    } else {
        heading.style.backgroundColor = `black`;
    }
}

