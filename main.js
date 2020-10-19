setInterval(() => {
    const date = document.getElementById('date')
    const clock = document.getElementById('clock')

    date.innerText = `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`
    clock.innerText = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`

}, 1000)
