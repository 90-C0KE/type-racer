// Type Racer hack

var spans = document.getElementsByTagName("span")
var words = []
var txtInput = document.getElementsByClassName("txtInput")[0]
var scentence = ""
var letterIndex = 0

for (var i = 0; i < spans.length; i++) {
    spans[i].hasAttribute("unselectable") && words.push(spans[i])
}

for (var i = 0; i < words.length; i++) {
    scentence += words[i].innerHTML
}

txtInput.addEventListener("keypress", function(e) {
    e.preventDefault(),
    txtInput.value += scentence[letterIndex]
    letterIndex++
})
