setTimeout(function() {
    document.querySelector('h1').innerHTML = 'WORKING';

    navigator.getUserMedia = navigator.getUserMedia ||
                             navigator.webkitGetUserMedia ||
                             navigator.mozGetUserMedia;
    var constraints = {
        audio: true,
        video: true
    };
    var video = document.querySelector("video");

    var successCallback = function(stream) {
        window.stream = stream;

        if (window.URL) {
            video.src = window.URL.createObjectURL(stream);
        } else {
            video.src = stream;
        }
    };

    var errorCallback = function(error) {
        console.log("Something wrong: ", error);
    };

    navigator.getUserMedia(constraints, successCallback, errorCallback);
}, 2000);
