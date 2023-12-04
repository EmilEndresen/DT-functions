console.log("Hello World")

//Kode som kan kalles ved behov (topp til bunn)
// Kode som ikke kjører før man ber om det + den er gjenbrukbar

function test() {
   console.log("Hei, denne funksjonen fungerer")
}

let arrow = () => {
   console.log("Hei, arrow funksjonen fungerer")
}

test()
arrow()

// Return statement. Optional. Avbryter resten av funksjonen.

let returnTestOne = () => {
   console.log("return test kjørt")
   return "hei"
   console.log("return test kjørt")
}

returnTestOne()

let returnTestTwo = () => {
   let hei = "hei"
   return hei
}
// console.log(hei)
console.log(returnTestTwo())

let welcome = returnTestTwo()

console.log(welcome)

// Parameter vs. argument (parameter er et mottaker variabel,
// argument er innholdet til den varibelen som blir sendt fra kallet)

let doubler = (num1, num2) => {
   return num1 * num2
}

console.log(doubler(5, 10))

const calculator = (num1, num2, operator) => {
   let total = 0
   if (operator === "+") {
      return num1 + num2
   } else if (operator === "-") {
      return num1 - num2
   } else if (operator === "*") {
      return num1 * num2
   } else if (operator === "/") {
      return num1 / num2
   } else {
      return "invalid operator"
   }
}

console.log(calculator(6, 9, "-"))
