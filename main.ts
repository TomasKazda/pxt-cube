let povoleno = false
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    povoleno = true
})
basic.forever(function on_forever() {
    if (povoleno) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
    
})
