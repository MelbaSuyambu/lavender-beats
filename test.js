var listeningIndicator = document.getElementById('listening-indicator');
var startButton = document.getElementById('start-listening');

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

// Attach the start to the button
startButton.addEventListener('click', function () {
    recognition.start();
    listeningIndicator.textContent = "Listening...";
    console.log('Speech recognition started');
});

recognition.onresult = function (event) {
    var transcript = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
    console.log('Heard:', transcript);

    // Play commands
    if (transcript.includes('play song one')) {
        playVoiceSong('song1');
    } else if (transcript.includes('play song two')) {
        playVoiceSong('song2');
    } else if (transcript.includes('play song three')) {
        playVoiceSong('song3');
    } else if (transcript.includes('play song four')) {
        playVoiceSong('song4');
    }

    // Pause commands
    else if (transcript.includes('pause song one')) {
        pauseVoiceSong('song1');
    } else if (transcript.includes('pause song two')) {
        pauseVoiceSong('song2');
    } else if (transcript.includes('pause song three')) {
        pauseVoiceSong('song3');
    } else if (transcript.includes('pause song four')) {
        pauseVoiceSong('song4');
    }

    // Go to home
    else if (transcript.includes('go to home')) {
        window.location.href = 'index.html';
    }
};

recognition.onerror = function (event) {
    console.error('Speech recognition error:', event.error);
    listeningIndicator.textContent = "Error occurred. Click Start Listening again.";
};

recognition.onend = function () {
    console.log('Speech recognition stopped');
    listeningIndicator.textContent = "Microphone Off";
};

// Voice play function
function playVoiceSong(songId) {
    const song = document.getElementById(songId);

    if (currentSong && currentSong !== song) {
        currentSong.pause();
        currentSong.currentTime = 0;
    }

    song.play();
    currentSong = song;
}

// Voice pause function
function pauseVoiceSong(songId) {
    const song = document.getElementById(songId);
    song.pause();
}
