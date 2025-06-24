var startButton = document.getElementById('start-voice-control');
var listeningIndicator = document.getElementById('listening-indicator');

listeningIndicator.style.display = 'none';

let currentSong = null;

function togglePlay(songId) {
    const song = document.getElementById(songId);

    if (currentSong && currentSong !== song) {
        currentSong.pause();
        currentSong.currentTime = 0;
    }

    if (song.paused) {
        song.play();
        currentSong = song;
    } else {
        song.pause();
    }
}

var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.continuous = true;
recognition.interimResults = false;
recognition.lang = 'en-IN';

startButton.onclick = function () {
    recognition.start();
    listeningIndicator.style.display = 'block';
    console.log('Speech recognition started');
};

recognition.onresult = function (event) {
    var transcript = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
    console.log('You said:', transcript);

    if (transcript.includes('play song one')) {
        playVoiceSong('song1');
    } else if (transcript.includes('play song two')) {
        playVoiceSong('song2');
    } else if (transcript.includes('play song three')) {
        playVoiceSong('song3');
    } else if (transcript.includes('play song four')) {
        playVoiceSong('song4');
    } else if (transcript.includes('pause song one')) {
        pauseVoiceSong('song1');
    } else if (transcript.includes('pause song two')) {
        pauseVoiceSong('song2');
    } else if (transcript.includes('pause song three')) {
        pauseVoiceSong('song3');
    } else if (transcript.includes('pause song four')) {
        pauseVoiceSong('song4');
    } else if (transcript.includes('go to home')) {
        window.location.href = 'index.html';
    }
};

recognition.onerror = function (event) {
    console.error('Speech recognition error:', event.error);
};

recognition.onend = function () {
    console.log('Speech recognition stopped');
    listeningIndicator.style.display = 'none';
};

function playVoiceSong(songId) {
    const song = document.getElementById(songId);

    if (currentSong && currentSong !== song) {
        currentSong.pause();
        currentSong.currentTime = 0;
    }

    song.play();
    currentSong = song;
}

function pauseVoiceSong(songId) {
    const song = document.getElementById(songId);
    song.pause();
}
