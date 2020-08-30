function drawRandomDots (goal: number) {
    current = 0
    while (current < goal) {
        x = randint(0, 4)
        y = randint(0, 4)
        if (!(led.point(x, y))) {
            led.plot(x, y)
            current += 1
        }
    }
}
function drawDots () {
    led.plot(2, 2)
    led.plotBrightness(4, 4, 78)
    led.plotBrightness(0, 4, 78)
    led.plotBrightness(0, 0, 78)
    led.plotBrightness(4, 0, 78)
}
function drawRandomDot () {
    led.plot(randint(0, 4), randint(0, 4))
}
let y = 0
let x = 0
let current = 0
for (let index = 0; index < 4; index++) {
    basic.clearScreen()
    drawRandomDots(10)
    basic.pause(1000)
}
