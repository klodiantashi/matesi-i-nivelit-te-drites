input.onButtonPressed(Button.A, function () {
    DISPLAYBUSY = true
    basic.showNumber(input.lightLevel())
    basic.pause(1000)
    DISPLAYBUSY = false
})
let DISPLAYBUSY = false
DISPLAYBUSY = false
basic.forever(function () {
    if (DISPLAYBUSY == false) {
        led.plotBarGraph(
        input.lightLevel(),
        290
        )
    } else {
    	
    }
})
