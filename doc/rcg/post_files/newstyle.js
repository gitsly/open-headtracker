function switch_style(C, E) {
    if (C == "") {
        return
    }
    var B = new String(window.location);
    var A = new String("");
    B = B.split("#");
    if (B[1]) {
        A = "#" + B[1]
    }
    B = B[0];
    if (B.indexOf(E + "id=") != -1 && is_regexp) {
        var D = new RegExp(E + "id=\\d+&?");
        B = B.replace(D, "")
    }
    if (B.indexOf("?") == -1) {
        B += "?"
    } else {
        lastchar = B.substr(B.length - 1);
        if (lastchar != "&" && lastchar != "?") {
            B += "&"
        }
    }
    window.location = B + E + "id=" + C + A
}