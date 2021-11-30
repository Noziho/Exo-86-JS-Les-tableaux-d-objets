/* Ne touchez pas à ce code */
let citroen = {
    color: 'blue',
    // Méthode ouvrir porte
    ouvrirPorte: function() {
        console.log("La porte de la Citroën est ouverte");
    },
}

let peugeot = {
    color: 'yellow',
    // Méthode ouvrir porte
    ouvrirPorte: function() {
        console.log("La porte de la Peugeot est ouverte");
    }
}

let ford = {
    color: 'red',
    // Méthode ouvrir porte
    ouvrirPorte: function() {
        console.log("La porte de la Ford est ouverte");
    }
}


/**
 * Votre code commence ici !
 */
let voitures = {
    garage: 'concession',
    lieu: 'Fourmies',
    // Dans un tableau, ajouter les différentes voitures que vous possédez.
    collection: [citroen, peugeot, ford], // Vos voitures dans cette propriété !
}

for (let i = 0; i < voitures.collection.length; i+=4) {
    citroen.ouvrirPorte();
    peugeot.ouvrirPorte();
    ford.ouvrirPorte();
    let spanCreate = document.createElement("span");
    spanCreate.innerHTML = "La couleur de la citroen est: " + citroen.color + '<br>'
    + "La couleur de la peugot est: " + peugeot.color + '<br>' +
        "La couleur de la ford est: " + ford.color;
    document.getElementById("monP").append(spanCreate);

}

// FIXME Parcourrez le tableau dans lequel vous avez placé vos objets.
// TODO ==> invoquez la méthode ouvrirPorte pour chaque voiture de la collection.


