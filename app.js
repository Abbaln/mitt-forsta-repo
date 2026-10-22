let age = 15
let hasTicket = false
let withAdult = true

if (age >= 15 && hasTicket === true) {
    console.log("Välkommen in i bio!")
} else {
    console.log("Gå köp ticket")
}

// = --> tilldela nytt värde
// == --> Kollar om (värdet) är truthy
// === --> Kollar om både (värdet) och (datatypen) är truthy

const isLoggedIn = true
const userRole = 'admin'

if (isLoggedIn === true) {
    if (userRole === 'admin') {
        console.log("Välkommen till Adminpanelen!")
    } else {
        console.log("Välkommen vanlig användare!")
    } 
} else {
    console.log("Du måste logga in först!")
}

const trafficLight = "gul"

switch (trafficLight) {
    case "grön":
        console.log ("kör")
        break
    case "gul":
        console.log ("gör dig redo för köra")
        break
    case "röd":
        console.log ("stanna")
    break
    
    default:
        console.log("okänd signal!")
}

const weather = "regn";

switch (weather) {
    case "sol":
        console.log("Du kan ha tröja och shorts idag")
        break
    case "regn":
        console.log("Se till och ta med paraply eller regnjacka")
        break
    case "snö":
     console.log("Ta på en varmjacka")
     break

     default:
        console.log("Kolla ut genom fösntret")
}

// for-loop

for (let i = 1; i < 6; i++) {
    console.log(i)

}

const fruits = ["banan", "äpple", "körsbär"]

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

let energi = 3;

while (energi > 0) {
    console.log("Sprang ett varv! Energi kvar" + energi)
    energi--

}
console.log("Slut på energi! Måste vila!")