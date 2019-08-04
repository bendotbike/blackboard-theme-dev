/*
*   Set up variables
*/

//  Color data

const bgModes = {
    DARK: "#474747",
    LIGHT: "#eee8d5"
}

var fgColors = {
    DARK: "white",
    LIGHT: "black"
}

var darkAccentColors = ["#90ee02", "#D2FF96", "#E8D33F", "#87B6A7", "#D17B0F", "#F7D08A", "#BCC220", "#69AE87", "#7FAD7D", "#B1CDB7", "#EFBF6B", "#3BAA88", "#F39C6B", "#C7CEDB", "#78CAD2", "#A1D2CE", "#2CDA9D"];
var lightAccentColors = ["#268bd2", "#84A98C", "#2C3D55", "#A44200", "#753742", "#4A5899", "#559CAD"];

window.onload = function() {

    /*
    *   Decide our random color values
    */

    // Set background & foreground colors
    var fgColor;
    var bgType = Math.floor(Math.random() * 2); // If 0: dark theme, 1: light theme
    if (bgType == 0) {
        bgType = bgModes.DARK;
        fgColor = fgColors.DARK;
    } else if (bgType == 1) {
        bgType = bgModes.LIGHT;
        fgColor = fgColors.LIGHT;
    }
    
    // Accent color
    var accent;
    if (bgType == bgModes.DARK) {
        accent = darkAccentColors[Math.floor(Math.random() * darkAccentColors.length)];
    } else if (bgType == bgModes.LIGHT) {
        accent = lightAccentColors[Math.floor(Math.random() * lightAccentColors.length)];
    }

    /*
    *   Apply the settings
    */
    document.documentElement.style.setProperty("--bg-color", bgType);
    document.documentElement.style.setProperty("--fg-color", fgColor)
    document.documentElement.style.setProperty("--accent-color", accent);
   
    // -- Testing --
    console.log("Background mode: " + bgType + ", foreground color: " + fgColor + ", accent color: " + accent);

}