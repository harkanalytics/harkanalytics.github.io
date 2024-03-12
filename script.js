document.addEventListener('DOMContentLoaded', function() {
    var myVideo = document.getElementById('myVideo');

    window.addEventListener('scroll', function() {
        var videoPosition = myVideo.getBoundingClientRect();
        if (videoPosition.top >= 0 && videoPosition.bottom <= window.innerHeight) {
            myVideo.play();
        } else {
            myVideo.pause();
        }
    });
});

