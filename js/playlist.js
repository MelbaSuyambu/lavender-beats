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

    // Mapping word numbers to digits
    input = input.replace(/\bone\b/g, '1')
                 .replace(/\btwo\b/g, '2')
                 .replace(/\bthree\b/g, '3')
                 .replace(/\bfour\b/g, '4');

    if (input.includes('play song 1') || input === '1') {
        playSong('song1');
    } else if (input.includes('play song 2') || input === '2') {
        playSong('song2');
    } else if (input.includes('play song 3') || input === '3') {
        playSong('song3');
    } else if (input.includes('play song 4') || input === '4') {
        playSong('song4');
    } else if (input.includes('pause song 1')) {
        pauseSong('song1');
    } else if (input.includes('pause song 2')) {
        pauseSong('song2');
    } else if (input.includes('pause song 3')) {
        pauseSong('song3');
    } else if (input.includes('pause song 4')) {
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
