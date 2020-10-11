// Press Button A to decrease the brightness of the LEDs.
input.onButtonPressed(Button.A, function () {
    if (brightness > 0) {
        brightness += -1
        haloDisplay.setBrightness(brightness)
    }
})
// Press Button B to increase the brightness of the LEDs.
input.onButtonPressed(Button.B, function () {
    if (brightness < 255) {
        brightness += 1
        haloDisplay.setBrightness(brightness)
    }
})
let brightness = 0
let haloDisplay: kitronik_halo_hd.ZIPHaloHd = null
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
