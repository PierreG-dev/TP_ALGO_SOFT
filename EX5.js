let cheval1 = Math.floor(Math.random() * 100)
let cheval2 = Math.floor(Math.random() * 100)
let cheval3 = Math.floor(Math.random() * 100)
let cheval4 = Math.floor(Math.random() * 100)
let cheval5 = Math.floor(Math.random() * 100)
let cheval6 = Math.floor(Math.random() * 100)

let vitesse_maximale_trouvee = 0
let plus_rapide = "erreur"

if (cheval1 > vitesse_maximale_trouvee) {
    vitesse_maximale_trouvee = cheval1
    plus_rapide = "cheval 1"
}

if (cheval2 > vitesse_maximale_trouvee) {
    vitesse_maximale_trouvee = cheval2
    plus_rapide = "cheval 2"
}

if (cheval3 > vitesse_maximale_trouvee) {
    vitesse_maximale_trouvee = cheval3
    plus_rapide = "cheval 3"
}

if (cheval4 > vitesse_maximale_trouvee) {
    vitesse_maximale_trouvee = cheval4
    plus_rapide = "cheval 4"
}

if (cheval5 > vitesse_maximale_trouvee) {
    vitesse_maximale_trouvee = cheval5
    plus_rapide = "cheval 5"
}

if (cheval6 > vitesse_maximale_trouvee) {
    vitesse_maximale_trouvee = cheval6
    plus_rapide = "cheval6"
}

// let tableau = [cheval1, cheval2, cheval3, cheval4, cheval5, cheval6]

// for (let i = 0; i < tableau.length; i++) {
//     if (tableau[i] > vitesse_maximale_trouvee) {
//         vitesse_maximale_trouvee = tableau[i]
//         plus_rapide = "cheval " + (i + 1)
//     }
// }


console.log("cheval 1 => " + cheval1)
console.log("cheval 2 => " + cheval2)
console.log("cheval 3 => " + cheval3)
console.log("cheval 4 => " + cheval4)
console.log("cheval 5 => " + cheval5)
console.log("cheval 6 => " + cheval6)

console.log("Le vainqueur est le " + plus_rapide + " avec une vitesse de " + vitesse_maximale_trouvee)