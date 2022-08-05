let pauseIndex = 0,
    currentStopTime = 0;

function videoPlay(videoID) {
    videoID.play();
}

//interval loop function
// function intervalRefresherLoop(videoID, pauseArray) {
//     pauseIndex = 0;
//     setInterval(videoControlLoop, 10, videoID, pauseArray)
//
// }
//
// function videoControlLoop (videoID, pauseArray) {
//     currentStopTime = pauseArray[pauseIndex];
//
//     //check time
//     if (videoID.currentTime >= currentStopTime) {
//         videoID.pause();
//         if (pauseArray.length > ++pauseIndex) {
//             currentStopTime = pauseArray[pauseIndex]
//         }
//     }
//
//     console.log(videoID.currentTime);
//     console.log(currentStopTime);
//
//     videoID.addEventListener('ended', (event) => {
//         pauseIndex = 0
//         currentStopTime = pauseArray[pauseIndex]
//         console.log("videoReset");
//         videoID.play();
//     })
// }



//interval function
function intervalRefresher(videoID, pauseArray) {
    pauseIndex = 0;
    console.log(pauseIndex);
    setInterval(videoControl, 10, videoID, pauseArray);

}

function videoControl (videoID, pauseArray) {
    currentStopTime = pauseArray[pauseIndex];

    console.log(videoID.currentTime);
    console.log(currentStopTime);

    //check time
    if (videoID.currentTime >= currentStopTime) {
        videoID.pause();
        ++pauseIndex;
        console.log("videoPause");

        // if (pauseArray.length <= ++pauseIndex) {
        //     pauseIndex = 0;
        // }
        //console.log(videoID.currentTime);

        // if (pauseArray.length > ++pauseIndex) {
        //     currentStopTime = pauseArray[pauseIndex]
        // }
    }
    //console.log(pauseIndex);

    // videoID.addEventListener('ended', (event) => {
    //     pauseIndex = 0
    //     currentStopTime = pauseArray[pauseIndex]
    //     console.log("videoEnd");
    //     videoID.play();
    // })
}