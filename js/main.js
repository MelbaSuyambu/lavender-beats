var startButton = document.getElementById('start-voice-control');
var listeningIndicator = document.getElementById('listening-indicator');
var userGuideAudio = document.getElementById('userGuideAudio');

listeningIndicator.style.display = 'none';

function playUserGuide() {
    userGuideAudio.play();
}

var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.continuous = true;
recognition.interimResults = false;
recognition.lang = 'en-IN';

// Start listening only after button is clicked
startButton.onclick = function () {
    recognition.start();
    listeningIndicator.style.display = 'block';
    console.log('Speech recognition started');
};

recognition.onresult = function (event) {
    var transcript = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
    console.log('You said:', transcript);

    if (transcript.includes('user manual')) {
        playUserGuide();
    } else if (transcript.includes('go to happy')) {
        window.location.href = 'happy.html';
    } else if (transcript.includes('go to dance')) {
        window.location.href = 'dance.html';
    } else if (transcript.includes('go to gym')) {
        window.location.href = 'gym.html';
    } else if (transcript.includes('go to library')) {
        window.location.href = 'library.html';
    }
};

recognition.onerror = function (event) {
    console.error('Speech recognition error:', event.error);
};

recognition.onend = function () {
    console.log('Speech recognition stopped');
    listeningIndicator.style.display = 'none';
};
