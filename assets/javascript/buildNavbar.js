/* This will build a nav bar from array */

let navbarItems = [];

navbarItems.push(["assets/lessons/L00-python.html", "Introduction"] );
navbarItems.push(["assets/lessons/L01-python.html", "Input Output"] );
navbarItems.push(["assets/lessons/L02-python.html", "Variables"] );
navbarItems.push(["assets/lessons/L03-python.html", "Loops"] );


function buildList2() {

    let UL = "<ul>";
    
    for (item in navbarItems) {

        UL += `<li><a href=${navbarItems[item][0]} target="iframe_a"> ${navbarItems[item][1]}  </a></li>` ;
    }
    
    UL += "</ul>"    

    return(UL)
}

let NAVBAR = buildList2();

document.getElementById('navbar').innerHTML = NAVBAR;



