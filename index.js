// >>> Exercice 1
// Créez un tableau contenant les noms de trois de vos amis.
// Affichez ensuite le premier élément du tableau dans la console.

//
const array_1 = ["Christian", "Frantz", "Antony"];
console.log(array_1.shift())




// >>> Exercice 2
// Créez un tableau contenant les nombres 1, 2, 3, 4 et 5. 
// Utilisez une boucle pour afficher chaque élément du tableau dans la console
const array_2 = [1, 2, 3, 4, 5];
for (let i = 0; i < array_2.length; i++) {
    const element = array_2[i];
    console.log(element)
    
}

//  

// >>> Exercice 3
// Créez un tableau contenant les nombres 1, 2, 3, 4 et 5. 
// Utilisez une méthode de tableau pour ajouter le nombre 6 à la fin du tableau.
let array_3 = [1, 2, 3, 4, 5];
array_3.push(6)
console.log(array_3)


//  

// >>> Exercice 4
// Créez un tableau contenant les nombres 1, 2, 3, 4 et 5. Utilisez 
// une méthode de tableau pour supprimer le dernier élément du tableau.
let array_4 = [1, 2, 3, 4, 5];
array_4.pop()
console.log(array_4)

//  

// >>> Exercice 5
// Créez un tableau contenant les nombres 1, 2, 3, 4 et 5. Utilisez 
// une méthode de tableau pour ajouter le nombre 0 au début du tableau.
let array_5 = [1, 2, 3, 4, 5];
array_5.unshift(0)
console.log(array_5)

//  

// >>> Exercice 6
// Créez un tableau contenant les nombres 1, 2, 3, 4 et 5. Utilisez une méthode de 
// tableau pour supprimer le premier élément du tableau.
let array_6 = [1, 2, 3, 4, 5];
array_6.splice(0,1)
console.log(array_6)


// ======================================================================