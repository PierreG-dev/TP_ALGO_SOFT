const PHOTOCOPIES = 50

let reste_photocopies = PHOTOCOPIES
let cout_final = 0

if (PHOTOCOPIES <= 10) {
    //si on a 10 copies ou moins
    cout_final = PHOTOCOPIES * 2
}
else {
    //On soustrait la premiere tranche
    reste_photocopies = reste_photocopies - 10
    //on comptabilise la premere tranche
    cout_final += 20

    if (reste_photocopies <= 20) {
        //si il nous reste 20 copies ou moins
        cout_final += (reste_photocopies * 1.5)
    }
    else {
        //On soustrait la deuxieme tranche
        reste_photocopies -= 20
        //On comptabilise la deuxieme tranche
        cout_final += 30

        //On comptabilise la troisieme tranche
        cout_final += reste_photocopies
    }
}

console.log("Nombre de copies: " + PHOTOCOPIES)
console.log("Coût: " + cout_final + "€")



