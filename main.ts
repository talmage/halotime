//  Press Button A to decrease the brightness of the HDHalo LEDs.
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (brightness > 0) {
        brightness += -1
        haloDisplay.setBrightness(brightness)
    }
    
})
//  Press Buttons A and B to display the brightness of the HDHalo LEDs.
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    basic.showString("Brightness:")
    basic.showNumber(brightness)
})
//  Press Button B to increase the brightness of the HDHalo LEDs.
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    if (brightness < 255) {
        brightness += 1
        haloDisplay.setBrightness(brightness)
    }
    
})
let brightness = 0
let haloDisplay : kitronik_halo_hd.ZIPHaloHd = null
haloDisplay = kitronik_halo_hd.createZIPHaloDisplay(60)
brightness = 113
haloDisplay.clear()
haloDisplay.setBrightness(brightness)
haloDisplay.showRainbow(1, 360)
while (true) {
    haloDisplay.rotate(1)
    haloDisplay.show()
    basic.pause(1000)
}
