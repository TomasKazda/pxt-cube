povoleno = False

def on_button_pressed_a():
    global povoleno
    povoleno = True
input.on_button_pressed(Button.A, on_button_pressed_a)


def on_forever():
    if povoleno:
        basic.show_icon(IconNames.YES)
    else:
        basic.show_icon(IconNames.NO)
basic.forever(on_forever)
