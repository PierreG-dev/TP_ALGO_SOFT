const ANNEE = 2020

if ((ANNEE % 100 === 0 && ANNEE % 400 === 0) || ANNEE % 4 === 0) {
    console.log("L'année " + ANNEE + " est bissextile")
}

else {
    console.log("L'année " + ANNEE + " n'est pas bissextile")
}