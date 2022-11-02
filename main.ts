input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        index = 4 - index
        for (let index = 0; index <= 4; index++) {
        	
        }
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 4; index++) {
        for (let index = 0; index <= 4; index++) {
            led.toggle(0, index - 4)
            basic.pause(100)
        }
    }
})
