let kostka = 0
let throwEnabled = true
kostka = 10
input.onButtonPressed(Button.A, function ThrowEnable() {
    
    basic.showIcon(IconNames.Yes)
    throwEnabled = true
})
input.onLogoEvent(TouchButtonEvent.Pressed, function SideChange() {
    
    if (kostka == 10) {
        kostka = 6
    } else {
        kostka = 10
    }
    
    basic.showNumber(kostka)
})
input.onGesture(Gesture.Shake, function Throwing() {
    let hod: number;
    
    if (throwEnabled) {
        throwEnabled = false
        hod = randint(1, kostka)
        if (hod == 1) {
            basic.showLeds(`
                . . . . .
                                . . . . .
                                . . # . .
                                . . . . .
                                . . . . .
            `)
        }
        
        if (hod == 2) {
            basic.showLeds(`
                # . . . .
                                . . . . .
                                . . . . .
                                . . . . .
                                . . . . #
            `)
        }
        
        if (hod == 3) {
            basic.showLeds(`
                # . . . .
                                . . . . .
                                . . # . .
                                . . . . .
                                . . . . #
            `)
        }
        
        if (hod == 4) {
            basic.showLeds(`
                # . . . #
                                . . . . .
                                . . . . .
                                . . . . .
                                # . . . #
            `)
        }
        
        if (hod == 5) {
            basic.showLeds(`
                # . . . #
                                . . . . .
                                . . # . .
                                . . . . .
                                # . . . #
            `)
        }
        
        if (hod == 6) {
            basic.showLeds(`
                # . . . #
                                . . . . .
                                # . . . #
                                . . . . .
                                # . . . #
            `)
        }
        
        if (hod == 7) {
            basic.showLeds(`
                # . . . #
                                . . . . .
                                # . # . #
                                . . . . .
                                # . . . #
            `)
        }
        
        if (hod == 8) {
            basic.showLeds(`
                # . . . #
                                . . # . .
                                . # . # .
                                . . # . .
                                # . . . #
            `)
        }
        
        if (hod == 9) {
            basic.showLeds(`
                # . . . #
                                . . # . .
                                . # # # .
                                . . # . .
                                # . . . #
            `)
        }
        
        if (hod == 10) {
            basic.showLeds(`
                # . . . #
                                . # . # .
                                # . . . #
                                . # . # .
                                # . . . #
            `)
        }
        
        for (let index = 0; index < hod; index++) {
            music.playTone(262, music.beat(4))
            music.rest(music.beat(2))
        }
    }
    
})
basic.forever(function on_forever() {
    
})
