radio.setGroup(250)
basic.showLeds(`
    . # . # .
    . # # # .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendValue("goLeft", -1 * input.rotation(Rotation.Pitch))
        radio.sendValue("goRight", input.rotation(Rotation.Roll))
        radio.sendValue("goBase", 0)
        radio.sendValue("goGrip", 0)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendValue("goLeft", 0)
        radio.sendValue("goRight", 0)
        radio.sendValue("goBase", input.rotation(Rotation.Roll))
        radio.sendValue("goGrip", -1 * input.rotation(Rotation.Pitch))
    } else {
        radio.sendValue("goRight", 0)
        radio.sendValue("goLeft", 0)
        radio.sendValue("goBase", 0)
        radio.sendValue("goGrip", 0)
    }
})
