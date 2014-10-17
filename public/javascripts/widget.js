var resetCss = document.createElement('link'),
    widgetCss = document.createElement('link');
resetCss.setAttribute('rel', 'stylesheet');
resetCss.setAttribute('href', 'stylesheets/cleanslate.css');
document.getElementsByTagName('head')[0].appendChild(resetCss);

widgetCss.setAttribute('rel', 'stylesheet');
widgetCss.setAttribute('href', 'stylesheets/widget.css');
document.getElementsByTagName('head')[0].appendChild(widgetCss);

setTimeout(function() {
    document.querySelector('h1').innerHTML = 'WORKING';
    var widgetContainer = document.getElementById('widget-container'),
        videoContainer = document.createElement('video');

    videoContainer.setAttribute('controls', true);
    videoContainer.setAttribute('autoplay', true);
    widgetContainer.className = 'cleanslate widget';
    widgetContainer.appendChild(videoContainer);

    navigator.getUserMedia = navigator.getUserMedia ||
                             navigator.webkitGetUserMedia ||
                             navigator.mozGetUserMedia;
    var constraints = { audio: true, video: true },
        video = document.querySelector("video"),
        successCallback = function(stream) {
            window.stream = stream;

            if (window.URL) {
                video.src = window.URL.createObjectURL(stream);
            } else {
                video.src = stream;
            }
        },
        errorCallback = function(error) {
            console.log("Something wrong: ", error);
    };

    navigator.getUserMedia(constraints, successCallback, errorCallback);
}, 2000);
