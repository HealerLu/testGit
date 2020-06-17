/*function request(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, `done`)
    })
}

request(1000).then(val => {
    console.log(val)
})*/


/*
function getMessage(msg, callback) {
    setTimeout(function () {
        console.log(msg);
        callback()
    }, 2000)
}

function displayMessage() {
    console.log(`Displayed message`);
}

getMessage(`hello`, displayMessage)
*/













"use static"

function getMessage(msg, callback) {
    setTimeout(function () {
        console.log(msg)
        callback()
    }, 2000)
}

function displayMessage() {
    console.log(`display message`)
}
getMessage(`第一个参数`, displayMessage);



const a = "0"

console.log(typeof !!+a)




