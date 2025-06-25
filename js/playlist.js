let currentSong = null;

// Click functionality
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

// Process text input command
function processCommand() {
    var input = document.getElementById('voiceInput').value.trim().toLowerCase();
    console.log('You typed:', input);

    if (input.includes('play song one')) {
        playSong('song1');
    } else if (input.includes('play song two')) {
        playSong('song2');
    } else if (input.includes('play song three')) {
        playSong('song3');
    } else if (input.includes('play song four')) {
        playSong('song4');
    } else if (input.includes('pause song one')) {
        pauseSong('song1');
    } else if (input.includes('pause song two')) {
        pauseSong('song2');
    } else if (input.includes('pause song three')) {
        pauseSong('song3');
    } else if (input.includes('pause song four')) {
        pauseSong('song4');
    } else if (input.includes('go to home')) {
        window.location.href = 'index.html';
    } else {
        alert('Command not recognized. Please try again.');
    }

    // Auto-clear the input box after processing
    document.getElementById('voiceInput').value = '';
}

function playSong(songId) {
    const song = document.getElementById(songId);

    if (currentSong && currentSong !== song) {
        currentSong.pause();
        currentSong.currentTime = 0;
    }

    song.play();
    currentSong = song;
}

function pauseSong(songId) {
    const song = document.getElementById(songId);
    song.pause();
}
