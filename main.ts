input.onPinPressed(TouchPin.P0, function () {
    guess += -10
    basic.showNumber(guess)
})
input.onButtonPressed(Button.A, function () {
    guess += 10
    basic.showNumber(guess)
})
input.onButtonPressed(Button.AB, function () {
    if (guess < secret) {
        music.playTone(131, music.beat(BeatFraction.Quarter))
        basic.showArrow(ArrowNames.South)
    } else if (guess > secret) {
        music.playTone(988, music.beat(BeatFraction.Quarter))
        basic.showArrow(ArrowNames.North)
    } else {
        basic.showIcon(IconNames.Yes)
        soundExpression.happy.playUntilDone()
        secret = randint(1, 100)
        guess = 0
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    guess += 1
    basic.showNumber(guess)
})
input.onPinPressed(TouchPin.P1, function () {
    guess += -1
    basic.showNumber(guess)
})
let guess = 0
let secret = 0
secret = randint(1, 100)
guess = 0
