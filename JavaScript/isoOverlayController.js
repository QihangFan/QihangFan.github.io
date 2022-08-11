var hotspotController = 0;

function isoOverlayControl(videoID, rotateButton, textContent, firstHotspot, secondHotspot) {


    const marfetRotateButton = document.getElementById(rotateButton);
    const marfetTextContent = document.getElementById(textContent);
    const marfetHotspot = document.getElementById(firstHotspot);
    const marfetHotspotSecond = document.getElementById(secondHotspot);

    //event controller
    hotspotController = 0;

    //when video starts to play
    videoID.addEventListener('play', (event) => {
        console.log("videoPlay");

        removeClassFrom(marfetRotateButton, "visible");
        // removeClassFrom(marfetTextContent, "visible");
        removeClassFrom(marfetHotspot, "visible");
        removeClassFrom(marfetHotspotSecond, "visible");

        marfetRotateButton.classList.add("hidden");
        // marfetTextContent.classList.add("hidden");

        marfetHotspot.classList.add("hidden");
        marfetHotspotSecond.classList.add("hidden");

        ++hotspotController;
        console.log(hotspotController);
    });

    //text shows up after video starts to play - delay
    videoID.addEventListener('play', (event) => {
        setTimeout(function(){
            marfetTextContent.classList.add("visible");
            removeClassFrom(marfetTextContent, "hidden");
        }, 1000);
    });

    //interaction components show up when video pauses
    videoID.addEventListener('pause', (event) => {

        console.log("videoPause");

        if (hotspotController === 1) {
            setTimeout(function(){
                removeClassFrom(marfetRotateButton, "hidden");
                marfetRotateButton.classList.add("visible");
            }, 500);

            removeClassFrom(marfetHotspot, "hidden");
            marfetHotspot.classList.add("visible");
        }
        else if (hotspotController === 2) {
            setTimeout(function(){
                removeClassFrom(marfetRotateButton, "hidden");
                marfetRotateButton.classList.add("visible");
            }, 500);

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

function showUp(cursorArrow) {
    removeClassFrom(cursorArrow, "hidden");
    cursorArrow.classList.add("visible");
}

function shyAway(elem) {
    removeClassFrom(elem, "visible");
    elem.classList.add("hidden");
}

function cursorShyAway() {
    var bodyClass = document.body;
    removeClassFrom(bodyClass, "cursorReturn");
    bodyClass.classList.add("cursorNone");
}

function cursorShowUp() {
    var bodyClass = document.body;
    removeClassFrom(bodyClass, "cursorNone");
    bodyClass.classList.add("cursorReturn");
}

function cursorShowShy(hoverID, cursorArchToBoothArrow, cursorArchToBoothText) {
    $(hoverID).hover(function(){
            showUp(cursorArchToBoothArrow);
            showUp(cursorArchToBoothText);
            shyAway(this);
            cursorShyAway();
        },

        function(){
            shyAway(cursorArchToBoothArrow);
            shyAway(cursorArchToBoothText);
            showUp(this);
            cursorShowUp();
        });
}


//when text contents are show in both sections
function immerseOverlayControl(videoID, textContent, timeShowFirst, textContentSecond, timeShowSecond, firstHotspot, secondHotspot) {


    const marfetTextContent = document.getElementById(textContent),
        marfetTextContentSecond = document.getElementById(textContentSecond);

    const marfetHotspot = document.getElementById(firstHotspot),
        marfetHotspotSecond = document.getElementById(secondHotspot);

    hotspotController = 0;

    videoID.addEventListener('play', (event) => {
        console.log("videoPlay");

        //clear visible classes
        removeClassFrom(marfetTextContent, "visible");
        removeClassFrom(marfetTextContentSecond, "visible");
        removeClassFrom(marfetHotspot, "visible");
        removeClassFrom(marfetHotspotSecond, "visible");

        //add hidden classes to all variables
        marfetTextContent.classList.add("hidden");
        marfetTextContentSecond.classList.add("hidden");

        marfetHotspot.classList.add("hidden");
        marfetHotspotSecond.classList.add("hidden");

        //controller
        ++hotspotController;
        console.log(hotspotController);
        //text shows up after 1s
        if (hotspotController === 1) {
            setTimeout(function(){
                marfetTextContent.classList.add("visible");
                removeClassFrom(marfetTextContent, "hidden");
            }, timeShowFirst);
        }
        else if (hotspotController === 2) {
            setTimeout(function(){
                marfetTextContentSecond.classList.add("visible");
                removeClassFrom(marfetTextContentSecond, "hidden");
            }, timeShowSecond);
        }
    });

    //interaction components show up when video pauses
    videoID.addEventListener('pause', (event) => {

        console.log("videoPause");

        if (hotspotController === 1) {
            // setTimeout(function(){
            //     marfetTextContent.classList.add("visible");
            //     removeClassFrom(marfetTextContent, "hidden");
            // }, 500);

            removeClassFrom(marfetHotspot, "hidden");
            marfetHotspot.classList.add("visible");
        }
        else if (hotspotController === 2) {
            // setTimeout(function(){
            //     marfetTextContentSecond.classList.add("visible");
            //     removeClassFrom(marfetTextContent, "hidden");
            // }, 500);

            removeClassFrom(marfetHotspotSecond, "hidden");
            marfetHotspotSecond.classList.add("visible");

            hotspotController = 0;
        }
    });

}


//overflow controller
function overflowController() {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {}
    else {
        document.querySelector("body").classList.add("overflowHidden");
    }
}



function immerseOverlayControlTextSecond(videoID, textContent, firstHotspot, secondHotspot) {


    const marfetTextContent = document.getElementById(textContent);
    const marfetHotspot = document.getElementById(firstHotspot);
    const marfetHotspotSecond = document.getElementById(secondHotspot);

    hotspotController = 0;

    videoID.addEventListener('play', (event) => {
        console.log("videoPlay");

        removeClassFrom(marfetTextContent, "visible");
        removeClassFrom(marfetHotspot, "visible");
        removeClassFrom(marfetHotspotSecond, "visible");

        marfetTextContent.classList.add("hidden");

        marfetHotspot.classList.add("hidden");
        marfetHotspotSecond.classList.add("hidden");

        ++hotspotController;
    });

    videoID.addEventListener('pause', (event) => {

        console.log("videoPause");

        if (hotspotController === 1) {
            removeClassFrom(marfetHotspot, "hidden");
            marfetHotspot.classList.add("visible");
        }
        else if (hotspotController === 2) {
            setTimeout(function(){
                marfetTextContent.classList.add("visible");
                removeClassFrom(marfetTextContent, "hidden");
            }, 500);

            removeClassFrom(marfetHotspotSecond, "hidden");
            marfetHotspotSecond.classList.add("visible");

            hotspotController = 0;
        }
    });

}

function immerseOverlayControlTextFirst(videoID, textContent, firstHotspot, secondHotspot) {


    const marfetTextContent = document.getElementById(textContent);
    const marfetHotspot = document.getElementById(firstHotspot);
    const marfetHotspotSecond = document.getElementById(secondHotspot);

    hotspotController = 0;

    videoID.addEventListener('play', (event) => {
        console.log("videoPlay");

        removeClassFrom(marfetTextContent, "visible");
        removeClassFrom(marfetHotspot, "visible");
        removeClassFrom(marfetHotspotSecond, "visible");

        marfetTextContent.classList.add("hidden");

        marfetHotspot.classList.add("hidden");
        marfetHotspotSecond.classList.add("hidden");

        ++hotspotController;
    });

    videoID.addEventListener('pause', (event) => {

        console.log("videoPause");

        if (hotspotController === 1) {
            setTimeout(function(){
                marfetTextContent.classList.add("visible");
                removeClassFrom(marfetTextContent, "hidden");
            }, 500);

            removeClassFrom(marfetHotspot, "hidden");
            marfetHotspot.classList.add("visible");
        }
        else if (hotspotController === 2) {
            removeClassFrom(marfetHotspotSecond, "hidden");
            marfetHotspotSecond.classList.add("visible");

            hotspotController = 0;
        }
    });

}

