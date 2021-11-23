const NBR = 7

let calcul_precedent = 1

for (let i = 1; i <= NBR; i++) {
    calcul_precedent = calcul_precedent * i
}

console.log("!" + NBR + " = " + calcul_precedent)