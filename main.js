function clock(){
    const clock = document.getElementById("clock")
    clock.innerText = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
}

setInterval(clock, 1000)