let x = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 9; index++) {
        x = index - 1
        y = 0
        for (let index2 = 0; index2 < index; index2++) {
            led.toggle(x, y)
            x += -1
            y += 1
        }
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 9; index++) {
        x = 5 - index
        y = 4
        for (let index2 = 0; index2 < index; index2++) {
            led.toggle(x, y)
            x += 1
            y += -1
        }
        basic.pause(100)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    control.reset()
})
