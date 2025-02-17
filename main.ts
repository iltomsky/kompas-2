let graden = 0
basic.forever(function () {
    graden = input.compassHeading()
    if (graden < 45) {
        basic.showArrow(ArrowNames.North)
    } else if (graden < 135) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (graden < 225) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (graden < 315) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (315 < graden) {
        basic.showArrow(ArrowNames.North)
    }
})
