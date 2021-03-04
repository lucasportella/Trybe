let getAll = document.querySelectorAll("div");
console.log(getAll)
for (i = 0; i < getAll.length; i += 1) {
    let elemento = document.querySelectorAll("div")[i];
    console.log(i)
    console.log(getAll.length)
    console.log(elemento)
    //elemento.remove();
    console.log(document.querySelectorAll("div"))
}

const ul = document.querySelector( 'ul' );

console.log( ul.firstElementChild );
console.log( ul.firstChild );

let pai3 = document.getElementById('pai').firstElementChild.nextElementSibling.nextElementSibling;
console.log(pai3)