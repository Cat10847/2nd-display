radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    if (settingGroup) {
        setGroup += -1
    }
})
function Set_group () {
    settingGroup = true
    while (settingGroup) {
        basic.showNumber(setGroup)
    }
}
input.onButtonPressed(Button.AB, function () {
    if (settingGroup) {
        settingGroup = false
    }
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    if (settingGroup) {
        setGroup += 1
    }
})
radio.onReceivedValue(function (name, value) {
    basic.showString(name)
    basic.showNumber(value)
})
let setGroup = 0
let settingGroup = false
basic.pause(500)
basic.showString("Set group before usage")
Set_group()
