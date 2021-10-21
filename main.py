def ThrowEnable():
    global throwEnabled
    basic.show_icon(IconNames.YES)
    throwEnabled = True
def SideChange():
    global kostka
    if kostka == 10:
        kostka = 6
    else:
        kostka = 10
    basic.show_number(kostka)
def Throwing():
    global throwEnabled
    if throwEnabled:
        throwEnabled = False
        hod = randint(1, kostka)
        if hod == 1:
            basic.show_leds("""
                . . . . .
                                . . . . .
                                . . # . .
                                . . . . .
                                . . . . .
            """)
        if hod == 2:
            basic.show_leds("""
                # . . . .
                                . . . . .
                                . . . . .
                                . . . . .
                                . . . . #
            """)
        if hod == 3:
            basic.show_leds("""
                # . . . .
                                . . . . .
                                . . # . .
                                . . . . .
                                . . . . #
            """)
        if hod == 4:
            basic.show_leds("""
                # . . . #
                                . . . . .
                                . . . . .
                                . . . . .
                                # . . . #
            """)
        if hod == 5:
            basic.show_leds("""
                # . . . #
                                . . . . .
                                . . # . .
                                . . . . .
                                # . . . #
            """)
        if hod == 6:
            basic.show_leds("""
                # . . . #
                                . . . . .
                                # . . . #
                                . . . . .
                                # . . . #
            """)
        if hod == 7:
            basic.show_leds("""
                # . . . #
                                . . . . .
                                # . # . #
                                . . . . .
                                # . . . #
            """)
        if hod == 8:
            basic.show_leds("""
                # . . . #
                                . . # . .
                                . # . # .
                                . . # . .
                                # . . . #
            """)
        if hod == 9:
            basic.show_leds("""
                # . . . #
                                . . # . .
                                . # # # .
                                . . # . .
                                # . . . #
            """)
        if hod == 10:
            basic.show_leds("""
                # . . . #
                                . # . # .
                                # . . . #
                                . # . # .
                                # . . . #
            """)
        for index in range(hod):
            music.play_tone(262, music.beat(4))
            music.rest(music.beat(2))



kostka = 0
throwEnabled = True
kostka = 10

input.on_button_pressed(Button.A, ThrowEnable)
input.on_logo_event(TouchButtonEvent.PRESSED, SideChange)
input.on_gesture(Gesture.SHAKE, Throwing)

def on_forever():
    pass
basic.forever(on_forever)

