document.addEventListener("DOMContentLoaded", function() {
    const stop = document.getElementById("stop-btn")
    const start = document.getElementById("start-btn")
    const box = document.getElementById("box")

    let cSecondi = 0.0
    let dSecondi = 0.00
    let secondi = 0.000
    let isOn = false
    let timeFlow

    start.addEventListener("click", function() {
        if (!isOn) {
            isOn = true
            box.textContent = 0
            secondi = 0
            cSecondi = 0
            dSecondi = 0
            timeFlow = setInterval(addSecondi, 10)
        }
    })

    stop.addEventListener("click", function() {
        clearInterval(timeFlow)
        isOn = false
        const winningTime = `${secondi}.${dSecondi}${cSecondi}`
        if (winningTime === "2.22") {
            box.textContent = "HAI VINTO! 2.22"
        }
    })
    

    function addSecondi() {
        cSecondi++;
        if (cSecondi > 9) {
            cSecondi = 0;
            dSecondi++;
            if (dSecondi > 9) {
                dSecondi = 0;
                secondi++;
            }
        }

        box.textContent = `${secondi}.${dSecondi}${cSecondi}`;
    }
})
