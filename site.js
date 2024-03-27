//this makes an annoying alert pop-up on the site
//alert('Hello')

const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
if (isMorning){ //alert('good morning')
const p = welcome.querySelector('p')
p.textContent = "Good Morning!"
}

const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
if (isAfternoon){ //alert('good morning')
    const p = welcome.querySelector('p')
    p.textContent = "Good Afternoon!"
    }

const isEvening = hours >= 17 || hours < 4 // is it evening?
if (isEvening){ //alert('good morning')
    const p = welcome.querySelector('p')
    p.textContent = "Good Evening!"
    }

const message = 'i like pie.'
localStorage.setItem("It's a secret to everybody.", message)

