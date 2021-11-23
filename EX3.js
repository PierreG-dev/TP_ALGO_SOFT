let now = new Date()

let heure = now.getHours()
let minute = now.getMinutes()
let secondes = now.getSeconds()

let day = now.getDate()
let month = now.getMonth() + 1
let year = now.getFullYear()

let heure_complete = heure + ":" + minute + ":" + secondes
let date_complete = day + "/" + month + "/" + year

console.log(date_complete + " " + heure_complete)