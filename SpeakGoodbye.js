(function (window) {
    var speakWord = "Good Bye";
    var helloSpeaker = {};
    byeSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
    }

    window.byeSpeaker = byeSpeaker;

})(window);
