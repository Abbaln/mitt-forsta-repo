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