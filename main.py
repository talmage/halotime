# Press Button A to decrease the brightness of the HDHalo LEDs.

def on_button_pressed_a():
    global brightness
    if brightness > 0:
        brightness += -1
        haloDisplay.set_brightness(brightness)
input.on_button_pressed(Button.A, on_button_pressed_a)

# Press Buttons A and B to display the brightness of the HDHalo LEDs.

def on_button_pressed_ab():
    basic.show_string("Brightness:")
    basic.show_number(brightness)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

# Press Button B to increase the brightness of the HDHalo LEDs.

def on_button_pressed_b():
    global brightness
    if brightness < 255:
        brightness += 1
        haloDisplay.set_brightness(brightness)
input.on_button_pressed(Button.B, on_button_pressed_b)

brightness = 0
haloDisplay: kitronik_halo_hd.ZIPHaloHd = None
haloDisplay = kitronik_halo_hd.create_zip_halo_display(60)
brightness = 113
haloDisplay.clear()
haloDisplay.set_brightness(brightness)
haloDisplay.show_rainbow(1, 360)
while True:
    haloDisplay.rotate(1)
    haloDisplay.show()
    basic.pause(1000)