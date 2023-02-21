
// Function to Check Form Input
function checkInput() {
    var emailErr = document.getElementById("email-err")
    var email    = document.getElementById("email").value
    let emailClass = document.querySelector(".email")

    if (email == "") {
        emailErr.innerText = "Please enter an email"
        emailClass.classList.add("error")
    } else {
       var regex = /^\S+@\S+\.\S+$/
       if (regex.test(email) === false) {
        emailErr.innerText = "Please enter a valid email"
        emailClass.classList.add("error")
       } else {
        emailErr.innerText = ""
        emailClass.classList.remove("error")
       } 
    }
}

// Function to Check Form Input
function checkInput2() {
    var emailErr2 = document.getElementById("email-err2")
    var email2    = document.getElementById("email2").value
    let inputErr  = document.querySelector(".error2")

    if (email2 == "") {
        emailErr2.innerText = "Please enter an email"
        inputErr.classList.add("error")
    } else {
       var regex2 = /^\S+@\S+\.\S+$/
       if (regex2.test(email) === false) {
        emailErr2.innerText = "Please enter a valid email"
        inputErr.classList.add("error")
    } else {
        emailErr2.innerText = ""
        inputErr.classList.remove("error")
       } 
    }
}
