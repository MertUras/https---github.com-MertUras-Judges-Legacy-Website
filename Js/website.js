var menuBar = document.querySelector(".menuBar");
menuBar.addEventListener("click", function () {
    document.querySelector("body").classList.toggle("active");
})
document.querySelector("#home")
    .addEventListener('click', () => {
        window.location.href = 'http://127.0.0.1:5500/website.html'
    })
document.querySelector("#redirect")
    .addEventListener('click', () => {
        window.location.href = 'http://127.0.0.1:5500/history.html'
    })
document.querySelector("#profile")
    .addEventListener('click', () => {
        window.location.href = 'http://127.0.0.1:5500/profile.html'
    })
document.querySelector("#tryouts")
    .addEventListener('click', () => {
        window.location.href = 'http://127.0.0.1:5500/tryouts.html'
    })
document.querySelector("#game")
    .addEventListener('click', () => {
        window.location.href = 'http://127.0.0.1:5500/game.html'
    })

