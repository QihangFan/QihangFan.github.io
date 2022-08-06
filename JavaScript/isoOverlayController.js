var hotspotController = 0;

function isoOverlayControl(videoID, rotateButton, textContent, firstHotspot, secondHotspot) {


    const marfetRotateButton = document.getElementById(rotateButton);
    const marfetTextContent = document.getElementById(textContent);
    const marfetHotspot = document.getElementById(firstHotspot);
    const marfetHotspotSecond = document.getElementById(secondHotspot);

    videoID.addEventListener('play', (event) => {
        console.log("videoPlay");

        removeClassFrom(marfetRotateButton, "visible");
        removeClassFrom(marfetTextContent, "visible");
        removeClassFrom(marfetHotspot, "visible");
        removeClassFrom(marfetHotspotSecond, "visible");

        marfetRotateButton.classList.add("hidden");
        marfetTextContent.classList.add("hidden");

        marfetHotspot.classList.add("hidden");
        marfetHotspotSecond.classList.add("hidden");

        ++hotspotController;
    });

    videoID.addEventListener('pause', (event) => {

        console.log("videoPause");

        if (hotspotController === 1) {
            setTimeout(function(){
                removeClassFrom(marfetRotateButton, "hidden");
                marfetRotateButton.classList.add("visible");
            }, 500);

            setTimeout(function(){
                marfetTextContent.classList.add("visible");
                removeClassFrom(marfetTextContent, "hidden");
            }, 1000);

            removeClassFrom(marfetHotspot, "hidden");
            marfetHotspot.classList.add("visible");
        }
        else if (hotspotController === 2) {
            setTimeout(function(){
                removeClassFrom(marfetRotateButton, "hidden");
                marfetRotateButton.classList.add("visible");
            }, 500);

            setTimeout(function(){
                marfetTextContent.classList.add("visible");
                removeClassFrom(marfetTextContent, "hidden");
            }, 1000);

            removeClassFrom(marfetHotspotSecond, "hidden");
            marfetHotspotSecond.classList.add("visible");
        }
        else {
            hotspotController = 0;
        }

    });

}

function removeClassFrom(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className);
    }
}