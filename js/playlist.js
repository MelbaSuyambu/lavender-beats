function processCommand() {
    var input = document.getElementById('voiceInput').value.trim().toLowerCase();
    console.log('You typed:', input);

    // Mapping word numbers to digits
    input = input.replace(/\bone\b/g, '1')
                 .replace(/\btwo\b/g, '2')
                 .replace(/\bthree\b/g, '3')
                 .replace(/\bfour\b/g, '4');

    if (input.includes('play song 1')) {
        playSong('song1');
    } else if (input.includes('play song 2')) {
        playSong('song2');
    } else if (input.includes('play song 3')) {
        playSong('song3');
    } else if (input.includes('play song 4')) {
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
