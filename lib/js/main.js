const fixedApply = document.getElementById("fixed-apply");
const mainWindow = document.getElementsByClassName("intro")[0];

/**
 * Shows the hanging "Apply".
 */
const showHanger = function(){
    fixedApply.style.transform = "translateX(15px)";
}

/**
 * Hides the hanging "Apply".
 */
const hideHanger = function(){
    fixedApply.style.transform = "translateX(145px)";
}

window.onload = function() {
    let prevPos         = window.pageYOffset;
    const triggerHeight = mainWindow.offsetHeight;

    /**
     * Handles the logic of when to show or hide the hanging "Apply".
     */
    const handleHanger = function(){
        let currentPos = window.pageYOffset;
        if (prevPos > triggerHeight) {
            showHanger();
        } else {
            hideHanger();
        }
        prevPos = currentPos;
    }

    window.onscroll = handleHanger;
    handleHanger();
}